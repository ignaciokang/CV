import LaboralTarjeta from './laboralTarjeta';
import LaboralDetalle from './laboralDetalle';
import { useSpring, a } from 'react-spring';
import { useState } from 'react';
import imagenes from '../../../../constants/images.js';

const Laboral = () => {
	//TODO poner negrita a los campos
	//dangerouslySetInnerHtml 1:32:20 https://www.youtube.com/watch?v=atebfXxl9B4
	const trabajos = [
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
				'Capacitar y transferir el know how al equipo con los temas del frente industrial.',
				'Asegurar el cumplimiento y calidad de servicio al cliente.',
				'Manejo de SQL, Datafix Management y Sharepoint',
				'Gestionar la resolución de incidentes con la documentación correspondiente.',
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
				'Capacitar y transferir el know how al equipo con los temas del frente industrial.',
				'Asegurar el cumplimiento y calidad de servicio al cliente.',
				'Manejo de SQL, Datafix Management y Sharepoint',
				'Gestionar la resolución de incidentes con la documentación correspondiente.',
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

	const [trabajoDetalle, setTrabajoDetalle] = useState('Listado');

	const activarTrabajoDetalle = (id) => {
		setTrabajoDetalle(id);
	};

	const animation1 = useSpring({
		from: { x: 100, opacity: 0 },
		to: { x: 0, opacity: 1 },
		config: { duration: 1000 },
	});

	return (
		<div className="h-full md:py-12 md:px-12 sm:px-4i tems-center overflow-auto space-y-8">
			{trabajoDetalle === 'Listado' ? (
				<div>
					{trabajos.map((trabajo, index) => {
						return (
							<LaboralTarjeta
								trabajo={trabajo}
								key={index}
								activarTrabajoDetalle={activarTrabajoDetalle}
							/>
						);
					})}
				</div>
			) : (
				''
			)}

			{/* 
			{pagina === 'Resumen' ? <Resumen /> : ''}
			{pagina === 'Educacion' ? <Educacion /> : ''}
			{pagina === 'Laboral' ? <Laboral /> : ''}
			{pagina === 'Proyectos' ? <Resumen /> : ''} */}
		</div>
	);
};

export default Laboral;
