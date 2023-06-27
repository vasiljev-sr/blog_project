import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('С основным классом', () => {
    expect(classNames('class')).toBe('class');
  });
  test('С массивом additional', () => {
    const additional = ['class1', 'class2'];
    const expected = 'class class1 class2';
    expect(classNames('class', {}, additional)).toBe(expected);
  });
  test('С объектом mods', () => {
    const mods = { hovered: true, expected: false };
    const expected = 'class hovered';
    expect(classNames('class', mods)).toBe(expected);
  });
});
