import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './style.module.scss';
import MultiRangeSlider from '../SliderRange/MultiRangeSlider';
import { FaSearch, FaTimes } from 'react-icons/fa';

const iconAnimation = {
  initial: { opacity: 0, scale: 0.5, rotate: 0 },
  animate: { opacity: 1, scale: 1, rotate: 360 },
  exit: { opacity: 0, scale: 0.5, rotate: 0 },
  transition: { duration: 0.3 }
};

export default function SideNavbar() {
  const [selected, setSelected] = useState(null);
  const [sortingSelected, setSortingSelected] = useState(null);
  const [ascDescSelected, setAscDescSelected] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleRadioChange = (value, group) => {
    if (group === 'availability') {
      setSelected(selected === value ? null : value);
    } else if (group === 'sorting') {
      setSortingSelected(sortingSelected === value ? null : value);
    } else if (group === 'ascdesc') {
      setAscDescSelected(ascDescSelected === value ? null : value);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className={styles.navbar}>
        <button className={styles.toggleButton} onClick={toggleSidebar}>
          <AnimatePresence mode="wait">
            <motion.div
              key={isSidebarOpen ? 'times' : 'search'}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={iconAnimation}
            >
              {isSidebarOpen ? <FaTimes className={styles.icon} /> : <FaSearch className={styles.icon} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>
      <div className={`${styles.container} ${isSidebarOpen ? styles.open : ''}`}>
        <div className={styles.sidebar}>
          <div className={styles.listContainer}>
            <div className={styles.headTitle}>
              <h1 className={styles.h1}>Availability</h1>
            </div>
            <div>
              <label className={styles.sidebarLabelContainer}>
                <input type="radio" name="availability" checked={selected === 'all'}
                  onClick={() => handleRadioChange('all', 'availability')} readOnly />
                <span className={styles.checkmark}></span>
                <h1 className={styles.h1Label}>All</h1>
              </label>
              <label className={styles.sidebarLabelContainer}>
                <input type="radio" name="availability" checked={selected === 'inStock'}
                  onClick={() => handleRadioChange('inStock', 'availability')} readOnly />
                <span className={styles.checkmark}></span>
                <h1 className={styles.h1Label}>In Stock</h1>
                (<h3 className={styles.inparanthases}>16</h3>)
              </label>
              <label className={styles.sidebarLabelContainer}>
                <input type="radio" name="availability" checked={selected === 'outOfStock'}
                  onClick={() => handleRadioChange('outOfStock', 'availability')} readOnly />
                <span className={styles.checkmark}></span>
                <h1 className={styles.h1Label}>Out Of Stock</h1>
                (<h3 className={styles.inparanthases}>10</h3>)
              </label>
            </div>
          </div>
          <div className={styles.listContainer}>
            <div className={styles.headTitle}>
              <h1 className={styles.h1}>Price</h1>
            </div>
            <div className={styles.priceRangeContainer}>
              <MultiRangeSlider
                min={0}
                max={3200}
                onChange={({ min, max }) => console.log(`min = ${min}$, max = ${max}$`)}
              />
            </div>
          </div>
          <div className={styles.listContainer}>
            <div className={styles.headTitle}>
              <h1 className={styles.h1}>Sort</h1>
            </div>
            <div>
              <label className={styles.sidebarLabelContainer}>
                <input type="radio" name="sorting" checked={sortingSelected === 'newest'}
                  onClick={() => handleRadioChange('newest', 'sorting')} readOnly />
                <span className={styles.checkmark}></span>
                <h1 className={styles.h1Label}>Newest</h1>
              </label>
              <label className={styles.sidebarLabelContainer}>
                <input type="radio" name="sorting" checked={sortingSelected === 'oldest'}
                  onClick={() => handleRadioChange('oldest', 'sorting')} readOnly />
                <span className={styles.checkmark}></span>
                <h1 className={styles.h1Label}>Oldest</h1>
              </label>
              <label className={styles.sidebarLabelContainer}>
                <input type="radio" name="ascdesc" checked={ascDescSelected === 'ascending'}
                  onClick={() => handleRadioChange('ascending', 'ascdesc')} readOnly />
                <span className={styles.checkmark}></span>
                <h1 className={styles.h1Label}>Price Ascending ↑</h1>
              </label>
              <label className={styles.sidebarLabelContainer}>
                <input type="radio" name="ascdesc" checked={ascDescSelected === 'descending'}
                  onClick={() => handleRadioChange('descending', 'ascdesc')} readOnly />
                <span className={styles.checkmark}></span>
                <h1 className={styles.h1Label}>Price Descending ↓</h1>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
