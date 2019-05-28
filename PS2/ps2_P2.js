function* gen (a) {
  let x = a.split(' ')
  for(z of x) {
    yield z
  }
}
 let sentence = 'All I know is something like a bird within her sang'
let generate = gen(sentence)

let x = sentence.split(' ')

x.forEach(e => {
  console.log(generate.next().value)
});