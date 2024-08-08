'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import logoblack from "./img/LogoBlack.png";
import logowhite from "./img/LogoWhite.png";
import MenuNav from './nav/Menu_nav/menu_nav';
import { opacity, background } from './animation';
import Magnetic from '../../common/Magnetic';
import Image from 'next/image';
import Link from 'next/link';

export default function Header({ sticky }) {
    const header = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const [isSticky, setIsSticky] = useState(sticky);
    const [isHoverSticky, setIsHoverSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20 || isActive || sticky) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isActive, sticky]);

    const handleMouseEnter = () => {
        setIsHoverSticky(true);
    };
    const handleMouseLeave = () => {
        setIsHoverSticky(false);
    };
    const handleClick = () => {
        setIsActive(!isActive);
        if (!isActive) {
            setIsSticky(true);
        } else {
            setTimeout(() => {
                if (window.scrollY <= 20 && !isActive && !sticky) {
                    setIsSticky(false);
                }
            }, 1000);
        }
    };
    const handleLinkClick = () => {
        setIsActive(false);
    };

    return (
        <>
            <div
                className={`${styles.header} ${isSticky || isHoverSticky ? styles.HeaderSticky : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div className={styles.nav_top}>
                    <div className={styles.logo}>
                        <Link href="/" onClick={handleLinkClick}>
                            <Image
                                className={styles.blacklogo}
                                src={logoblack}
                                alt="logohere"
                            />
                            <Image
                                className={styles.whitelogo}
                                src={logowhite}
                                alt="logohere"
                            />
                        </Link>
                    </div>
                    <div className={styles.nav}>
                        <Magnetic>
                            <div className={styles.bar}>
                                <div onClick={handleClick} className={styles.el}>
                                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}>
                                    </div>
                                    <div className={styles.label}>
                                        <motion.p variants={opacity} animate={!isActive ? "open" : "closed"}
                                            className={styles.paragraph}
                                        >
                                            SHOP
                                        </motion.p>
                                        <motion.p variants={opacity} animate={isActive ? "open" : "closed"}
                                            className={styles.paragraph}
                                        >
                                            CLOSE
                                        </motion.p>
                                    </div>
                                </div>
                            </div>
                        </Magnetic>
                        <Magnetic>
                            <div className={styles.el}>
                                <Link href="/about" onClick={handleLinkClick} className={styles.paragraph}>ABOUT</Link>
                            </div>
                        </Magnetic>
                        <Magnetic>
                            <div className={styles.el}>
                                <Link href="/contact" onClick={handleLinkClick} className={styles.paragraph}>CONTACT</Link>
                            </div>
                        </Magnetic>
                    </div>
                </div>
                <AnimatePresence mode="wait">
                    {isActive && <MenuNav handleLinkClick={handleLinkClick} />}
                </AnimatePresence>
            </div>
        </>
    );
}
