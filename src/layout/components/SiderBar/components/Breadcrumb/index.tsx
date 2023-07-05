/**
 *
 * @author Ray <https://github.com/XiaoDaiGua-Ray>
 *
 * @date 2023-03-03
 *
 * @workspace ray-template
 *
 * @remark 今天也是元气满满撸代码的一天
 */

/**
 *
 * 顶部面包屑
 *
 * 如果下拉菜单条目小于一条, 则不会触发下拉菜单
 *
 * 添加 <span> 标签, 避免 Runtime directive used on component... 警告
 */

import { NDropdown, NBreadcrumb, NBreadcrumbItem } from 'naive-ui'

import { useMenu } from '@/store'

import type { DropdownOption, MenuOption } from 'naive-ui'
import type {
  AppMenuOption,
  MenuTagOptions,
  AppMenuKey,
} from '@/types/modules/app'

const Breadcrumb = defineComponent({
  name: 'RBreadcrumb',
  setup() {
    const menuStore = useMenu()

    const { changeMenuModelValue } = menuStore
    const { breadcrumbOptions } = storeToRefs(menuStore)
    const modelBreadcrumbOptions = computed(() => breadcrumbOptions.value)

    const handleDropdownSelect = (
      key: string | number,
      option: DropdownOption,
    ) => {
      changeMenuModelValue(key, option as unknown as AppMenuOption)
    }

    const handleBreadcrumbItemClick = (option: AppMenuOption) => {
      if (!option.children?.length) {
        const { meta = {} } = option

        if (!meta.sameLevel) {
          changeMenuModelValue(option.key, option)
        }
      }
    }

    return {
      modelBreadcrumbOptions,
      handleDropdownSelect,
      handleBreadcrumbItemClick,
    }
  },
  render() {
    return (
      <NBreadcrumb>
        {this.modelBreadcrumbOptions.map((curr) => (
          <NBreadcrumbItem
            key={curr.key}
            onClick={this.handleBreadcrumbItemClick.bind(this, curr)}
          >
            <NDropdown
              labelField="breadcrumbLabel"
              options={
                curr.children && curr.children?.length > 1 ? curr.children : []
              }
              onSelect={this.handleDropdownSelect.bind(this)}
            >
              {{
                default: () => (
                  <span>
                    {curr.label && typeof curr.label === 'function'
                      ? curr.label()
                      : curr.breadcrumbLabel}
                  </span>
                ),
              }}
            </NDropdown>
          </NBreadcrumbItem>
        ))}
      </NBreadcrumb>
    )
  },
})

export default Breadcrumb
