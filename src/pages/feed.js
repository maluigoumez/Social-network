import { onAuthStateChanged, signOut } from 'firebase/auth';
import { getDocs, collection } from 'firebase/firestore';
import { db, auth } from '../lib/firebase';
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

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const querySnapshot = await getDocs(collection(db, 'post'));
      setupPost(querySnapshot.docs);
    }
  });

  buttonLogout.addEventListener('click', async () => {
    await signOut(auth);
    navigateTo('/');
    console.log('user sigout');
  });

  botonPost.addEventListener('click', async () => {
    await db.collection("post").add({
      
    })
  })
  section.append(title, textPost, botonPost);
  navFeed.appendChild(img);
  navFeed.appendChild(buttonLogout);

  return section;
}

export default feed;
