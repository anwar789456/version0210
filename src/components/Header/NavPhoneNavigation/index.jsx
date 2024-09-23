import { useState } from 'react';
import styles from './style.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { links } from './data';
import { perspective, slideIn, sublinkVariants } from "./anim";
import Link from 'next/link';
export default function Nav({ setIsActive }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleLinkClick = () => {
    setIsActive(false);
  };
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {
          links.map((link, i) => {
            const { title, href, sublinks } = link;
            const isActive = activeIndex === i;
            return (
              <div key={`b_${i}`} className={styles.linkContainer}>
                <motion.div
                  custom={i}
                  variants={perspective}
                  initial="initial"
                  animate="enter"
                  exit="exit">
                  <div className={styles.mainLink} onClick={() => handleToggle(i)}>
                    {//<Link href={href} onClick={handleLinkClick}>
                    }
                      {title}
                    {//</Link>
                    }
                    <button >
                      {isActive ? '-' : '+'}
                    </button>
                  </div>
                </motion.div>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      variants={sublinkVariants}
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      className={styles.sublinks}
                    >
                      {sublinks.map((sublink, j) => (
                        <Link key={`s_${j}`} href={sublink.href} onClick={handleLinkClick}>
                          {sublink.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}