import printJs from 'print-js'
import { unrefElement } from '@/utils/vue/index'
import { watchEffectWithTarget } from '@/utils/vue/index'

import type {
  ValidateValueType,
  DownloadAnyFileDataType,
  BasicTypes,
} from '@/types/modules/utils'
import type { BasicTarget, TargetValue } from '@/types/modules/vue'

/**
 *
 * @returns 获取当前项目环境
 */
export const getAppEnvironment = () => {
  const env = import.meta.env

  return env
}

/**
 *
 * @param data 二进制流数据
 *
 * 将 base64 格式文件转换为图片
 *
 * @example
 * arrayBufferToBase64Image('base64') => Image
 */
export const arrayBufferToBase64Image = (data: ArrayBuffer): string | null => {
  if (!data || data.byteLength) {
    return null
  }

  const base64 =
    'data:image/png;base64,' +
    window.btoa(
      new Uint8Array(data).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        '',
      ),
    )

  return base64
}

/**
 *
 * @param base64 base64
 * @param fileName file name
 *
 * 该方法仅能下载 base64 文件，如果有其他的文件类型需要下载，请看 downloadAnyFile 方法
 *
 * @example
 * downloadBase64File('base64', 'file name')
 */
export const downloadBase64File = (base64: string, fileName: string) => {
  const link = document.createElement('a')

  link.href = base64
  link.download = fileName

  link.style.display = 'none'

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

/**
 *
 * @param value 目标值
 * @param type 类型
 *
 * @example
 * isValueType<string>('123', 'String') => true
 * isValueType<object>({}, 'Object') => true
 */
export const isValueType = <T extends BasicTypes>(
  value: unknown,
  type: ValidateValueType,
): value is T => {
  const valid = Object.prototype.toString.call(value)

  return valid.includes(type)
}

/**
 *
 * @param length uuid 长度
 * @param radix uuid 基数
 *
 * @example
 * uuid(8) => 'B8tGcl0FCKJkpO0V'
 */
export const uuid = (length = 16, radix = 62) => {
  // 定义可用的字符集，即 0-9, A-Z, a-z
  const availableChars =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  // 定义存储随机字符串的数组
  const arr: string[] = []
  // 获取加密对象，兼容 IE11
  const cryptoObj = window.crypto || window.msCrypto
  let i = 0

  // 循环 length 次，生成随机字符，并添加到数组中
  for (i = 0; i < length; i++) {
    // 生成一个随机数
    const randomValues = new Uint32Array(1)

    cryptoObj.getRandomValues(randomValues)

    // 根据随机数生成对应的字符，并添加到数组中
    const index = randomValues[0] % radix

    arr.push(availableChars[index])
  }

  // 将数组中的字符连接起来，返回最终的字符串
  return arr.join('')
}

/**
 *
 * @param data base64, Blob, ArrayBuffer type
 * @param fileName file name
 *
 * 支持下载任意类型的文件，包括 base64, Blob, ArrayBuffer
 *
 * @example
 * downloadAnyFile('base64', 'file name')
 * downloadAnyFile('Blob', 'file name')
 */
export const downloadAnyFile = (
  data: DownloadAnyFileDataType,
  fileName: string,
): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    let blobData!: Blob

    try {
      if (typeof data === 'string') {
        downloadBase64File(data, fileName)
        resolve()

        return
      }

      if (data instanceof ArrayBuffer) {
        blobData = new Blob([new Uint8Array(data)], {
          type: 'application/octet-stream',
        })
      } else if (data instanceof File || data instanceof Blob) {
        blobData = data
      } else {
        reject(new Error('downloadAnyFile: Unsupported data type.'))

        return
      }

      const url = URL.createObjectURL(blobData)
      const link = document.createElement('a')

      link.href = url
      link.download = fileName
      link.style.display = 'none'

      const remove = () => {
        URL.revokeObjectURL(url)
        document.body.removeChild(link)
      }

      link.addEventListener('load', () => {
        remove()
        resolve()
      })

      link.addEventListener('error', (error) => {
        remove()
        reject(error)
      })

      document.body.appendChild(link)
      link.click()
    } catch (error) {
      reject(error)
    }
  })
}

export function print<T extends BasicTarget<HTMLElement>>(
  target: T,
  options?: printJs.Configuration,
) {
  const element = computed(() => unrefElement(target))
  const { printable, ...args } = options ?? {}

  const $print = <T extends HTMLElement>(element: TargetValue<T>) => {
    printJs({
      ...args,
      printable: element,
    })
  }

  const watcher = watch(element, (ndata) => $print(ndata), {
    immediate: true,
  })

  watchEffectWithTarget(watcher)
}