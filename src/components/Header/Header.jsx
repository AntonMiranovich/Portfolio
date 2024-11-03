import { useEffect, useState } from 'react'
import burgermenu from './assets/burgermenu.svg'
import close from './assets/close.svg'
import style from './header.module.css'
import { motion } from 'framer-motion'

export default function Header({ langv, setLangv }) {
	const [isshowBurger, setShowBurger] = useState(false)

	useEffect(() => {
		document.querySelector('html').style = `overflow: ${isshowBurger ? 'hidden' : ''
			}`
	}, [isshowBurger])

	const handleExperienceClick = () => {
		const experience = document.getElementById('experience')
		if (experience) {
			experience.scrollIntoView({ behavior: 'smooth' })
		}
	}
	const handleMyProjectsClick = () => {
		const myProjects = document.getElementById('myProjects')
		if (myProjects) {
			myProjects.scrollIntoView({ behavior: 'smooth' })
		}
	}
	const handleArrRolesClick = () => {
		const arrRoles = document.getElementById('arrRoles')
		if (arrRoles) {
			arrRoles.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<>
			<nav className={style.wrapper}>
				<div className={style.images}>
					<a href="https://www.linkedin.com/in/anton-miranovich-7005b6286/" target="_blank"><motion.div whileHover={{ scale: 1.3 }} className={style.linkedin}></motion.div></a>
					<a href="https://github.com/AntonMiranovich" target="_blank"><motion.div whileHover={{ scale: 1.3 }} className={style.github}></motion.div></a>
					<a href="https://t.me/antonmiranovich" target="_blank"><motion.div whileHover={{ scale: 1.3 }} className={style.telegram}></motion.div></a>
					<motion.div whileHover={{ scale: 1.3 }} className={style.email}></motion.div>
				</div>
				<div className={style.info}>
					<motion.p whileHover={{ scale: 1.2 }} onClick={handleExperienceClick}>{langv === "RU" ? 'Обо мне' : 'About me'}</motion.p>
					<motion.p whileHover={{ scale: 1.2 }} onClick={handleArrRolesClick}>{langv === "RU" ? 'Опыт работы' : 'Work experience'}</motion.p>
					<motion.p whileHover={{ scale: 1.2 }} onClick={handleMyProjectsClick}>{langv === "RU" ? 'Мои проекты' : 'My projects'}</motion.p>
					<div className={style.lenguage} onClick={() => langv === "RU" ? setLangv('EN') : setLangv('RU')}>
						<div className={style.imgLeng}></div>
						<h3 className={style.langv}>{langv}</h3>
					</div>
				</div>

				<div className={style.burger}>
					<div className={style.lenguage} onClick={() => langv === "RU" ? setLangv('EN') : setLangv('RU')}>
						<div className={style.imgLeng}></div>
						<h3 className={style.langv}>{langv}</h3>
					</div>

					<img
						onClick={() => setShowBurger(!isshowBurger)}
						src={burgermenu}
						style={{ width: 45 }}
						alt=''
					/>


					{isshowBurger && (
						<div className={style.modal}
							style={{
								justifyContent: 'center',
								alignItems: 'center',
								display: 'flex',
								flexDirection: 'column',
								gap: 30,
								position: 'absolute',
								width: '100%',
								backgroundColor: '#f3f3f3',
								left: 0,
								top: 0,
								height: '100%',
							}}
						>
							<img
								onClick={() => setShowBurger(false)}
								src={close}
								style={{
									width: 30,
									position: 'absolute',
									right: '5%',
									top: '5%',
								}}
								alt=''
							/>

							<p onClick={() => { setShowBurger(false), handleExperienceClick() }}>{langv === "RU" ? 'Обо мне' : 'About me'}</p>
							<p onClick={() => { setShowBurger(false), handleArrRolesClick() }}>{langv === "RU" ? 'Опыт работы' : 'Work experience'}</p>
							<p onClick={() => { setShowBurger(false), handleMyProjectsClick() }}>{langv === "RU" ? 'Мои проекты' : 'My projects'}</p>
						</div>
					)}
				</div>
			</nav>
		</>
	)
}
