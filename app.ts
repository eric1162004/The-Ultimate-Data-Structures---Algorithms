
function heapify(numbers: number[]) {
  for (let i = 0; i < numbers.length; i++) {
    _heapify(numbers, i);
  }
}

function _heapify(numbers: number[], index: number) {
  // assume current index has the largest value
  let largerIndex = index;

  let leftIndex = index * 2 + 1;
  if (leftIndex < numbers.length && numbers[leftIndex] > numbers[index])
    largerIndex = leftIndex;

  let rightIndex = index * 2 + 2;
  if (rightIndex < numbers.length && numbers[rightIndex] > numbers[index])
    largerIndex = rightIndex;

  // item is on the right position, no swap
  if (index == largerIndex) return;

  swap(numbers, index, largerIndex);

  // keep bubbling down from the largerIndex
  _heapify(numbers, largerIndex);
}

function swap(array: number[], index_a: number, index_b: number) {
  let temp = array[index_a];
  array[index_a] = array[index_b];
  array[index_b] = temp;
}

let numbers: number[] = [5, 3, 8, 4, 1, 2];
heapify(numbers);
console.log(numbers);
