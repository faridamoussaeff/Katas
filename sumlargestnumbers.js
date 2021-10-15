const sumLargestNumbers = function(data) {
  let newNum1 = 0;
  let newNum2 = 0;
  let total = 0;
  if (data.length > 2) {
    for (let i of data) {
      if (data[i] >= newNum1) {
        newNum1 = data[i];
      }
    }
    for (let j of data) {
      if ((data[j] < newNum1) && (data[j] >= newNum2)) {
        newNum2 = data[j];
      }
    }
    return newNum1 + newNum2;
  } else {
    for (let k in data) {
      total += data[k];
    }
    return total;
  }
};
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));


/* Alternative */

const selectionSort = function(inputArr) {
  let n = inputArr.length;

  for (let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (inputArr[j] < inputArr[min]) {
        min = j;
      }
    }
    if (min != i) {
      // Swapping the elements
      let tmp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;
    }
  }
  return inputArr;
};
const sumLargestNumbers2 = function(data) {
  let newArr = selectionSort(data);
  let total = 0;
  if (newArr.length > 2) {
    for (let l = newArr.length; l > newArr.length - 2; l--) {
      total += newArr[(l - 1)];
    }
    return total;
  } else {
    for (let k in newArr) {
      total += newArr[k];
    }
    return total;
  }
};
console.log(sumLargestNumbers2([1, 10]));
console.log(sumLargestNumbers2([1, 2, 3]));
console.log(sumLargestNumbers2([10, 4, 34, 6, 92, 2]));

