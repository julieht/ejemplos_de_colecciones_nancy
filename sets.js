//ejercicio de colecciones en javascript en este caso los sets
const myset = new Set();//definicion de una variablke en este caso es myset
myset.add(1);//asignacion de variables
myset.add(5);//asignación de variables
myset.add('some text');//asignación de otra variable

const o = {a: 1, b: 2};//asignación d enuevas variables
myset.add(0);

 myset.has(1);//metodos para poder imprimir el codigo y que de esta manera se muestre en pantalla
 myset.has(3);
 myset.has(5);
 myset.has(Math.sqrt(25));
 myset.has('some text'.toLowerCase());
 myset.has(o);

 myset.size;
 
 myset.delete(5);
 myset.has(5);

 myset.size;
 console.log(myset);//imprimir los primeros valores que se mostraran en pantalla
 console.log(o);//imprimir los segundos valores que se mostraran en otra linea de codigo y que luego se msotraran en pantalla

