import { of } from "rxjs";

// const obs$ = of<number>(1, 2, 3, 4, 5, 6);
const obs$ = of<any>([1,2],{a:2,b:3},function(){},true,Promise.resolve(true));
/**
 * (...) espred operator
 */
console.log('inicion Obs');

obs$.subscribe(
  (next) => console.log("next:", next),
  null,
  () => console.log("Complete Sequence")
);

console.log('fin Obs');
