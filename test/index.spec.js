// importamos la funcion que vamos a testear
import deleteTask from '../src/pages/feed';
import { setupPost } from '../src/pages/post';

describe('DelatePostFunction', () => {
  it('debería ser una función', () => {
    expect(typeof deleteTask).toBe('function');
  });
});

describe('Agregar un post', () => {
  it('debería ser una función', () => {
    expect(typeof setupPost).toBe('function');
  });
});

describe('Postear', () => {
  it('debería ser una función', () => {
    expect(typeof setupPost).toBe('function');
  });
});
