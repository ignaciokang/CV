import './App.css';
import BarraLateral from './components/barraLateral/barraLateral';
import BarraCentral from './components/barraCentral/barraCentral';

function App() {
	return (
		<div className="grid grid-cols-12 gap-[3rem] px-[6rem] bg-Fondo1 lg:h-screen md:h-[200vh] sm:h-[200vh] text-white">
			<div className="my-auto col-span-12 lg:col-span-3 p-[1rem] bg-Fondo3 rounded-[2rem] h-[90vh] ">
				<BarraLateral />
			</div>

			<div className="my-auto col-span-12 lg:col-span-9 bg-Fondo3 rounded-[2rem] h-[90vh] overflow-hidden">
				<BarraCentral />
			</div>
		</div>
	);
}

export default App;
