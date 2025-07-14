import './categories.css';
import { CategoryItem } from './category-item';

export interface Category {
  slug: string;
  name: string;
  url: string;
}

export const Categories = (title: string, data: Category[]): string => {
  return `
  <section class="categories" id="categories">
      <div class="categories__wrapper">
        <h2 class="categories__title">${title}</h2>
        <div class="categories__row">
          ${data.map((category) => CategoryItem(category)).join('')}
        </div>
      </div>
    </section>
  `;
};
