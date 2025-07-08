import logoSrc from '../assets/logohome.png';

class LogoComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <a href="#/">
    <img src="${logoSrc}" alt="Logo" style="width: 90px; height: 90px;" />
    </a>
    `;
  }
}

customElements.define('logo-component', LogoComponent);
