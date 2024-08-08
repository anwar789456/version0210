import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './style.module.scss';
import { blur, translate } from '../../animation';

export default function Body({ links, selectedLink, setSelectedLink, handleLinkClick }) {
    const getChars = (word) => {
        let chars = [];
        word.split("").forEach((char, i) => {
            chars.push(
                <motion.span
                    custom={[i * 0.01, (word.length - i) * 0.005]} // Reduced custom delay values
                    variants={translate}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    key={char + i}
                    style={{ display: char === ' ' ? 'inline-block' : 'inline' }} // Ensure spaces are preserved
                >
                    {char === ' ' ? '\u00A0' : char} {/* Non-breaking space for spaces */}
                </motion.span>
            );
        });
        return chars;
    };

    return (
        <div className={styles.body}>
            {links.map((link, index) => {
                const { title, href, subLinks } = link;
                return (
                    <div className={styles.linkGroup} key={`l_${index}`}>
                        <Link href={href} onClick={handleLinkClick}>
                            <motion.p
                                onMouseOver={() => { setSelectedLink({ isActive: true, index }) }}
                                onMouseLeave={() => { setSelectedLink({ isActive: false, index }) }}
                                variants={blur}
                                animate={selectedLink.isActive && selectedLink.index !== index ? "open" : "closed"}>
                                {getChars(title)}
                            </motion.p>
                        </Link>
                        <ul className={styles.subLinks}
                            onMouseOver={() => { setSelectedLink({ isActive: true, index }) }}
                            onMouseLeave={() => { setSelectedLink({ isActive: false, index }) }}
                            variants={blur}>
                            {subLinks.map((subLink, subIndex) => (
                                <li key={`sub_${index}_${subIndex}`} className={styles.center_p}>
                                    <Link href={subLink.href} onClick={handleLinkClick}>
                                        <motion.p
                                            variants={blur}
                                            animate={selectedLink.isActive && selectedLink.index !== index ? "open" : "closed"}>
                                            {(subLink.title)}
                                        </motion.p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}
