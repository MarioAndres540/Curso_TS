// Interfaces

interface IPet{
    name: string;
    age: string;
    species: string;
    isFamale: boolean;
    vaccines: string[];
}

//Array
const elements = [2,'hola',true, {name: 'Julio'}]
console.log('elementos: ', elements)

const messages: string[] = ['Hello', 'Coders'];

console.log('Message ',messages)

// array de objeos

const petFirlu: IPet = {
    name: 'Filuay',
    age: '10 años',
    species: 'perro',
    isFamale: false,
    vaccines: ['rabia']
}

const petKitty: IPet = {
    name: 'Kitty',
    age: '11 años',
    species: 'gato',
    isFamale: true,
    vaccines: ['rabia', 'distemper']
}

const petloro: IPet = {
    name: 'Paula',
    age: '13 años',
    species: 'loro',
    isFamale: true,
    vaccines: ['rabia']
}

const pets: IPet[] = [petFirlu,petKitty,petloro]

console.log('las pets son ', pets)

const petsFamele = pets.filter((pet) => {
    return pet.isFamale;
})

console.log('las mascotas hembras son ', petsFamele)
export {} 