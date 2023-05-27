import { AiOutlineDown } from 'react-icons/ai';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { IoMdTime } from 'react-icons/io';

const LaboralTarjeta = ({ trabajo, activarTrabajo }) => {
	return (
		<button
			onClick={() => {
				activarTrabajo(trabajo.id);
			}}
			className="bg-Fondo2 rounded-xl px-4 lg:px-12 py-6 h-32 items-center hover:border-2 flex justify-between w-full transition-colors ease-in"
		>
			<img
				src={trabajo.logo}
				alt="Logo empresa"
				className="bg-white rounded-xl p-2 h-16 w-16 lg:h-24 lg:w-24 object-contain"
			/>
			<div>
				<p className="text-base lg:text-xl mb-2 font-semibold">
					{trabajo.puesto}
				</p>
				<div className="lg:flex-row flex flex-col items-start lg:items-center lg:space-x-2 pl-2 lg:p-0">
					<div className="flex items-center space-x-2">
						<HiOutlineOfficeBuilding className="text-Primario text-lg " />
						<p className="text-white text-sm lg:text-base font-semibold">
							{trabajo.empresa}{' '}
							<span className="font-[400] sm:hidden lg:inline-block">
								({trabajo.rubro})
							</span>
						</p>
					</div>
					<div className="flex items-center space-x-2">
						<IoMdTime className="text-Primario text-lg" />
						<p className="text-white text-sm lg:text-base">
							{trabajo.desde} / {trabajo.hasta}{' '}
						</p>
					</div>
				</div>
			</div>

			<AiOutlineDown className="sm:hidden lg:block" />
		</button>
	);
};

export default LaboralTarjeta;
