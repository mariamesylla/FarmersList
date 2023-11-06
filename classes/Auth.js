const Customer = require('./Customer');

class Auth {
    constructor() {
        this.customers = [];
    };

    register(name, email, shippingAddress) {
        const newCustomer = new Customer(name, email, shippingAddress);
        this.customers.push(newCustomer);
    };

    login(email) {
        const customer = this.customers.filter((el) => el.email === email);
        if (customer.length) {
            return customer[0];
        } else {
            return null;
        };
    };
};

module.exports = Auth;