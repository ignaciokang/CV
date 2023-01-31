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
			'Desarrollo Front End con React JS para el cliente Aracar Group.',
			'Trabajo en equipo mediante metodologías ágiles',
			'Desarrollo Back End con Nest JS (Node) para el cliente Grupo Murchison.',
			'Desarrollo de API REST integrador entre bases de datos.',
			'Manejo de SQL, Postman, dBeaver, Github',
		],
		logo: imagenes.globant,
	},
	{
		id: 'globant',
		puesto: 'Referente de equipo Industrial (Consultor Sr)',
		empresa: 'Globant',
		rubro: 'Tecnología',
		desde: 'Julio 2018',
		hasta: 'Enero 2022',
		tareas: [
			'Liderar un equipo de trabajo con 5 personas a cargo.',
			'Brindar servicio de soporte a la empresa ARCOR del sistema Oracle: JDE',
			'Fijar los objetivos, dar seguimiento y realizar la evaluación anual de cada integrante del equipo.',
			'Temas referidos a: Gestión de Compras, Inventarios, Mantenimiento de Equipos, Costos, Manufactura, Grower y Ventas.',
			'Asegurar el cumplimiento y calidad de servicio al cliente mediante metodologías ágiles.',
			'Manejo de SQL, Datafix Management y Sharepoint',
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
			'Digitalización del sistema: Creación de hojas de cálculos para controles presupuestarios, logística, administrador de clientes.',
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
			'Liderar un equipo de trabajo con 2 personas a cargo.',
			'Venta de indumentaria al público.',
			'Manejo y cierre de caja.',
			'Apertura y cierre del local.',
			'Control de stock.',
		],
		logo: imagenes.kurzza,
	},
];

export default LaboralData;
