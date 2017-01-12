'use strict';

export default class Catalog {

  constructor(columnNames) {
    this.products = [];
    this.columnNames = Array.isArray(columnNames) ? columnNames : [];
    this.columnNames.splice(0, 0, 'id');
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

    for(let i in this.columnNames) {
      if(!product.hasOwnProperty(this.columnNames[i]))
        return false;
    }
    return true;
  }
}



