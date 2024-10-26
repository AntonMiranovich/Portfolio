import style from './about.module.css'
import { motion } from 'framer-motion';

const animation = {
    hiddenHorizontal: {
        x: 100,
        opacity: 0,
    },
    visibleHorizontal: (custom) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
    hiddenVertical: {
        y: -100,
        opacity: 0,
    },
    visibleVertical: (custom) => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 },
    }),
};

export default function About() {
    return <>
        <motion.div
            initial='hiddenHorizontal'
            whileInView='visibleHorizontal'
            viewport={{ once: true }}
            className={style.wrapper}>
            <div className={style.info}>
                <motion.h2 custom={1} variants={animation}>Get in touch with me</motion.h2>
                <motion.p custom={2} variants={animation}>I am a passionate Front-end developer currently in my third year of studying Informatics/Computer Science at Siliwangi University. Feel free to explore my portfolio to see the diverse projects I've completed. If you're interested in my work and would like me to bring your project to life, don't hesitate to reach out to me!</motion.p>
                <motion.button custom={3} variants={animation}>Contact me</motion.button>

            </div>
        </motion.div>
    </>
}