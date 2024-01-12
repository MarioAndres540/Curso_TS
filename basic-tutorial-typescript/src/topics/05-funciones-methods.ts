console.log('+++++++++++++++')
console.log('+++++++METHODs++++')
console.log('+++++++++++++++')
console.log('     ')
function showMessage(): void {
    console.log('Hello Codres')
}

const greet = (name: string): void => {
    console.log(`hola ${name}`)
}

showMessage();
greet('andres');

console.log('+++++++++++++++')
console.log('++++++FUNCION++++')
console.log('+++++++++++++++')
console.log('     ')

function sum(a: number, b: number) {
    return a + b;
}

const sum2 = (a: number, b: number) =>{
    return a + b;
}

console.log('1) suma de números: ', sum(5,6));
console.log('2) suma de números: ', sum2(55,6));

// multiples parametros
//mala practica

const showStudetData = (
    nombre: string,
    lastName: string,
    age: number,
    career: string,
    university: string,
    cycle: number
) => {
    console.log('     ')
    console.log('nombre',nombre)
    console.log('apellido', lastName)
    console.log('age', age)
    console.log('career',career)
    console.log('universidad', university)
    console.log('ciclo ',cycle)
   
}

showStudetData('Ernesto', 'Torres ugarte',25, 'Bellas artes', 'u catolica', 5)

interface IPerson {
    nombre: string;
    lastName: string;
    age: number;
}

interface IStudent extends IPerson{
    career: string;
    university: string;
    cycle?: number;
}

const studentPercy: IStudent = {
    nombre: 'Percy',
    lastName: 'poseidon',
    age: 24,
    career: 'Luchador del olympo',
    university: 'athenas',
    cycle: 4
}

// lo ideal es crear un boejoto y pasar todos los vaores que necesitemos
const showStudentData2 = (data: IStudent) => {
    console.log('     ')
    console.log('nombre',data.nombre)
    console.log('apellido', data.lastName)
    console.log('age', data.age)
    console.log('career',data.career)
    console.log('universidad', data.university)
    console.log('ciclo ',data.cycle)
};

showStudentData2(studentPercy)
//export {}