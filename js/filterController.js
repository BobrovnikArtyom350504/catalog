'use strict';
export default class FilterController {
  constructor(types, filter, currentType) {
    this.types = Array.isArray(types) ? types : [];
    this.filter = '';
    this.currentType = currentType || this.types[0];
  }

  showFilter() {
    var filterView = this.types.map((field)=>{
      return `<option value="${field}">${field}</option>`;
    });
    document.querySelectorAll('.filter select')[0].innerHTML = filterView.join('');
  }

  setOnTypeChangeListener(callback) {
    var select = document.querySelectorAll('.filter select')[0];
    select.addEventListener('change', () => {
      this.currentType = select.value;
      callback(this.currentType, this.filter);
    });
  }

  setOnInputListener(callback) {
    var input = document.querySelectorAll('.filter input')[0];
    input.addEventListener('input', () => {
      this.filter = input.value;
      callback(this.currentType, this.filter);
    });
  }
}