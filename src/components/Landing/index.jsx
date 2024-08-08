'use client'
import { slideUp } from './animation';
import { motion } from 'framer-motion';
import Carousel from './CarouselPage';
import CarouselVideo from '../CarouselVideo/CarouselVideo.jsx'
export default function Home() {
  return (
    <motion.main variants={slideUp} initial="initial" animate="enter">
      {/* Carousel here */}
        <CarouselVideo />
    </motion.main>
  )
}