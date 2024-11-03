import { motion } from 'framer-motion'
import foto from './assets/ava.png';
import style from './preview.module.css'

const animation = {
	hiddenHorizontal: {
		x: 100,
		opacity: 0,
	},
	visibleHorizontal: custom => ({
		x: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
	hiddenVertical: {
		y: -100,
		opacity: 0,
	},
	visibleVertical: custom => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.2 },
	}),
}

export default function Preview({ langv }) {
	const arr_roles = [
		{
			id: 1,
			name: 'Frontend',
			description: [
				'JavaScript',
				'TypeScript',
				'React',
				'Next.js',
				'Redux Toolkit',
				'Redux Toolkit Query',
				'Material UI',
				'Mantine',
				'HTML',
				'CSS',
				'SCSS',
				'Framer motion',
				'Styled components',
			],
			roles_icon: style.icon_1,
			also: null,
			additionally: [],
		},
		{
			id: 2,
			name: 'Backend',
			description: ['JavaScript', 'TypeScript', 'Node.js', 'Express', ' Jest'],
			roles_icon: style.icon_2,
			also: null,
			additionally: [],
		},
		{
			id: 3,
			name: 'Архитектор баз данных',
			description: ['MySQL', 'PostgreSQL'],
			roles_icon: style.icon_3,
			also: 'а также',
			additionally: ['Mocha', 'Jest', 'Git', 'Figma'],
		},
	]

	return (
		<section>
			<div className={style.wrapper}>
				<motion.div
					initial='hiddenVertical'
					whileInView='visibleVertical'
					viewport={{ once: true }}
					className={style.visit_card}
				>
					<div className={style.about_me}>
						<motion.p custom={1} variants={animation}>
							{langv === "RU" ? 'Привет, меня зовут Антон Миранович, и я' : 'Hi, my name is Anton Miranovich and I am a'}
						</motion.p>
						<motion.h1 custom={2} variants={animation}>
							{langv === 'RU' ? 'Full Stack Разработчик' : 'Full Stack Developer'}
						</motion.h1>
						<motion.p custom={3} variants={animation}>
							{langv === "RU" ?
								`который, сосредоточен на использовании возможностей Next.js с
							Express.js и REST API для создания динамических веб-приложений,
							создавая бесперебойный пользовательский интерфейс и воплощающий
							свои идеи в жизнь.`
								:
								`who is focused on leveraging the power of Next.js with
							 Express.js and REST API to build dynamic web applications,
							creating seamless user experiences and bringing your
							 ideas to life.`}
						</motion.p>
					</div>
					<motion.img custom={4} variants={animation} src={foto} alt='foto' />
				</motion.div>
				<motion.div
					initial='hiddenVertical'
					whileInView='visibleVertical'
					viewport={{ once: true }}
					className={style.skills}
					id='arrRoles'
				>
					<div className={style.roles}>
						{arr_roles.map(el => (
							<motion.div
								custom={4 + el.id}
								variants={animation}
								key={el.id}
								className={style.roles_item}
							>
								<div className={el.roles_icon}></div>
								<div className={style.info_item}>
									<h3 className={style.roles_name}>{el.name}</h3>
									<div className={style.line}></div>
									<h3>{langv === 'RU' ? 'Я работал с' : 'I worked with'}</h3>
									{el.description.map((elem, i) => (
										<ul key={i}>
											<li>{elem}</li>
										</ul>
									))}
									<h3 className={style.roles_name}>{langv === 'RU' ? el.also : el.also !== null ? 'and also' : null}</h3>
									{el.additionally.map((element, i) => (
										<ul key={i}>
											<li>{element}</li>
										</ul>
									))}
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	)
}
