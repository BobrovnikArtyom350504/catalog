'use strict';

import Catalog from './catalog.js';
import CatalogController from './catalogController.js'

let catalog = new Catalog(['test1', 'test2']);
catalog.addProducts({products: 
  [ {id: 1, test1: 'aa', test2: 'dasdas'},
    {id: 2, test1: 'asd', test2: 'aaa'},
    {id: 3, test1: 'csasa', test2: 'zaza'},
    {id: 4, test1: 'zaza', test2: 'dsa'},
    {id: 5, test1: 'sarta', test2: 'dasdas'}]});
let catalogController = new CatalogController(catalog);
console.log(catalogController.sortProducts('test1', 'desc'));
console.log(catalogController.filterProducts('test2', 'da'));