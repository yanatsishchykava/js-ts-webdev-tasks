import './style.css';
import { setupRouter } from './router/index';


const root = document.querySelector<HTMLDivElement>('#app');

if (root) {
  setupRouter();
}

