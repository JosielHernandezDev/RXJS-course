import {fromEvent} from 'rxjs';

const obs = {
    next:(val)=>console.log('next',val)
}
/**
 * dom events
 */
const src1$ = fromEvent<MouseEvent>(document,'click');
const src2$ = fromEvent<KeyboardEvent>(document,'keyup');


src1$.subscribe(({x,y})=>{
    
    console.log("as",y);
    console.log("as",x);
});

src2$.subscribe(event=>{
    console.log("event",event.key);
    
});
