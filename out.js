 const {rand, round, PI, floor, exp, degToRad, radToDeg} = require('./math')
 const {print, timer, Day, interval, read, write, appendFile, dirname} = require('./utils')
  try {
let data = read('benchmark.txt') ; 
write('../ay/benchmark.txt', data) ; 
console.log('done')   ; 
}catch(e){
 console.error(e.message);
}