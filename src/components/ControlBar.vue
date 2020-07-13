<template>
    <div class="flex flex-row my-4 space-x-10 items-center">
        <div class="flex flex-col items-center">
            <div class="text-3xl font-semibold">{{remainingFlags}}</div>
            <span>Mines Remaining</span>
        </div>
        <LevelSelector/>
        <button class="flex flex-col items-center hover:bg-blue-300 p-2 focus:outline-none" @click="recreateGame">
            <div class="text-3xl font-semibold">↻</div>
            <span>Restart</span></button>
<!--        <div class="text-3xl font-semibold">00:00</div>-->
    </div>
</template>

<script>
  import {mapActions, mapGetters} from "vuex";
  import LevelSelector from "@/components/LevelSelector";

  export default {
    name: "ControlBar",
    components: {LevelSelector},
    computed:{
      ...mapGetters('game', {
        remainingFlags: "remainingFlags"
      })
    },
    methods:{
      ...mapActions('game', {
        recreateGame: "recreateGame"
      })
    }
  }
</script>

