//Ejercicio 7 ¿Qué está mal en el siguiente código?//

let btnMostrar = document.getElementById(“btnMostrar”);
 const arregloDeNumeros = [2,4,8,5,7];
 function mostrarArreglo(arr: number[]) {
 for ( let i= 0 ; i < arr.length; i++) {
 console.log (" " , arr[i] );
 console.log ("\n ");
 }
 };btnMostrar.addEventListener(“click”,() => {
 mostrarArreglo;
 });

 // - En la linea 3 le hubiera especificado el elemento (<HTMLElement>).
 // - Se podria ahorrar codigo escribiendo la devolucion en un solo console.log.
 // - Se intenta definir la funcion pero no se invoca, en la linea 12 deberia ir arregloDeNumeros como valor de salida.// -Para hacer uso del boton, tambien se debe llamar a la funcion con sus parametros dentro de su sintaxis.

//forma correcta - funcional:

 /*let btnMostrar = <HTMLElement>document.getElementById("btnMostrar");
 
 const arregloDeNumeros = [2,4,8,5,7];
  function mostrarArreglo(arr: number[]) {
  for ( let i= 0 ; i < arr.length; i++) {
  console.log ( "\n" , arr[i]  );
  }
 }
   mostrarArreglo(arregloDeNumeros);
 
 
   btnMostrar.addEventListener("click",() => {
  mostrarArreglo(arregloDeNumeros)
  });
 */