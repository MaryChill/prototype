import Daemon from '../Daemon';

test('check daemon is created', () => {
  const gamer = new Daemon('gamer');
  expect(gamer).toEqual(
    {
      name: 'gamer',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
  );
});

test('check Daemon error type', () => {
  expect(() => {
    const gamer = new Daemon('gamer');
    gamer.health = -1;
    gamer.levelUp();
  }).toThrowError('нельзя повысить левел умершего');
});
