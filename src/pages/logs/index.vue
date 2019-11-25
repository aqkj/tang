<template>
  <div class="logs">
    logs日志
    <input :value="data" @input="changeNumber" />
    {{ data }}
    <como/>
  </div>
</template>

<script>
/**
 * index
 * @author xiaoqiang <465633678@qq.com>
 * @created 2019/10/27 00:52:19
 */
import como from '../index/como'
export default {
  name: 'logs',
  components: {
    como
  },
  data() {
    return {
      data: '222'
    }
  },
  created() {
    console.log('logs')
  },
  methods: {
    changeNumber(event) {
      this.data = event.detail.value
    }
  }
}
</script>

<style>
.logs{
  background-color: red;
}
</style>
