import {range,of, asyncScheduler} from 'rxjs';

/**
 *  async shceduler
 */
const src$ = range(1,5,asyncScheduler);

console.log("init");
src$.subscribe(console.log);
console.log("end");


/**
 *  Sync 
 */

 const src1$ = range(1,5);

 console.log("init sync");
 src1$.subscribe(console.log);
 console.log("end sync");