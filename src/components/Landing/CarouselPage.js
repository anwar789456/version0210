"use client";
import { useEffect, useRef } from "react";
import { useScroll, useInView, useTransform, motion, inView } from 'framer-motion';
import { slideUp, opacity } from './animation';
import img1 from './images/Barbara.png';
import img2 from './images/Léo.png';
import img3 from './images/Laurus.png';
import Image from "next/image";
import styles from './style.module.scss'
import Rounded from '../../common/RoundedButton'


const Carousel = () => {
  const scrollRef = useRef(null);
  useEffect(() => {
    const init = async () => {
      const { Carousel, initTWE } = await import("tw-elements");
      initTWE({ Carousel });
    };
    init();
  }, []);




  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);



  return (
    <motion.div
      className="relative h-screen"
    ref={scrollRef}
    >

      {/* +++++++   indicators start here ++++++++++++++++*/}
      <div
        className="absolute bottom-2 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-twe-carousel-indicators>
        <button
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide-to="0"
          data-twe-carousel-active
          className="mx-[5px] h-[10px] w-[10px] flex-initial cursor-pointer border-0 bg-gray-200 bg-clip-padding p-0 -indent-[999px] opacity-60 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none rounded-full shadow-[3px_4px_8px_rgba(0,0,0,1)] hover:bg-white hover:opacity-100 focus:bg-white focus:opacity-100"
          aria-current="true"
          aria-label="Slide 1"></button>
        <button
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide-to="1"
          className="mx-[5px] h-[10px] w-[10px] flex-initial cursor-pointer border-0 bg-gray-200 bg-clip-padding p-0 -indent-[999px] opacity-60 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none rounded-full shadow-[3px_4px_8px_rgba(0,0,0,1)] hover:bg-white hover:opacity-100 focus:bg-white focus:opacity-100"
          aria-label="Slide 2"></button>
        <button
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide-to="2"
          className="mx-[5px] h-[10px] w-[10px] flex-initial cursor-pointer border-0 bg-gray-200 bg-clip-padding p-0 -indent-[999px] opacity-60 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none rounded-full shadow-[3px_4px_8px_rgba(0,0,0,1)] hover:bg-white hover:opacity-100 focus:bg-white focus:opacity-100"
          aria-label="Slide 3"></button>
      </div>



      {/* --------   indicators end here -----------------*/}


      <div className="relative w-full h-screen overflow-hidden after:clear-both after:block after:content-['']">
        {
          //first item
        }
        <div
          className="relative float-left -mr-[100%] w-full h-screen transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-active
          data-twe-carousel-item
          style={{ backfaceVisibility: "hidden" }}
        >
          <motion.div
            style={{ y }}
            className="relative h-[110vh]">
            <Image
              src={img1}
              fill
              className="absolute top-0 left-0 w-full h-full object-cover"
              alt="img1"
            />
          </motion.div>

          <motion.div

            className={styles.Text_part}
          //style={{ y }}
          >
            <motion.h1

              className={styles.Explore}>Explore
            </motion.h1>
            <p className={styles.Paragraph_Explore}>Our Living collection</p>
            <Rounded
              className={styles.button}>
              <p>View More</p>
            </Rounded>
          </motion.div>
        </div>
        {
          //second item
        }
        <div
          className="relative float-left -mr-[100%] hidden w-full h-screen transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          style={{ backfaceVisibility: "hidden" }}>
          <motion.div
            style={{ y }}
            className="relative h-[110vh]">
            <Image
              src={img2}
              className="absolute top-0 left-0 w-full h-full object-cover"
              alt="img2"

            />
          </motion.div>
          <motion.div
            //style={{ y }} 
            className={styles.Text_part}>
            <motion.h1

              className={styles.Explore}>Explore
            </motion.h1>
            <p className={styles.Paragraph_Explore}>Our Dining collection</p>
            <Rounded
              className={styles.button}>
              <p>View More</p>
            </Rounded>
          </motion.div>
        </div>
        {
          //third item
        }
        <div
          className="relative float-left -mr-[100%] hidden w-full h-screen transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-twe-carousel-item
          style={{ backfaceVisibility: "hidden" }}>
          <motion.div
            style={{ y }}
            className="relative h-[110vh]">
            <Image
              src={img3}
              className="absolute top-0 left-0 w-full h-full object-cover"
              alt="img3"
            />
          </motion.div>
          <motion.div
            //style={{ y }}
            className={styles.Text_part}>
            <motion.h1 className={styles.Explore}>
              Explore
            </motion.h1>
            <p className={styles.Paragraph_Explore}>Our Gadget collection</p>
            <Rounded
              className={styles.button}>
              <p>View More</p>
            </Rounded>
          </motion.div>
        </div>
      </div>

      <div className={styles.BTN_Prev}>
        <button
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide="prev">
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
              className="h-5 w-5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </span>
        </button>
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Previous</span>
      </div>

      <div className={styles.BTN_Next}>
        <button
          type="button"
          data-twe-target="#carouselExampleCaptions"
          data-twe-slide="next">
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="3"
              stroke="currentColor"
              className="h-5 w-5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </span>
        </button>

        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Next</span>
      </div>

    </motion.div >
  );
};
export default Carousel;
