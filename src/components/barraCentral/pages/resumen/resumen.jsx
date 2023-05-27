import { useSpring, a } from 'react-spring';
import { FaNodeJs } from 'react-icons/fa';
import { ImDatabase as SQL } from 'react-icons/im';

import {
	SiCss3,
	SiJavascript,
	SiMongodb,
	SiHtml5,
	SiAngular,
	SiReact,
	SiSass,
	SiNestjs,
	SiAdobephotoshop,
	SiAutodesk,
} from 'react-icons/si';

const Resumen = () => {
	const animation1 = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: { duration: 1000 },
	});

	const skills = [
		{
			nombre: 'React',
			logo: SiReact,
			nivel: '80%',
		},
		{
			nombre: 'SQL',
			logo: SQL,
			nivel: '100%',
		},
		{
			nombre: 'HTML',
			logo: SiHtml5,
			nivel: '90%',
		},
		{
			nombre: 'NestJs',
			logo: SiNestjs,
			nivel: '75%',
		},
		{
			nombre: 'CSS',
			logo: SiCss3,
			nivel: '85%',
		},
		{
			nombre: 'MongoDB',
			logo: SiMongodb,
			nivel: '60%',
		},
		{
			nombre: 'Javascript',
			logo: SiJavascript,
			nivel: '95%',
		},
		{
			nombre: 'Node',
			logo: FaNodeJs,
			nivel: '75%',
		},
		{
			nombre: 'Angular',
			logo: SiAngular,
			nivel: '45%',
		},
		{
			nombre: 'Photoshop',
			logo: SiAdobephotoshop,
			nivel: '85%',
		},
		{
			nombre: 'Sass',
			logo: SiSass,
			nivel: '65%',
		},
		{
			nombre: 'Autocad 3D',
			logo: SiAutodesk,
			nivel: '40%',
		},
	];

	return (
		<div className="h-full bg-Fondo3 p-4 lg:p-12 grid grid-rows-3 gap-4 lg:gap-12 ">
			<a.div
				style={animation1}
				className=" bg-Fondo2 rounded-xl row-span-1 text-center flex flex-col justify-center sm:text-sm lg:text-base p-4 "
			>
				<p>Soy un desarrollador Full Stack en constante crecimiento.</p>
				<p className="sm:hidden lg:block">
					Apasionado por crear y descubir, veo en la tecnología infinitas áreas
					de interés.
				</p>
				<p>
					Me caracterizo por ser versátil, práctico, prolijo, creativo e
					ingenioso.
				</p>
			</a.div>

			<a.div
				style={animation1}
				className="grid grid-cols-2 gap-y-1 lg:gap-y-2 row-span-2 gap-x-4 lg:gap-x-0"
			>
				{skills.map((data, index) => {
					return (
						<div
							className="flex justify-center items-center text-xl xl:text-2xl text-Primario"
							key={index}
						>
							<data.logo className="sm:hidden lg:block" />
							<div className="bg-Fondo2 w-full lg:w-1/2 rounded-[2rem] ml-2 text-center relative overflow-hidden">
								<div className="w-full top-0 absolute h-full flex sm:justify-start lg:justify-center items-center gap-x-2 sm:pl-4 lg:p-0">
									<data.logo className="sm:block lg:hidden text-Fondo2" />

									<p className="text-base xl:text-lg  font-semibold text-white">
										{data.nombre}{' '}
									</p>
								</div>
								<div
									className={`bg-gradient-to-r from-Primario to-Secundario h-full top-0 rounded-[2rem] text-transparent`}
									style={{
										width: data.nivel,
									}}
								>
									-{' '}
								</div>
							</div>
						</div>
					);
				})}
			</a.div>
		</div>
	);
};

export default Resumen;
