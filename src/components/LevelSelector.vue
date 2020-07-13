<template>
    <div class="">
        <button @click="isOpen = !isOpen" class="p-2 hover:bg-blue-300 focus:outline-none">{{selected}}</button>
        <button @click="isOpen = false" v-if="isOpen" class="fixed top-0 right-0 bottom-0 left-0 w-full h-full bg-black opacity-25"></button>
        <div class="bg-white rounded-lg absolute py-3 px-1 shadow-md flex flex-col" v-if="isOpen">
            <button @click="selectLevel('Beginner')" class="py-1 px-3  hover:bg-blue-300 rounded">Beginner</button>
            <button @click="selectLevel('Intermediate')" class="py-1 px-3 hover:bg-blue-300 rounded">Intermediate</button>
            <button @click="selectLevel('Advanced')" class="py-1 px-3 hover:bg-blue-300 rounded">Advanced</button>
        </div>
    </div>
</template>
<script>
  import {mapActions} from "vuex";

  export default {
    name: 'LevelSelector',
    data() {
      return {
        isOpen: false,
        selected: "Intermediate",
        configs:{
          Intermediate: {
            cols: 16,
            rows: 16,
            mines: 40,
          },
          Beginner:{
            cols: 10,
            rows: 10,
            mines: 10,
          },
          Advanced:{
            cols: 30,
            rows: 16,
            mines: 99,
          }
        }
      }
    },
    methods: {
      ...mapActions('game',{
        generateCells: "generateCells"
      }),
      selectLevel(level){
        this.generateCells(this.configs[level])
        this.selected = level
        this.isOpen = false
      }
    }
  }
</script>
