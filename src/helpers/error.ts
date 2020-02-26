import { AxiosRequestConfig, AxiosResponse } from '../types'

export class AxiosError extends Error {
  // 定义类的成员属性
  isAxiosError: boolean
  config: AxiosRequestConfig
  code?: string | null
  request?: any
  response?: AxiosResponse

  // 构造函数
  constructor(
    message: string,
    config: AxiosRequestConfig,
    code?: string | null,
    request?: any,
    response?: AxiosResponse
  ) {
    // 通过super去call父类，继承父类
    super(message)

    this.config = config
    this.code = code
    this.request = request
    this.response = response
    this.isAxiosError = true

    // TS的坑：继承内置对象时有bug
    Object.setPrototypeOf(this, AxiosError.prototype)
  }
}

// 工厂函数
export function createError(
  message: string,
  config: AxiosRequestConfig,
  code?: string | null,
  request?: any,
  response?: AxiosResponse
) {
  const error = new AxiosError(message, config, code, request, response)
  return error
}
