'use strict';
import Catalog from './catalog.js';
export default class CatalogController {

  constructor(catalog) {
    if(catalog instanceof Catalog) {
      this.catalog = catalog;
      this.productsToShow = catalog.products;
    }
  }

  sortProducts(orderBy, order) {
    if(this.catalog.columnNames.includes(orderBy) && 
        order === undefined || order === 'inc' || order === 'desc') {

      order = order || 'inc';
      var sortDirection = order === 'inc' ? -1 : 1; 

      this.productsToShow = this.productsToShow.slice().sort((firstProduct, secondProduct) => {
        if(firstProduct[orderBy] < secondProduct[orderBy])
          return sortDirection;
        else if(firstProduct[orderBy] > secondProduct[orderBy])
          return -sortDirection;
        else
          return 0;
      });
    }
    return this.productsToShow;
  }

  filterProducts(filterBy, filter) {
    if(this.catalog.columnNames.includes(filterBy)) 
      this.productsToShow = this.productsToShow.filter((product) => {
        return product[filterBy].includes(filter);
      });
    return this.productsToShow;
  }
}