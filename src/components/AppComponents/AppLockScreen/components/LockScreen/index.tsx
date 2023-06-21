/**
 *
 * @author Ray <https://github.com/XiaoDaiGua-Ray>
 *
 * @date 2023-06-20
 *
 * @workspace ray-template
 *
 * @remark 今天也是元气满满撸代码的一天
 */

/** 锁屏界面 */

import { NInput, NForm, NFormItem, NButton, NSpace } from 'naive-ui'
import AppAvatar from '@/components/AppComponents/AppAvatar/index'

import { useSetting } from '@/store'
import useAppLockScreen from '@/components/AppComponents/AppLockScreen/appLockVar'
import {
  rules,
  useCondition,
  autoFouceInput,
} from '@/components/AppComponents/AppLockScreen/hook'

import type { FormInst, InputInst } from 'naive-ui'

const LockScreen = defineComponent({
  name: 'LockScreen',
  setup() {
    const formInstRef = ref<FormInst | null>(null)
    const inputInstRef = ref<InputInst | null>(null)

    const { setLockAppScreen } = useAppLockScreen()
    const { changeSwitcher } = useSetting()

    const state = reactive({
      lockCondition: useCondition(),
    })

    /** 锁屏 */
    const lockScreen = () => {
      formInstRef.value?.validate((error) => {
        if (!error) {
          setLockAppScreen(true)
          changeSwitcher(true, 'lockScreenSwitch')

          state.lockCondition = useCondition()
        }
      })
    }

    autoFouceInput(inputInstRef)

    return {
      ...toRefs(state),
      lockScreen,
      formInstRef,
      inputInstRef,
    }
  },
  render() {
    return (
      <div class="app-lock-screen__input">
        <AppAvatar vertical align="center" avatarSize={52} />
        <NForm
          ref="formInstRef"
          model={this.lockCondition}
          rules={rules}
          labelPlacement="left"
        >
          <NFormItem path="lockPassword">
            <NInput
              ref="inputInstRef"
              v-model:value={this.lockCondition.lockPassword}
              type="password"
              placeholder="请输入锁屏密码"
              clearable
              minlength={6}
              maxlength={12}
            />
          </NFormItem>
          <NButton type="primary" onClick={this.lockScreen.bind(this)}>
            锁屏
          </NButton>
        </NForm>
      </div>
    )
  },
})

export default LockScreen