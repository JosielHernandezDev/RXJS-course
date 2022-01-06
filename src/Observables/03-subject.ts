import { Observable, Observer, Subject } from "rxjs";

//observer definition
const observer1$: Observer<any> = {
  next: (value) => console.log("[Next]", value),
  error: (err) => console.warn("[Error]", err),
  complete: () => console.info("Complete [Observer]"),
};

const interval$ = new Observable<number>((subs) => {
  const intr = setInterval(() => {
      //Cold Observable, data producida dentro
    subs.next(Math.random());
  }, 3000);

  return()=>{
      clearInterval(intr);
      console.log("clear interval");
      
  }

});


//subject 
/**
 *  1- multiple cast (distribuir el mismo valor)
 *  2- tambien es un observer
 *  3.- se maneja los 3 callback de un observer
 */
const subject$ = new Subject();

const intevalSubject = interval$.subscribe(subject$)

// const subcription = interval$.subscribe(res=>console.log("sub1:",res));
// const subcription2 = interval$.subscribe(res=>console.log("sub2:",res));

const subcription = subject$.subscribe(observer1$);
const subcription2 = subject$.subscribe(observer1$);


setTimeout(()=>{

    // Hot Observable, data producida fuera
    subject$.next(10);
    
    subject$.complete();

    intevalSubject.unsubscribe();
},3500)