 const {rand, round, PI, floor, exp, degToRad, radToDeg} = require('./math')
 const {print, timer, Day, interval, read, write, appendFile, dirname} = require('./utils')
  try {
let a = "my program variables are nicely scoped" ; 
console.log(a)   ; 
let b = "hello world" ; 
let c = 3 + 3 ; 
let d = round(rand() * 12) ; 
function print5(){ ; 
 for ( let i = 0; i < 5; i++){  
 let b2 = round(rand() * 5) ; 
 if (d > c){ ; 
 console.log(b)   ; 
 }else{  
 print(b2) ; 
 }  
 }  
}  
function days(){ ; 
 today = new Day() ; 
 print(`${today.getFullDate()} - ${today.time()}`)  
}  
 let today = new Day() ; 
let time = today.time() ; 
let data = read('utils.js') ; 
write('sl.js' , data) ; 
print(`${today.getFullDate()} - ${time}`) 
}catch(e){
 console.error(e.message);
}