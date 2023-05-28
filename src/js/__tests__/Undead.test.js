import Undead from '../Undead';

test('check undead is created', () => {
  const gamer = new Undead('gamer');
  expect(gamer).toEqual(
    {
      name: 'gamer',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  );
});

test('check Undead error type', () => {
  expect(() => {
    const gamer = new Undead('gamer');
    gamer.health = -1;
    gamer.levelUp();
  }).toThrowError('нельзя повысить левел умершего');
});
