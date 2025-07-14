import { Brands } from '../components/banner-brands/brands';
import { Categories, Category, } from '../components/categories/category-item/categories';
import { Hero } from '../components/hero/hero';
import { Subscribe } from '../components/subscribe-banner/subscribe-banner';

export async function HomePage(): Promise<string> {
  const res = await fetch('https://dummyjson.com/products/categories');
  const categoryNames: string[] = await res.json();

  const categories: Category[] = categoryNames.map((name) => ({
    slug: name.slug,
    name: name.name,
    url: name.url,
  }));

  return `
    ${Hero()}
    ${Brands()}
    ${Categories('Categories', categories)}
    ${Subscribe()}
  `;
}
