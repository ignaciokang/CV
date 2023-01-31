import EducacionTarjeta from './educacionTarjeta';
import { useSpring, a } from 'react-spring';
import imagenes from '../../../../constants/images';

const Educacion = () => {
	const animation1 = useSpring({
		from: { y: 100, opacity: 0 },
		to: { y: 0, opacity: 1 },
		config: { duration: 1000 },
	});

	const Edu = [
		{
			img: imagenes.utn,
			carrera: 'Técnico Superior en Diseño y Programación Web ',
			institucion: 'Da Vinci',
			estado: 'Cursando',
			fecha: 'Jun 2022 - Actualidad',
			descargar: '',
			tipo: 'Tecnicatura',
		},

		{
			img: imagenes.utn,
			carrera: 'Ingeniería Industrial',
			institucion: 'UTN - FRBA',
			estado: 'Suspendido',
			fecha: 'Feb 2014 - Julio 2018',
			descargar: '',
			tipo: 'Ingeniería',
		},
		{
			img: imagenes.acosta,
			carrera: 'Bachiller (Orientación Físico-Matemática)',
			institucion: 'ENS Nº2 Mariano Acosta',
			estado: 'Completado',
			fecha: 'Feb 2008 - Dic 2011',
			descargar: '',
			tipo: 'Secundario',
		},
		{
			img: imagenes.utn,
			carrera: 'FullStack Developer',
			institucion: 'UTN - Centro e-Learning',
			estado: 'Completado',
			fecha: 'Mar 2021 - Sep 2021',
			descargar: 'Descargar certificado',
			href: 'https://github.com/ignaciokang/CV/raw/main/src/documents/FullStackDeveloper.pdf',
			download: 'FullStackDeveloper.pdf',
			tipo: 'Curso',
		},
		{
			img: imagenes.udemy,
			carrera: 'React: Hooks, Redux, Context,  MERN',
			institucion: 'Udemy',
			estado: 'Completado',
			fecha: 'Ene 2022 - Feb 2022',
			descargar: 'Descargar certificado',
			href: 'https://github.com/ignaciokang/CV/raw/main/src/documents/React-GuiaCompleta.pdf',
			download: 'React-GuiaCompleta.pdf',
			tipo: 'Curso',
		},
	];
	return (
		<div className="grid grid-cols-2 h-full overflow-y-auto p-12 gap-12">
			{Edu.map((data, index) => {
				return (
					<a.div style={animation1}>
						<EducacionTarjeta data={data} key={index} />
					</a.div>
				);
			})}
		</div>
	);
};

export default Educacion;
