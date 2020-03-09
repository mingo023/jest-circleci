test('Should return plus', () => {
  expect(2 + 2).toBe(4);
});

test('returns undefined by default', () => {
  const mock = jest.fn();

  let result = mock('foo');

  expect(result).toBeUndefined();
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith('foo');
});

test('mock return defined value', () => {
  const fooFnc = value => value;
  const mock = jest.fn(fooFnc);

  mock.mockReturnValue('bar');

  expect(mock('foo')).toBe('bar');
});
