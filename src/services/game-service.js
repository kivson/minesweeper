import {getNeighbors, getRandomSubarray} from "@/helpers/utils";

export function generateBlankCells({rows, cols}) {
  return Array.from({length: rows}).map(_ => {
    return Array.from({length: cols}).map(_ => {
      return {
        value: -1,
        isBomb: false,
        isFlag: false,
        isOpen: false
      }
    })
  });
}

function calculateMinesNeighbors(cells) {
  for (const [rowIdx, rows] of cells.entries()) {
    for (let [colIdx, cell] of rows.entries()) {
      if (cell.isBomb) {
        continue
      }

      let neighbors = getNeighbors({row: rowIdx, col: colIdx})
      let bombs = neighbors.filter(neighbor => {
        return cells[neighbor.row]?.[neighbor.col]?.isBomb
      })
      cell.value = bombs.length
    }
  }
}

export function putMines(cells, minesQuantity) {
  const
    rowsLength = cells.length,
    colsLength = cells[0].length

  let positions = Array.from({length: rowsLength * colsLength}, (_, pos) => pos)
  let chosenPositions = getRandomSubarray(positions, minesQuantity)

  for (const position of chosenPositions) {
    let [row, col] = [Math.floor(position / colsLength), position % colsLength]
    cells[row][col].isBomb = true
  }

  calculateMinesNeighbors(cells);

  return cells
}

export function cellsToBeOpen(cells, {row, col}){
  let cell = cells[row][col]

  let frontier = [{row, col}]
  let visited = []

  if (cell.isOpen || cell.isFlag){
    return []
  }
  if(cell.value > 0){
    return [{row, col}]
  }

  while (frontier.length) {
    let actual = frontier.pop()
    visited.push(actual)
    if(cells[actual.row]?.[actual.col]?.value !== 0){
      continue
    }
    let neighbors = getNeighbors(actual)
      .filter(neighbor => {
        let isVisited = visited.find(element => element.row === neighbor.row && element.col === neighbor.col)
        let exists = cells[neighbor.row]?.[neighbor.col] ?? false

        return exists && !isVisited
      })

    frontier = frontier.concat(neighbors)
  }
  return visited

}