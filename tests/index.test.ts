import { describe, expect, test } from 'vitest'
import { isArray, isBoolean, isDate, isNull, isObject, isString, isUndefin, isFalse, isTrue } from '../src/utils'
describe('test', () => {

  test('isArray', () => {
    expect(isArray([])).toBe(true)
  })

  test('isBoolean', () => {
    expect(isBoolean(false)).toBe(true)
  })

  test('isDate', () => {
    expect(isDate(new Date())).toBe(true)
  })

  test('isNull', () => {
    expect(isNull(null)).toBe(true)
  })

  test('isObject', () => {
    expect(isObject([])).toBe(false)
    expect(isObject({})).toBe(true)
  })

  test('isString', () => {
    expect(isString('')).toBe(true)
  })

  test('isUndefin', () => {
    expect(isUndefin(undefined)).toBe(true)
  })

  test('isTrue', () => {
    expect(isTrue(true)).toBe(true)
    expect(isTrue([])).toBe(true)
    expect(isTrue({})).toBe(true)
    expect(isTrue(1)).toBe(true)
    expect(isTrue(false)).toBe(false)
  })

  test('isFalse', () => {
    expect(isFalse(undefined)).toBe(true)
    expect(isFalse('')).toBe(true)
    expect(isFalse(0)).toBe(true)
    expect(isFalse(false)).toBe(true)
    expect(isFalse(true)).toBe(false)
  })

})