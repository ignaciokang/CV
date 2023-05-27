import FotoPerfil from '../../images/4.png';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { GoLocation } from 'react-icons/go';
import { useState } from 'react';

const BarraLateral = () => {
	return (
		<div className="grid grid-cols-1 h-full justify-between items-center text-center py-[1rem] space-y-2">
			<img
				src={FotoPerfil}
				alt="avatar"
				className=" mx-auto rounded-full lg:w-3/5 sm:w-1/2"
			/>
			<div>
				<h3 className="text-[1.5rem] font-semibold">Ignacio Kang</h3>
				<p className="text-[1.2rem]">Full Stack Developer</p>
			</div>

			<div className="flex justify-around w-9/12 mx-auto">
				<a href="https://wa.me/541136976191">
					<IoLogoWhatsapp className="text-Primario w-[2rem] h-[2rem] cursor-pointer hover:scale-110 hover:text-Secundario" />
				</a>
				<a href="https://www.linkedin.com/in/ignaciokang/">
					<AiFillLinkedin className="text-Primario w-[2rem] h-[2rem] cursor-pointer hover:scale-110 hover:text-Secundario" />
				</a>
				<a href="https://github.com/ignaciokang/CV">
					<AiFillGithub className="text-Primario w-[2rem] h-[2rem] cursor-pointer hover:scale-110 hover:text-Secundario" />{' '}
				</a>
			</div>

			<div
				className="py-4 bg-Fondo2 text-[1rem]"
				style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
			>
				<div className="flex items-center justify-center">
					<GoLocation className="mr-2" /> <span>Buenos Aires, Argentina </span>
				</div>
				<p className="mt-2 "> ignaciokang10@gmail.com </p>
				<p className="mt-2"> 1136976191 </p>
			</div>
			<div className="">
				<button
					className="w-2/3 px-4 py-2 mb-4 text-[1rem] lg:text-[1.2rem] rounded-full cursor-pointer bg-gradient-to-r from-Primario to-Secundario hover:scale-105 focus:outline-none"
					onClick={() => window.open('mailto:ignaciokang10@gmail.com')}
				>
					Contacto
				</button>
				<br></br>
				<a
					className="w-2/3 px-4 py-2  text-[1rem] lg:text-[1.2rem] cursor-pointer underline underline-offset-4 decoration-2 hover:text-Secundario  "
					href="https://drive.google.com/drive/u/0/folders/1bcT1Zn1hCvvG5DrBnGKWmow_CJaazxL-"
					download="CV-Ignacio-Kang-SPA.pdf"
				>
					Descargar CV
				</a>
			</div>
		</div>
	);
};

export default BarraLateral;
