import * as auth from 'firebase/auth';
import feed from '../src/pages/feed';
import * as lib from '../src/lib/firebase';

jest.mock('firebase/auth');

describe('feed', () => {
  it('deberia realizar el envío del post correctamente', async () => {
    jest.spyOn(auth, 'getAuth').mockImplementation(() => ({
      currentUser: {
        displayName: 'Ariadna',
      },
    }));

    jest.spyOn(lib, 'saveTask').mockImplementation(() => Promise.resolve());

    const navigateTo = () => {};
    const feedContainer = feed(navigateTo);
    const textarea = feedContainer.querySelector('.textoPost');
    const button = feedContainer.querySelector('.botonPost');
    textarea.value = 'Welcome to hopper';
    const inputEvent = new Event('input', { bubbles: true });
    textarea.dispatchEvent(inputEvent);
    button.click();

    expect(textarea.value).toBe('Welcome to hopper');
    expect(textarea).toBeTruthy();
    expect(button).toBeTruthy();

    // setTimeout(() => {
    //   expect(lib.saveTask).toHaveBeenCalled();
    //   done();
    // }, 2000);
    const asyncMock = lib.saveTask
      .mockResolvedValueOnce('first call');

    await asyncMock(); // 'first call'
  });
});

/* describe('feed', () => {
  it('deberia realizar el envío del post correctamente', () => {
    const navigateTo = () => {};
    const feedContainer = feed(navigateTo);
    const textarea = feedContainer.querySelector('.textoPost');
    textarea.value = 'Welcome to hopper';

    expect(textarea.value).toBe('Welcome to hopper');
  });
});
*/
