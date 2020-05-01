import {FILTER_ID_PREFIX} from "../const";
import AbstractComponent from "./abstract-component";

const getFilterNameById = (id) => {
  return id.substring(FILTER_ID_PREFIX.length);
};

const createFilterMarkup = (filter, isChecked) => {
  const {name, count} = filter;

  return (
    `<input type="radio" id="filter__${name.toLowerCase()}" class="filter__input visually-hidden" name="filter" ${isChecked ? `checked` : ``} ${count === 0 ? `disabled` : ``}>
      <label for="filter__${name.toLowerCase()}" class="filter__label">${name} <span class="filter__all-count">${count}</span></label>`
  );
};

const createFilterTemplate = (filters) => {
  const filtersMarkup = filters.map((filter) => {
    return createFilterMarkup(filter, filter.checked);
  }).join(`\n`);

  return (
    `<section class="main__filter filter container">
        ${filtersMarkup}
    </section>`
  );
};

class Filter extends AbstractComponent {
  constructor(filter, isChecked) {
    super();
    this._filter = filter;
    this._isChecked = isChecked;
  }

  getTemplate() {
    return createFilterTemplate(this._filter, this._isChecked);
  }

  setFilterChangeHandler(handler) {
    this.getElement().addEventListener(`change`, (evt) => {
      const filterName = getFilterNameById(evt.target.id);
      handler(filterName);
    });
  }
}

export default Filter;
