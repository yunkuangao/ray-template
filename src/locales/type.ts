import type {
  DropdownOption,
  DropdownGroupOption,
  DropdownDividerOption,
  DropdownRenderOption,
} from 'naive-ui'
import type { Recordable } from '@/types/modules/helper'

export interface CurrentAppMessages {
  'zh-CN': object
  'en-US': object
}

export type AppLocalesDropdownMixedOption =
  | DropdownOption
  | DropdownGroupOption
  | DropdownDividerOption
  | DropdownRenderOption

export interface AppLocalesModules {
  default: {
    message: UnknownObjectKey
  }
}

export type I18nModules = Record<string, { default: Recordable }>
