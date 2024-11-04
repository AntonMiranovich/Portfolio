import { motion } from 'framer-motion'
import style from './experience.module.css'

const animation = {
	animate: {
		rotate: 360,
	},
	transition: {
		duration: 10,
		repeat: Infinity,
		ease: 'linear',
	},
}

export default function Experience({ langv }) {
	const arr_experience = [
		{
			id: 1,
			title: 'Front-End Development',
			description:
				'Создание интерактивного пользовательского интерфейса с помощью Next.js',
			descriptionEn:
				'Building an interactive user interface with Next.js',
		},
		{
			id: 2,
			title: 'REST API',
			description:
				'Создание мощного REST API с использованием современных технологий для обеспечения безопасного и удобного взаимодействия между клиентом и сервером, позволяющего эффективно обрабатывать запросы и предоставлять данные в формате JSON, что способствует быстрой разработке и масштабируемости приложений.',
			descriptionEn:
				'Building a powerful REST API using modern technologies to provide secure and convenient interaction between the client and server, allowing for efficient request processing and providing data in JSON format, which facilitates rapid application development and scalability.',
		},
		{
			id: 3,
			title: 'Back-End Development',
			description: 'Создание динамического приложения с Express.js и SQL.',
			descriptionEn:
				'Building a dynamic application with Express.js and SQL.',
		},
	]

	return (
		<section id='experience'>
			<div className={style.wrapper}>
				<h2 className={style.title}>{langv === 'RU' ? 'Что я делаю' : 'What i do'}</h2>
				<p>{langv === 'RU' ? 'как полный стек' : 'as a Full Stack'}к</p>
				<div className={style.exp_items}>
					{arr_experience.map(el => (
						<div key={el.id} className={style.border_item}>
							<h3 className={style.title_item}>{el.title}</h3>
							<p className={style.description_item}>{langv === 'RU' ? el.description : el.descriptionEn}</p>
						</div>
					))}
				</div>
				<motion.div className={style.images}>
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
		</section>
	)
}
