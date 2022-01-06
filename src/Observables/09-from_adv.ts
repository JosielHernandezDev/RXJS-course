import { of,from } from "rxjs";


/**
 *  OF = toma elementos y genera una secuencia
 *  FROM = base (array,promise,iterable,observable,etc)
 *
 */

const observer$ ={
    next: (val)=>console.log("next:",val),
    complete:()=>console.log("Complete")
}

//from
// const sources$ = from([1,2,3,5]);
// const sources$ = from(fetch('https://api.github.com/users/klerith'));

// sources$.subscribe(observer$);
// sources$.subscribe(async(resp)=>{
//     console.log("resp",resp);
//     const data = await resp.json();
//     console.log("data",data);
// });

//iterable

//funciones generadoras
const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5; 
}

const miIterable = miGenerador();
const sources$ = from(miIterable);
sources$.subscribe(observer$);

//of
const sources2$ = of([1,2,3,5]);

sources2$.subscribe(observer$);

