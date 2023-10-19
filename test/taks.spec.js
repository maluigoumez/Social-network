import { saveTask } from '../src/lib/firebase';

describe('saveTask', () => {
  it('Deberia de guardar ', () => saveTask('Hola').then((data) => {
    expect(data).toBe('String');
  }));
});
