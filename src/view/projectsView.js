export const ProjectView = {
  render(projects) {
    return `
      <section class="projects">
        <h2>Proyek</h2>
        <div class="project-grid">
          ${projects.map(project => `
            <div class="project-card card">
              <h3>${project.title}</h3>
              <p class="description">${project.description}</p>
              <p><strong>Tahun:</strong> ${project.year}</p>
              <a href="${project.repo}" target="_blank" rel="noopener noreferrer">Lihat Repository</a>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  },

  show(container, content) {
    container.innerHTML = content;
  },

  showError(container, message = 'Gagal memuat data proyek.') {
    container.innerHTML = `<p class="error">${message}</p>`;
  }
};
