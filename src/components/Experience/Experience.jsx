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

export default function Experience() {
	const arr_experience = [
		{
			id: 1,
			title: 'Front-End Development',
			description:
				'Создание интерактивного пользовательского интерфейса с помощью Next.js',
		},
		{
			id: 2,
			title: 'REST API',
			description:
				'Создание мощного REST API с использованием современных технологий для обеспечения безопасного и удобного взаимодействия между клиентом и сервером, позволяющего эффективно обрабатывать запросы и предоставлять данные в формате JSON, что способствует быстрой разработке и масштабируемости приложений.',
		},
		{
			id: 3,
			title: 'Back-End Development',
			description: 'Создание динамического приложения с Express.js и SQL.',
		},
	]

	return (
		<section id='experience'>
			<div className={style.wrapper}>
				<h2 className={style.title}>Что я делаю</h2>
				<p>как полный стек</p>
				<div className={style.exp_items}>
					{arr_experience.map(el => (
						<div key={el.id} className={style.border_item}>
							<h3 className={style.title_item}>{el.title}</h3>
							<p className={style.description_item}>{el.description}</p>
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
