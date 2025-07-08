export const SkillView = {
  render(skills) {
    return `
      <section class="skills">
        <h2>Keahlian</h2>
        <div class="skill-list">
          ${skills.map(skill => `
            <div class="skill-card card">
              <h3>${skill.category}</h3>
              <p>${skill.items}</p>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  },

  show(container, content) {
    container.innerHTML = content;
  },

  showError(container, message = 'Gagal memuat data keahlian.') {
    container.innerHTML = `<p class="error">${message}</p>`;
  }
};
