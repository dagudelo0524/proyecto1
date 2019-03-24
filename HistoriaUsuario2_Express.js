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

const express = require('express')
const app = express()
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

		Mensaje=('No se ha encontrado ningun curso con ese Id');
		let curso1=(id,nombre,duracion,costo)=>{

			curso1=('El curso se llama ' + nombre + ' con ID ' + id +  ' tiene una duracion de ' + duracion + ' horas y tiene un costo de ' + costo + ' pesos colombianos');

		}

		let curso2=(id,nombre,duracion,costo)=>{

			curso2=('El curso se llama ' + nombre + ' con ID ' + id +  ' tiene una duracion de ' + duracion + ' horas y tiene un costo de ' + costo + ' pesos colombianos');
		;
		}

		let curso3=(id,nombre,duracion,costo)=>{
			curso3=('El curso se llama ' + nombre + ' con ID ' + id +  ' tiene una duracion de ' + duracion + ' horas y tiene un costo de ' + costo + ' pesos colombianos');
		;
		}

		curso1(1,'Node.js',36,0);
		curso2(2,'Ingles',42,180000);
		curso3(3,'Seguridad',48,50000);	

		app.get('/', function (req, res) {
	  res.send(Mensaje)
	})
	 
	app.listen(3000)	
	}
	else{
		moostrarPantalla = (' El estudiante ' + nombre  + '\n' + 'con id numero ' + id + '\n'+
			'identificado con Cedula ' + cedula + '\n' + ' se ha matriculado en el curso con id numero ' + estudianteCurso.id + '\n' +
			'el nombre del curso es '+ estudianteCurso.nombre + ' con una duracion de '+ estudianteCurso.duracion + ' y un valor de ' + estudianteCurso.valor + ' pesos Colombianos')
		
			console.log('se ha mostrado en pantalla');

			app.get('/', function (req, res) {
  			res.send(moostrarPantalla)
			})
 
			app.listen(3000)
		
	}	