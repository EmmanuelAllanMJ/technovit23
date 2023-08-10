'use client'
import styles from './style.module.scss'
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
            const scrollPosition = window.scrollY || document.documentElement.scrollTop;
            // if(isActive) setShowButton(true)
            if (isActive && scrollPosition <= 50  ) {setShowButton(true);}
            else if (scrollPosition > 50 ) {
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

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className={styles.main}>

                <div className={styles.header}>
                    {showButton && (
                        <div
                            onClick={() => {
                                setIsActive(!isActive);
                            }}
                            className={`${styles.button} ${isActive ? styles.buttonActive : ""}`}
                        >
                            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                        </div>
                    )}
                    
                </div>

            </div>
            <AnimatePresence mode="wait">
                {isActive && <Header />}
            </AnimatePresence>
        </>
    )
}
