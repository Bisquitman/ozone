import getData from './getData.js';
import postData from './postData.js';

const second = () => {
  const cartBtn = document.getElementById('cart');

  getData().then((data) => {
    console.log(data);
  });
};

export default second;