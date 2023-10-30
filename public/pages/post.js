// const postList = document.querySelector('.posts');
import { auth } from '../lib/firebase';

export const setupPost = (data) => {
  if (data.length) {
    let html = '';
    data.forEach((doc) => {
      const publicacion = doc;
      const divPost = `
      <div class= "cadaPost">
        <h5 class="tituloPost">${publicacion.title}</h5>
        <p class="parrafoPost">${publicacion.content}</p>
        ${auth.currentUser.email === doc.email
    ? ` <button class="btn-delete" data-id="${doc.id}">Delete</button>
          <button class="btn-edit" data-id="${doc.id}">Edit</button> ` : ' '}
      </div>
        `;
      html += divPost;
    });
    // postList.innerHTML = html;
    return html;
  }
  return '<h4 class="alertPost"> login to see posts</h4>';
};
