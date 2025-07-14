import './category-item.css';

interface Category {
  slug: string;
  name: string;
  url: string;
}

export const CategoryItem = ({ slug, name }: Category): string => {
  return `
    <a class="category" href="/category/${slug}" data-navigo>
      ${name}
    </a>
  `;
};

