import style from './preview.module.css';
import foto from './assets/ava.png';
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

export default function Preview() {

    const arr_roles = [{
        id: 1, name: 'Frontend', description: 'Briefing, wireframe, UX, UI and branding.', roles_icon: style.icon_1
    },
    { id: 2, name: 'Backend', description: 'Briefing, wireframe, UX, UI and branding.', roles_icon: style.icon_2 },
    { id: 3, name: 'Database Architect', description: 'Briefing, wireframe, UX, UI and branding.', roles_icon: style.icon_3 }]

    return <>
        <div className={style.wrapper}>
            <motion.div
                initial='hiddenVertical'
                whileInView='visibleVertical'
                viewport={{ once: true }}
                className={style.visit_card}>
                <div className={style.about_me}>
                    <motion.p custom={1} variants={animation}>Привет, меня зовут Антон Миранович, и я</motion.p>
                    <motion.h1 custom={2} variants={animation}>Full Stack Разработчик</motion.h1>
                    <motion.p custom={3} variants={animation}>focus in harnessing the power of Next.js with Express.js and REST API to craft dynamic web applications. creating seamless user experiences that bring ideas to life.</motion.p>
                </div>
                <motion.img
                    custom={4} variants={animation} src={foto} alt="foto" />
            </motion.div>
            <motion.div
                initial='hiddenVertical'
                whileInView='visibleVertical'
                viewport={{ once: true }}
                className={style.skills}>
                <div className={style.roles}>
                    {arr_roles.map((el) => <motion.div  custom={4+el.id} variants={animation} key={el.id} className={style.roles_item}>
                        <div className={el.roles_icon}></div>
                        <div className={style.info_item}>
                            <h3 className={style.roles_name}>{el.name}</h3>
                            <p>{el.description}</p>
                            <div className={style.line}></div>
                            <ul>
                                <h3>I've had experiences with</h3>
                                <li>Firebase Database</li>
                                <li>MySQL Database</li>
                                <li>GIT, GitHub, Bitbucket</li>
                                <li>Figma, Adobe XD, Sketch</li>
                            </ul>
                        </div>
                    </motion.div>)}
                </div>
            </motion.div>
        </div>
    </>
}