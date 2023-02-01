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
			nivel: '75%',
		},
		{
			nombre: 'SQL',
			logo: SQL,
			nivel: '100%',
		},
		{
			nombre: 'HTML',
			logo: SiHtml5,
			nivel: '85%',
		},
		{
			nombre: 'NestJs',
			logo: SiNestjs,
			nivel: '65%',
		},
		{
			nombre: 'CSS',
			logo: SiCss3,
			nivel: '85%',
		},
		{
			nombre: 'MongoDB',
			logo: SiMongodb,
			nivel: '50%',
		},
		{
			nombre: 'Javascript',
			logo: SiJavascript,
			nivel: '75%',
		},
		{
			nombre: 'Node',
			logo: FaNodeJs,
			nivel: '65%',
		},
		{
			nombre: 'Angular',
			logo: SiAngular,
			nivel: '45%',
		},
		{
			nombre: 'Photoshop',
			logo: SiAdobephotoshop,
			nivel: '80%',
		},
		{
			nombre: 'Sass',
			logo: SiSass,
			nivel: '55%',
		},
		{
			nombre: 'Autocad 3D',
			logo: SiAutodesk,
			nivel: '40%',
		},
	];

	return (
		<div className="h-full bg-Fondo3 p-12 grid grid-rows-3 gap-12">
			<div className=" bg-Fondo2 rounded-xl row-span-1 text-center flex flex-col justify-center">
				<p>Soy un desarrollador Full Stack en constante crecimiento.</p>
				<p>
					Apasionado por crear y descubir, veo en la tecnología infinitas áreas
					de interés.
				</p>
				<p>
					Me caracterizo por ser versátil, práctico, prolijo, creativo e
					innovador.
				</p>
			</div>

			<a.div style={animation1} className="grid grid-cols-2 gap-y-2 row-span-2">
				{skills.map((data) => {
					return (
						<div className="flex justify-center items-center text-[1.2rem] text-Primario">
							<data.logo />
							<div className="bg-Fondo2 w-1/2 rounded-[2rem] ml-2 text-center relative overflow-hidden">
								<div className="w-full top-0 absolute h-full ">
									<p className="text-[1rem] p-[2px] font-semibold text-white">
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
