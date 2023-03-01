import { useSpring, a } from 'react-spring';
import { EducacionData, CursosData } from '../../../../constants/educacionData';
import EducacionTarjeta from './educacionTarjeta';

const Educacion = () => {
	// const animation1 = useSpring({
	// 	from: { y: 100, opacity: 0 },
	// 	to: { y: 0, opacity: 1 },
	// 	config: { duration: 1000 },
	// });

	const animation1 = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: { duration: 1000 },
	});

	return (
		<div className="h-full overflow-y-auto p-12">
			<p className="text-2xl mb-12 text-center font-semibold">Carreras</p>
			<div className="grid grid-cols-2 gap-12">
				{EducacionData.map((data, index) => {
					return (
						<a.div style={animation1}>
							<EducacionTarjeta data={data} key={index} />
						</a.div>
					);
				})}
			</div>
			<p className="text-2xl my-12 text-center font-semibold">Cursos</p>
			<div className="grid grid-cols-2 gap-12">
				{CursosData.map((data, index) => {
					return (
						<a.div style={animation1}>
							<EducacionTarjeta data={data} key={index} />
						</a.div>
					);
				})}
			</div>
		</div>
	);
};

export default Educacion;
