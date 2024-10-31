import img from './assets/coffeine.png'
import imgEduc from './assets/imgEducation.jpg'
import style from './projects.module.css'

export default function MyProjects() {
	const arr_projects = [
		{
			id: 1,
			name: 'Caffeine',
			environment: ['#javascript', '#html', '#css'],
			description:
				'Our app lets you order coffee, get drink info, enjoy promotions and bonuses, receive personalized recommendations, and leave feedback to improve service.',
			img: style.img_item,
			imgPath: img,
			hrev: 'https://new-caffeine-5ynp.vercel.app/',
			hrevCode: 'https://github.com/AntonMiranovich/newCaffeine',
		},
		{
			id: 2,
			name: 'EducationPlatform',
			environment: ['#javascript', '#html', '#css'],
			description:
				'Our platform offers interactive courses, expert guidance, and personalized paths with an intuitive interface, progress tracking,  and adaptive  curriculum for efficient learning.',
			img: style.img_item,
			imgPath: imgEduc,
			hrev: 'https://education-platform-pqnc.vercel.app/',
			hrevCode: 'https://github.com/AntonMiranovich/EducationPlatform',
		},
	]

	return (
		<section id='myProjects'>
			<div className={style.wrapper}>
				<h2>Мои проекты</h2>
				<p>Вот несколько проектов, которые я реализовал</p>
				<div className={style.whirligig_projects}>
					{arr_projects.map(el => (
						<div key={el.id} className={style.project_item}>
							<img className={el.img} src={el.imgPath} alt='img' />
							<div className={style.environment}>
								{el.environment.map((elem, i) => (
									<div key={i} className={style.env_item}>
										<p>{elem}</p>
									</div>
								))}
							</div>
							<h3 className={style.name_item}>{el.name}</h3>
							<p className={style.text_item}>{el.description}</p>
							<p className={style.view}><a href={el.hrev}>see project →</a></p>
							<p className={style.view}><a href={el.hrevCode}>see code →</a></p>
						</div>
					))}
				</div>
			</div>
		</section >
	)
}
