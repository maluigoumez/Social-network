import { onSnapshot } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {
  auth, saveTask, deleteTask, onGetTask, getTask, updateTask,
} from '../lib/firebase';
import { setupPost } from './post';

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
        const doc = await getTask(e.target.dataset.id);
        const task = doc.data();
        textPost.value = task.content;
        editStatus = true;
        id = e.target.dataset.id;
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
        });
      });
      // console.log(posts);
      const htmlPost = setupPost(posts);
      sectionPost.innerHTML = htmlPost;
      //  console.log(sectionPost.querySelectorAll('.btn-delete'));
      const btnDelete = section.querySelectorAll('.btn-delete');
      const btnEdit = section.querySelectorAll('.btn-edit');
      deletePost(btnDelete);
      editPost(btnEdit);
    });
  }

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      drawPost();
    }
  });

  botonPost.addEventListener('click', () => {
    onAuthStateChanged(auth, async (user) => {
      const textoPostear = document.querySelector('textarea');
      const displayName = user.displayName;
      if (user) {
        saveTask(`${displayName}`, textoPostear.value)
          .then(() => {
            drawPost();
          });
      }
      if (!editStatus) {
        saveTask(`${displayName}`, textoPostear.value);
      } else {
        updateTask(id, {
          title: displayName,
          content: textoPostear.value,
        });
        editStatus = false;
      }
    });
  });

  buttonLogout.addEventListener('click', async () => {
    await signOut(auth);
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
