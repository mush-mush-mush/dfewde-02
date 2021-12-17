import 'regenerator-runtime';
import '../styles/main.scss';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#navButton'),
  drawer: document.querySelector('#navDrawer'),
  content: document.querySelector('#mainContent'),
  menuLinks: document.querySelectorAll('.navbar-menu__link'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('body').classList.remove('hidden');
  app.renderPage();
  swRegister();
});
