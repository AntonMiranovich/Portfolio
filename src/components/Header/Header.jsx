import { Link } from 'react-router-dom';
import style from './header.module.css';


export default function Header() {
  return <>
    <nav className={style.wrapper}>
      <div className={style.images}>
        <a href="https://www.linkedin.com/in/anton-miranovich-7005b6286/"><div className={style.linkedin}></div></a>
        <a href="https://github.com/AntonMiranovich"><div className={style.github}></div></a>
        <a href="https://t.me/antonmiranovich"><div className={style.telegram}></div></a>
        <div className={style.email}></div>
      </div>
      <div className={style.info}>
        <p>Обо мне</p>
        <p>Опыт работы</p>
        <p>Мои проекты</p>
      </div>
    </nav>
  </>
}