const ProyectosTarjeta = ({ proyecto, activarProyecto }) => {
	return (
		<button
			onClick={() => activarProyecto(proyecto.id)}
			className="relative rounded-xl overflow-hidden hover:scale-105 transition-transform ease-in"
		>
			<img
				src={proyecto.imagen}
				alt={`Imagen ${proyecto.nombre}`}
				className="w-full h-full object-cover"
			/>
			<p className="bg-Fondo2 absolute bottom-0 w-full text-center py-2 text-sm font-semibold">
				{proyecto.nombre}
			</p>
		</button>
	);
};

export default ProyectosTarjeta;
