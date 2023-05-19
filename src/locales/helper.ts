/**
 *
 * @author Ray <https://github.com/XiaoDaiGua-Ray>
 *
 * @date 2023-05-19
 *
 * @workspace ray-template
 *
 * @remark 今天也是元气满满撸代码的一天
 */

/**
 *
 * 国际化辅助方法:
 *   - mergeMessage: 合并对应文件下语言包
 *   - getAppLocales: 获取所有语言
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { set } from 'lodash-es'

import type { Recordable } from '@/types/type-utils'

export const mergeMessage = (langs: Record<string, any>, prefix = 'lang') => {
  const langsGather: Recordable = {}

  Object.keys(langs).forEach((key) => {
    const langFileModule = langs[key].default

    let fileName = key.replace(`./${prefix}/`, '').replace(/^\.\//, '')
    const lastIndex = fileName.lastIndexOf('.')

    fileName = fileName.substring(0, lastIndex)

    const keyList = fileName.split('/')
    const moduleName = keyList.shift()
    const objKey = keyList.join('.')

    if (moduleName) {
      if (objKey) {
        set(langsGather, moduleName, langsGather[moduleName] || {})
        set(langsGather[moduleName], objKey, langFileModule)
      } else {
        set(langsGather, moduleName, langFileModule || {})
      }
    }
  })

  return langsGather
}

/** 获取所有语言 */
export const getAppLocales = async (
  localOptions: {
    key: string
    label: string
  }[],
) => {
  const message = {}

  for (const curr of localOptions) {
    const msg = await import(`./lang/${curr.key}.ts`)

    message[curr.key] = msg.default?.message ?? {}
  }

  return message
}
