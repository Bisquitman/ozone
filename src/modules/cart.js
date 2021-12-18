const cart = () => {
  const cartBtn = document.getElementById('cart');
  const cartModal = document.querySelector('.cart');
  // const cartCloseBtn = cartModal.querySelector('.cart-close');

  const openCart = (event) => {
    event.preventDefault();
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
}

export default cart;