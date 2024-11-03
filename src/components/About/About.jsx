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

export default function About({ langv }) {
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
                <motion.h2 custom={1} variants={animation}>	{langv === 'RU' ? 'Свяжитесь со мной' : 'Contact me'}</motion.h2>
                <motion.p custom={2} variants={animation}>{langv === 'RU' ? 'Я мотивированный и постоянно развивающийся фронтенд-разработчик. Не стесняйтесь заглянуть в мое портфолио, чтобы ознакомиться с разнообразными проектами, которые я завершил. Если Вас заинтересовала моя работа и Вы хотите, чтобы я воплотил Ваш проект в жизнь, не стесняйтесь связаться со мной!' : 'I am a motivated and constantly evolving frontend developer. Feel free to check out my portfolio to see the variety of projects I have completed. If you are interested in my work and would like me to bring your project to life, feel free to contact me!'}</motion.p>
                <motion.button whileHover={{ scale: 1.3 }} custom={3} variants={animation} onClick={handleContactClick}>
                    {langv === 'RU' ? 'Мои контакты' : 'My contacts'}
                </motion.button>

            </div>
        </motion.div>
    </section>
}