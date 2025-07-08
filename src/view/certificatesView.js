export const CertificateView = {
  render(certificates) {
    return `
      <section class="certificates">
        <h2>Sertifikasi</h2>
        <div class="cert-grid">
          ${certificates.map(cert => `
            <div class="cert-card card">
              <img src="${cert.image}" alt="${cert.title}" />
              <h3>${cert.title}</h3>
              <p><strong>Penerbit:</strong> ${cert.issuer}</p>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  },

  show(container, content) {
    container.innerHTML = content;
  },

  showError(container, message = 'Gagal memuat sertifikat.') {
    container.innerHTML = `<p class="error">${message}</p>`;
  }
};
