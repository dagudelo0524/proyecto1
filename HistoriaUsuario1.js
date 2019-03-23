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

