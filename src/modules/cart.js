import renderCart from './renderCart.js';
import postData from './postData.js';

const cart = () => {
  const cartBtn = document.getElementById('cart');
  const cartModal = document.querySelector('.cart');
  const goodsWrapper = document.querySelector('.goods');
  const cartWrapper = document.querySelector('.cart-wrapper');
  const cartTotal = cartModal.querySelector('.cart-total > span');
  const cartSendBtn = cartModal.querySelector('.cart-confirm');

  const openCart = (event) => {
    event.preventDefault();

    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    renderCart(cart);
    cartTotal.textContent = cart.reduce((sum, goodItem) => {
      return sum + goodItem.price;
    }, 0);
    cartModal.style.display = 'flex';
  }

  const closeCart = () => {
    cartModal.style.display = '';
  }

  cartBtn.addEventListener('click', openCart);

  cartModal.addEventListener('click', (event) => {
    if (event.target.classList.contains('cart') || event.target.classList.contains('cart-close')) {
      closeCart();
    }
  });

  cartModal.addEventListener('keydown', (event) => {
    if (event.keyCode == 27) closeCart();
  });

  goodsWrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-primary')) {
      const card = event.target.closest('.card');
      const key = card.dataset.key;
      const goods = JSON.parse(localStorage.getItem('goods'));
      const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
      const goodItem = goods.find((item) => {
        return item.id === +key;
      });
      cart.push(goodItem);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  });

  cartWrapper.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-primary')) {
      const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
      const card = event.target.closest('.card');
      const key = card.dataset.key;
      const index = cart.findIndex((item) => {
        return item.id === +key;
      });

      cart.splice(index, 1);

      localStorage.setItem('cart', JSON.stringify(cart));

      renderCart(cart);

      cartTotal.textContent = cart.reduce((sum, goodItem) => {
        return sum + goodItem.price;
      }, 0);
    }
  });

  cartSendBtn.addEventListener('click', () => {
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    postData(cart)
      .then(() => {
        localStorage.removeItem([]);
        renderCart(cart);
        cartTotal.textContent = 0;
      })
  });
}

export default cart;