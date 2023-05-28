import Magician from '../Magician';

test('check magician is created', () => {
  const gamer = new Magician('gamer');
  expect(gamer).toEqual(
    {
      name: 'gamer',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  );
});

test('check Magician error type', () => {
  expect(() => {
    const gamer = new Magician('gamer');
    gamer.health = -1;
    gamer.levelUp();
  }).toThrowError('нельзя повысить левел умершего');
});
