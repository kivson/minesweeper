<template>
  <div class="home">
    <Board />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Board from "../components/Board";


export default {
  name: 'Home',
  components: {
    Board
  }
}
</script>
