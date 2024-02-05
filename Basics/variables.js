/* const, var & let difference: https://www.freecodecamp.org/news/differences-between-var-let-const-javascript/ */
const accId = 4321
let accEmail = "raniarti2002@gmail.com"
var accPassword = "1234blablabl@"           /*not preffered bcz it doesn't control block & 
functional scope (var name same hua 2 jagah, tohh variable update ho jayega)*/
accCity = "Kanpur"                          //not preferred to use much
let accState;                               //this will give o/p as : undefined
/*accId = 2 
NOTE: changing value of const variable is not allowed in js*/
console.log(accId)
accEmail = "raniarti@gmail.com"
accPassword = "1234blabl@bla"           
accCity = "Chandigarh"                          //not preferred to use much
accState = "Uttar Pradesh" 
console.table([accCity,accEmail,accId])
console.log(x)
var x = 2
console.log(x)

/*
let number = 50

function print() {
  let square = number * number

  if (number < 60) {
    var largerNumber = 80
    let anotherLargerNumber = 100

    console.log(square)
  }

  console.log(largerNumber)
  console.log(anotherLargerNumber)
}

print()
// 2500
// 80
// ReferenceError: anotherLargerNumber is not defined
*/