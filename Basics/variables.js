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
