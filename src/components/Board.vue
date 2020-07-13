<template>
    <div class="flex flex-col items-center ">
        <div class="box-content border-4 border-gray-400">
            <div v-for="(row, rowIdx) in cells" class="flex">
                <Tile v-for="(cell, colIdx) in row"
                      :value="cell.value"
                      :is-flag="cell.isFlag"
                      :is-bomb="cell.isBomb"
                      :is-open="cell.isOpen"
                      @click.native.exact="openCell({row: rowIdx, col: colIdx})"
                      @click.ctrl.native.exact="openNeighbors({row: rowIdx, col: colIdx})"
                      @click.native.right.prevent="flagCell({row: rowIdx, col: colIdx})">

                </Tile>
            </div>
        </div>
    </div>

</template>

<script>
  import {mapActions} from "vuex";
  import Tile from "@/components/Tile";

  export default {
    name: "Board",
    components: {
      Tile
    },
    computed: {
      cells() {
        return this.$store.state.game.cells
      }
    },
    methods: {
      tap() {
        console.log("TAP")
      },
      ...mapActions("game", {
          generateCells: "generateCells",
          openCell: "openCell",
          flagCell: "flagCell",
          openNeighbors: "openNeighbors"
        }
      )
    },
    mounted() {
      const DEFAULT_CONFIG = {
        cols: 30,
        rows: 16,
        mines: 99,
      };
      this.generateCells(DEFAULT_CONFIG)
    }
  }
</script>

<style scoped>

</style>