import { IAction } from "./utils/actions.interface";

class Person{
    name: string;
    public lastName: string;
    private _age: number;
    protected _fullName: string;
    constructor(name:string, lastName:string, age:number){
        this.name = name;
        this.lastName = lastName;
        this._age = age
        this._fullName = `${this.name} ${this.lastName}`
    }

    walk():void{
        console.log(`${this.name} esta caminando`)
    }

    talk():void {
        console.log(`${this.name} esta hablando: "Naci en el año: " ${this._yearBirth()}`);
    }

    private _yearBirth(){
        const currenDate = new Date();
        const yearBirth = currenDate.getFullYear() - this._age;
        return yearBirth;
    }   
}

const juan = new Person('mario','Jaramillo',33)
console.log('Instancia de (Person) "jUAN": ', juan)
juan.walk();
juan.talk();


class Astronauta extends Person implements IAction{
    numberMastersDegrees: number;
    constructor(name: string, lastName: string, age: number, numberMastersDegrees: number){
        super(name,lastName,age)
        this.numberMastersDegrees = numberMastersDegrees;
    }
    platforms(): void {
        throw new Error("Method not implemented.");
    }
    pilotShip(): void {
        console.log(`${this.name} Tiene permiso para pilotear la nave`)
    }

    getFullname(){
        return this._fullName
    }

    
}

console.log('+++++++++++++++++++++++++++++')
console.log('+++DATOS DEL POSTULANTE A ASTRONAUTA++++++++++++++++++++')
console.log('+++++++++++++++++++++++++++++')


const astronauta = new Astronauta('JHON','CONOR',34,0);
const astronauta2 = new Astronauta('MARIA','tORRES',32,2)

console.log('dATOS DEL ASTRONAUTA', astronauta);
console.log(astronauta.getFullname());
astronauta.pilotShip();

console.log('DATOS DEL SEGUNDO ASTRONAUTA: ',astronauta2)
