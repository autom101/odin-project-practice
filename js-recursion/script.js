const sumRange = (num) => {
  if (num == 1) {
    return 1;
  } else {
    return num + sumRange(num - 1);
  }
};

const power = (base, exponent) => {
  return exponent == 0 ? 1 : base * power(base, exponent - 1);
};

const factorial = (num) => {
  return num == 1 ? 1 : num * factorial(num - 1);
};

const all = (anArray, callback) => {
  if (anArray.length == 1) {
    return callback(anArray[0]);
  } else {
    const newArray = anArray.slice(1);
    return callback(anArray[0]) * all(newArray, callback);
  }
};

const productOfArray = (anArray) => {
  if (anArray.length == 0) {
    return 0;
  } else if (anArray.length == 1) {
    return anArray[0];
  } else {
    return anArray[0] * productOfArray(anArray.slice(1));
  }
};

const contains = (obj, searchItem) => {
  for (let key in obj) {
    if (typeof obj[key] == "object") {
      return contains(obj[key], searchItem);
    }

    if (obj[key] == searchItem) {
      return true;
    }
  }
  return false;
};

const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

const totalIntegers = (myArray) => {
  let intCount = 0;
  for (let element of myArray) {
    if (typeof element == "number") {
      intCount++;
    }
    if (Array.isArray(element)) {
      intCount += totalIntegers(element);
    }
  }
  return intCount;
};

const sumSquares = (myArray) => {
  let value = 0;
  for (let element of myArray) {
    if (typeof element == "number") {
      value += element * element;
    }
    if (Array.isArray(element)) {
      value += sumSquares(element);
    }
  }
  return value;
};

const replicate = (repetitions, number) => {
  let newArray = [];
  if (repetitions <= 0) {
    return newArray;
  } else {
    return [number].concat(replicate(repetitions - 1, number));
  }
};
