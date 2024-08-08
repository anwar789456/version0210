import React from 'react';
import styles from './style.module.scss';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";

export default function Content() {
  return (
    <div className={styles.Content}>
      <div className={styles.Content_info}>
        <div className={styles.Content_info_adresse}>
          <div>
            <h3 className={styles.h3Text}>Adresse</h3>
            <p className={styles.pText}>Av. Abou Kacem<br/> Chebbi, 1er etage</p>
          </div>
          <div>
            <h3 className={styles.h3Text}>Contact</h3>
            <div className='flex'>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.pIcon}>
                <FaFacebook className={styles.ficon}/>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.pIcon}>
                <RiInstagramFill className={styles.ficon}/>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className={styles.pIcon}>
                <FaTwitter className={styles.ficon}/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.912333302407!2d10.18295069275734!3d36.868517172227705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cbc5cf7ef331%3A0xedd2fb16f3822711!2sSamet%20Home!5e0!3m2!1sfr!2stn!4v1721746427457!5m2!1sfr!2stn"
          width="850"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
