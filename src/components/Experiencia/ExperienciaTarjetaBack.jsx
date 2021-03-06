import {HiOutlineOfficeBuilding} from 'react-icons/hi';
import {IoMdTime} from 'react-icons/io';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import { useSpring, a } from 'react-spring';

const ExperienciaTarjetaBack = ({ trabajo }) => {

  const animation1 = useSpring({
    from: {x: 0, opacity:0},
    to: {x: 0, opacity:1},
    config: {duration: 200},

})

  return (
    <a.div style={animation1} className="bg-gray-100 w-full h-full absolute top-0 left-0 md:px-12 md:pt-12 sm:px-4 sm:py-4">
      <div className='flex items-center'>
      <img src={trabajo.logo} alt="Logo empresa" className="md:h-24 sm:h-16  bg-white rounded-xl md:mr-12 sm:mr-4 p-2" />
      <div className='text-left w-full'>
      <p className='md:text-xl sm:text-sm'>{trabajo.puesto}</p>
      <div className='flex items-center space-x-2 md:text-[1rem] sm:text-tiny'>
      <HiOutlineOfficeBuilding/>
      <p> {trabajo.empresa} ({trabajo.rubro}) </p>
      <IoMdTime/>
      <p>{trabajo.desde} / {trabajo.hasta} </p>
      </div>
      </div>
      <AiOutlineCloseCircle className='md:text-4xl sm:text-xl hover:text-VerdeCatuchi'/>
      </div>
      <ul className='text-left grid grid-cols-2 mt-12 bg-white rounded-xl'>
      {trabajo.tareas.map((data, index) => {
        return (
          <li className='md:text-[0.8rem] sm:text-[0.5rem] align-middle md:mx-4 sm:mx-2 md:px-4 sm:px-2 md:my-4 sm:my-2'>- {data}</li>
        )
      })}

      </ul>
    </a.div>
  );
};

export default ExperienciaTarjetaBack;


{/* const Globant = {
            puesto: 'Consultor Sr',
            empresa: 'Globant',
            rubro: 'Tecnología',
            desde: 'Julio 2018',
            hasta: 'Enero 2022',
            tareas: 'Supervisar al equipo',
            logo: '../src/images/Trabajos/globant.png', */}