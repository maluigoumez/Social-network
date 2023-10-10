import { onAuthStateChanged, signOut } from 'firebase/auth';
import {
  auth, saveTask, deleteTask, getTasks, onGetTask, getTask,
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
  const navFeed = document.getElementById('navFeed');
  const botonPost = document.createElement('button');
  const sectionPost = document.createElement('section');
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

  function deletePost(array) {
    array.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        deleteTask(event.target.dataset.id);
      });
    });
  }
  function editPost(array) {
    array.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const doc = await getTask(e.target.dataset.id);
        const task = doc.data();
        textPost.value = task.description;
      });
    });
  }
  async function drawPost() {
    const querySnapshot = await getTasks();
    // onsnapshot
    const htmlPost = setupPost(querySnapshot.docs);
    sectionPost.innerHTML = htmlPost;
    const btnDelete = section.querySelectorAll('.btn-delete');
    const btnEdit = section.querySelectorAll('.btn-edit');
    /* btnDelete.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      console.log(event.target.dataset.id);
    });
  }); */
    deletePost(btnDelete);
    editPost(btnEdit);
  }

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      drawPost();
    }
  });

  botonPost.addEventListener('click', () => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const textoPostear = document.querySelector('textarea');
        const displayName = user.displayName;
        saveTask(`${displayName}`, textoPostear.value)
          .then(() => {
            drawPost();
          });
      }
    });
  });

  buttonLogout.addEventListener('click', async () => {
    await signOut(auth);
    navigateTo('/');
    console.log('user sigout');
  });

  section.append(navFeed, title, textPost, botonPost);
  navFeed.appendChild(img);
  navFeed.appendChild(buttonLogout);
  section.appendChild(sectionPost);

  return section;
}

export default feed;
