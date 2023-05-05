//Sort left half of array (if n>1)
//Sort right half of array (if n>1)
//Merge two halves together
const mergeSort = (anArray) => {
  const merge = (left, right) => {
    let sortedArray = [];
    let i = 0,
      j = 0,
      k = 0,
      leftLen = left.length,
      rightLen = right.length;

    //Compare left and right arrays values one by one and slowly build sortedArray
    //If left array value is smaller, place that value in sortedArray, then move to next index of leftArray and compare that new left value against the right array value. If right is smaller, move right index by one and place the previous value in sortedArray and compare new right value against the left array value.
    //Repeat that until either leftArray is finished or rightArray is finised
    while (i < leftLen && j < rightLen) {
      if (left[i] < right[j]) {
        sortedArray[k++] = left[i++];
      } else {
        sortedArray[k++] = right[j++];
      }
    }

    //If anything is left in either left or right array, fill the sorted array with the remainder of that array
    for (; i < leftLen; i++) {
      sortedArray[k++] = left[i];
    }
    for (; j < rightLen; j++) {
      sortedArray[k++] = right[j];
    }
    console.log(`Sorted array: ${sortedArray}\n`);
    return sortedArray;
  };
  if (anArray.length > 1) {
    const middle = Math.floor(anArray.length / 2);
    const leftArray = mergeSort(anArray.slice(0, middle));
    const rightArray = mergeSort(anArray.slice(middle));
    return merge(leftArray, rightArray);
  } else {
    return anArray;
  }
};

const A = [0, 2, 3, 1, 4, 5, 6, 7];
console.log(mergeSort(A));
