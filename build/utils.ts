/**
 * 工具包
 * @author xiaoqiang <465633678@qq.com>
 * @created 2019/10/25 19:17:13
 */
import fs from 'fs'
// 入口文件列表
export const entrys: Record<string, string> = {}
/**
 * 获取入口
 */
export function getEntrys(path: string): Record<string, string> | any[] {
  const files: string[] = fs.readdirSync(path)
  // const extname = files.extnam
  console.log(files)
  // const stat: fs.Stats = fs.statSync(path)
  // if (stat.isDirectory()) {
  // }
  return files
}
