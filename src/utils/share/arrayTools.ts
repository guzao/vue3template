import { isArray } from './dataTypeTools'

/**
 *get array first element
*/
export function getArrayFirstElemenet <T> (data: T []) {
  if (isArray(data)) {
    return data[0]
  }
  return console.error(`param ${data} is not array!!`);
}
