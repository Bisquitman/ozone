import getData from './getData.js';
import renderGoods from './renderGoods.js';
import { searchFilter } from './filters.js';

const search = () => {
  const searchInput = document.querySelector('.search-wrapper_input');

  searchInput.addEventListener('input', (event) => {
    const value = event.target.value;

    getData().then((data) => {
      renderGoods(searchFilter(data, value));
    });
  });
}

export default search;