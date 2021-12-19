import getData from './getData.js';
import renderGoods from './renderGoods.js';

const load = () => {
  getData().then((data) => {
    renderGoods(data);
  });
};

export default load;