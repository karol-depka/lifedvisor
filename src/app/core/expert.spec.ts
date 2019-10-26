describe('expert', () => {
  // top-down: from use case to what happens
  ask([
    'I dont feel like',
    'lazy',
    'procrastinate',
    'no tengo ganas',
  ], [
    'increase motivation',

  ]);
  expectAsk('feel bad', []);
  expectAsk('stuck', [
    'momentum',
  ]);
});
