import { ICustomer, showCustomerDate } from './utils/customer-utils';

const customer: ICustomer = {
    name: 'Dina',
    lastName: 'Arias',
    email: 'dina@arias.com',
    address: {description: 'ave 1234', city: 'medellin', country: 'colombia'}
};

showCustomerDate(customer);

export {};