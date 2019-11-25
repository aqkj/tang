/**
 * 更入口
 * @author xiaoqiang <465633678@qq.com>
 * @created 2019/10/25 19:55:03
 */
import App from './App.vue'
import Vue from 'vue'
App.isApp = true
const app: typeof Vue = new Vue(App)
app.$mount()
