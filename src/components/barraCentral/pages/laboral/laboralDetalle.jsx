import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { IoMdTime } from 'react-icons/io';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useSpring, a } from 'react-spring';

const LaboralDetalle = ({ trabajo, activarTrabajo }) => {
	const animation1 = useSpring({
		from: { x: 0, opacity: 0 },
		to: { x: 0, opacity: 1 },
		config: { duration: 200 },
	});

	console.log(trabajo);

	return (
		<a.div
			style={animation1}
			className="w-full h-full lg:grid lg:grid-rows-4 gap-12 lg:gap-12 overflow-y-auto lg:overflow-visible"
		>
			<div className="flex flex-col lg:flex-row items-center row-span-1 justify-between gap-y-4 lg:gap-y-0">
				<img
					src={trabajo[0].logo}
					alt="Logo empresa"
					className="bg-white rounded-xl p-2 h-24 lg:w-24 w-full object-contain"
				/>
				<div className="text-center">
					<p className="text-2xl mb-2 font-semibold">{trabajo[0].puesto}</p>
					<div className="flex items-center space-x-2 text-lg">
						<HiOutlineOfficeBuilding className="text-Primario text-xl" />
						<p className="text-white">
							{' '}
							<span className="font-semibold">{trabajo[0].empresa}</span> (
							{trabajo[0].rubro}){' '}
						</p>
						<IoMdTime className="text-Primario text-xl" />
						<p className="text-white">
							{trabajo[0].desde} / {trabajo[0].hasta}{' '}
						</p>
					</div>
				</div>
				<button
					onClick={() => {
						activarTrabajo(trabajo[0].id);
					}}
					className="text-3xl hover:text-Primario sm:hidden lg:block"
				>
					<AiOutlineCloseCircle className="text-4xl hover:text-Primary" />
				</button>
			</div>
			<div
				className="text-left grid grid-cols-1 lg:grid-cols-2 bg-Fondo2 rounded-xl row-span-3 p-4 lg:p-12 gap-x-12 gap-y-3 my-4 lg:my-0"
				id="textos"
			>
				{trabajo[0].tareas.map((data, index) => {
					return <div dangerouslySetInnerHTML={{ __html: data }}></div>;
				})}
			</div>
			<button
				onClick={() => {
					activarTrabajo(trabajo[0].id);
				}}
				className="text-lg text-center bg-gradient-to-r from-Primario to-Secundario p-2 w-1/2 mx-auto rounded-xl sm:block lg:hidden"
			>
				Volver
			</button>
		</a.div>
	);
};

export default LaboralDetalle;
