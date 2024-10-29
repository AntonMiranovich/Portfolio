import img from './assets/coffeine.png'
import style from './projects.module.css'

export default function MyProjects() {
	const arr_projects = [
		{
			id: 1,
			name: 'ReDesign Apps',
			environment: ['#javascript', '#html', '#css'],
			description:
				'lorem ipsum dolor si amet adiran jamet aku ganteng aku adalah bukan jamet amar jamet aku bukan jamet a lorem ipsumd olor si amet jame tjsajklhnsajhkl',
			img: style.img_item,
		},
		{
			id: 2,
			name: 'ReDesign Apps',
			environment: ['#javascript', '#html', '#css'],
			description:
				'lorem ipsum dolor si amet adiran jamet aku ganteng aku adalah bukan jamet amar jamet aku bukan jamet a lorem ipsumd olor si amet jame tjsajklhnsajhkl',
			img: style.img_item,
		},
		{
			id: 3,
			name: 'ReDesign Apps',
			environment: ['#javascript', '#html', '#css'],
			description:
				'lorem ipsum dolor si amet adiran jamet aku ganteng aku adalah bukan jamet amar jamet aku bukan jamet a lorem ipsumd olor si amet jame tjsajklhnsajhkl',
			img: style.img_item,
		},
		{
			id: 4,
			name: 'ReDesign Apps',
			environment: ['#javascript', '#html', '#css'],
			description:
				'lorem ipsum dolor si amet adiran jamet aku ganteng aku adalah bukan jamet amar jamet aku bukan jamet a lorem ipsumd olor si amet jame tjsajklhnsajhkl',
			img: style.img_item,
		},
		{
			id: 5,
			name: 'ReDesign Apps',
			environment: ['#javascript', '#html', '#css'],
			description:
				'lorem ipsum dolor si amet adiran jamet aku ganteng aku adalah bukan jamet amar jamet aku bukan jamet a lorem ipsumd olor si amet jame tjsajklhnsajhkl',
			img: style.img_item,
		},
		{
			id: 6,
			name: 'ReDesign Apps',
			environment: ['#javascript', '#html', '#css'],
			description:
				'lorem ipsum dolor si amet adiran jamet aku ganteng aku adalah bukan jamet amar jamet aku bukan jamet a lorem ipsumd olor si amet jame tjsajklhnsajhkl',
			img: style.img_item,
		},
		{
			id: 7,
			name: 'ReDesign Apps',
			environment: ['#javascript', '#html', '#css'],
			description:
				'lorem ipsum dolor si amet adiran jamet aku ganteng aku adalah bukan jamet amar jamet aku bukan jamet a lorem ipsumd olor si amet jame tjsajklhnsajhkl',
			img: style.img_item,
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
							<img className={el.img} src={img} alt='img' />
							<div className={style.environment}>
								{el.environment.map((elem, i) => (
									<div key={i} className={style.env_item}>
										<p>{elem}</p>
									</div>
								))}
							</div>
							<h3 className={style.name_item}>{el.name}</h3>
							<p className={style.text_item}>{el.description}</p>
							<p className={style.view}>see project →</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
