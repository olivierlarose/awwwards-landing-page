import styles from "./style.module.scss";
import Image from "next/image";
import Rounded from "../../common/RoundedButton";
import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import Magnetic from "../../common/Magnetic";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Script from "next/script";

export default function Index() {
  const container = useRef(null);
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark",
        styles: {
          branding: { brandColor: "#000000" },
        },
      });
    })();
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <motion.div style={{ y }} ref={container} className={styles.contact}>
      <Script
        async
        src="//embed.typeform.com/next/embed.js"
        strategy="afterInteractive"
      ></Script>
      <div className={styles.body}>
        <div className={styles.title}>
          <span>
            <div className={styles.imageContainer}>
              <Image fill={true} alt={"image"} src={`/images/van.png`} />
            </div>
            <div>
              <h2>Let&apos;s work</h2>
              <h2>together</h2>
            </div>
          </span>
          <motion.div style={{ x }} className={styles.buttonContainer}>
            <button
              id="feedback-button"
              data-tf-popup="IIAAy5c2"
              data-tf-opacity="100"
              data-tf-iframe-props="title=Client Details and Project Requirements Form"
              data-tf-transitive-search-params
              data-tf-medium="snippet"
            >
              <Rounded className={styles.button}>
                <p>Get in touch</p>
              </Rounded>
            </button>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <div className={styles.nav}>
          <Rounded>
            <a href="mailto:hello@akictech.in">hello@akictech.in</a>
          </Rounded>
          <button
            data-cal-config='{"layout":"month_view"}'
            data-cal-link="akilesh-io/conversation"
          >
            <Rounded>
              <p
                data-cal-config='{"layout":"month_view"}'
                data-cal-link="akilesh-io/conversation"
              >
                +91 73730 14114
              </p>
            </Rounded>
          </button>
        </div>
      </div>
      <div className={styles.body} id="contact-me">
        <div className={styles.info}>
          <div>
            <span>
              <h3>Version</h3>
              <p>2024 © ACT</p>
            </span>
          </div>
          <div>
            <span>
              <h3>socials</h3>
              <Magnetic>
                <a href="https://app.lamento.in" target="_blank">
                  <p>Blog</p>
                </a>
              </Magnetic>
            </span>
            <Magnetic>
              <a href="https://www.instagram.com/akilesh_io" target="_blank">
                <p>Instagram</p>
              </a>
            </Magnetic>
            <Magnetic>
              <a href="https://dribbble.com/Akilesh_io" target="_blank">
                <p>Dribbble</p>
              </a>
            </Magnetic>
            <Magnetic>
              <a href="https://twitter.com/akilesh_io" target="_blank">
                <p>Twitter</p>
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
