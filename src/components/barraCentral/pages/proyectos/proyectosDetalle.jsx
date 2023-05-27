import { AiOutlineCloseCircle } from 'react-icons/ai';
import { MdOutlineComputer } from 'react-icons/md';
import Tecnologias from './tecnologias';
import { useSpring, a } from 'react-spring';

const ProyectosDetalle = ({ proyecto, activarProyecto }) => {
	const animation1 = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: { duration: 1000 },
	});

	return (
		<a.div
			style={animation1}
			className="lg:p-12 p-4 h-full w-full grid grid-rows-6 lg:grid-rows-[7] lg:gap-12 gap-4 "
		>
			<div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 lg:gap-12 gap-4 justify-between row-span-3">
				<div className="relative rounded-xl overflow-hidden w-full">
					<img
						src={proyecto[0].imagen}
						alt={proyecto[0].nombre}
						className=" w-full object-cover object-top "
					/>
					<p className="absolute bottom-0 w-full text-center bg-Fondo2 p-2 font-semibold">
						{proyecto[0].nombre}
					</p>
				</div>
				<div className="relative flex flex-col ">
					<button
						onClick={() => {
							activarProyecto(proyecto.id);
						}}
						className="top-0 right-0 absolute text-3xl hover:text-Primario lg:block sm:hidden"
					>
						<AiOutlineCloseCircle />
					</button>
					<div className="text-center h-full flex flex-col justify-between">
						<p>Nombre: {proyecto[0].nombre}</p>
						<p>Categoría: {proyecto[0].categoria}</p>
						<p>Tipo de proyecto: {proyecto[0].tipo}</p>
						{/* <p>Autor: {proyecto[0].autor}</p> */}
						<a
							className="bg-Primario mt-1 lg:mt-0 p-1 lg:p-2 rounded-full text-black font-semibold flex items-center justify-center gap-2 cursor-pointer hover:bg-Secundario hover:text-white transition-colors ease-in"
							href={proyecto[0].link}
							target="_blank"
						>
							<MdOutlineComputer />
							{proyecto[0].boton}
						</a>
					</div>
				</div>
			</div>
			<div
				className=" bg-Fondo2 rounded-xl px-4 lg:px-12 py-3 lg:py-6 flex flex-col justify-between lg:row-span-4 row-span-3 h-full text-sm lg:text-base overflow-y-auto"
				id="textos"
			>
				<div
					dangerouslySetInnerHTML={{ __html: proyecto[0].descripcion }}
				></div>

				<div>
					<p className="font-semibold mb-3">Tecnologías utilizadas:</p>
					<div className="flex justify-around">
						{proyecto[0].tecnologias.map((data, index) => {
							return <Tecnologias tecnologia={data} key={index} />;
						})}
					</div>
				</div>
			</div>
			<button
				onClick={() => {
					activarProyecto(proyecto.id);
				}}
				className="text-lg text-center bg-gradient-to-r from-Primario to-Secundario p-2 w-1/2 mx-auto rounded-xl sm:block lg:hidden"
			>
				{' '}
				Volver{' '}
			</button>
		</a.div>
	);
};

export default ProyectosDetalle;
