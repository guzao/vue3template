
type ObjectForEachCallback <T> = (value: T[Extract<keyof T, string>], kek:  Extract<keyof T, string>, _this: T) => void

/**
 * 循环对象 || 数组
 * @param raw 对象
 * @param callback
*/
export function objectForEach <T extends object > (raw: T, callback: ObjectForEachCallback<T>) {
  for (const key in raw) {
    if (Object.prototype.hasOwnProperty.call(raw, key)) {
      const value = raw[key]
      callback(value, key, raw)
    }
  }
}