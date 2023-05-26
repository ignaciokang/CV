//https://postimg.cc/gallery/HM3M7WK/65d0e61b
const ProjectsData = [
	{
		id: 'clonMercadoLibre',
		nombre: 'Clon Mercado Libre',
		imagen:
			'https://lh3.googleusercontent.com/pw/AMWts8CCAwzn3qln-XSXW2IxffsGyY76ym2Gnu3oNMIgqB9no0DI-zapn1ECAfWI9BnTdShRix6A54AAi2hApzXB5DBOOhNq__PreON3F-LI1HTwXh_zDuimkKdpQuqbkbX4m2Julq0h8YHh9SRPWLBDjBM5=w800-h400-no?authuser=0',
		categoria: 'Desarrollo WEB',
		tipo: 'Personal',
		fecha: 'Marzo 2022',
		autor: 'Ignacio Kang',
		descripcion:
			'A comienzos del año 2022 cree este <b>proyecto React</b> para demostrar mis habilidades y conseguir mi primer trabajo como desarrollador web. La página es un clon de MercadoLibre, con listado de artículos cargados, <b>carrito de compras</b> y favoritos.',
		tecnologias: ['react', 'tailwind', 'javascript', 'github'],
		link: 'https://ignaciokang.github.io/mercadoLibreClon/',
		boton: 'Visitar Web',
	},
	{
		id: 'memotest',
		nombre: 'Memotest Scaloneta',
		imagen:
			'https://lh3.googleusercontent.com/pw/AJFCJaVZmXHcmofjT98n30Cql6PScfF2MnEajwbESGVEkG2mrNagNs_NJRh9YAiRkwNv1hPKH8Xg8k3TkQNJXgwlsQXFJhuxR9GV32x4JmCb4fpRLt5odI-m25ltfPSSRgIfgNVvS2eNDhY4VnPo7Glad73Q=w800-h400-s-no?authuser=0',
		categoria: 'Desarrollo Videojuegos',
		tipo: 'Emprendimiento',
		fecha: 'Mayo 2023',
		autor: 'Ignacio Kang',
		descripcion:
			'Este memotest es un homenaje a los <b>campeones del mundo</b>. La lógica del juego está desarrollado en <b>Javascript</b>, para el front end se utiliza <b>React</b>. El diseño responsivo se adapta a formato desktop y mobile.',
		tecnologias: ['react', 'javascript', 'github', 'photoshop'],
		link: 'https://ignaciokang.github.io/memotest/',
		boton: 'Visitar Web',
	},
	{
		id: 'estrellaWeb',
		nombre: 'Estrella de Boedo Web',
		imagen:
			'https://lh3.googleusercontent.com/pw/AMWts8C2JZlR-8VNZQOmPkZiy-OAlx-dw32gTwwpP-Fq-5Ecd1pM05EP-7l9MCOK6st4V0hZQdg3UzwK9oqn5ciesMkNVIYH3dizOoDdeWdgiICHmnVAQY-sZSvOP7h-FL9Gl_sMqVjNigmk3CCmaL9SmIJJ=w800-h400-no?authuser=0',
		categoria: 'Desarrollo WEB',
		tipo: 'Facultad',
		fecha: 'Septiembre 2022',
		autor: 'Ignacio Kang',
		descripcion:
			'Final de materia: Diseño de interfaces de la Escuela Da Vinci (Técnico Superior en Diseño y Programación Web). El objetivo de la materia fue <b>diseñar</b> una página web para una entidad a elección y adaptar los diseños de ordenador a <b>mobile</b>. ',
		tecnologias: ['photoshop', 'html', 'css'],
		link: 'https://drive.google.com/drive/u/0/folders/1KHuWkGnMIju9ZFayw1kqHPxzZf9idOI3',
		boton: 'Ver imágenes',
	},
	{
		id: 'pastillasWeb',
		nombre: 'Pastillas del Abuelo Web',
		imagen:
			'https://lh3.googleusercontent.com/pw/AMWts8Djm6S9iNGqAJG2PbgpRM0en3Uxs_nwMgbr-oc3qHLG8wvzyUvQNDopriJ6CEKG-whnVLYHfqQ9MTZjEJ8TVVdFcDknNmUWWeOj7Ocx6fZHndKK4XG4KGIQC9NSWMNdwfrjsdbB7vno-dUJikZI0-eV=w800-h400-no?authuser=0',
		categoria: 'Desarrollo Web',
		tipo: 'Facultad',
		fecha: 'Diciembre 2022',
		autor: 'Ignacio Kang',
		descripcion:
			'Final de materia: Maquetado Web de la Escuela Da Vinci (Técnico Superior en Diseño y Programación Web). El objetivo de la materia fue diseñar y <b>maquetar</b> una página web para nuestra banda musical favorita.',
		tecnologias: ['html', 'css', 'photoshop'],
		link: 'https://ignaciokang.github.io/lpda/index.html',
		boton: 'Visitar Web',
	},
	{
		id: 'cv',
		nombre: 'CV: Ignacio Kang',
		imagen:
			'https://lh3.googleusercontent.com/PK6nWpEbdzGnu31cyCV7HbaqHekN2GQiP-f82blY37VMckuBimK2bs3Ru7ZVdrFuhBDnFlxEOzWiQPGsUFHtJ3CSodTmksZ-718gHYY1a1sU_0JR0zze0M4ZlshLtjI3PRkVYqe8f6YtjynF9eyP-yiME9koTxUAAn5MGK2nA2mFjLqYh3YHX_AKOcC06lM21UUB8xnKjJ8CpsRRkk27vZ4IS2CWnw69Sw7IHy2Gx2XwyVLQr7ar0jVHrxbnBRn_nKkvYYTUWj_0sMn1xZEE2TlJm3sDqsWmHt8oLKdmDwrELiuoKvC96KZtZV9udxv_1wu2hnTLrA3ub32rPJQi6BQEbSF0NkoVD-Y5XXf7eCnc0lqVKy22rsUCKEH76wQcyJU-g2OSkjn_RZhxiKPD6nicag5BvQjKEg8h-pe_R2JfPuja9zQhyea0SzdIyVtNZY0TLbDVaK1_YzVSn1CcfWIfLPgLryp1KW-LT8TqTuolfaIav8TQUZ0g7Nx7P-Gg1um1RImcCbPKpMPw5PoiNsQocmr2DqpFt2a9omVvwW4nZF2jsO01MwlE0z0RdFVc970vtKeJTkcrq7bqIcqT0NThPxxOG66tF8_o1xoSyeCH2OuSthYzpACwDdrKKC_hHGGIm5SKdmPK3wCAGx_7Cpx5SaK4wkS9v-rY7Twq9yykYzgTvigS6-avLgsQRtAvRddArBw9e4rlVR5zNNwiXK5188U1AFIH3n66ByZM28IC5qzoRg6IrUCo7ICJV1IkJEbwo38vmuelG6c7z8EH88JDLUafI-o-glccH7Tuu23Mdr5d03rAsnVQcllCtuFQ-_pURTtIVN1Pn_nh4gOJ5x-kF5tKcpO76czn3rXYNNc6a6Rwe13AMI-_becw0eJPQx-3PMySCYBZmmj-hiieCxZcgGA1qHz9WhcJR_TQkH9pPBTqDaznsZG-68HLmz0mtiAInfrvZyHz0QNFh_IUycz48qamGvcrmhgbg1wwHe6AHbKbp37P53etPnnd0D-FeGMmbsI1lmIrSXJhb1F1Fe8tNUswU46EIGT3gFHIZEu_CG0pWSsJdZHfTDM=w800-h400-no?authuser=0',
		categoria: 'Desarrollo Web',
		tipo: 'Personal',
		fecha: 'Julio 2022',
		autor: 'Ignacio Kang',
		descripcion:
			'Este proyecto está desarrollado en React. Por el momento cuenta con versión web. Se está desarrollando versión mobile y temas dark/light',
		tecnologias: ['react', 'tailwind', 'javascript', 'github'],
		link: 'https://drive.google.com/drive/u/0/folders/1AqYxoFMiRELvw8OcXIpy6xAEzkIp4KMj',
		boton: 'Informe técnico',
	},
	{
		id: 'sudakaMu',
		nombre: 'Servidor Mu Online',
		imagen:
			'https://lh3.googleusercontent.com/pw/AMWts8DhIAz-ka3txFV-RjBKXDRlJpqSAbRKQ1MOpl_23FOV3t1qsl_fv19pcLC6kzO-klComWDC9c5gpCK0zGRzzYi402Of2T1ACLrGCeO3ALxhxtxk1OKMW9Z-susocQra1mKTPi9-AhQTYzqCv9954R_G=w800-h400-no?authuser=0',
		categoria: 'Desarrollo Videojuegos',
		tipo: 'Emprendimiento',
		fecha: 'Julio 2022',
		autor: 'Ignacio Kang',
		descripcion:
			'SudakaMu es un servidor del videojuego MuOnline. Me encargué de configurar armas, modelos 3d, estadísticas de personajes y bases de datos para poder <b>crear el servidor</b> y alojarlo en un hosting privado. También diseñé logo y banners publicitarios. En su pico de rendimiento alojó más de <b>100 personas online</b>.',
		tecnologias: ['sql', 'cplus', 'github', 'photoshop'],
		link: 'https://drive.google.com/drive/u/0/folders/16kn64EMsMIkvcOpbJabR3ohsOM-9ag4-',
		boton: 'Ver imágenes',
	},
	{
		id: 'comunicacionVisual',
		nombre: 'Síntesis Gráfica: Boedo',
		imagen:
			'https://lh3.googleusercontent.com/pw/AMWts8BFlKtDTDwXN-3G_EQVBS20lBbGun2jWGM3-vVz1IHaKzQ2pmzwOmTt1CO2oqsimiJxMROWl_gAegOhwBquVWxhOVhu_medRvtn0P7qSSZrUGPCvn5LnixEvcDwtCRWQ8MouKwAPzIhKFUoO61_PgvM=w800-h400-no?authuser=0',
		categoria: 'Desarrollo Web',
		tipo: 'Facultad',
		fecha: 'Julio 2022',
		autor: 'Ignacio Kang',
		descripcion:
			'Final de materia: Comunicación Visual de la Escuela Da Vinci (Técnico Superior en Diseño y Programación Web). El objetivo de la materia fue <b>diseñar</b> y maquetar una página web informativa sobre una localidad.',
		tecnologias: ['react', 'tailwind', 'javascript', 'github'],
		link: 'https://drive.google.com/drive/u/0/folders/1lYorxGG5MDEkJZDXkem7HcnA4E23FAYM',
		boton: 'Ver Imágenes',
	},
	{
		id: 'lolazo',
		nombre: 'LOL trainer Web',
		imagen:
			'https://lh3.googleusercontent.com/pw/AMWts8CFjQAa8OY4AFGHbbWdxg2qp9nuqDo-Jvjxvm7_A1fOYjwn9OgvktwsUPRIfzx9JC_ovBzAINr6tbPrmMe65qAnyKIvF6OFXmhizeizP-FEPtbXIxl6ecH_gZ0XCgX1YD-3GFXfIxsHTGBpbeCQWfUv=w800-h400-no?authuser=0',
		categoria: 'Desarrollo Web',
		tipo: 'Emprendimiento',
		fecha: 'Julio 2022',
		autor: 'Ignacio Kang',
		descripcion:
			'Lol Trainer es una página web que sirve como asistencia a los jugadores de <b>League of Legends</b>. Se conecta a la base de datos de Riot mediante una API REST y ofrece a los usuarios información de sus partidas en <b>tiempo real</b>. La página se encuentra subida como una versión preliminar a la espera de actualizaciones.',
		tecnologias: ['react', 'tailwind', 'javascript', 'github'],
		link: '',
		boton: 'Ver Imágenes',
	},
	{
		id: 'impresiones3D',
		nombre: 'Impresiones 3D',
		imagen:
			'https://lh3.googleusercontent.com/pw/AMWts8BL7bZT3tFxkGeOUlbnXfslyK2PCF0Q5q2HtrbW7qXUfnQIe8DvnRLvT2x8FDQULV3t2ZRHY8hxo8jA0iWe7YOSK7qXas5TLfrT2WU0avliWwUTgZMKU2x13kBLaVDxRp7uyJ4he9uELJtRVlz4D68_=w800-h400-no?authuser=0',
		categoria: 'Impresión 3D',
		tipo: 'Personal',
		fecha: 'Marzo 2022',
		autor: 'Ignacio Kang',
		descripcion:
			'En el año 2020 estuve incursionando en el mundo de las <b>impresiones 3D</b>. Aprendí a utilizar herramientas de modelado 3D como AutoCAD y Autodesk Maya. Hice varias figuras de League of Legends y escudos de clubes de fútbol entre otras cosas.',
		tecnologias: ['autocad'],
		link: '',
		boton: 'Ver Imágenes',
	},
	{
		id: 'duelixFifa',
		nombre: 'DuelixGames: FIFA',
		imagen:
			'https://lh3.googleusercontent.com/pw/AMWts8AEujNNZTt0u2-vxrKMJQ_khC7rPZleM9ES_cbHPLqAMxfQSmMb-1wPaJRcYfozQvRTvIbqFkUAJM-nYTnzpRHyZkHNfPoXEqdRONEwaJYnUNGL0dEBIvO9adIq9YF82U3zPaX0ti2Hsmn1zih2RR0q=w800-h400-no?authuser=0',
		categoria: 'Community Manager',
		tipo: 'Emprendimiento',
		fecha: 'Diciembre 2022',
		autor: 'Ignacio Kang',
		descripcion:
			'DuelixGames es una cuenta de Instagram y Facebook dedicada a la comunidad de jugadores del videojuego de fútbol FIFA. En la cual se organizaban <b>torneos online</b>. Mediante noticias, memes y juegos la cuenta alcanzó los 5mil seguidores en su pico de rendimiento. ',
		tecnologias: ['photoshop'],
		link: 'https://drive.google.com/drive/u/0/folders/1XiVEf5xZjnidJNO3MaGiOKchYM4KSPZ4',
		boton: 'Ver Imágenes',
	},
	{
		id: 'afip',
		nombre: 'RPA: Bot facturador AFIP ',
		imagen:
			'https://lh3.googleusercontent.com/N0bluvHJFycgjZxQ92Kg1W-ALFbHXEB_WQkgFexosyZlDgnY3LyWvJ1PFeRxuUvxh8Lrf_DM1AldArcRMFXGDgakueesyKXPoAIV78YN8yZ06j3VIEFbmbGxxOSyAdwDLtWP4VM5oh5YBYOGmtoPcYXltG2XiW9zbX-k4Dzv7UC7jMpUc02qZ7u_3YAWdImTmNGr59SJxRILHiOsKZE6ln3LLO3PrKBWBstxDrEIQvxIwuzlNB5D3pcXyQR1WrLKEmdJIN0yU6Jte2u9FZXg9b5HI9IWdhNnxYwivnjBzUuZS29x-MLJqMjpzk8TbfO07LZ5tMLhovOS0eRtf3ecz1at4ouWNkuHur149Dj1blvThl6mMn8UJF-cXJFpCpGZ52ooZJZQqep20NLO5xeTRAaSpMp-PB6t_aaGMfw32c-NIYml72nLvtHH3ImxoVzCEEhNXQkBzfODaROTL0cMW2pxabsG6uwdM9r2gXTkUrINIolHp_jtFwwAHTh3ecb8oWWktOLLsYi0YAOdxWMMiyMCkZo5TezHpYD8BoXx41ajdN7gSk8oLIohkG2sdmhc71yt9-JNMGvpLDTiNfRByj4CDCIrKV4AztveWD9nxb61DO5iOCEmu0kMepPXFC7YfBbAAPbe1iCCU-CKj5OtFs18rdUJs-ETWcRJFlSfcA3avvJXLrNw5osF4_3PAtHEU_bvvoBvw2ToJrwuS3v56NTqAdNNg59NtqaqS6bSJI8Gp_IjNPzInTN8yfDZGU8BIfP7zG1VC-KKb6mpC5DI5-C2gw4jE2AbHxP7XW7kel9e2jrQ54dhDvI0wPVeHD3lA6LT1QzSLHv2nQmQ4OhMxpjqkB7hLndPvpoZwbYHDuoBtgfLvedNNt4mgVBOL2AZGICOM59Nu2pte72_iqIvDo-zC_ZsgVddcdYi4U8IJd0IRyOTaqeEQxv2P9ROpiEtfxiKy3NQcNS-K7vyioroXRC1sMWQTf0KW4vA5g98UBJMivb5fyNB09dOvPJUOp6T-t_hdU6tsWzhcXiRl7sx_OrND0h-zMPD9kY4VABwfFnyStfOFB-J-bgAXh0=w800-h400-no?authuser=0',
		categoria: 'RPA',
		tipo: 'Emprendimiento',
		fecha: 'Diciembre 2022',
		autor: 'Ignacio Kang',
		descripcion:
			'Bot facturador de AFIP en base a los datos de una tabla de Excel, desarrollado en UiPath. Una vez generada la factura, se actualizan los registros procesados en la tabla de Excel.',
		tecnologias: ['uipath'],
		link: 'https://drive.google.com/drive/u/0/folders/1XiVEf5xZjnidJNO3MaGiOKchYM4KSPZ4',
		boton: 'Ver Imágenes',
	},
];

export default ProjectsData;
