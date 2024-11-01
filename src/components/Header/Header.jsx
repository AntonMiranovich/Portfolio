import { useEffect, useState } from 'react'
import burgermenu from './assets/burgermenu.svg'
import close from './assets/close.svg'
import style from './header.module.css'

export default function Header() {
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
					<a href="https://www.linkedin.com/in/anton-miranovich-7005b6286/"><div className={style.linkedin}></div></a>
					<a href="https://github.com/AntonMiranovich"><div className={style.github}></div></a>
					<a href="https://t.me/antonmiranovich"><div className={style.telegram}></div></a>
					<div className={style.email}></div>
				</div>
				<div className={style.info}>
					<p onClick={handleExperienceClick}>Обо мне</p>
					<p onClick={handleArrRolesClick}>Опыт работы</p>
					<p onClick={handleMyProjectsClick}>Мои проекты</p>
				</div>

				<div className={style.burger}>
					<img
						onClick={() => setShowBurger(!isshowBurger)}
						src={burgermenu}
						style={{ width: 30 }}
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

							<p>Обо мне</p>
							<p>Опыт работы</p>
							<p>Мои проекты</p>
						</div>
					)}
				</div>
			</nav>
		</>
	)
}
