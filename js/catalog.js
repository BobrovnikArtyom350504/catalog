'use strict';

export default class Catalog {

  constructor(productFields) {
    this.products = [];
    this.productFields = Array.isArray(productFields) ? productFields : [];
  }

  addProducts(data) {
    if(data && Array.isArray(data.products))
      data.products.forEach((product) => {
        if(this.isProductValid(product))
          this.addProduct(product);
      });
  }

  addProduct(product, position) {
    if(this.isProductValid(product))
      if(position == null)
        this.products.push(product);
      else
        this.products.splice(position, 0, product);
  }

  clear() {
    this.products = [];
  }

  isProductValid(product) {
    if(!product)
      return false;

    for(let i in this.productFields) {
      if(!product.hasOwnProperty(this.productFields[i]))
        return false;
    }
    return true;
  }
}



