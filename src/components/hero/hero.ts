import './hero.css';

export const Hero = (): string => {
  return `
    <section class="hero">
      <h1 class="hero__title">
        FIND ANYTHING<br />
        THAT MATCHES<br />
        YOUR STYLE
      </h1>

      <p class="hero__description">
      Browse through our diverse range of meticulously crafted garments,<br />
      designed to bring out your individuality and cater to your sense of style.
      </p>

      <a class="hero__button js-scroll-to-categories" href="#">Shop Now</a>

      <div class="hero__stats">
      <div class="hero__stat">
        <div class="hero__stat-number">200+</div>
        <div class="hero__stat-label">International Brands</div>
      </div>
      <div class="hero__stat">
        <div class="hero__stat-number">2,000+</div>
        <div class="hero__stat-label">High-Quality Products</div>
      </div>
      <div class="hero__stat">
        <div class="hero__stat-number">30,000+</div>
        <div class="hero__stat-label">Happy Customers</div>
      </div>
    </div>
    
    </section>
  `;
};
