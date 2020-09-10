const { original } = require('my-package');
const { scoped, checkOriginal } = require('@my-scope/my-package');

test('original normal', () => {
  expect(original).toEqual('out of the scope');
});


test('scoped normal', () => {
  expect(scoped).toEqual('in the scope');
});

test('checkOriginal normal', () => {
  expect(checkOriginal()).toEqual('out of the scope');
});
