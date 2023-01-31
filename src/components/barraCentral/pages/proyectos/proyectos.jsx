import { useState } from 'react';
import projectsData from '../../../../constants/projectsData.js';
import ProyectosDetalle from './proyectosDetalle.jsx';
import ProyectosTarjeta from './proyectosTarjeta.jsx';

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

	return (
		<div className="w-full h-full overflow-auto">
			{activo ? (
				<>
					<ProyectosDetalle
						proyecto={proyectoActivo}
						activarProyecto={activarProyecto}
					/>
				</>
			) : (
				<div className="grid grid-cols-3 p-12 gap-12">
					{listadoProyectos.map((data) => {
						return (
							<>
								<ProyectosTarjeta
									proyecto={data}
									activarProyecto={activarProyecto}
								/>
							</>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Proyectos;
