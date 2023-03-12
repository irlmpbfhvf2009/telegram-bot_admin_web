<template>
  <div class="box">
    <img :src="tg" alt="tg" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import tg from "@/assets/images/tg.jpg"

export default defineComponent({
  name: 'Dashboard',
  setup() {
    return {
      tg
    }
  }

})
</script>

<style lang="scss" scoped>
  .box {
    padding: 15px;
  }
</style>