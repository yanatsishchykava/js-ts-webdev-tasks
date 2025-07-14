import './products-section.css';

export interface Product {
  title: string;
  price: number;
  rating: number;
  thumbnail: string;
}

export const productToCard = (product: Product): string => {
  return `
    <div class="product-card">
      <img src="${product.thumbnail}" alt="${product.title}" />
      <div class="product-card__info">
        <h3>${product.title}</h3>
        <div class="product-card__rating">
          <span class="stars">★★★★★</span>
          <span>${product.rating.toFixed(1)}/5</span>
        </div>
        <div class="product-card__prices">
          <span class="price">$${product.price}</span>
        </div>
      </div>
    </div>
  `;
};


export const Products = (title: string, products: Product[]): string => {
  return `
    <section class="products">
      <div class="products__wrapper">
      <h2 class="products__title">${title}</h2>
      <div class="products__row">
      ${products.map(productToCard).join('')}
        </div>
      </div>
    </section>
  `;
};
