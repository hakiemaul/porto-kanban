<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <BackLog></BackLog>
      </div>
      <div class="col-md-3">
        <ToDo></ToDo>
      </div>
      <div class="col-md-3">
        <Doing></Doing>
      </div>
      <div class="col-md-3">
        <Done></Done>
      </div>
    </div>
  </div>
</template>

<script>
import BackLog from '@/components/BackLog'
import ToDo from '@/components/ToDo'
import Doing from '@/components/Doing'
import Done from '@/components/Done'
export default {
  components: {
    BackLog,
    ToDo,
    Doing,
    Done
  }
}
</script>

<style lang="css" scoped>
.container {
  margin-top: 20px;
}
</style>
