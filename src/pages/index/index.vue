<template>
  <div :class="{a: 1}" :ss="a" dd="232" vv="232" v-bind:oo="2323" class="hahah">
    <input ref="ss" type="text" :value="c" @input="c = $event.detail.value" @focus="focus"/>
    <div>state1:{{ c }}</div>
    <button @click="add('1')">+</button>
    <button @click="sub">-</button>
    <div>computed:{{ fffff }}</div>
    <div>method: {{ methodss() }}</div>
    <cccc :data="c"></cccc>
    <cccc :data="c + 2"></cccc>
    <cccc :data="9999 + c"></cccc>
    <cccc></cccc>
    <cccc></cccc>
    <cccc></cccc>
    <cccc></cccc>
    <cccc></cccc>
    <cccc></cccc>
  </div>
</template>

<script>
/**
 * 入口
 * @author xiaoqiang <465633678@qq.com>
 * @created 2019/10/25 20:00:34
 */
import cccc from '../../components/cccc'
export default {
  name: 'home',
  components: {
    cccc
  },
  data() {
    return {
      a: 1,
      c: 23232
    }
  },
  onLoad() {
    console.log(this, this.$refs.ss)
    setTimeout(() => {
      this.c = 213
    }, 3000)
  },
  created() {
    // console.log()
  },
  computed: {
    fffff: {
      get() {
        return this.c + 8888
      }
    }
  },
  watch: {
    c: {
      handler(n, o) {
        console.log('watch', n, o)
      }
    }
  },
  methods: {
    focus() {
      console.log('focus')
    },
    add(type) {
      console.log('传值', type)
      this.c ++
      // this.fffff = 9
    },
    sub(e) {
      console.log(e)
      this.c --
    },
    methodss() {
      return '123'
    },
    changNumber(c, event) {
      console.log(event)
      this.c = event.detail.value
      console.log('changeNumber', event)
    }
  }
}
</script>

<style scoped >
.a{
  color: #fff;
}
div{
  color: #999;
}
</style>
