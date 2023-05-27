import './App.css';
import BarraLateral from './components/barraLateral/barraLateral';
import BarraCentral from './components/barraCentral/barraCentral';

function App() {
	return (
		<div className="grid grid-cols-12 px-[1rem] lg:gap-[3rem] lg:px-[6rem] bg-Fondo1 lg:h-screen sm:h-[200vh] text-white w-full overflow-hidden">
			<div className="my-auto col-span-12 lg:col-span-3 p-[1rem] bg-Fondo3 rounded-[2rem] h-[90vh] w-full ">
				<BarraLateral />
			</div>

			<div className="my-auto col-span-12 lg:col-span-9 bg-Fondo3 rounded-[2rem] h-[90vh] overflow-hidden">
				<BarraCentral />
			</div>
		</div>
	);
}

export default App;
