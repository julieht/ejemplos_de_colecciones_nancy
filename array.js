//eercicio de colecciones en javascript en este caso uso de arrays

var array = ['first','second', 'fourth'];//se define una variable en ese caso es array y se asignan los diferenes atributos a mosrar en pantalla
array.forEach(function(element){ /*se llama el array para luego ser mosrado en la pantalla*/
    console.log(element);/*mostrar variables en panalla*/
})
//otro ejemlo de array utilizando la sentencia if 
if(array[2] === undefined) {console.log('array[2] is undefined')}
 var array = ['first', 'second','undefined','fourth'];/*se define la variable y se le asignan sus atributos*/
 array.forEach(function(element){/* llamar la matriz y que se pueda ver en pantalla*/
     console.log(element);//mostrar variables en pantalla
 }
 )
 //estos dos ejemplos se componen en uno solo mostrando como resultado una lista de los atributos que el usuario digito en el orden asignado
