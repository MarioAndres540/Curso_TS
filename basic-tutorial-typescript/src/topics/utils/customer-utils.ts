export interface ICustomer {
    name: string;
    lastName: string;
    email: string;
    address: {
        description: string;
        city: string;
        country: string;
    };
}

export const showCustomerDate =  (customer: ICustomer) => {
    console.log('++++++++++++++++++++');
    console.log('++++++Datos del cliente+++++++');
    console.log('++++++++++++++++++++');

    const {
        name,
        lastName,
        email,
        address: {description, city, country}
    } = customer;

    console.log('Nombre: ',name);
    console.log('Apellido: ', lastName);
    console.log('Email: ', email);

    console.log('----------DIRECCION--------');

    console.log('Direccion: ', description);
    console.log('ciudad: ', city);
    console.log('Pais: ',city);
}