console.log('+++++++++++++++')
console.log('+++++++METHODs++++')
console.log('+++++++++++++++')
console.log('     ')

interface ICustomer {
    name: string;
    lastName: string;
    email: string;
    address: {
        description: string;
        city: string;
        country: string;
    }
}

const customer: ICustomer = {
    name: 'alex',
    lastName: 'showw',
    email: 'alex@shwo.com',
    address: {description: 'avenia 123', city: 'medellin', country: 'Colombia'}
};

console.log('Nombre ',customer.name)
console.log('Apellido ',customer.lastName)
console.log('city ', customer.address.city)

const {name, lastName, address:{city}} = customer;

console.log('Nombre ',name)
console.log('Apellido ',lastName)
console.log('city ', city)

console.log('+++++++++++++++')
console.log('+++++++ARRAYS++++')
console.log('+++++++++++++++')
console.log('     ')

const pokemons: string[] = ['Pikachu','charizar','chicorita']

console.log('el pokemon 2 es: ', pokemons[1]);

const [poke1,poke2] = pokemons;

console.log('el pokemon 1 es: ', poke1);
console.log('el pokemon 2 es: ', poke2);

const [,,poke3 = 'No existe el pokemon'] = pokemons

console.log('el pokemon3 es: ', poke3)


export{}; 