const data = [
	{
	  id: 1,
	  name: "Bugatti Chiron",
	  info: "The Bugatti Chiron is a high-performance hypercar produced by Bugatti Automobiles. It is known for its exceptional speed, luxurious design, and advanced technology. Powered by an 8.0-liter quad-turbocharged W16 engine, the Chiron is capable of reaching speeds of over 300 mph. Its elegant exterior and opulent interior make it a symbol of automotive excellence.",
	  image: "https://images.unsplash.com/photo-1635975229704-0a420e777a56?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVnYXR0aSUyMGNoaXJvbnxlbnwwfHwwfHx8MA%3D%3D",
	  price: "2.7 million",
	},
	{
	  id: 2,
	  name: "Koenigsegg Jesko",
	  info: "The Koenigsegg Jesko is a hypercar manufactured by the Swedish automotive manufacturer Koenigsegg. It is named after Jesko von Koenigsegg, the father of company founder Christian von Koenigsegg. The Jesko features a lightweight carbon fiber body, a powerful twin-turbocharged V8 engine, and advanced aerodynamics, allowing it to achieve speeds exceeding 300 mph. With its striking design and cutting-edge technology, the Jesko represents the pinnacle of automotive engineering.",
	  image: "https://www.topgear.com/sites/default/files/news-listicle/image/2019/04/jeskolucerne-stevenwade-3.jpg?w=848&h=477",
	  price: "3 million",
	},
	{
	  id: 3,
	  name: "Hennessey Venom F5",
	  info: "The Hennessey Venom F5 is a hypercar manufactured by Hennessey Special Vehicles, a division of Hennessey Performance Engineering. It is named after the F5 tornado, the fastest wind speed ever recorded on Earth. The Venom F5 features a lightweight carbon fiber chassis, a powerful twin-turbocharged V8 engine, and active aerodynamics, enabling it to achieve speeds of over 300 mph. With its aggressive styling and relentless performance, the Venom F5 is a true force to be reckoned with on the road.",
	  image: "https://hpe-photos.s3.us-east-2.amazonaws.com/wp-content/uploads/20221021085943/hennessey-venom-f5-005-03-scaled.webp",
	  price: "2.1 million",
	},
	{
	  id: 4,
	  name: "SSC Tuatara",
	  info: "The SSC Tuatara is a hypercar produced by SSC North America. It is the successor to the SSC Ultimate Aero and is designed to be one of the fastest production cars in the world. The Tuatara features a lightweight carbon fiber body, a twin-turbocharged V8 engine, and active aerodynamics, allowing it to achieve speeds of over 300 mph. With its sleek design and impressive performance, the Tuatara is a testament to the pursuit of automotive excellence.",
	  image: "https://www.supercars.net/blog/wp-content/uploads/2021/01/2020-SSC-Tuatara-001-2160-scaled.jpg",
	  price: "1.9 million",
	},
	{
	  id: 5,
	  name: "Rimac C_Two",
	  info: "The Rimac C_Two is an all-electric hypercar produced by Rimac Automobili, a Croatian automotive manufacturer. It is the company's second production car and is known for its exceptional performance and cutting-edge technology. The C_Two features four electric motors producing a combined output of 1,914 horsepower, enabling it to accelerate from 0 to 60 mph in under 2 seconds. With its advanced battery technology and innovative design, the C_Two represents the future of high-performance electric vehicles.",
	  image: "https://assets.rimac-newsroom.com/1678873903-c_two_static_front_02.jpg?auto=format&fit=crop&ar=16%3A9&sharp=10&fp-x=0.5&fp-y=0.5&w=528&dpr=1",
	  price: "2.4 million",
	},
	{
	  id: 6,
	  name: "McLaren Speedtail",
	  info: "The McLaren Speedtail is a hybrid electric sports car produced by McLaren Automotive. It is part of the company's Ultimate Series lineup and is designed for maximum speed and luxury. The Speedtail features a sleek aerodynamic design, a hybrid powertrain producing over 1,000 horsepower, and a unique three-seat layout with a central driving position. With its top speed of 250 mph and luxurious interior, the Speedtail offers a truly exhilarating driving experience.",
	  image: "https://robbreport.com/wp-content/uploads/2024/01/speedtail05.jpg?w=1000",
	  price: "2.2 million",
	},
	{
	  id: 7,
	  name: "Lamborghini Aventador SVJ",
	  info: "The Lamborghini Aventador SVJ is a high-performance sports car produced by Italian automaker Lamborghini. It is the flagship model of the Aventador lineup and is designed for maximum speed and agility. The SVJ features a naturally aspirated V12 engine producing 770 horsepower, advanced aerodynamics, and a lightweight carbon fiber body, allowing it to achieve blistering speeds on the track. With its aggressive styling and track-focused performance, the Aventador SVJ is a true supercar icon.",
	  image: "https://images.pexels.com/photos/11743507/pexels-photo-11743507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	  price: "517,770",
	},
	{
	  id: 8,
	  name: "Ferrari SF90 Stradale",
	  info: "The Ferrari SF90 Stradale is a plug-in hybrid sports car produced by Italian manufacturer Ferrari. It is the company's first plug-in hybrid model and is known for its exceptional performance and innovative technology. The SF90 Stradale features a twin-turbocharged V8 engine combined with three electric motors, producing a total output of 986 horsepower. With its advanced hybrid powertrain and aerodynamic design, the SF90 Stradale offers a thrilling driving experience on both the road and the track.",
	  image: "https://cdn.ferrari.com/cms/network/media/img/resize/5d1f10968a2538547edce275-m-dinamica-2400x4350-040719?width=768&height=1024",
	  price: "625,000",
	},
	{
	  id: 9,
	  name: "Porsche 911 GT2 RS",
	  info: "The Porsche 911 GT2 RS is a high-performance sports car produced by German automaker Porsche. It is the top-of-the-line model in the 911 lineup and is designed for maximum speed and track performance. The GT2 RS features a twin-turbocharged flat-six engine producing 700 horsepower, rear-wheel drive, and advanced aerodynamics, allowing it to achieve impressive lap times on the racetrack. With its iconic design and race-inspired performance, the GT2 RS is a favorite among enthusiasts and collectors alike.",
	  image: "https://presskit.porsche.de/models/assets/images/9/P17_0577_a5_rgb-6b9f1499.jpg",
	  price: "293,200",
	},
	{
	  id: 10,
	  name: "Aston Martin Valkyrie",
	  info: "The Aston Martin Valkyrie is a hypercar produced by British manufacturer Aston Martin in collaboration with Red Bull Racing. It is designed to be the ultimate expression of performance and technology in a road-legal car. The Valkyrie features a lightweight carbon fiber construction, a naturally aspirated V12 engine producing over 1,000 horsepower, and advanced aerodynamics inspired by Formula One racing. With its extreme performance and limited production run, the Valkyrie is one of the most exclusive and sought-after hypercars in the world.",
	  image: "https://hips.hearstapps.com/hmg-prod/images/2022-aston-martin-valkyrie-744135-63ff6981bfcd1.jpg?crop=1xw:1xh;center,top&resize=980:*",
	  price: "3.2 million",
	},
  ];
  
  export default data;
  