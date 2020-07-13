<template>
    <div>
        <!--        <div v-if="!isOpen" class="w-4 h-4 box-content border border-white text-base leading-none text-center bg-gray-300 hover:border-gray-500"></div>-->
        <div class="w-5 h-5 box-content border border-white text-base leading-none text-center flex items-center"
             :class="{'bg-gray-300 hover:border-gray-500': !isOpen,
                      'bg-gray-100': isOpen,
                      'bg-red-300': (isOpen && isBomb)}">
            <span class="flex-1 text-center">{{valueText}}</span>
        </div>

    </div>
</template>

<script>
  export default {
    name: "Tile",
    props: [
      "value",
      "isBomb",
      "isFlag",
      "isOpen"
    ],
    computed: {
      valueText (){
        if(!this.isOpen && this.isFlag){
          return "🚩"
        }
        if(!this.isOpen){
          return ""
        }
        if(this.isBomb){
          return "💣"
        }
        if(this.value === 0){
          return ""
        }
        return this.value
      }
    }
  }
</script>

<style scoped>

</style>