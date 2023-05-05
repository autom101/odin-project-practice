const fibs = (num) => {
  const fibArray = [];
  for (let i = 0; i < num; i++) {
    if (i == 0) {
      fibArray.push(0);
    } else if (i == 1) {
      fibArray.push(1);
    } else {
      fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }
  }
  return fibArray;
};

const fibsRec = (arrayLength) => {
  const fibArray = [];
  const getFibonacci = (num) => {
    if (num == 1) {
      return 0;
    } else if (num == 2) {
      return 1;
    } else {
      return getFibonacci(num - 1) + getFibonacci(num - 2);
    }
  };
  for (let i = 0; i < arrayLength; i++) {
    fibArray.push(getFibonacci(i + 1));
  }
  return fibArray;
};
