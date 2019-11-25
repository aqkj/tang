/**
 * 打包测试
 * @author xiaoqiang <465633678@qq.com>
 * @created 2019/10/25 19:42:07
 */
import { getEntrys } from '../build/utils'
describe('工具测试', () => {
  test('获取入口为2个', () => {
    expect(getEntrys('./src').length).toBe(2)
  })
})
