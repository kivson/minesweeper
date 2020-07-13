import {
  cellsToBeOpen,
  gameEnded,
  gameWon,
  generateBlankCells,
  moveWillEndGame,
  putMines
} from "@/services/game-service";

const DEFAULT_CONFIG = {
  cols: 9,
  rows: 9,
  mines: 2,
};

const state = {
  config : DEFAULT_CONFIG,
  cells: []

}

const mutations = {
  setCells(state, cells){
    state.cells = cells
  },
  openCell(state, {row,col}){
    if (state.cells[row][col].isFlag){
      return
    }
    state.cells[row][col].isOpen = true
  },
  flagCell(state, {row,col}){
    if (state.cells[row][col].isOpen){
      return
    }
    state.cells[row][col].isFlag = !state.cells[row][col].isFlag
  },
  openMultipleCells(state, positions){
    for (const position of positions) {
      state.cells[position.row][position.col].isOpen = true
    }
  },
  openAllCells(state){
    for (let row = 0; row < state.cells.length; row++) {
      for (let col = 0; col < state.cells[0].length; col++) {
        state.cells[row][col].isOpen = true
      }
    }
  }
}

const actions = {
  generateCells(context){
    let cells = generateBlankCells(context.state.config)
    putMines(cells, context.state.config.mines)
    context.commit("setCells", cells)
  }
  ,
  openCell(context, {row,col}){

    const positionsToOpen = cellsToBeOpen(context.state.cells, {row,col})

    context.commit("openMultipleCells", positionsToOpen)

    if (context.getters.ended && !context.getters.won){
      context.commit("openAllCells")
    }

  },
  flagCell(context, {row,col}){
    context.commit("flagCell", {row,col})
  }
}

const getters = {
  won(state) {
    return gameWon(state.cells)
  },
  ended(state){
    return gameEnded(state.cells)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}