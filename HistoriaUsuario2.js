let curso=[{
	id:1,
	nombre: 'Node.js',
	duracion: 36,
	valor: 0
},
{
	id:2,
	nombre: 'Ingles',
	duracion: 48,
	valor: 150000
},
{
	id:3,
	nombre: 'matematicas',
	duracion: 54,
	valor: 100000
}
];

let estudiante={
	id:1,
	nombre: 'Daniel',
	cedula: 123456789
};

const fs= require('fs');
const opciones={
	idCurso:{
		demand:true,
		alias:'I'
	},
	NombreEstudiante:{
		demand:true,
		alias:'N'
	},
	CedulaEstudiante:{
		demand:true,
		alias:'C'
	}
};

const argv = require('yargs')
			.command('Escribir', 'Inscribirme en un Curso', opciones)
			.argv;

let estudianteCurso = curso.find( bcurso => bcurso.id == argv.idCurso );
let {id,nombre,cedula}= estudiante;

	if( curso.id===estudianteCurso) {

		console.log('No se ha encontrado ningun curso con ese Id');
		let curso1=(id,nombre,duracion,costo)=>{
			setTimeout(function(){
			console.log('El curso se llama ' + nombre + ' con ID ' + id +  ' tiene una duracion de ' + duracion + ' horas y tiene un costo de ' + costo + ' pesos colombianos');
		}, 2000 );
		}

		let curso2=(id,nombre,duracion,costo)=>{
			setTimeout(function(){
			console.log('El curso se llama ' + nombre + ' con ID ' + id +  ' tiene una duracion de ' + duracion + ' horas y tiene un costo de ' + costo + ' pesos colombianos');
		}, 4000);
		}


		let curso3=(id,nombre,duracion,costo)=>{
			setTimeout(function(){
			console.log('El curso se llama ' + nombre + ' con ID ' + id +  ' tiene una duracion de ' + duracion + ' horas y tiene un costo de ' + costo + ' pesos colombianos');
		}, 6000);
		}

		curso1(1,'Node.js',36,0);
		curso2(2,'Ingles',42,180000);
		curso3(3,'Seguridad',48,50000);
		}
	else{
		let crearArchivo = (curso)=>{
			texto= 'El estudiante ' + nombre  + '\n' + 'con id numero ' + id + '\n'+
			'identificado con Cedula ' + cedula + '\n' + ' se ha matriculado en el curso con id numero ' + estudianteCurso.id + '\n' +
			'el nombre del curso es '+ estudianteCurso.nombre + ' con una duracion de '+ estudianteCurso.duracion + ' y un valor de ' + estudianteCurso.valor + ' pesos Colombianos';

		fs.writeFile('Inscripcion.txt', texto , (err)=>{
			if(err) throw (err);
			console.log('se ha creado el archivo')

		});
		}
		crearArchivo(curso);
	}