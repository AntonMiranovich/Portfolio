import img from './assets/coffeine.png'
import imgEduc from './assets/imgEducation.jpg'
import weatherImg from './assets/weather.jpg'
import toDo from './assets/toDo.jpg'
import pg from './assets/pg.jpg'
import mntn from './assets/mntn.jpg'
import style from './projects.module.css'
import { motion } from 'framer-motion'

export default function MyProjects({ langv }) {
	const arr_projects = [
		{
			id: 1,
			name: 'Caffeine',
			environment: ['#javascript', '#html', '#css', 'react'],
			description:
				'Наше приложение позволяет заказывать кофе, получать информацию о напитках, наслаждаться акциями и бонусами,оставлять отзывы для улучшения сервиса.',
			descriptionEN:
				'Our application allows you to order coffee, get information about drinks, enjoy promotions and bonuses, leave reviews to improve the service.',
			img: style.img_item,
			imgPath: img,
			hrev: 'https://new-caffeine-5ynp.vercel.app/',
			hrevCode: 'https://github.com/AntonMiranovich/newCaffeine',
		},
		{
			id: 2,
			name: 'EducationPlatform',
			environment: ['#react', '#html', '#css', '#express'],
			description:
				'Наша платформа предлагает интерактивные курсы, экспертные рекомендации и персонализированные пути с интуитивным интерфейсом.',
			descriptionEN:
				'Our application allows you to order coffee, get information about drinks, enjoy promotions and bonuses, leave reviews to improve the service.',
			img: style.img_item,
			imgPath: imgEduc,
			hrev: 'https://education-platform-pqnc.vercel.app/',
			hrevCode: 'https://github.com/AntonMiranovich/EducationPlatform',
		},
		{
			id: 3,
			name: 'Weather',
			environment: ['#javascript', '#html', '#css', 'react'],
			description:
				'Этот проект отображает погоду в реальном времени, предоставляя актуальные данные о температуре, осадках и ветровых условиях для вашего местоположения.',
			descriptionEN:
				'Our application allows you to order coffee, get information about drinks, enjoy promotions and bonuses, leave reviews to improve the service.',
			img: style.img_item,
			imgPath: weatherImg,
			hrev: 'https://weather-dashboard-zeta-gules.vercel.app/',
			hrevCode: 'https://github.com/AntonMiranovich/weather-dashboard',
		},
		{
			id: 4,
			name: 'ToDo Mobile',
			environment: ['#react-native', '#html', '#css', 'expo'],
			description:
				'Этот проект предоставляет функции авторизации и регистрации пользователей. Каждый клиент может добавлять и закрывать задачи, управляя своими тасками для повышения продуктивности.',
			descriptionEN:
				'Our application allows you to order coffee, get information about drinks, enjoy promotions and bonuses, leave reviews to improve the service.',
			img: style.img_item,
			imgPath: toDo,
			hrevCode: 'https://github.com/AntonMiranovich/Mobile-to-do/tree/main/JWT-Mobile',
		},
		{
			id: 5,
			name: 'Express-University-PG',
			environment: ['#postgreSQL', '#express', '#rest-api'],
			description:
				'Этот проект предоставляет функции авторизации и регистрации пользователей. Каждый клиент может добавлять и закрывать задачи, управляя своими тасками для повышения продуктивности.',
			descriptionEN:
				'This project provides user authorization and registration functions. Each client can add and close tasks, managing their tasks to increase productivity.',
			img: style.img_item,
			imgPath: pg,
			hrevCode: 'https://github.com/AntonMiranovich/Express-University-PG',
		},
		{
			id: 6,
			name: 'mntn-guide',
			environment: ['#javascript', '#html', '#css', 'react'],
			description:
				'Приложение для путешествий, где можно делиться яркими моментами с фотографиями. Идеально для создания путешественнического дневника и хранения воспоминаний.',
			descriptionEN:
				'A travel app where you can share your best moments with photos. Ideal for creating a travel diary and storing memories.',
			img: style.img_item,
			imgPath: mntn,
			hrev: 'https://mntn-guide-three.vercel.app/',
			hrevCode: 'https://github.com/AntonMiranovich/mntn-guide/tree/main/client',
		},
	]

	return (
		<section id='myProjects'>
			<div className={style.wrapper}>
				<h2>{langv === 'RU' ? 'Мои проекты' : 'My projects'}</h2>
				<p>{langv === 'RU' ? 'Вот несколько проектов, которые я реализовал' : 'Here are some projects I have completed'}</p>
				<div className={style.whirligig_projects}>
					{arr_projects.map(el => (
						<motion.div whileHover={{ scale: 1.1 }} key={el.id} className={style.project_item}>
							<img className={el.img} src={el.imgPath} alt='img' />
							<div className={style.environment}>
								{el.environment.map((elem, i) => (
									<div key={i} className={style.env_item}>
										<p>{elem}</p>
									</div>
								))}
							</div>
							<h3 className={style.name_item}>{el.name}</h3>
							<p className={style.text_item}>{langv === 'RU' ? el.description : el.descriptionEN}</p>
							{el.hrev ?
								<div className={style.viewWrapper}>
									<p className={style.view}><a href={el.hrev} target="_blank">{langv === 'RU' ? 'Посмотреть проект →' : 'See project →'}</a></p>
									<p className={style.view}><a href={el.hrevCode} target="_blank">{langv === 'RU' ? 'Посмотреть код →' : 'See code →'}</a></p>
								</div>
								:
								<div className={style.viewWrapper}>
									<p className={style.view}><a href={el.hrevCode} target="_blank">{langv === 'RU' ? 'Посмотреть код →' : 'See code →'}</a></p>
								</div>
							}

						</motion.div>
					))}
				</div>
			</div>
		</section >
	)
}
