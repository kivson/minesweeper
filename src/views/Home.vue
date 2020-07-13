<template>
  <div class="home">
    <div class="container mx-auto ">
      <div class="flex flex-col items-center">
        <ControlBar/>
        <Board />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Board from "../components/Board";
import ControlBar from "@/components/ControlBar";


export default {
  name: 'Home',
  components: {
    ControlBar,
    Board
  }
}
</script>
