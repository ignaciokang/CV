import { useEffect } from 'react';
import { useState } from 'react';
import { IconBase } from 'react-icons';
import TecnologiasLogo from '../../../../constants/tecnologiasLogo';

const Tecnologias = (tecnologiaData) => {
	const [tecno, setTecno] = useState({});

	useEffect(() => {
		const data = TecnologiasLogo.map((tecnologiaLogo) => {
			if (tecnologiaLogo.id === tecnologiaData.tecnologia) {
				const newArray = tecnologiaLogo;
				setTecno(newArray);
			}
		});
	}, []);

	return (
		<div className="text-Primario flex flex-col items-center text-3xl lg:text-5xl gap-1">
			<>{tecno.logo}</>

			<p className="text-white text-base lg:text-lg">{tecno.nombre}</p>
		</div>
	);
};

export default Tecnologias;
