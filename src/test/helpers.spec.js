import { increment } from './helpers';

describe('increment', () => {
  test('현재 숫자를 1씩 증가', () => {
    expect(increment(0, 10)).toBe(1);
  });

  test('현재 숫자를 최대값 이상으로 증가시키지 않습니다.', () => {
    expect(increment(10, 10)).toBe(10);
  });

  test('기본 최대값은 10입니다.', () => {
    expect(increment(10)).toBe(10);
  });
});
