import style from './footer.module.css'

export default function Footer() {
    return <footer id="footer" className={style.wrapper}>
        <p className={style.title}>Мои контакты</p>
        <div className={style.line}></div>
        <nav className={style.icons_contacts}>
            <a href="https://www.linkedin.com/in/anton-miranovich-7005b6286/"><div className={style.linkedin}></div></a>
            <a href="https://github.com/AntonMiranovich"><div className={style.github}></div></a>
            <a href="https://t.me/antonmiranovich"><div className={style.telegram}></div></a>
            <div className={style.email}></div>
        </nav>
    </footer>
}