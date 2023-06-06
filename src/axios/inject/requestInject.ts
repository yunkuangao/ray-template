/**
 *
 * @author Ray <https://github.com/XiaoDaiGua-Ray>
 *
 * @date 2023-06-06
 *
 * @workspace ray-template
 *
 * @remark 今天也是元气满满撸代码的一天
 */

/** 请求拦截器入口 */

import { useAxiosInterceptor, axiosCanceler } from '@/axios/helper/interceptor'
import { appendRequestHeaders } from '@/axios/helper/axiosCopilot'

import type { RequestInterceptorConfig } from '@/axios/type'

const { getAxiosFetchInstance, setImplementQueue } = useAxiosInterceptor()

/** 注入请求头信息 */
const injectRequestHeaders = () => {
  const request = getAxiosFetchInstance(
    'requestInstance',
  ) as RequestInterceptorConfig

  appendRequestHeaders(request, [
    {
      key: 'X-TOKEN',
      value: 'token',
    },
  ])
}

/** 注入重复请求拦截器 */
const injectCanceler = () => {
  const request = getAxiosFetchInstance(
    'requestInstance',
  ) as RequestInterceptorConfig

  axiosCanceler.removePendingRequest(request) // 检查是否存在重复请求, 若存在则取消已发的请求
  axiosCanceler.addPendingRequest(request) // 把当前的请求信息添加到 pendingRequest 表中
}

/** 注册请求拦截器 */
export const setupRequestInterceptor = () => {
  setImplementQueue([injectRequestHeaders, injectCanceler], 'requestInstance')
}