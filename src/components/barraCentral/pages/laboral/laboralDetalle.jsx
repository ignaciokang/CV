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
		<a.div style={animation1} className="w-full h-full grid grid-rows-4 gap-12">
			<div className="flex items-center row-span-1 justify-between">
				<img
					src={trabajo[0].logo}
					alt="Logo empresa"
					className="bg-white rounded-xl p-2 h-24 w-24 object-contain"
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
					className="text-3xl hover:text-Primario"
				>
					<AiOutlineCloseCircle className="text-4xl hover:text-Primary" />
				</button>
			</div>
			<div
				className="text-left  grid grid-cols-2 bg-Fondo2 rounded-xl row-span-3 p-12 gap-x-12 gap-y-3"
				id="textos"
			>
				{trabajo[0].tareas.map((data, index) => {
					return <div dangerouslySetInnerHTML={{ __html: data }}></div>;
				})}
			</div>
		</a.div>
	);
};

export default LaboralDetalle;