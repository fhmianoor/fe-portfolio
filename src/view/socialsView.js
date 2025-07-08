import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';
import instagramIcon from '../assets/instagram.png';

export const SocialView = {
  render(social) {
    return `
      <section class="socials">
        <h2>Media Sosial</h2>
        <div class="social-links">
          <a href="${social.github}" target="_blank" rel="noopener noreferrer">
            <img src="${githubIcon}" alt="GitHub" width="24" /> GitHub
          </a>
          <a href="${social.linkedin}" target="_blank" rel="noopener noreferrer">
            <img src="${linkedinIcon}" alt="LinkedIn" width="24" /> LinkedIn
          </a>
          <a href="${social.instagram}" target="_blank" rel="noopener noreferrer">
            <img src="${instagramIcon}" alt="Instagram" width="24" /> Instagram
          </a>
        </div>
      </section>
    `;
  },

  show(container, content) {
    container.innerHTML = content;
  },

  showError(container, message = 'Gagal memuat data sosial media.') {
    container.innerHTML = `<p class="error">${message}</p>`;
  }
};
