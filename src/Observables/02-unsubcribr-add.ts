import { Observable, Observer } from "rxjs";

//observer definition
const observer1$: Observer<number> = {
  next: (value) => console.log("[Next]", value),
  error: (err) => console.warn("[Error]", err),
  complete: () => console.info("Complete [Observer]"),
};

//SUBSCRIPTION UNSUBCRIPTION

const interval$ = new Observable<number>((sub) => {
  //crear contador
  let count = 0;

  let inter = setInterval(() => {
    count++;
    sub.next(count);
    console.log("con", count);
    // if(count == 10) return sub.complete();
  }, 1000);

  setTimeout(() => {
    sub.complete();
  }, 2500);

  // Eject When Unsubcribe
  return () => {
    clearInterval(inter);
    console.log("clear interval");
  };
});

const subs = interval$.subscribe(observer1$);
const subs2 = interval$.subscribe(observer1$);
const subs3 = interval$.subscribe(observer1$);

//encadenar subscribes
subs.add(subs2);
subs.add(subs3);

setTimeout(() => {
//when unsubscribe from first subscription the other subscription ending
  subs.unsubscribe();
  // subs2.unsubscribe();
  // subs3.unsubscribe();

  console.log("completado outside");
}, 6000);
