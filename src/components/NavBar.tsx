"use client";
import styles from "@/assets/css/navigation.module.css";
import { useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Header from "./nav/Header";

export default function NavBar() {
  const [isActive, setIsActive] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
    console.log(pathname);
  }, [pathname]);

  return (
    <>
      <div className={styles.main}>
        <div className={styles.header}>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={styles.button}
          >
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Header />}</AnimatePresence>
    </>
  );
}
