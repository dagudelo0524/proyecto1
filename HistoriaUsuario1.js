const express = require('express')
const app = express()

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
  res.send(curso1 +' <br> ' + curso2 +' <br>' + curso3)
})
 
app.listen(3000)



