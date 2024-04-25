 import {AY} from './objects/AY'
 import { rand, round, PI, floor, exp, degToRad, radToDeg } from './math';
 import { print, timer, Day, interval, read, write, appendFile, dirname } from './utils';
  try {
let a = "my program variables are nicely scoped" ; 
for ( let i = 0; i < 10; i++ ) { 
console.log(i)   ; 
} 
 let no = 23 ; 
    ; 
console.log(no)   ; 
let b = "hello world" ; 
let c = 3 + 3 ; 
let d = round(rand() * 12) ; 
function print5(){ 
for ( let i = 0; i < 5; i++ ) { 
let b2 = round(rand() * 5) ; 
if ( d > c ) { 
console.log(b)   ; 
} 
print(b2) ; 
} 
} 
// timer(print5, 0) , 
print5() ; 
let today = new Day() ; 
let time = today.time() ; 
console.log(round(0.1+0.98987776555))   ; 
print("hey, world!", d, b, c, a, time, today.getFullDate(), PI(), AY.type(AY.isAy), AY.argv[1], AY.os) 
; 
; 
}catch(e){
 console.error(e.message);
}