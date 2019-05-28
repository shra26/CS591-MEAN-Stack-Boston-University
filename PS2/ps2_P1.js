function* fibs () {
  let [val1, val2, result] = [0, 1, 0]
  yield 0
  while (true) {
  result = val1+val2
  val1 = val2
  val2 = result
  yield result
  }
 }
 
 function* fib () {
   myFibs = fibs() 
   while(true){
     let z = myFibs.next()
     if(z.value == 0 || z.value%2 === 0 ){
       yield z.value
     }
   }
 }
 //Get a few fibs
 myFib = fib()
 let count = 5;
 while (count --> 0) {
  console.log(myFib.next().value)
 }