import imagenes from './images';

const LaboralData = [
	{
		id: 'assert',
		puesto: 'Desarrollador Full Stack',
		empresa: 'Assert Solutions',
		rubro: 'Tecnología',
		desde: 'Mayo 2022',
		hasta: 'Actualidad',
		tareas: [
			'Desarrollo <b>Front End</b> de aplicaciones web con React JS para el cliente Aracar Group.',
			'Desarrollo <b>Back End</b> con Nest JS (Node) para el cliente Grupo Murchison.',
			'Trabajo en equipo mediante metodologías ágiles',
			'Desarrollo de API REST integrador entre bases de datos.',
			'Manejo de SQL, Postman, dBeaver, Github',
			'Typescript, TypeORM, NestJS, Javascript',
		],
		logo: imagenes.assert,
	},
	{
		id: 'globant',
		puesto: 'Referente de equipo Industrial (Consultor Sr)',
		empresa: 'Globant',
		rubro: 'Tecnología',
		desde: 'Julio 2018',
		hasta: 'Enero 2022',
		tareas: [
			'<b>Liderar</b> un equipo de trabajo con 5 personas a cargo.',
			'Brindar servicio de soporte a la empresa ARCOR del sistema Oracle: JDE',
			'Fijar los objetivos, dar seguimiento y realizar la evaluación anual de cada integrante del equipo.',
			'Temas referidos a: Gestión de Compras, Inventarios, Mantenimiento, Costos y Manufactura',
			'Manejo de SQL, Datafix Management y Sharepoint',
			'Asegurar el cumplimiento y calidad de servicio al cliente mediante <b>metodologías ágiles</b>.',
		],
		logo: imagenes.globant,
	},
	{
		id: 'nicona',
		puesto: 'Analista Administrativo',
		empresa: 'Nicona SRL',
		rubro: 'Industria Textil',
		desde: 'Enero 2014',
		hasta: 'Mayo 2018',
		tareas: [
			'Control de producción, mercadería e insumos productivos.',
			'<b>Digitalización del sistema</b>: Creación de hojas de cálculos para controles presupuestarios, logística, administrador de clientes.',
			'Organización de logística.',
			'Confección de Cash Flow',
		],
		logo: imagenes.nicona,
	},
	{
		id: 'kurzza',
		puesto: 'Encargado',
		empresa: 'Kurzza',
		rubro: 'Local de indumentaria',
		desde: 'Mayo 2012',
		hasta: 'Enero 2014',
		tareas: [
			'Apertura y cierre de local de indumentaria.',
			'<b>Liderar</b> un equipo de trabajo con 2 personas a cargo.',
			'Venta de indumentaria al público.',
			'Manejo y cierre de caja.',
		],
		logo: imagenes.kurzza,
	},
];

export default LaboralData;
