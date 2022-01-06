import {interval,timer} from'rxjs';


const observer = {
    next:(val)=>console.log("next:",val),
    complete:()=>console.log("complete")
}

const nowIn5 = new Date(); // now

nowIn5.setSeconds(nowIn5.getSeconds()+5);

/**
 *  interval observable is async fot default
 */
const inter$ = interval(1000);

// const timer$ = timer(1000);
// const timer$ = timer(2000,1000);
const timer$ = timer(nowIn5);


console.log("init");
// inter$.subscribe(observer);
timer$.subscribe(observer)
console.log("end");