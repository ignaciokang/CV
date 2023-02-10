import LaboralTarjeta from './laboralTarjeta';
import LaboralDetalle from './laboralDetalle';
import LaboralData from '../../../../constants/laboralData';
import { useSpring, a } from 'react-spring';
import { useState } from 'react';

const Laboral = () => {
	const trabajos = LaboralData;
	//Listado de proyectos, despues voy a poder filtrar por categoría.
	const [listadoTrabajos, setListadoTrabajos] = useState(trabajos);
	//Se usa como switch en el return
	const [activo, setActivo] = useState(false);
	//Pestaña modal activa, si es all figura oculta
	const [trabajoActivo, setTrabajoActivo] = useState({});

	const activarTrabajo = (idTrabajo) => {
		if (!activo) {
			const newArray = trabajos.filter((work) => work.id.includes(idTrabajo));
			setTrabajoActivo(newArray);
			setActivo(true);
			console.log(newArray);
		} else {
			setActivo(false);
			setTrabajoActivo({});
		}
	};

	const animation1 = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: { duration: 1000 },
	});

	return (
		<a.div style={animation1} className="h-full p-12 overflow-auto">
			{activo ? (
				<>
					<LaboralDetalle
						trabajo={trabajoActivo}
						activarTrabajo={activarTrabajo}
					/>
				</>
			) : (
				<div className="grid grid-cols-1 gap-12">
					{listadoTrabajos.map((data) => {
						return (
							<>
								<LaboralTarjeta
									trabajo={data}
									activarTrabajo={activarTrabajo}
								/>
							</>
						);
					})}
				</div>
			)}
		</a.div>
	);
};

export default Laboral;
