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
    const handleContactClick = () => {
        const footer = document.getElementById('footer');
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return <section>
        <motion.div
            initial='hiddenHorizontal'
            whileInView='visibleHorizontal'
            viewport={{ once: true }}
            className={style.wrapper}>
            <div className={style.info}>
                <motion.h2 custom={1} variants={animation}>Свяжитесь со мной</motion.h2>
                <motion.p custom={2} variants={animation}>Я мотивированный и постоянно развивающийся фронтенд-разработчик. Не стесняйтесь заглянуть в мое портфолио, чтобы ознакомиться с разнообразными проектами, которые я завершил. Если Вас заинтересовала моя работа и Вы хотите, чтобы я воплотил Ваш проект в жизнь, не стесняйтесь связаться со мной!</motion.p>
                <motion.button whileHover={{ scale: 1.3 }} custom={3} variants={animation} onClick={handleContactClick}>
                    Мои контакты
                </motion.button>

            </div>
        </motion.div>
    </section>
}