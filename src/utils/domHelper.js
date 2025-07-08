export function ensureContainer(id) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('section');
    el.id = id;
    document.getElementById('app').appendChild(el);
  }
  return el;
}
