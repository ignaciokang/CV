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
					<p className="text-xl mb-2">{trabajo[0].puesto}</p>
					<div className="flex items-center space-x-2">
						<HiOutlineOfficeBuilding className="text-Primario text-lg" />
						<p className="text-white">
							{' '}
							<span className="font-semibold">{trabajo[0].empresa}</span> (
							{trabajo[0].rubro}){' '}
						</p>
						<IoMdTime className="text-Primario text-lg" />
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
					<AiOutlineCloseCircle className="md:text-4xl sm:text-xl hover:text-Primary" />
				</button>
			</div>
			<ul className="text-left grid grid-cols-2 bg-Fondo2 rounded-xl row-span-3 p-12 gap-3">
				{trabajo[0].tareas.map((data, index) => {
					return <li className="align-middle">- {data}</li>;
				})}
			</ul>
		</a.div>
	);
};

export default LaboralDetalle;
