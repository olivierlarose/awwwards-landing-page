import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "../../common/RoundedButton";
import Script from "next/script";

export default function Index() {
  const phrase =
    "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div ref={description} className={styles.description} id="about">
      <Script
        async
        src="//embed.typeform.com/next/embed.js"
        strategy="afterInteractive"
      ></Script>
      <div className={styles.body}>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
          Let’s face it, first impressions matter. Your website’s an opportunity
          to wow your audience, so why waste it with bad design? Because brands
          win new fans when they’re brave enough to go beyond their creative
          comfort zone..
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          <button
            id="feedback-button"
            data-tf-popup="IIAAy5c2"
            data-tf-opacity="100"
            data-tf-iframe-props="title=Client Details and Project Requirements Form"
            data-tf-transitive-search-params
            data-tf-medium="snippet"
          >
            <Rounded className={styles.button}>
              <p>Work With Us</p>
            </Rounded>
          </button>
        </div>
      </div>
    </div>
  );
}
