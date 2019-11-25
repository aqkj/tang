<template>
  <div class="jhh">jhh-{{ hhhh }}, props:{{ data }}
    <como />
  </div>
</template>

<script>
import como from '../pages/index/como'
export default {
  name: 'sadsad',
  components: {
    como
  },
  props: {
    data: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      hhhh: 123
    }
  }
}
</script>

<style scoped>
div{
  color: #999;
}
.jhh{
  color: blue;
}
</style>
