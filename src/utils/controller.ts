export function HomeController() {
  const button = document.querySelector('.js-scroll-to-categories');
  const target = document.getElementById('categories');

  if (button && target) {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  }
}
