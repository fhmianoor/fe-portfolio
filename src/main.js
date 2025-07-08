import './routes/router.js';
import './style.css';
import './utils/logoHelper.js';

const wave = document.getElementById('wave-effect');

let lastX = 0;
let lastY = 0;
let lastTime = 0;

window.addEventListener('mousemove', (e) => {
  const dx = e.clientX - lastX;
  const dy = e.clientY - lastY;
  const dt = performance.now() - lastTime;

  const speed = Math.sqrt(dx * dx + dy * dy) / dt;

  if (speed > 0.5) {
    wave.style.opacity = 0.6;
    wave.style.transform = `translate(${e.clientX - 90}px, ${e.clientY - 90}px) scale(${Math.min(speed * 5, 2)})`;
  } else {
    wave.style.opacity = 0;
  }

  lastX = e.clientX;
  lastY = e.clientY;
  lastTime = performance.now();
});
document.addEventListener('DOMContentLoaded', () => {
  const paint = document.getElementById('paint-effect');
  if (!paint) return;

  window.addEventListener('mousemove', (e) => {
    const x = e.clientX - 100;
    const y = e.clientY - 100;

    paint.style.left = `${x}px`;
    paint.style.top = `${y}px`;
    paint.style.opacity = '1';
    paint.style.transform = `scale(${1 + Math.random() * 0.3}) rotate(${Math.random() * 30}deg)`;
  });

  window.addEventListener('mouseout', () => {
    paint.style.opacity = '0';
  });
});
