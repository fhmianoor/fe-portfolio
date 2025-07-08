export const HomeView = {
  render(home) {
    return `
      <section class="home">
        <div class="home-container">
          <h1>${home.name}</h1>
          <h2>${home.role}</h2>
          <p>${home.intro}</p>
          <a href="${home.ctaLink}" class="cta-button">${home.ctaText}</a>
        </div>
      </section>
    `;
  },

  show(container, html) {
    container.innerHTML = html;
  },

  showError(container, message = 'Gagal memuat halaman.') {
    container.innerHTML = `<p class="error">${message}</p>`;
  }
};
