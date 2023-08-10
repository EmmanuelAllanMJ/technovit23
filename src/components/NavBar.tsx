"use client";
import styles from "@/assets/css/navigation.module.css";
import { useEffect, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Header from './nav/Header';

export default function NavBar() {

    const [isActive, setIsActive] = useState(true);
    const [showButton, setShowButton] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (isActive) setIsActive(false)
        console.log(pathname)
    }, [pathname])

    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
          if (isActive && scrollPosition <= window.innerHeight) {
            setShowButton(true);
          } else if (scrollPosition > window.innerHeight) {
            setShowButton(true);
          } else {
            setShowButton(false);
          }
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [isActive]);
      

    return (
        <>
        <div className={styles.main}>
    
          <div className={styles.header}>
            {showButton && <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
              <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
            </div>}
          </div>
    
        </div>
        <AnimatePresence mode="wait">
          {isActive && <Header />}
        </AnimatePresence>
        </>
    )
}

