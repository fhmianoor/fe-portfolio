export const EducationView = {
  render(educations) {
    return `
      <section class="education">
        <h2>Pendidikan</h2>
        <div class="edu-list">
          ${educations.map(edu => `
            <div class="edu-card">
              <h3>${edu.school}</h3>
              <p><strong>Jurusan:</strong> ${edu.major}</p>
              <p><strong>Gelar:</strong> ${edu.degree}</p>
              <p><strong>IPK:</strong> ${edu.gpa}</p>
              <p><strong>Tahun:</strong> ${edu.start} - ${edu.end}</p>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  },

  show(container, content) {
    container.innerHTML = content;
  },

  showError(container, message = 'Gagal memuat data pendidikan.') {
    container.innerHTML = `<p class="error">${message}</p>`;
  }
};
