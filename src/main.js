const sidebar = document.createElement('div');
sidebar.className = 'sidebar';

const NAVIGATION_LIST_ITEMS = [
  'Jackets & Coats',
  'Hoodies',
  'T-shirts & Vests',
  'Shirts',
  'Blazers & Suits',
  'Jeans',
  'Trousers',
  'Shorts',
  'Underwear',
  'Gift Sets',
]

const navList = document.createElement('ul');
const fragment = document.createDocumentFragment();

NAVIGATION_LIST_ITEMS.forEach((item, index) => {
  const element = document.createElement('li')
  element.textContent = item

  if (index === 2) {
    element.classList.add('active')
  };

  element.addEventListener('click', function () {
    document.querySelectorAll('.sidebar li').forEach(li => {
      li.classList.remove('active')
    });

    this.classList.add('active')
  })
  fragment.append(element)
})
navList.append(fragment);
sidebar.append(navList);

const pageContainer = document.createElement('div');
pageContainer.className = 'page-container';
const content = document.createElement('div');
content.className = 'content';

const sortSection = document.createElement('div');
sortSection.className = 'sort-section';

const contentTitle = document.createElement('h1');
contentTitle.textContent = '6 ITEMS';

const sortOption = document.createElement('div');
sortOption.className = 'sort-option';
sortOption.innerHTML = `<span style="color: #A1A1B0">SORT BY</span>
                        <span style="color: #1E0E62">RECOMMENDED</span>`

const sortIcon = document.createElement('span');
sortIcon.className = 'sort-icon';
sortIcon.innerHTML = `<svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6975 0.733259C10.7645 0.800223 10.798 0.877232 10.798 0.964285C10.798 1.05134 10.7645 1.12835 10.6975 1.19531L6.01674 5.87612C5.94978 5.94308 5.87277 5.97656 5.78571 5.97656C5.69866 5.97656 5.62165 5.94308 5.55469 5.87612L0.873884 1.19531C0.80692 1.12835 0.773438 1.05134 0.773438 0.964285C0.773438 0.877232 0.80692 0.800223 0.873884 0.733259L1.37612 0.231026C1.44308 0.164062 1.52009 0.13058 1.60714 0.13058C1.6942 0.13058 1.77121 0.164062 1.83817 0.231026L5.78571 4.17857L9.73326 0.231026C9.80022 0.164062 9.87723 0.13058 9.96429 0.13058C10.0513 0.13058 10.1283 0.164062 10.1953 0.231026L10.6975 0.733259Z" fill="#1E0E62"/>
</svg>`
sortOption.appendChild(sortIcon);
sortSection.appendChild(contentTitle);
sortSection.appendChild(sortOption);

const products = document.createElement('div');
products.className = 'products';

const PRODUCTS = [
  {
    name: 'SLUB JERSEY T-SHIRT',
    price: '$ 12.99',
    image: '../assets/images/image0.jpg',
  },
  {
    name: 'PRINTED T-SHIRT',
    price: '$ 14.99',
    image: '../assets/images/image1.jpg',
  },
  {
    name: 'COTTON T-SHIRT',
    price: '$ 10.99',
    image: '../assets/images/image2.jpg',
  },
  {
    name: 'T-SHIRT WITH A MOTIF',
    price: '$ 15.99',
    image: '../assets/images/image3.jpg',
  },
  {
    name: 'COTTON T-SHIRT REGULAR FIT',
    price: '$ 11.99',
    image: '../assets/images/image4.jpg',
  },
  {
    name: 'SLUB JERSEY T-SHIRT',
    price: '$ 13.99',
    image: '../assets/images/image5.jpg',
  },
]

PRODUCTS.forEach(product => {
  const productDiv = document.createElement('div');
  productDiv.className = 'product';

  const productImage = document.createElement('img');
  productImage.src = product.image;
  productImage.alt = product.name;
  productImage.className = 'product-image';

  const productTitle = document.createElement('h2');
  productTitle.textContent = product.name;
  productTitle.className = 'product-title';

  const productPrice = document.createElement('p');
  productPrice.textContent = product.price;
  productPrice.className = 'product-title';

  const addButton = document.createElement('button');
  addButton.className = 'add-to-bag';
  addButton.textContent = 'Add to bag';

  productDiv.appendChild(productImage);
  productDiv.appendChild(productTitle);
  productDiv.appendChild(productPrice);
  productDiv.appendChild(addButton);

  products.appendChild(productDiv);
})

content.appendChild(sortSection);
content.appendChild(products);
pageContainer.appendChild(sidebar);
pageContainer.appendChild(content);

document.body.appendChild(pageContainer);

