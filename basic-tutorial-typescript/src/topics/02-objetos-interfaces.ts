
//inteffaces
interface IPerson {
    nombre: string;
    lastName: string;
    age: number;
}

interface IStudent extends IPerson{
    career: string;
    university: string;
}

const studentPercy: IStudent = {
    nombre: 'Percy',
    lastName: 'poseidon',
    age: 24,
    career: 'Luchador del olympo',
    university: 'athenas'
}

//objects
const personaje: IPerson = {nombre:'', lastName:'',age: 0};

const juan: IPerson = {nombre:'juan', lastName: 'jaramillo', age: 101};

console.log('Datos de ', juan)

console.log('Datos de ', studentPercy)

console.log('las edades son', studentPercy.age,juan.age)

export {}