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
			description:
				'JavaScript, TypeScript, React, Next.js, Redux Toolkit, Redux Toolkit Query, Material UI, Mantine, HTML, CSS, SCSS, Framer motion, Styled components',
			roles_icon: style.icon_1,
			also: null,
			additionally: [],
		},
		{
			id: 2,
			name: 'Backend',
			description: 'JavaScript, TypeScript, Node.js, Express, Jest',
			roles_icon: style.icon_2,
			also: null,
			additionally: [],
		},
		{
			id: 3,
			name: langv === 'RU' ? 'База данных' : 'Database',
			description: 'MySQL, PostgreSQL, MongoDB',
			roles_icon: style.icon_3,
			also: 'а также',
			additionally: 'Mocha, Jest, Git, Figma',
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
				<div className={style.skills} id='arrRoles'>
					<div className={style.roles}>
						<motion.h3
							initial={{ opacity: 0, y: -100 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
							viewport={{ once: true }}
							className={style.mySkillsTitle}>{langv === 'RU' ? 'Мои навыки' : 'My Skills'}</motion.h3>
						{arr_roles.map(el => (
							<div key={el.id} className={style.roles_item}>
								<div className={style.info_item}>
									<motion.div
										initial={{ opacity: 0, y: -100 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.2 * el.id }}
										viewport={{ once: true }}
										className={style.iconTatle}>
										<div className={el.roles_icon}></div>
										<h3 className={style.roles_name}>{el.name}</h3>
									</motion.div>
									<motion.div
										initial={{ opacity: 0, y: -100 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.2 * el.id }}
										viewport={{ once: true }}
										className={style.line}></motion.div>
									<motion.div
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										transition={{ duration: 1, delay: 0.5 + 0.2 * el.id }}
										viewport={{ once: true }}
										className={!el.also ? style.list : style.listAlso}>
										<p>{el.description}</p>
										<h3 className={style.roles_name}>{langv === 'RU' ? el.also : el.also !== null ? 'and also' : null}</h3>
										<p>{el.additionally}</p>
									</motion.div>
								</div>
							</div>
						))}
					</div>
				</div >

				<div className={style.experience}>
					<motion.h3
						initial={{ opacity: 0, y: -100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						viewport={{ once: true }}
						className={style.jobInfo}>{langv === 'RU' ? 'Опыт работы' : 'Experience'}</motion.h3>
					<p style={{width:'80%'}}>{langv === 'RU' ?
						'С более чем годом опыта работы в области разработки программного обеспечения, я приобрел разносторонние навыки в создании, поддержке и масштабировании приложений как на фронтенде, так и на бэкенде. Я умею работать с современными инструментами и технологиями, что позволяет мне эффективно реализовывать проекты разного уровня сложности.'
						:
						'With over a year of experience in software development, I have acquired versatile skills in creating, maintaining and scaling applications on both the frontend and backend. I am proficient in working with modern tools and technologies, which allows me to effectively implement projects of varying complexity.'}</p>
				</div>
			</div>
		</section >
	)
}
