import style from './footer.module.css'
import { motion } from 'framer-motion'

export default function Footer() {
    return <footer id="footer" className={style.wrapper}>
        <p className={style.title}>Мои контакты</p>
        <div className={style.line}></div>
        <nav className={style.icons_contacts}>
            <a href="https://www.linkedin.com/in/anton-miranovich-7005b6286/" target="_blank"><motion.div whileHover={{ scale: 1.2 }} className={style.linkedin}></motion.div></a>
            <a href="https://github.com/AntonMiranovich" target="_blank"><motion.div whileHover={{ scale: 1.2 }} className={style.github}></motion.div></a>
            <a href="https://t.me/antonmiranovich" target="_blank"><motion.div whileHover={{ scale: 1.2 }} className={style.telegram}></motion.div></a>
            <motion.div whileHover={{ scale: 1.2 }} className={style.email}></motion.div>
        </nav>
    </footer>
}