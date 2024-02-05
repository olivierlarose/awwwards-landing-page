"use client";
import styles from "./style.module.scss";
import { useState, useEffect, useRef } from "react";
import Project from "./components/project";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import Rounded from "../../common/RoundedButton";
import Script from "next/script";

const projects = [
  {
    title: "Lamento",
    src: "https://res.cloudinary.com/davkfrmah/image/upload/v1702915379/Akilesh/lamento%20landing.png",
    color: "#000000",
    link: "https://app.lamento.in/",
  },
  {
    title: "Livestorm",
    src: "https://res.cloudinary.com/davkfrmah/image/upload/v1702914394/Akilesh/livestorm.png",
    color: "#8C8C8C",
    link: "https://play.google.com/store/apps/details?id=com.livestorm.control",
  },
  {
    title: "Filmingo",
    src: "https://res.cloudinary.com/davkfrmah/image/upload/v1686146984/Filmingo/temp_film_bvuced.jpg",
    color: "#EFE8D3",
    link: "https://filmingo.us/",
  },
  {
    title: "GreenScore ",
    src: "https://res.cloudinary.com/davkfrmah/image/upload/c_scale,q_75,w_659/v1693820228/Akilesh/2050%20Technologies.jpg",
    color: "#706D63",
    link: "https://www.2050-technologies.com/",
  },
  {
    title: "Thegym",
    src: "https://res.cloudinary.com/davkfrmah/image/upload/v1693840960/Akilesh/the%20boss%20gym.jpg",
    color: "#706D63",
    link: "https://www.thebossgym.in/",
  },
];

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Home() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
  }, []);

  const moveItems = (x, y) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };
  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <main
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className={styles.projects}
      id="work"
    >
      <Script
        async
        src="//embed.typeform.com/next/embed.js"
        strategy="afterInteractive"
      ></Script>
      <div className={styles.body}>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              link={project.link}
              manageModal={manageModal}
              key={index}
            />
          );
        })}
      </div>
      <button
        id="feedback-button"
        data-tf-popup="IIAAy5c2"
        data-tf-opacity="100"
        data-tf-iframe-props="title=Client Details and Project Requirements Form"
        data-tf-transitive-search-params
        data-tf-medium="snippet"
      >
        <Rounded>
          <p>START YOUR PROJECT</p>
        </Rounded>
      </button>
      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className={styles.modalContainer}
        >
          <div
            style={{ top: index * -100 + "%" }}
            className={styles.modalSlider}
          >
            {projects.map((project, index) => {
              const { src, color } = project;
              return (
                <div
                  className={styles.modal}
                  style={{ backgroundColor: color }}
                  key={`modal_${index}`}
                >
                  <Image src={`${src}`} width={300} height={0} alt="image" />
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          ref={cursor}
          className={styles.cursor}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        ></motion.div>
        <motion.div
          ref={cursorLabel}
          className={styles.cursorLabel}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        >
          View
        </motion.div>
      </>
    </main>
  );
}
