import Navigo from 'navigo';
import { CategoryPage } from '../pages/category';
import { HomePage } from '../pages/home';
import { renderInHtml } from '../utils/renderInHtml';
import { HomeController } from '../utils/controller';

const router = new Navigo('/', { hash: true });

export function setupRouter() {
  router
    .on('/', async () => {
      await renderInHtml(HomePage, 'app', HomeController);
    })
    .on('/category/:name', async (match) => {
      const name = match?.data?.name;
      if (name) {
        await renderInHtml(() => CategoryPage(name), 'app');
      }
    })
    .notFound(() => {
      const container = document.getElementById('app');
      if (container) {
        container.innerHTML = '<h2>Page Not Found</h2>';
      }
    });

  router.resolve();
}
