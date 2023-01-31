import { AiOutlineCloseCircle } from 'react-icons/ai';
import { MdOutlineComputer } from 'react-icons/md';
import Tecnologias from './tecnologias';

const ProyectosDetalle = ({ proyecto, activarProyecto }) => {
	return (
		<div className="p-12 h-full w-full grid grid-rows-[7] gap-12">
			<div className="grid grid-cols-2 gap-12 justify-between row-span-3">
				<div className="relative rounded-xl overflow-hidden">
					<img
						src={proyecto[0].imagen}
						alt={proyecto.nambre}
						className="absolute h-full w-full object-cover object-top "
					/>
					<p className="absolute bottom-0 w-full text-center bg-Fondo2 p-2 font-semibold">
						{proyecto[0].nombre}
					</p>
				</div>
				<div className="relative">
					<button
						onClick={() => {
							activarProyecto(proyecto.id);
						}}
						className="top-0 right-0 absolute text-3xl hover:text-Primario"
					>
						<AiOutlineCloseCircle />
					</button>
					<div className="text-center h-full flex flex-col justify-between ">
						<p>Nombre: {proyecto[0].nombre}</p>
						<p>Categoría: {proyecto[0].categoria}</p>
						<p>Tipo de proyecto: {proyecto[0].tipo}</p>
						{/* <p>Autor: {proyecto[0].autor}</p> */}
						<a className="bg-Primario p-2 rounded-full text-black font-semibold flex items-center justify-center gap-2 cursor-pointer hover:bg-Secundario hover:text-white transition-colors ease-in">
							<MdOutlineComputer />
							Visitar Web
						</a>
					</div>
				</div>
			</div>
			<div className=" bg-Fondo2 rounded-xl px-12 py-6 flex flex-col justify-between row-span-4 h-full">
				<p className="text-md">{proyecto[0].descripcion}</p>
				<div>
					<p className="font-semibold mb-3">Tecnologías utilizadas:</p>
					<div className="flex justify-around">
						{proyecto[0].tecnologias.map((data) => {
							return <Tecnologias tecnologia={data} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProyectosDetalle;
