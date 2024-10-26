import style from './experience.module.css';
import { motion } from 'framer-motion';

const animation = {
    animate: {
        rotate: 360,
    },
    transition: {
        duration: 10,
        repeat: Infinity,
        ease: 'linear',
    },
};

export default function Experience() {
    const arr_experience = [
        { id: 1, title: 'Front-End Development', description: 'Build Interactive UI with Next.JS' },
        { id: 2, title: 'REST API', description: '' },
        { id: 3, title: 'Back-End Development', description: 'Dynamic App with Express.JS and SQL' }
    ];

    return (
        <>
            <div className={style.wrapper}>
                <h2 className={style.title}>What I do</h2>
                <p>as a fullstack</p>
                <div className={style.exp_items}>
                    {arr_experience.map((el) => (
                        <div key={el.id} className={style.border_item}>
                            <h3 className={style.title_item}>{el.title}</h3>
                            <p className={style.description_item}>{el.description}</p>
                        </div>
                    ))}
                </div>
                <motion.div
                    className={style.images}
                >
                    <motion.div
                        className={style.react}
                        variants={animation}
                        animate='animate'
                        transition={animation.transition}
                    />
                    <div className={style.js}></div>
                    <motion.div
                        className={style.nextjs}
                        variants={animation}
                        animate='animate'
                        transition={animation.transition}
                    />
                </motion.div>
            </div>
        </>
    );
}
