'use strict';

export default class Cart {
  constructor(products) {
    this.products = Array.isArray(products) ? products : [];
  }

  addProduct(product, count)  {
    this.products.push({product: product, count: count || 1});
  }

  deleteProduct(id) {
    debugger;
    this.products = this.products.slice().filter((element)=>{
      return element.product.id !== id;
    });
  }
}