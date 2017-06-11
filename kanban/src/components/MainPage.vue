<template lang="html">
  <div class="">
    <Top></Top>
    <Board></Board>
  </div>
</template>

<script>
import Top from '@/components/Top'
import Board from '@/components/Board'
export default {
  components: {
    Top,
    Board
  },
  created () {
    this.$store.commit('getTodos')
  }
}
</script>

<style lang="css">
.cardhead {
  color: white;
  font-size: 24px;
}

.cardcontent {
  color: black;
  font-size: 16px;
}
</style>
