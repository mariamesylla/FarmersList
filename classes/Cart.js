class Cart{
    constructor(){
        this.products=[]
        this.total=0
    }
    addProduct(product){
        this.products.push(product)
        this.total+=product.total
    }

    removeProduct(product){

        this.products = this.products.filter((el) => el.name !== product.name)

        this.total-=product.total
    }
    

}

module.exports = Cart;