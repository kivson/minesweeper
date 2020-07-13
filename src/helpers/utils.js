export function getRandomSubarray(arr, size) {
  var shuffled = arr.slice(0), i = arr.length, temp, index;
  while (i--) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(0, size);
}

export function getNeighbors({row, col}) {
  return [
    {row:row + 1, col:col + 1},
    {row:row + 1, col:col},
    {row:row + 1, col:col - 1},
    {row:row, col:col + 1},
    {row:row, col:col},
    {row:row, col:col - 1},
    {row:row - 1, col:col + 1},
    {row:row - 1, col:col},
    {row:row - 1, col:col - 1},

  ]
}