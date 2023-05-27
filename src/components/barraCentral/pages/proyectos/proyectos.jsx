import { useState } from 'react';
import projectsData from '../../../../constants/projectsData.js';
import ProyectosDetalle from './proyectosDetalle.jsx';
import ProyectosTarjeta from './proyectosTarjeta.jsx';
import { useSpring, a } from 'react-spring';

const Proyectos = () => {
	//Listado de proyectos, despues voy a poder filtrar por categoría.
	const [listadoProyectos, setListadoProyectos] = useState(projectsData);
	//Se usa como switch en el return
	const [activo, setActivo] = useState(false);
	//Pestaña modal activa, si es all figura oculta
	const [proyectoActivo, setProyectoActivo] = useState({});

	// const handlerFilterCategory = (category) => {
	// 	if (category === 'all') {
	// 		setProyecto(projectsData);
	// 		setActive(category);
	// 		return;
	// 	}

	// 	const newArray = projectsData.filter((project) =>
	// 		project.category.includes(category)
	// 	);
	// 	setProyecto(newArray);
	// 	setActive(category);
	// };

	const activarProyecto = (idProyecto) => {
		if (!activo) {
			const newArray = projectsData.filter((project) =>
				project.id.includes(idProyecto)
			);
			setProyectoActivo(newArray);
			setActivo(true);
			console.log(newArray);
		} else {
			setActivo(false);
			setProyectoActivo({});
		}
	};

	const animation1 = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: { duration: 1000 },
	});

	return (
		<a.div style={animation1} className="w-full h-full overflow-auto">
			{activo ? (
				<>
					<ProyectosDetalle
						proyecto={proyectoActivo}
						activarProyecto={activarProyecto}
					/>
				</>
			) : (
				<div className="grid grid-cols-1 lg:grid-cols-3 lg:p-12 lg:gap-12 p-4 gap-4">
					{listadoProyectos.map((data, index) => {
						return (
							<>
								<ProyectosTarjeta
									key={index}
									proyecto={data}
									activarProyecto={activarProyecto}
								/>
							</>
						);
					})}
				</div>
			)}
		</a.div>
	);
};

export default Proyectos;
