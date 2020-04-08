import {FILTERS} from "../const";

const getFilters = () => {
  return FILTERS.map((title) => ({
    title,
    count: Math.floor(Math.random() * 10),
  }));
};

export {getFilters};
