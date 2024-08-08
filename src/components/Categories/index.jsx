import Image from 'next/image'
import React, { useRef } from 'react'
import styles from './style.module.scss'
import './style.module.scss'
import Rounded from '../../common/RoundedButton'
import Magnetic from '../../common/Magnetic';
import Link from 'next/link'
export default function Categories() {
  return (
    <div className={styles.container}>
        <div className={styles.grid_container}>
            {
                // 1 first Categorie 
            }
            <div className={styles.category_container}>
                <div className={styles.Image_div}>
                    <div className={styles.categoryImage}>
                        <Image
                            //data-scroll data-scroll-speed={0.1}
                            src="/images/Laurus.png" alt="Laurus" layout="fill" objectFit="cover" />
                    </div>
                </div>
                <div className={styles.title_container}>
                    <h1 className={styles.title_h1_text}>Dining tables</h1>

                    <Link href='/Shop'>
                        <Rounded className={styles.button}>
                            <Magnetic>
                                <p>View More</p>
                            </Magnetic>
                        </Rounded>
                    </Link>
                    
                </div>
            </div>
            {
                // 2 second Categorie 
            }
            <div className={styles.category_container}>
                <div className={styles.Image_div}>
                    <div className={styles.categoryImage}>
                        <Image
                            //data-scroll data-scroll-speed={0.1}
                            src="/images/Vladimir.png" alt="Vladimir" layout="fill" objectFit="cover"/>
                    </div>
                </div>
                <div className={styles.title_container}>
                    <h1 className={styles.title_h1_text}>Dining tables</h1>
                    
                    <Link href='/Shop'>
                        <Rounded className={styles.button}>
                            <Magnetic>
                                <p>View More</p>
                            </Magnetic>
                        </Rounded>
                    </Link>
                    
                </div>
            </div>

            {
                // 3 third Categorie 
            }
            <div className={styles.category_container}>
                <div className={styles.Image_div}>
                    <div className={styles.categoryImage}>
                        <Image
                            //data-scroll data-scroll-speed={0.1}
                            src="/images/Rina.png" alt="Rina" layout="fill" objectFit="cover"/>
                    </div>
                </div>
                <div className={styles.title_container}>
                    <h1 className={styles.title_h1_text}>Dining tables</h1>
                    
                    <Link href='/Shop'>
                        <Rounded className={styles.button}>
                            <Magnetic>
                                <p>View More</p>
                            </Magnetic>
                        </Rounded>
                    </Link>
                    
                </div>
            </div>
            
            {
                // 4 fourth Categorie 
            }
            <div className={styles.category_container}>
                <div className={styles.Image_div}>
                    <div className={styles.categoryImage}>
                        <Image
                            //data-scroll data-scroll-speed={0.1}
                            src="/images/Barbara.png" alt="Barbara" layout="fill" objectFit="cover"/>
                    </div>
                </div>
                <div className={styles.title_container}>
                    <h1 className={styles.title_h1_text}>Dining tables</h1>
                    
                    <Link href='/Shop'>
                        <Rounded className={styles.button}>
                            <Magnetic>
                                <p>View More</p>
                            </Magnetic>
                        </Rounded>
                    </Link>
                    
                </div>
            </div>

            {
                // 5 fifth Categorie 
            }
            <div className={styles.category_container}>
                <div className={styles.Image_div}>
                    <div className={styles.categoryImage}>
                        <Image
                            //data-scroll data-scroll-speed={0.1}
                            src="/images/René.png" alt="René" layout="fill" objectFit="cover"/>
                    </div>

                </div>

                <div className={styles.title_container}>
                    <h1 className={styles.title_h1_text}>Dining tables</h1>
                    
                    <Link href='/Shop'>
                        <Rounded className={styles.button}>
                            <Magnetic>
                                <p>View More</p>
                            </Magnetic>
                        </Rounded>
                    </Link>
                    
                </div>
            </div>

            {
                // 6 sixth Categorie 
            }
            <div className={styles.category_container}>
                <div className={styles.Image_div}>
                    <div className={styles.categoryImage}>
                        <Image
                            //data-scroll data-scroll-speed={0.1}
                            src="/images/Yannis.png" alt="Yannis" layout="fill" objectFit="cover"/>
                    </div>
                </div>

                <div className={styles.title_container}>
                    <h1 className={styles.title_h1_text}>Dining tables</h1>
                    
                    <Link href='/Shop'>
                        <Rounded className={styles.button}>
                            <Magnetic>
                                <p>View More</p>
                            </Magnetic>
                        </Rounded>
                    </Link>
                    
                </div>
            </div>

            {
            /*
            {
                // 7 seventh Categorie 
            }
            <div className={styles.category_container}>
                <div className={styles.Image_div}>
                    <div className={styles.categoryImage}>
                        <Image
                            //data-scroll data-scroll-speed={0.1}
                            src="/images/Alexndra.png" alt="Alexndra" layout="fill" objectFit="cover"/>
                    </div>
                </div>

                <div className={styles.title_container}>
                    <h1 className={styles.title_h1_text}>Dining tables</h1>
                    
                    <Rounded className={styles.button}>
                        <Magnetic>
                            <p>View More</p>
                        </Magnetic>
                    </Rounded>
                    
                </div>
            </div>

            {
                // 8 eighth Categorie 
            }
            <div className="relative cursor-pointer group overflow-hidden shadow-xl shadow-black/50 transition-shadow hover:shadow-xl hover:shadow-black/80">
                <div className={styles.Image_div}>
                    <div className={styles.categoryImage}>
                        <Image
                            data-scroll data-scroll-speed={0.1}
                            src="/images/Léo.png" alt="Léo" layout="fill" objectFit="cover"/>
                    </div>

                </div>

                <div className={styles.title_container}>
                    <h1 className={styles.title_h1_text}>Dining tables</h1>
                    
                    <Rounded className={styles.button}>
                        <Magnetic>
                            <p>View More</p>
                        </Magnetic>
                    </Rounded>
                    
                </div>
            </div>

            {
                // 9 nineth Categorie 
            }
            <div className="relative cursor-pointer group overflow-hidden shadow-xl shadow-black/50 transition-shadow hover:shadow-xl hover:shadow-black/80">
                <div className={styles.Image_div}>
                    <div className={styles.categoryImage}>
                        <Image
                            data-scroll data-scroll-speed={0.1}
                            src="/images/Zoé-15.png" alt="Zoé-15" layout="fill" objectFit="cover"/>
                    </div>
                </div>

                <div className={styles.title_container}>
                    <h1 className={styles.title_h1_text}>Dining tables</h1>
                    
                    <Rounded className={styles.button}>
                        <Magnetic>
                            <p>View More</p>
                        </Magnetic>
                    </Rounded>
                    
                </div>
            </div>
            */
            }

        </div>
    </div>
  )
}