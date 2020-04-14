import {createElement} from "../utils";

const createFilterMarkup = (filter, isChecked) => {
  const {title, count} = filter;
  return (
    `<input type="radio" id="filter__${title.toLowerCase()}" class="filter__input visually-hidden" name="filter" ${isChecked ? `checked` : ``} ${count === 0 ? `disabled` : ``}>
      <label for="filter__${title.toLowerCase()}" class="filter__label">${title} <span class="filter__all-count">${count}</span></label>`
  );
};

const createFilterTemplate = (filters) => {
  const filtersMarkup = filters.map((filter, index) => {
    return createFilterMarkup(filter, index === 0);
  }).join(`\n`);

  return (
    `<section class="main__filter filter container">
        ${filtersMarkup}
    </section>`
  );
};

export default class Filter {
  constructor(filter, isChecked) {
    this._filter = filter;
    this._isChecked = isChecked;
    this._element = null;
  }

  getTemplate() {
    return createFilterTemplate(this._filter, this._isChecked);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }
}

export {createFilterTemplate};
