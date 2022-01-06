import {asyncScheduler} from "rxjs";


const saludar = ()=> console.log("hola");
const saludar2 = res=> console.log("hola",res);

console.log("init");

//as SetTimeout
// asyncScheduler.schedule(saludar,6000);
asyncScheduler.schedule(saludar2,2500,'Josiel');

//as SetInterval
const subs$ = asyncScheduler.schedule(function(state){
    console.log("state:",state);
    this.schedule(state+1,4000);
},2000,0)


// setTimeout(()=>{
//     subs$.unsubscribe();
// },7000);
asyncScheduler.schedule(()=>subs$.unsubscribe(),9000)

console.log("end");

