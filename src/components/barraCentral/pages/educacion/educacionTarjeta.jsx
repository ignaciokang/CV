import { BsCalendar2Week, BsDownload, BsBarChartLine } from 'react-icons/bs';
import { SlGraduation } from 'react-icons/sl';

const EducacionTarjeta = ({ data }) => {
	return (
		<div className="rounded-xl h-full w-full p-4 grid grid-rows-2 bg-Fondo2">
			<div className="items-center grid grid-cols-4 border-b border-gray-200">
				<img
					src={data.img}
					alt="Institucion"
					className="p-0 lg:p-4 mx-auto col-span-1 object-cover"
				/>
				<div className="col-span-3 px-3">
					<p className="sm:text-base lg:text-lg font-bold">{data.carrera}</p>
					<p className="text-base">{data.institucion}</p>
				</div>
			</div>
			<div className="grid gird-rows-3 py-2 px-4 text-Primario">
				<div className="flex space-x-2 items-center">
					<BsCalendar2Week />
					<p className="text-white">{data.fecha}</p>
				</div>
				<div className="flex space-x-2 items-center">
					<BsBarChartLine />
					<p className="text-white">{data.estado}</p>
				</div>
				{data.descargar === '' ? (
					<div className="flex space-x-2 items-center">
						<SlGraduation />
						<p className="text-white">{data.tipo}</p>
					</div>
				) : (
					<div className="flex space-x-2 items-center italic hover:underline hover:underline-offset-2">
						<BsDownload />

						<a href={data.href} download={data.download}>
							{data.descargar}
						</a>
					</div>
				)}
			</div>
		</div>
	);
};

export default EducacionTarjeta;
