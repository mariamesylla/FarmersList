class Cart{
    constructor() {
        this.products = [];
        this.total = 0;
    };
    addProduct(product) {
        this.products.push(product);
        this.total += product.price;
    };

    removeProduct(product) {
        this.total -= this.products[product].price;
        this.products.splice(product, 1);
    };
};

module.exports = Cart;