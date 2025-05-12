import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';

const slider1 = [
    {
        color: "#e3e5e7",
        src: "https://res.cloudinary.com/davkfrmah/image/upload/v1702915379/Akilesh/lamento%20landing.png"
    },
    {
        color: "#d6d7dc",
        src: "https://res.cloudinary.com/davkfrmah/image/upload/v1702914394/Akilesh/livestorm.png"
    },
    {
        color: "#e3e3e3",
        src: "https://res.cloudinary.com/davkfrmah/image/upload/v1686146984/Filmingo/temp_film_bvuced.jpg"
    },
    {
        color: "#21242b",
        src: "https://res.cloudinary.com/davkfrmah/image/upload/c_scale,q_75,w_659/v1693820228/Akilesh/2050%20Technologies.jpg"
    }
]

const slider2 = [
    {
        color: "#d7d4cf",
        src: "https://res.cloudinary.com/davkfrmah/image/upload/v1686146984/Filmingo/temp_film_bvuced.jpg"
    },
    {
        color: "#e5e0e1",
        src: "https://res.cloudinary.com/davkfrmah/image/upload/c_scale,q_75,w_659/v1693820228/Akilesh/2050%20Technologies.jpg"
    },
    {
        color: "#d4e3ec",
        src: "https://res.cloudinary.com/davkfrmah/image/upload/v1693840960/Akilesh/the%20boss%20gym.jpg"
    },
    {
        color: "#e1dad6",
        src: "https://res.cloudinary.com/davkfrmah/image/upload/v1702914394/Akilesh/livestorm.png"
    }
]

export default function Index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    return (
        <div ref={container} className={styles.slidingImages}>
            <motion.div style={{x: x1}} className={styles.slider}>
                    {
                        slider1.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={"image"}
                                    src={`${project.src}`}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{x: x2}} className={styles.slider}>
                    {
                        slider2.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color}} >
                                <div key={index} className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={"image"}
                                    src={`${project.src}`}/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{height}} className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </motion.div>
        </div>
    )
}
