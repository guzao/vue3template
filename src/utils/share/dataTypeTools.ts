
/**
 * 数据类型枚举
*/
enum DataType {
  OBJECT = 'Object',
  UNDEFINED = 'Undefined',
  ARRAY = 'Array',
  NULL = 'Null',
  DATE = 'Date',
  BOOLEAN = 'Boolean',
  STRING = 'String',
  NUMBER = 'Numbber',
  REGEXP = 'RegExp',
  FUNCTION = 'Function',
  MAP = 'Map',
  SET = 'Set',
}


export const toString = (data: any) => Object.prototype.toString.call(data)

function getToStringResult (data: any): string {
  return toString(data).replace('[object ', '').replace(']', '')
}

export function isObject (data: any) {
  return getToStringResult(data) === DataType.OBJECT
} 

export function isArray (data: any) {
  return getToStringResult(data) === DataType.ARRAY
} 

export function isNull (data: any) {
  return getToStringResult(data) === DataType.NULL
} 

export function isDate (data: any) {
  return getToStringResult(data) === DataType.DATE
} 

export function isUndefin (data: any) {
  return getToStringResult(data) === DataType.UNDEFINED
} 

export function isBoolean (data: any) {
  return getToStringResult(data) === DataType.BOOLEAN
} 

export function isString (data: any) {
  return getToStringResult(data) === DataType.STRING
} 

export function isRegExp (data: any) {
  return getToStringResult(data) === DataType.REGEXP
} 

export function isFunction (data: any) {
  return getToStringResult(data) === DataType.FUNCTION
} 
export function isMap (data: any) {
  return getToStringResult(data) === DataType.MAP
} 

export function isSet (data: any) {
  return getToStringResult(data) === DataType.SET
} 