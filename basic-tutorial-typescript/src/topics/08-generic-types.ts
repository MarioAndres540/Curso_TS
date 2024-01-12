import { ICustomer } from "./utils/customer-utils";

const array1 = [1,2,3,4,5,6,7,8]
const array2 = ['a','b','c','d','e']

//const gerFirtsItem = (array: string[]) =>{
  //  return array[0];
//};

//const gerFirstItemNumber = (array: number[]) =>{
  //  return array[0]
//};

const gerFirtsItem = <T>(array: T[])=>{
    return array[0]
}

//console.log(gerFirstItemNumber(array1));
console.log(gerFirtsItem(array2));

console.log('FirstNumber: ', gerFirtsItem(array1));
console.log('FirtsString: ',gerFirtsItem(array2)) 

 interface IResponse<T = void>{
    code: string;
    message: string;
    dta?: T;
 }

 const customer: ICustomer = {
    name: 'diana',
    lastName: 'jaramillo',
    email: 'diana@jaramillo.com',
    address:{
        description: 'ave 123',
        city: 'medellin',
        country: 'colombia'
    }
     
 }

 const responseObject: IResponse<ICustomer> = {code: '', message: '', dta: customer};

 const responseArray: IResponse<ICustomer[]> = {
    code: 'kmlkm3232',
    message: 'lkmnlkm',
    dta: [customer, customer]
 };

 const responseOther: IResponse<boolean>={code: 'kmlkm3232',
 message: 'lkmnlkm',
 dta: false }

 const responseOther2: IResponse = { code: 'kmlkm3232',
 message: 'lkmnlkm'}

 console.log('Respnse Object: ',responseObject);
 console.log('Respnse Object: ',responseArray);
 console.log('Respnse Object: ',responseOther);
 console.log('Respnse Object: ',responseOther2);