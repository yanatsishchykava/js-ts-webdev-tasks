import { Product, Products, } from '../components/products-section/products-section';

export async function CategoryPage(name: string): Promise<string> {
  const res = await fetch(`https://dummyjson.com/products/category/${name}`);
  const { products } = await res.json();

  return `
    <main class="category">
      ${Products(name, products as Product[])}
    </main>
  `;
}
