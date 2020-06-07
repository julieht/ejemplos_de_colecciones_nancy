/*ejercicio de colecciones en javaScript en este ejemplo se desarrollara maps en javascript*/
var sonidos = new Map(); //se declara la una valiable llamada sonidos  para crear una nueva coleccion
sonidos.set(" El perro", "guau");//se asigna el elemento o animal y el sonido que emite
sonidos.set("El gallo",  "kikiriki");//""
sonidos.set("La vaca", "muu");//""
sonidos.set("La oveja", "mee");//""
sonidos.set("El gato", "miau");//""
sonidos.size;//para que el sistema realice la función que el suario esta asignando
sonidos.get("zorro");//proximo sonido
sonidos.has("pajaro");//el sonido que fue antes
sonidos.delete("perro");//para eliminar la primera instruccción que esta ordenando el usuario ene este caso es perro

for (var [clave,  valor]  of  sonidos){
    console.log(clave + " hace "  + valor);
}
//este es un ciclo para desarrollar las indicaciones que el usuario esta ordenando
