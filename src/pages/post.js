// const postList = document.querySelector('.posts');

export const setupPost = (data) => {
  if (data.length) {
    let html = '';
    data.forEach((doc) => {
      const publicacion = doc.data();
      const divPost = `
      <div class= "cadaPost">
        <h5 class="tituloPost">${publicacion.title}</h5>
        <p class="parrafoPost">${publicacion.content}</p>
        <button class="btn-delete" >Delete</button>
      </div>
        `;
      html += divPost;
    });
    // postList.innerHTML = html;
    const btnDelete = document.querySelectorAll('.btn-delete');
    console.log(btnDelete);
    return html;
  }
  return '<h4 class="alertPost"> login to see posts</h4>';
};
