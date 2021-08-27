export function hola(text) {
  const div = document.createElement('div');
  div.textContent = `Hola ${text}`;
  document.body.appendChild(div);
}
