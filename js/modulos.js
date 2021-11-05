import saludar , { PI, usuario,MuestraClase} from "./constantes.js"; 
 import { aritmetica } from "./aritmetica.js"; 
// esto de arriba tambien se puede utilizar con alias, algo así: 
// import { aritmetica as operaciones } from "./aritmetica.js";

console.log(`El valor de PI es: ${PI} y el señor es ${usuario} 
la suma de los numeros es: ${aritmetica.sumar(1,2)}`)

console.log(saludar)

let m = new MuestraClase(); 
m 