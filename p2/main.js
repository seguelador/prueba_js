var copiar = function(obj){
	var obj_copia = (JSON.parse(JSON.stringify(obj)));
	return obj_copia;
}

var persona = {
	name: "matias",
	age: 21,
	mascotas: ["pelusa", "baguira", "John... Sal chi chon"]
};