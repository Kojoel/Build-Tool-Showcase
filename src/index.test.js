import _ from 'lodash';

test('Lodash join works correctly', () => {
  expect(_.join(['Hello', 'World'], ' ')).toBe('Hello World');
});
