import { AboutPresenter } from '../presenter/aboutPresenter.js';
import { ProjectPresenter } from '../presenter/projectsPresenter.js';
import { EducationPresenter } from '../presenter/educationsPresenter.js';
import { SkillPresenter } from '../presenter/skillsPresenter.js';
import { SocialPresenter } from '../presenter/socialsPresenter.js';
import { CertificatePresenter } from '../presenter/certificatesPresenter.js';
import { HomePresenter } from '../presenter/homePresenter.js';

const routes = {
  '/about': AboutPresenter,
  '/certificates': CertificatePresenter,
  '/projects': ProjectPresenter,
  '/': HomePresenter,
  '/education': EducationPresenter,
  '/skills': SkillPresenter,
  '/socials': SocialPresenter
};

function router() {
  const app = document.getElementById('app');
  app.innerHTML = '';

  const hash = location.hash.slice(1) || '/';
  const route = routes[hash];

  if (route) {
    const container = document.createElement('section');
    container.id = hash.replace('/', '') + '-container';
    app.appendChild(container);

    if (typeof route === 'function') {
      route(container); // function-based presenter
    } else if (typeof route.init === 'function') {
      route.init(container); // object-based presenter
    } else {
      app.innerHTML = `<p class="error">Presenter tidak valid.</p>`;
    }
  } else {
    app.innerHTML = `<p class="error">Halaman tidak ditemukan.</p>`;
  }
}


window.addEventListener('hashchange', router);
window.addEventListener('load', router);
