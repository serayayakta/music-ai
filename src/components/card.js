export function Card(title, content) {
  return `
      <div class="card">
          <h2>${title}</h2>
          <p>${content}</p>
      </div>
  `;
}