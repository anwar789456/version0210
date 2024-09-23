import Image from 'next/image';
import React from 'react';
import styles from './style.module.scss';
import Rounded from '../../common/RoundedButton';
import Magnetic from '../../common/Magnetic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../Effects/Variants';

const categories = [
  { src: '/images/Laurus.png', alt: 'Laurus', title: 'Dining tables' },
  { src: '/images/Vladimir.png', alt: 'Vladimir', title: 'Bed Sheets' },
  { src: '/images/Rina.png', alt: 'Rina', title: 'Bedroom Pillows' },
  { src: '/images/Barbara.png', alt: 'Barbara', title: 'Dining tables' },
  { src: '/images/René.png', alt: 'René', title: 'Dining tables' },
  { src: '/images/Yannis.png', alt: 'Yannis', title: 'Dining tables' }
];

export default function Categories() {
  return (
    <div className={styles.container}>
      <div className={styles.grid_container}>
      
        {categories.map((category, index) => (
          <div key={index} className={styles.category_container}>
            <div className={styles.Image_div}>
              <motion.div
                variants={fadeIn('', 0.3)}
                initial='hidden'
                whileInView='show'
                viewport={{ once:true, amount: 0.1 }}
                className={styles.categoryImage}
              >
                <Image
                  src={category.src}
                  alt={category.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
            </div>
            <Link href='/Shop'>
              <div className={styles.title_container}>
                <h1 className={styles.title_h1_text}>{category.title}</h1>
                <Rounded className={styles.button}>
                  <Magnetic>
                    <p>View More</p>
                  </Magnetic>
                </Rounded>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
