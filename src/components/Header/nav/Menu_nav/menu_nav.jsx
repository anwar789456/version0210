'use client';
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../../animation';
import Body from '../Body';
import Image from '../Image';
const links = [
  {
    title: "Salons",
    href: "/Shop",
    src: "Barbara.png",
    subLinks: [
      { title: "Canapés", href: "/shop" },
      { title: "Poufs & Fauteuils", href: "/shop" },
      { title: "Tables basses", href: "/Shop" },
      { title: "Meubles TV", href: "/Shop" },
      { title: "Tables d’appoints", href: "/Shop" },
    ]
  },
  {
    title: "Salle à Manger",
    href: "/Shop",
    src: "Rina.png",
    subLinks: [
      { title: "Tables à manger", href: "/Shop" },
      { title: "Chaises", href: "/Shop" },
      { title: "Buffets", href: "/Shop" },
      { title: "Vaisseliers", href: "/Shop" },
      { title: "Bars à Cocktail", href: "/Shop" }
    ]
  },
  {
    title: "Chambre à coucher",
    href: "/Shop",
    src: "Vladimir.png",
    subLinks: [
      { title: "Tables de nuit", href: "/Shop" },
      { title: "Commodes", href: "/Shop" },
      { title: "Coiffeuses", href: "/Shop" },
      { title: "Armoires & Dressings", href: "/Shop" },
    ]
  },
  {
    title: "Linge de maison",
    href: "/Shop",
    src: "Ulysse.png",
    subLinks: [
      { title: "Linge de lit", href: "/Shop" },
      { title: "Plaids & Couvertures", href: "/Shop" },
      { title: "Coussins", href: "/Shop" },
      { title: "Rideaux, voilages", href: "/Shop" },
      { title: "Tapis", href: "/Shop" },
    ]
  },
  {
    title: "Art de la Table",
    href: "/Shop",
    src: "René.png",
    subLinks: [
      { title: "Assiettes & bols", href: "/Shop" },
      { title: "Verres & carafes", href: "/Shop" },
      { title: "Ustensils & Couverts", href: "/Shop" },
      { title: "Plats de service", href: "/Shop" },

    ]
  },
  {
    title: "Décoration",
    href: "/Shop",
    src: "Ulysse.png",
    subLinks: [
      { title: "Statues & Sculptures", href: "/Shop" },
      { title: "Objets décoratifs", href: "/Shop" },
      { title: "Tableaux", href: "/Shop" },
      { title: "Miroirs", href: "/Shop" },
      { title: "Végétaux et fleurs", href: "/Shop" },
    ]
  },
  {
    title: "Produit artisanals",
    href: "/Bathroom",
    src: "Ulysse.png",
    subLinks: [
      { title: "Bois d’olivier", href: "/" },
      { title: "Fibre Naturelle", href: "/" },
      { title: "Potterie", href: "/" },
      { title: "Toile de jute", href: "/" },
      { title: "Fouta", href: "/" },
    ]
  },

  {
    title: "Éclairage",
    href: "/Bathroom",
    src: "Ulysse.png",
    subLinks: [
      { title: "Lampadaires", href: "/" },
      { title: "Abat Jour", href: "/" },
      { title: "Lustres", href: "/" },
    ]
  },

  {
    title: "Rangements",
    href: "/Bathroom",
    src: "Ulysse.png",
    subLinks: [
      { title: "Étagères, bibliothèques", href: "/" },
      { title: "Boîtes de rangement", href: "/" },
      { title: "Porte-manteaux", href: "/" },
      { title: "Porte-chaussures", href: "/" },
      { title: "Paniers, coffres", href: "/" },
    ]
  },
];
export default function Index({ handleLinkClick }) {
  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});
  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" 
                className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} 
          setSelectedLink={setSelectedLink} handleLinkClick={handleLinkClick} />
        </div>
        <div className={`${styles.imageContainer} ${selectedLink.isActive ? styles.glowing : ''}`}>
          <Image src={links[selectedLink.index].src} 
                 alt="imageHere" isActive={selectedLink.isActive}/>
        </div>
      </div>
    </motion.div>
  )
}