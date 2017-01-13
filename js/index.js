'use strict';

import Cart from './cart.js';
import Catalog from './catalog.js';
import CatalogController from './catalogController.js'
import data from './data.js';
import FilterController from './filterController.js';
document.addEventListener('DOMContentLoaded', () => {
  let catalog = new Catalog(['id', 'title', 'about', 'price'])
  let catalogController = new CatalogController(catalog);
  catalogController.catalog.addProducts(data);
  catalogController.showCatalog();
  let filterController = new FilterController(catalogController.catalog.productFields);
  filterController.showFilter();
  filterController.setOnInputListener((type, filter) => {
    catalogController.filterProducts(type,filter);
    catalogController.updateView();
  });
  filterController.setOnTypeChangeListener((type, filter) => {
    catalogController.filterProducts(type,filter);
    catalogController.updateView();
  });
}, false);
