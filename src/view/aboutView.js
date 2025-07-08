export const AboutView = {
  render(about) {
    return `
      <section class="about">
        <div class="about-container">
          <div class="about-image">
            <img src="${about.image}" alt="${about.name}" class="profile-img" />
          </div>
          <div class="about-content">
            <h1 class="about-name">${about.name}</h1>
            <h2 class="about-title">${about.title}</h2>
            <p class="about-bio">${about.bio}</p>
            <p class="about-detail"><strong>Alamat:</strong> ${about.address}</p>
            <p class="about-detail">
              <strong>Email:</strong> <a href="mailto:${about.email}">${about.email}</a>
            </p>
          </div>
        </div>
      </section>
    `;
  },

  show(container, content) {
    container.innerHTML = content;
  },

  showError(container, message = "Gagal memuat data.") {
    container.innerHTML = `<p class="error">${message}</p>`;
  }
};
