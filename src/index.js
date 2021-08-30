function isStartBracket(char, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length; i++) {
    if (bracketsConfig[i][0] === char) {
      return true;
    }
  }
  return false;
}

function findBracket(char, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length; i++) {
    if ((bracketsConfig[i][0] === char) || (bracketsConfig[i][1] === char)) {
      return i;
    }
  }
  return -1;
}

module.exports = function check(str, bracketsConfig) {
  let stackBracket = [];
  for (let i = 0; i < str.length; i++) {
    if (isStartBracket(str[i], bracketsConfig)) {
      
      let findInd = findBracket(str[i], bracketsConfig);
      if ((bracketsConfig[findInd][0] === bracketsConfig[findInd][1]) && (stackBracket.length > 0) && (stackBracket[stackBracket.length - 1] === bracketsConfig[findInd][1])) {
        stackBracket.pop();
      } else {
        stackBracket.push(str[i]);
      }      
    } else {
      let findInd = findBracket(str[i], bracketsConfig);
      if (findInd >= 0) {
        if (stackBracket.length === 0) {
          return false;
        } else if (stackBracket.pop() !== bracketsConfig[findInd][0]) {
          return false;
        }
      } else {
        return false;
      }
    }
  }

  if (stackBracket.length > 0) {
    return false;
  } 
  return true;
}
