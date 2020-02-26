// 这个就是之前整理的 JS 中用来判断值是属于对象的哪种类型，返回一个字符串
const toString = Object.prototype.toString

// 判断是否为日期，函数的返回值使用了类型保护
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

// 判断是否为对象 typeof null === 'object'
export function isObject(val: any): val is Object {
  return val !== null && typeof val === 'object'
}

// 判断是否为纯的对象
export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

// 实现混合对象
export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}
