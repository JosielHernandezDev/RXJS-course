import { Observable, Observer } from "rxjs";

//observer definition
const observer1$: Observer<string> = {
  next: (value) => console.log("sig [Observer]", value),
  error: (err) => console.error("erro [Observer]", err),
  complete: () => console.info("Complete [Observer]"),
};

// const obs$= Observable.create();
//Observable definition
const obs$ = new Observable<string>((subs) => {
  subs.next("Hola");
  subs.next("Mundo");

  subs.next("Hola");
  subs.next("Mundo");

  // Error JS custom
  //   const a=undefined;
  //   a.nombre = 'fernando';

  subs.complete();

  //not watch because eject "complete"
  subs.next("Mundo After");
});

// subscription form 1
// obs$.subscribe(
//   (resp) => {
//     console.log("next Callback--->", resp);
//   },
//   (err) => {
//     console.error("Error Callback--->", err);
//   },
//   () => {
//     //complete
//     console.info("Complete Callback--->");
//   }
// );

// subscription form 2
obs$.subscribe(observer1$);
