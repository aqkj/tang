<template>
  <div class="state">我是组件的state{{ g }}
  </div>
</template>

<script>
/**
 * 组件1
 * @author xiaoqiang <465633678@qq.com>
 * @created 2019/10/28 22:43:21
 */
export default {
  name: 'como',
  data() {
    return {
      g: 213213
    }
  },
  created() {
    console.log('comoCreated')
    setTimeout(() => {
      this.g = 33333
    }, 2000)
  }
}
</script>

<style lang="less" scoped>
div{
  color: #000;
  &.state{
    color: red;
  }
}
</style>
