import { AiOutlineDown } from 'react-icons/ai';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { IoMdTime } from 'react-icons/io';

const LaboralTarjeta = ({ trabajo, activarTrabajo }) => {
	return (
		<button
			onClick={() => {
				activarTrabajo(trabajo.id);
			}}
			className="bg-Fondo2 rounded-xl px-12 py-6 h-32 items-center hover:border-2 flex justify-between w-full transition-colors ease-in"
		>
			<img
				src={trabajo.logo}
				alt="Logo empresa"
				className="bg-white rounded-xl p-2 h-24 w-24 object-contain"
			/>
			<div>
				<p className="text-xl mb-2">{trabajo.puesto}</p>
				<div className="flex items-center space-x-2">
					<HiOutlineOfficeBuilding className="text-Primario text-lg" />
					<p className="text-white">
						{' '}
						<span className="font-semibold">{trabajo.empresa}</span> (
						{trabajo.rubro}){' '}
					</p>
					<IoMdTime className="text-Primario text-lg" />
					<p className="text-white">
						{trabajo.desde} / {trabajo.hasta}{' '}
					</p>
				</div>
			</div>

			<AiOutlineDown />
		</button>
	);
};

export default LaboralTarjeta;
