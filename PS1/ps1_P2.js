const signCheck = x => {
  let letter = x.charAt(1)
  switch (letter) {
    case '+':
      return (x) => parseInt(x.charAt(0)) + parseInt(x.charAt(2));
    case '*':
    return (x) => parseInt(x.charAt(0)) * parseInt(x.charAt(2));
    case '-':
    return (x) => parseInt(x.charAt(0)) - parseInt(x.charAt(2));
    case '/':
      return (x) => parseInt(x.charAt(0)) / parseInt(x.charAt(2));
    default:
      throw new Error("Error/ Restart Required");
  }
}

const rePhrase = (fn) => {
  let ans = signCheck(fn)
  return ans(fn)    
  // Can be simplified much further using the same switch statement if there was no need to call back a function  
}
const arr = [
  '4+2',
  '5*7',
  '6-1',
  '9/2'
]

arr.forEach(element => {
  console.log(`${element} = ${rePhrase(element)}`)
});