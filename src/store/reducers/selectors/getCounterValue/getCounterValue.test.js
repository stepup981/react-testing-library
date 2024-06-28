import { getCounterValue } from "./getCounterValue"

describe('getCounterValue', () => {
  test('work with empty state', () => {
    expect(getCounterValue({
      counter: {
        value: 100
      }
    })).toBe(100)
  })
})