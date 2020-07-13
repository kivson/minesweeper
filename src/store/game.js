import {cellsToBeOpen, generateBlankCells, moveWillEndGame, putMines} from "@/services/game-service";

const DEFAULT_CONFIG = {
  cols: 30,
  rows: 15,
  mines: 10,
};

const state = {
  config : DEFAULT_CONFIG,
  cells: [],
  won: false,
  ended: false

}

const mutations = {
  setCells(state, cells){
    state.cells = cells
  },
  setEndFlag(state, ended){
    state.ended = ended
  },
  setWonFlag(state, won){
    state.won = won
  },
  openCell(state, {row,col}){
    state.cells[row][col].isOpen = true
  },
  flagCell(state, {row,col}){
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
    if(context.state.cells[row][col].isBomb && !context.state.cells[row][col].isFlag){
      context.commit("setEndFlag", true)
      context.commit("openAllCells")
    }

    const positionsToOpen = cellsToBeOpen(context.state.cells, {row,col})
    console.log(positionsToOpen)
    context.commit("openMultipleCells", positionsToOpen)

  },
  flagCell(context, {row,col}){
    context.commit("flagCell", {row,col})
  }
}


export default {
  namespaced: true,
  state,
  actions,
  mutations
}