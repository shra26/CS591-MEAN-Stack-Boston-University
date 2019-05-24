const complex = (strVar, funcVar) => {
  let res = funcVar(strVar)
  return(`${funcVar.name} = `+ JSON.stringify(res))

}

const complexFunc1 = (strVar) => {
  let words = strVar.split(/(c[a-bd-z]+)/g);
  words = words.filter(Boolean)
  return words
}

const complexFunc2 = (strVar) => {
  let modifiedString = '', numberReplaced = 0
  Array.from(strVar).forEach(e => {
    e !== 'a'? 
      modifiedString += e
    : (
      modifiedString = modifiedString + e.toUpperCase(),
      numberReplaced++
    )
  });

  return {
    originalString: strVar,
    modifiedString: modifiedString,
    numberReplaced: numberReplaced,
    length:	modifiedString.length
}
}

console.log(`${complex('supercalifragilisticexpialidocious', complexFunc1)}`)
console.log(`${complex('supercalifragilisticexpialidocious', complexFunc2)}`)