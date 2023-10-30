import { onSnapshot } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {
  auth, saveTask, deleteTask, onGetTask, getTask, updateTask,
} from '../lib/firebase';
import { setupPost } from './post';
import { showMessage } from './showMessage';

function feed(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h3');
  const buttonLogout = document.createElement('button');
  const img = document.createElement('img');
  const appName = document.createElement('h1');
  const textPost = document.createElement('textarea');
  const navFeed = document.createElement('nav');
  const botonPost = document.createElement('button');
  const sectionPost = document.createElement('section');
  /*
  /// /// Modal
  const ventanaModal = document.createElement('div');
  const contenidoModal = document.createElement('div');
  const span = document.createElement('span');
  const botonModal = document.createElement('button');
  const textoModal = document.createElement('p');

  span.className = 'cerrar';
  ventanaModal.className = 'modal';
  contenidoModal.className = 'contenido-modal';
  botonModal.className = 'abrirModal';
  textoModal.textContent = 'Seguro quieres eliminar tu post?';

  // Si el usuario hace click en la cancelar, la ventana se cierra
  ventanaModal.appendChild(contenidoModal, textoModal, span);
  span.addEventListener('click', () => {
    ventanaModal.style.display = 'none';
  });

  // Si el usuario hace click fuera de la ventana, se cierra.
  window.addEventListener('click', (event) => {
    if (event.target == ventanaModal) {
      ventanaModal.style.display = 'none';
    }
  });
  */
  /// /// /// //-------------------------------------------------------
  sectionPost.classList.add('posts');
  appName.textContent = '{HOPPER}';
  title.textContent = '"You only fail when you stop trying"';
  img.src = 'router/cubo.jpg';
  img.alt = 'logo';
  textPost.placeholder = 'what are you thinking?';
  buttonLogout.textContent = 'Logout';
  textPost.className = 'textoPost';
  botonPost.textContent = 'Post';
  botonPost.className = 'botonPost';

  img.className = 'logoFeed';
  navFeed.className = 'navegador';
  section.classList = 'seccionFeed';
  buttonLogout.className = 'botonLogout';

  let editStatus = false;
  let id = '';

  function deletePost(array) {
    array.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        // console.log(event.target.dataset.id);
        deleteTask(event.target.dataset.id);
      });
    });
  }

  function editPost(array) {
    array.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        // console.log("Edit button clicked");
        // console.log("Post ID:", e.target.dataset.id);

        const doc = await getTask(e.target.dataset.id);
        const task = doc.data();
        textPost.value = task.content;
        editStatus = true;
        id = e.target.dataset.id;
        // updates button text
        botonPost.textContent = 'Send edit';
      });
    });
  }
  async function drawPost() {
    onSnapshot(onGetTask(), (querySnapshot) => {
      const posts = [];
      querySnapshot.forEach((doc) => {
        posts.push({
          id: doc.id,
          title: doc.data().title,
          content: doc.data().content,
          date: doc.data().date,
          email: doc.data().email,
        });
      });
      // console.log(posts);
      const htmlPost = setupPost(posts);
      sectionPost.innerHTML = htmlPost;
      //  console.log(sectionPost.querySelectorAll('.btn-delete'));
      const btnDelete = section.querySelectorAll('.btn-delete');
      const btnEdit = section.querySelectorAll('.btn-edit');

      // console.log("Number of Edit buttons:", btnEdit.length);

      deletePost(btnDelete);
      editPost(btnEdit);
    });
  }

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      drawPost();
    }
  });
  //------------------------
  botonPost.addEventListener('click', () => {
    onAuthStateChanged(auth, async (user) => {
      const textoPostear = document.querySelector('textarea');
      const displayName = user.displayName;
      if (user && textPost.value !== '') {
        // If in edit mode, update the post content instead of creating a new one
        if (editStatus) {
          if (id) {
            // Retrieve the edited content from the textarea
            const editedContent = textoPostear.value;
            // validates that the edited content is not just an empty string
            if (editedContent.trim() !== '') {
              // Call updateTask with an object containing the new content
              updateTask(id, { content: editedContent })
                .then(() => {
                  // Reset the editStatus and button text
                  editStatus = false;
                  id = '';
                  botonPost.textContent = 'Post';
                  // Clear the textarea
                  textoPostear.value = '';
                  // Redraw the posts with the updated content
                  drawPost();
                })
                .catch((error) => {
                  showMessage('Error updating post:', error);
                });
            } else {
              showMessage('Edited content is empty.');
            }
          }
        } else {
          // If not in edit mode, create a new post
          saveTask(displayName, textoPostear.value)
            .then(() => {
              // Clear the textarea
              textoPostear.value = '';
              // Redraw the posts with the new post
              drawPost();
            })
            .catch((error) => {
              // alert("Error creating post:");
              showMessage('Error creating post'`${error}`, 'success');
            });
        }
      }
    });
  });

  //-------------------------
  buttonLogout.addEventListener('click', async () => {
    await signOut(auth);
    navigateTo('/');
    // console.log("user signout");
    navigateTo('/');
    // console.log('user sigout');
  });

  section.append(navFeed, title, textPost, botonPost);
  navFeed.appendChild(img);
  navFeed.appendChild(buttonLogout);
  section.appendChild(sectionPost);

  return section;
}

export default feed;
