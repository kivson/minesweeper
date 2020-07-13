import {
  cellsToBeOpen,
  gameEnded,
  gameWon,
  generateBlankCells,
  moveWillEndGame, neighborsToOpen,
  putMines
} from "@/services/game-service";



const state = {
  cells: [],
  currentConfig: {

  }
}

const mutations = {
  setCells(state, cells) {
    state.cells = cells
  },
  setCurrentConfig(state, config){
    state.currentConfig = config
  },
  openCell(state, {row, col}) {
    if (state.cells[row][col].isFlag) {
      return
    }
    state.cells[row][col].isOpen = true
  },
  flagCell(state, {row, col}) {
    state.cells[row][col].isFlag = !state.cells[row][col].isFlag
  },
  openMultipleCells(state, positions) {
    for (const position of positions) {
      state.cells[position.row][position.col].isOpen = true
    }
  },
  openAllCells(state) {
    for (let row = 0; row < state.cells.length; row++) {
      for (let col = 0; col < state.cells[0].length; col++) {
        state.cells[row][col].isOpen = true
      }
    }
  }
}

const actions = {
  recreateGame(context){
    context.dispatch("generateCells",context.state.currentConfig)
  },
  generateCells(context, config) {
    let cells = generateBlankCells(config)
    putMines(cells, config.mines)
    context.commit("setCurrentConfig", config)
    context.commit("setCells", cells)
  },
  openCell(context, {row, col}) {
    if (context.state.cells[row][col].isOpen) {
      return
    }
    const positionsToOpen = cellsToBeOpen(context.state.cells, {row, col})

    context.commit("openMultipleCells", positionsToOpen)

    if (context.getters.ended && !context.getters.won) {
      context.commit("openAllCells")
    }

  },
  openNeighbors(context,{row, col}){
    if (!context.state.cells[row][col].isOpen) {
      return
    }
    let positionsToOpen = neighborsToOpen(context.state.cells, {row, col})
    context.commit("openMultipleCells", positionsToOpen)

    if (context.getters.ended && !context.getters.won) {
      context.commit("openAllCells")
    }

  },
  flagCell(context, {row, col}) {
    if (context.state.cells[row][col].isOpen) {
      return
    }
    context.commit("flagCell", {row, col})
  }
}

const getters = {
  won(state) {
    return gameWon(state.cells)
  },
  ended(state) {
    return gameEnded(state.cells)
  },
  remainingFlags(state){
    return state.cells.flat().filter(c => c.isBomb).length - state.cells.flat().filter(c => c.isFlag).length
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}