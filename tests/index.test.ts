import { describe, expect, test } from 'vitest'
import { isArray, isBoolean, isDate, isNull, isObject, isString, isUndefin } from '../src/utils'

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

})