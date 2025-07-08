export default class BaseView {
  constructor(sectionId, titleText) {
    this.section = document.createElement('section');
    this.section.id = sectionId;
    const title = document.createElement('h2');
    title.textContent = titleText;
    this.section.appendChild(title);
    document.getElementById('app').appendChild(this.section);
  }
  clear() { [...this.section.children].slice(1).forEach(c=>c.remove()); }
}