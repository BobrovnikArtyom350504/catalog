'use strict';

import Catalog from './catalog.js';
export default class CatalogController {

  constructor(catalog) {
      this.catalog = catalog;
      this.productsToShow = catalog.products;
      this.sortedProducts = catalog.products;
      this.filter = {filterBy: this.catalog.productFields[0], string: ''};
  }

  sortProducts(orderBy, order) {
    if(this.catalog.productFields.includes(orderBy) && 
        order === undefined || order === 'inc' || order === 'desc') {

      order = order || 'inc';
      var sortDirection = order === 'inc' ? -1 : 1; 

      this.sortedProducts = this.catalog.products.slice().sort((firstProduct, secondProduct) => {
        if(firstProduct[orderBy] < secondProduct[orderBy])
          return sortDirection;
        else if(firstProduct[orderBy] > secondProduct[orderBy])
          return -sortDirection;
        else
          return 0;
      });
      return this.filterProducts(this.filter.filterBy, this.filter.string);
    }
  }

  filterProducts(filterBy, filter) {
    debugger;
    if(this.catalog.productFields.includes(filterBy)) {
      this.productsToShow = this.sortedProducts.filter((product) => {
        return product[filterBy].toString().includes(filter);
      });
      this.filter.filterBy = filterBy;
      this.filter.string = filter;
    }
    return this.productsToShow;
  }

  showCatalog() {
    var productFieldViews = this.catalog.productFields.map((title)=> {
      return `<th>${title}</th>`
    });
    var catalogHeaderView  = `<thead><tr>${productFieldViews.join('')}</tr></thead>`;

    var catalogView = catalogHeaderView + this.getProductViews();
    document.getElementsByClassName('catalog')[0].innerHTML = catalogView;

    this.setOnHeadClickListener();
  }

  updateView() {
    document.querySelectorAll('.catalog tbody')[0].innerHTML = this.getProductViews();
  }

  getProductViews() {
    var catalogProductViews = this.productsToShow.map((product)=>{
      let cells = this.catalog.productFields.map((field)=>{
        return `<td>${product[field]}</td>`;
      });
      return `<tr>${cells.join('')}</tr>` 
    });
    return `<tbody>${catalogProductViews.join('')}</tbody>`;
  }

  setProductsToShow(products) {
    this.productsToShow = products;
    this.updateView();
  }

  setOnHeadClickListener() {
    document.querySelectorAll('.catalog thead')[0].addEventListener("click",(event) => { 
      var selectedCell = event.target;
      document.querySelectorAll('.catalog thead th').forEach((node)=>{
        if(node !== selectedCell)
          node.className='';
      });

      selectedCell.className = selectedCell.className === 'inc' ? 'desc' : 'inc';
      this.sortProducts(selectedCell.innerHTML, selectedCell.className);

      this.updateView()
    });
  }
}