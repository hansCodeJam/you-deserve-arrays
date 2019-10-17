function getFirstItemFrom(array) {
  return array[0];
}

function getLastItemFrom(array) {
  return array[array.length - 1]
}

function getIndex3(array) {
  if(array.length >= 4) {
    return array[3];
  } else if (array.length <= 4) {
    return getLastItemFrom(array);
  }
}

function firstItemIsNumber(array) {
  if(array[0] === Number(array[0])) {
    return true;
  } else {
    return false
  }
}

function isLongList(array) {
  if(array.length >= 10) {
    return true;
  } else {
    return false;
  }
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
}