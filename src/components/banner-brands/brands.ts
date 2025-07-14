import './brands.css';

export const Brands = (): string => {
  return `
    <section class="brands">
      <div class="brands__container">
        <img class="brands__logo" src="/assets/icons/banner-brands/versace.svg" alt="Versace Logo" />
        <img class="brands__logo" src="/assets/icons/banner-brands/zara.svg" alt="Zara Logo" />
        <img class="brands__logo" src="/assets/icons/banner-brands/gucci.svg" alt="Gucci Logo" />
        <img class="brands__logo" src="/assets/icons/banner-brands/prada.svg" alt="Prada Logo" />
        <img class="brands__logo" src="/assets/icons/banner-brands/calvin-klein.svg" alt="Calvin Klein Logo" />
      </div>
    </section>
  `;
};
