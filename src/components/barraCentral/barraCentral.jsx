import React from 'react';
import Resumen from './pages/resumen/resumen';
import { useState } from 'react';
import Laboral from './pages/laboral/laboral';
import Educacion from './pages/educacion/educacion';
import Proyectos from './pages/proyectos/proyectos';

const BarraCentral = () => {
	const [pagina, setPagina] = useState('Resumen');

	const activarPagina = (id) => {
		setPagina(id);
	};

	const paginas = {
		resumen: 'Resumen',
		educacion: 'Educacion',
		laboral: 'Laboral',
		proyectos: 'Proyectos',
	};

	return (
		<div className="h-full">
			<nav className="flex justify-around items center lg:h-1/6 sm:h-[10%] bg-Fondo2 text-[1.2rem] uppercase">
				<button
					id="Resumen"
					className={
						pagina === paginas.resumen
							? 'font-semibold underline underline-offset-4 decoration-Primario decoration-4 uppercase'
							: 'hover:text-Primario uppercase'
					}
					onClick={() => activarPagina(paginas.resumen)}
				>
					Resumen
				</button>
				<button
					className={
						pagina === paginas.educacion
							? 'font-semibold underline underline-offset-4 decoration-Primario decoration-4 uppercase'
							: 'hover:text-Primario uppercase'
					}
					onClick={() => activarPagina(paginas.educacion)}
				>
					Educación
				</button>
				<button
					className={
						pagina === paginas.laboral
							? 'font-semibold underline underline-offset-4 decoration-Primario decoration-4 uppercase'
							: 'hover:text-Primario uppercase'
					}
					onClick={() => activarPagina(paginas.laboral)}
				>
					Laboral
				</button>
				<button
					className={
						pagina === paginas.proyectos
							? 'font-semibold underline underline-offset-4 decoration-Primario decoration-4 uppercase'
							: 'hover:text-Primario uppercase'
					}
					onClick={() => activarPagina(paginas.proyectos)}
				>
					Proyectos
				</button>
			</nav>
			<div className="lg:h-5/6 sm:h-[90%] bg-Fondo3">
				{pagina === 'Resumen' ? <Resumen /> : ''}
				{pagina === 'Educacion' ? <Educacion /> : ''}
				{pagina === 'Laboral' ? <Laboral /> : ''}
				{pagina === 'Proyectos' ? <Proyectos /> : ''}
			</div>
		</div>
	);
};

export default BarraCentral;
