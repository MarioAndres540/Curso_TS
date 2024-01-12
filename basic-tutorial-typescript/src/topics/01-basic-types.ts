//number,stringboolena,date,any

//#region number
console.log('++++++++++++++++++++')
console.log('+++++++Number+++++++++++++')
console.log('++++++++++++++++++++')

const age = 15;
let weight = 70.5;
let weight2: number;

weight2 =  74.6;

console.log(age);
console.log(weight)
console.log(weight2)

const ageText = '31';
console.log('parseInt => ', parseInt(ageText));
/*se necesita valores decimales parseFloat es mas especifico p */

const weightText = '70.3'

console.log('paseFloat => ', parseFloat(weightText))
//#endregion

//#region STRING
console.log('++++++++++++++++++++')
console.log('++++++++String++++++')
console.log('++++++++++++++++++++')

//es reduntante especificar el tipo si ya lo inicializo
const name: string = 'Andres';
const lasteName = 'Jaramillo';

console.log('Nombre: ', name);
console.log('Apellidos: ', lasteName)

console.log(name + ' ' + lasteName)
const fullName=`Template Literals (string Interpolation) => ${name} ${lasteName}`
console.log(fullName)
//#endregion

//#region BOOLEAN
console.log('++++++++++++++++++++')
console.log('++++++++Boolean++++++')
console.log('++++++++++++++++++++')

const useAngular: boolean = true;
const comparisionExpression = 5 > 2;

/*Es importante menciona que en js todas las cadenas no vacias se considenran verdaderas
solo las cadenas vacias ("") se consideran falsas
*/
const booleanText = 'asas';

console.log('usas Angular?: ', useAngular);
console.log('Comparacion mediante una expresion: 5 es mayor que 2? => ', comparisionExpression)
console.log('convertir texto a boolean usando la funcion boolean => ', Boolean(booleanText));
console.log('convertir texto a boolean usando doble negacion !! => ', !!booleanText);
//#endregion

//#region DATE
console.log('++++++++++++++++++++')
console.log('++++++++Date++++++')
console.log('++++++++++++++++++++')

const dateNow = new Date();
//
console.log('La Fecha actual es: ', dateNow);
console.log('La fecha actual es: ', dateNow.getFullYear());
//#endregion

//#regino
console.log('++++++++++++++++++++')
console.log('++++++++ANY++++++')
console.log('++++++++++++++++++++')

let valueAny: any = 'hola cod';

console.log('Valor ANY: ', valueAny)

valueAny = 6;

console.log('Valor nueva de ANY: ',valueAny);
//#endregion
export{};