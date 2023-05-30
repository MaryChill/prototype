import Bowman from '../Bowman';

test('check bowman is created', () => {
  const gamer = new Bowman('gamer');
  expect(gamer).toEqual(
    {
      name: 'gamer',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
  );
});

test('check Bowman error levelUp', () => {
  expect(() => {
    const gamer = new Bowman('gamer');
    gamer.health = -1;
    gamer.levelUp();
  }).toThrowError('нельзя повысить левел умершего');
});

test('check Bowman levelUp', () => {
  const gamer = new Bowman('gamer');
  gamer.levelUp();
  expect(gamer).toEqual(
    {
      name: 'gamer',
      type: 'Bowman',
      health: 100,
      level: 2,
      attack: 30,
      defence: 30,
    },
  );
});

test('check Bowman damage', () => {
  const gamer = new Bowman('gamer');
  gamer.damage(15);
  expect(gamer.health).toBeCloseTo(88.75);
});

test('check Bowman error damage', () => {
  expect(() => {
    const gamer = new Bowman('gamer');
    gamer.health = -1;
    gamer.damage(15);
  }).toThrowError('персонаж умер');
});

test('check Bowman error name', () => {
  expect(() => {
    const gamer = new Bowman('g');
  }).toThrowError('некорректное имя');
});
