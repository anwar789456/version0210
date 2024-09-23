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
      { title: "Canapés de coin", href: "/Shop", src: "Rina.png", },
      { title: "Canapés", href: "/Shop", src: "Barbara.png", },
      { title: "Poufs & Fauteuils", href: "/Shop", src: "Vladimir.png", },
      { title: "Tables basses", href: "/Shop", src: "Barbara.png", },
      { title: "Meubles TV", href: "/Shop", src: "Rina.png" },
      { title: "Tables d’appoints", href: "/Shop", src: "Vladimir.png", },

    ]
  },
  {
    title: "Salle à Manger",
    href: "/Shop",
    src: "Rina.png",
    subLinks: [
      { title: "Tables à manger", href: "/Shop", src: "Barbara.png", },
      { title: "Chaises", href: "/Shop", src: "Vladimir.png", },
      { title: "Buffets", href: "/Shop", src: "Barbara.png", },
      { title: "Vaisseliers", href: "/Shop", src: "Barbara.png", },
      { title: "Bars à Cocktail", href: "/Shop", src: "Vladimir.png", },
    ]
  },
  {
    title: "Chambre à coucher",
    href: "/Shop",
    src: "Vladimir.png",
    subLinks: [
      { title: "Lits", href: "/Shop", src: "Barbara.png", },
      { title: "Tables de nuit", href: "/Shop", src: "Barbara.png", },
      { title: "Commodes", href: "/Shop", src: "Vladimir.png", },
      { title: "Coiffeuses", href: "/Shop", src: "Barbara.png", },
      { title: "Armoires & Dressings", href: "/Shop", src: "Barbara.png", },
    ]
  },
  {
    title: "Linge de maison",
    href: "/Shop",
    src: "Ulysse.png",
    subLinks: [
      { title: "Linge de lit", href: "/Shop", src: "Barbara.png", },
      { title: "Plaids & Couvertures", href: "/Shop", src: "Vladimir.png", },
      { title: "Coussins", href: "/Shop", src: "Barbara.png", },
      { title: "Rideaux, voilages", href: "/Shop", src: "Barbara.png", },
      { title: "Tapis", href: "/Shop", src: "Barbara.png", },
    ]
  },
  {
    title: "Art de la Table",
    href: "/Shop",
    src: "René.png",
    subLinks: [
      { title: "Assiettes & bols", href: "/Shop", src: "Vladimir.png", },
      { title: "Verres & carafes", href: "/Shop", src: "Barbara.png", },
      { title: "Ustensils & Couverts", href: "/Shop", src: "Barbara.png", },
      { title: "Plats de service", href: "/Shop", src: "Barbara.png", },

    ]
  },
  {
    title: "Décoration",
    href: "/Shop",
    src: "Ulysse.png",
    subLinks: [
      { title: "Statues & Sculptures", href: "/Shop", src: "Barbara.png", },
      { title: "Objets décoratifs", href: "/Shop", src: "Vladimir.png", },
      { title: "Tableaux", href: "/Shop", src: "Ulysse.png", },
      { title: "Miroirs", href: "/Shop", src: "Barbara.png", },
      { title: "Végétaux et fleurs", href: "/Shop", src: "Barbara.png", },
    ]
  },
  {
    title: "Produit artisanals",
    href: "/Shop",
    src: "Ulysse.png",
    subLinks: [
      { title: "Bois d’olivier", href: "/Shop", src: "Barbara.png", },
      { title: "Fibre Naturelle", href: "/Shop", src: "Vladimir.png", },
      { title: "Potterie", href: "/Shop", src: "Barbara.png", },
      { title: "Toile de jute", href: "/Shop", src: "Ulysse.png", },
      { title: "Fouta", href: "/Shop", src: "Barbara.png", },
    ]
  },
  {
    title: "Éclairage",
    href: "/Shop",
    src: "Ulysse.png",
    subLinks: [
      { title: "Lampadaires", href: "/Shop", src: "Vladimir.png", },
      { title: "Abat Jour", href: "/Shop", src: "Ulysse.png", },
      { title: "Lustres", href: "/Shop", src: "Barbara.png", },
    ]
  },
  {
    title: "Rangements",
    href: "/Shop",
    src: "Ulysse.png",
    subLinks: [
      { title: "Étagères & bibliothèques", href: "/Shop", src: "Barbara.png", },
      { title: "Boîtes de rangement", href: "/Shop", src: "Barbara.png", },
      { title: "Porte-manteaux", href: "/Shop", src: "Vladimir.png", },
      { title: "Porte-chaussures", href: "/Shop", src: "Ulysse.png", },
      { title: "Paniers & coffres", href: "/Shop", src: "Barbara.png", },
    ]
  },
];
export default function Index({ handleLinkClick }) {
  const [selectedLink, setSelectedLink] = useState({ isActive: false, index: null, subIndex: null, isSublink: false });
  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" 
                className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} 
          setSelectedLink={setSelectedLink} handleLinkClick={handleLinkClick} />
        </div>
        <div className={`${styles.imageContainer} ${selectedLink.isActive ? styles.glowing : ''}`}>
          <Image
            src={
              selectedLink.isSublink
                ? links[selectedLink.index]?.subLinks[selectedLink.subIndex]?.src // Optional chaining to prevent errors
                : links[selectedLink.index]?.src // Optional chaining to prevent errors
            }
            alt="imageHere"
            isActive={selectedLink.isActive}
          />
        </div>

      </div>
    </motion.div>
  )
}