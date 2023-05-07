const nodeFactory = (value, nextNode = null) => {
  return { value, nextNode };
};

const linkedList = () => {
  const append = (value) => {
    const currentSize = `${size()}`;
    if (currentSize == 0) {
      linkedList[currentSize] = nodeFactory(value);
    } else {
      linkedList[currentSize] = nodeFactory(value);
      //Change pointer of previous tail so it points to new tail
      linkedList[`${Number(currentSize) - 1}`].nextNode =
        linkedList[`${currentSize}`];
    }
  };

  const prepend = (aValue) => {
    const listSize = size();
    const copy = { ...linkedList };
    for (let key in linkedList) {
      delete linkedList[key];
    }
    linkedList[`0`] = nodeFactory(aValue);

    for (let i = 1; i <= listSize; i++) {
      linkedList().append(copy[i - 1].value);
    }
  };

  const size = () => {
    return Object.keys(linkedList).length;
  };

  const head = () => {
    return linkedList["0"].value;
  };

  const tail = () => {
    return linkedList[`${size() - 1}`].value;
  };

  const at = (index) => {
    return linkedList[`${index}`].value;
  };

  const pop = () => {
    delete linkedList[`${size() - 1}`];
  };

  const contains = (value) => {
    let doesContain = false;
    for (let key in linkedList) {
      if (linkedList[key].value === value) {
        doesContain = true;
        break;
      }
    }
    return doesContain;
  };

  const find = (value) => {
    let index = null;
    for (let key in linkedList) {
      if (linkedList[key].value === value) {
        index = key;
        break;
      }
    }
    return index;
  };

  const toString = () => {
    let listValues = "";
    for (let key in linkedList) {
      listValues += `( ${linkedList[key].value} ) -> `;
    }
    listValues += "null :)";

    return listValues;
  };

  const insertAt = (value, index) => {
    const copy = {};
    let listSize = size();
    let copySize = listSize - index;
    //copy everything from index to tail (to put it back inside list after)
    for (let i = index; i < listSize; i++) {
      copy[i] = linkedList[i];
      delete linkedList[i];
    }

    linkedList().append(value);
    //put list back together
    for (let i = index; i < listSize; i++) {
      linkedList().append(copy[i].value);
    }
  };

  const removeAt = (index) => {
    const copy = {};
    let listSize = size();
    let copySize = listSize - index - 1;
    //copy everything after index (to put it back inside list after)
    //index isn't included since it's going to get deleted
    if (index > 0) {
      linkedList[index - 1].nextNode = null;
    }

    delete linkedList[index];
    for (let i = index + 1; i < listSize; i++) {
      copy[i] = linkedList[i];
      delete linkedList[i];
    }
    //put list back together
    for (let i = index + 1; i < listSize; i++) {
      linkedList().append(copy[i].value);
    }
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

//Tests
const myList = linkedList();
myList.append("Bob");
myList.append("Alice");
myList.prepend("Wallace");
console.log(myList.toString());

console.log("Add Jose at 1");
myList.insertAt("Jose", 1);
console.log(myList.toString());

console.log("Remove Bob at 2");
myList.removeAt(2);
console.log(myList.toString());
