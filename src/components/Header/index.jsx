"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Nav from "./nav";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Rounded from "../../common/RoundedButton";
import Magnetic from "../../common/Magnetic";
import Marquee from "react-fast-marquee";
import Link from "next/link";

export default function Index() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [isActive, pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(
            button.current,
            { scale: 0, duration: 0.25, ease: "power1.out" },
            setIsActive(false)
          );
        },
      },
    });
  }, []);

  return (
    <>
      <div ref={header} className={styles.header}>
        <div className={styles.logo}>
          <svg
            width="37"
            height="26"
            viewBox="0 0 37 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%", rotate: "90deg" }}
          >
            <path
              d="M10.512 24.84C8.184 24.84 6.24 24.552 4.68 23.976C3.12 23.424 1.944 22.644 1.152 21.636C0.384 20.652 0 19.512 0 18.216C0 17.616 0.132 17.028 0.396 16.452C0.66 15.876 1.068 15.396 1.62 15.012C1.932 14.796 2.268 14.616 2.628 14.472C2.988 14.328 3.456 14.22 4.032 14.148C4.632 14.076 5.412 14.04 6.372 14.04H33.264L33.372 16.632H6.768C6.024 16.632 5.448 16.644 5.04 16.668C4.656 16.692 4.368 16.74 4.176 16.812C3.984 16.884 3.792 16.992 3.6 17.136C3.24 17.424 3.06 17.832 3.06 18.36C3.06 19.536 3.696 20.472 4.968 21.168C6.24 21.864 8.16 22.212 10.728 22.212H11.34C13.764 22.212 15.84 21.924 17.568 21.348C19.32 20.796 20.76 20.028 21.888 19.044C23.04 18.06 23.904 16.944 24.48 15.696L24.624 15.012C24.84 14.412 24.996 13.812 25.092 13.212C25.188 12.588 25.236 11.964 25.236 11.34C25.236 9.948 24.996 8.628 24.516 7.38C24.036 6.132 23.292 5.088 22.284 4.248C21.3 3.384 20.028 2.832 18.468 2.592C18.156 2.544 17.856 2.52 17.568 2.52C17.304 2.496 17.016 2.484 16.704 2.484C15.96 2.484 15.276 2.616 14.652 2.88C14.028 3.144 13.524 3.54 13.14 4.068C12.78 4.596 12.6 5.268 12.6 6.084C12.6 6.972 12.864 7.728 13.392 8.352C13.944 8.952 14.712 9.252 15.696 9.252C16.608 9.252 17.328 8.976 17.856 8.424C18.408 7.848 18.684 7.032 18.684 5.976C18.684 5.184 18.552 4.476 18.288 3.852C18.048 3.204 17.616 2.592 16.992 2.016L19.044 1.404C19.476 1.764 19.872 2.184 20.232 2.664C20.616 3.144 20.916 3.684 21.132 4.284C21.372 4.86 21.492 5.472 21.492 6.12C21.492 6.96 21.36 7.728 21.096 8.424C20.856 9.096 20.484 9.684 19.98 10.188C19.476 10.668 18.852 11.04 18.108 11.304C17.388 11.568 16.56 11.7 15.624 11.7C14.544 11.7 13.56 11.496 12.672 11.088C11.784 10.68 11.076 10.068 10.548 9.252C10.02 8.436 9.756 7.428 9.756 6.228C9.756 4.74 10.104 3.54 10.8 2.628C11.496 1.716 12.396 1.056 13.5 0.648C14.628 0.216 15.816 0 17.064 0C18.912 0 20.532 0.312 21.924 0.936001C23.34 1.56 24.516 2.412 25.452 3.492C26.412 4.572 27.132 5.784 27.612 7.128C28.092 8.472 28.332 9.864 28.332 11.304C28.332 11.952 28.296 12.588 28.224 13.212C28.152 13.812 28.044 14.4 27.9 14.976L27.684 15.768C27.012 17.736 25.884 19.392 24.3 20.736C22.74 22.08 20.844 23.1 18.612 23.796C16.404 24.492 13.956 24.84 11.268 24.84H10.512ZM33.048 25.92V0.432001H36.144V25.92H33.048Z"
              fill="white"
            />
          </svg>
        </div>
        <div className={styles.nav}>
        <Link href="#work" >
          <Magnetic>
            <div className={styles.el}>
              <a>Work</a>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          </Link>
          <Link href="#about" >
          <Magnetic>
            <div className={styles.el}>
              <a>About</a>
              <div className={styles.indicator}></div>
            </div>
          </Magnetic>
          </Link>
          <Link href="#contact" >
            <Magnetic>
              <div className={styles.el}>
                <a>Contact</a>
                <div className={styles.indicator}></div>
              </div>
            </Magnetic>
          </Link>
        </div>
        <div className={styles.marq}></div>
      </div>
      <Marquee>
        We’re a creative web design agency based in India that crafts beautiful
        and original websites for brands who refuse to blend in.
      </Marquee>
      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${styles.button}`}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </Rounded>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}
