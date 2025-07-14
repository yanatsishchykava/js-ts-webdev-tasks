import { getIconUrl } from '../../utils/utils';
import './footer.css';

const twitterIconUrl = getIconUrl('twitter.svg');
const facebookIconUrl = getIconUrl('facebook.svg');
const instagramIconUrl = getIconUrl('instagram.svg');
const githubIconUrl = getIconUrl('github.svg');
const visaIconUrl = getIconUrl('visa.svg');
const mastercardIconUrl = getIconUrl('mastercard.svg');
const paypalIconUrl = getIconUrl('paypal.svg');
const applepayIconUrl = getIconUrl('applepay.svg');
const googlepayIconUrl = getIconUrl('googlepay.svg');

const TEMPLATE = `
  <div class="footer__top">
    <div class="footer__container">
      <div class="footer__brand">
        <h2 class="footer__logo">SHOP.CO</h2>
        <p class="footer__desc">
          We have clothes that suits your style and which you're proud to wear. From women to men.
        </p>
        <div class="footer__socials">
          <a href="#"><img src="${twitterIconUrl}" alt="Twitter" /></a>
          <a href="#"><img src="${facebookIconUrl}" alt="Facebook" /></a>
          <a href="#"><img src="${instagramIconUrl}" alt="Instagram" /></a>
          <a href="#"><img src="${githubIconUrl}" alt="GitHub" /></a>
        </div>
      </div>

      <div class="footer__links">
        <div class="footer__column">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>
        <div class="footer__column">
          <h3>Help</h3>
          <ul>
            <li><a href="#">Customer Support</a></li>
            <li><a href="#">Delivery Details</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="footer__column">
          <h3>FAQ</h3>
          <ul>
            <li><a href="#">Account</a></li>
            <li><a href="#">Manage Deliveries</a></li>
            <li><a href="#">Orders</a></li>
            <li><a href="#">Payments</a></li>
          </ul>
        </div>
        <div class="footer__column">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Free eBooks</a></li>
            <li><a href="#">Development Tutorial</a></li>
            <li><a href="#">How to – Blog</a></li>
            <li><a href="#">Youtube Playlist</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="footer__bottom">
    <p>Shop.co © 2000-2023, All Rights Reserved</p>
    <div class="footer__payments">
      <img src="${visaIconUrl}" alt="Visa" />
      <img src="${mastercardIconUrl}" alt="MasterCard" />
      <img src="${paypalIconUrl}" alt="PayPal" />
      <img src="${applepayIconUrl}" alt="Apple Pay" />
      <img src="${googlepayIconUrl}" alt="Google Pay" />
    </div>
  </div>
`;

export const Footer = (): HTMLElement => {
  const footerElement: HTMLElement = document.createElement('footer');
  footerElement.classList.add('footer');
  footerElement.innerHTML = TEMPLATE;
  return footerElement;
}
