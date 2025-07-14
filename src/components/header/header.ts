import './header.css';

const CART_ICON_URL = '/assets/icons/cart.svg';
const USER_ICON_URL = '/assets/icons/user.svg';


const TEMPLATE = `
  <div class="header__logo">
    <a href="/">SHOP.CO</a>
  </div>
  <div class="header__icons">
    <img src="${CART_ICON_URL}" alt="Cart" class="header__icon" />
    <img src="${USER_ICON_URL}" alt="User" class="header__icon" />
  </div>
`;

export const Header = (): HTMLElement => {
  const headerElement = document.createElement('header');
  headerElement.classList.add('header');
  headerElement.innerHTML = TEMPLATE;
  return headerElement;
};
