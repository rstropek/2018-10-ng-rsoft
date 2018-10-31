import { Observable, of, from, range, timer, interval, concat, merge } from 'rxjs';
import { take, skip, map, filter, switchMap, debounceTime } from 'rxjs/operators';

const observable = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
    setTimeout(() => {
        observer.next(3);
        //observer.error('Something bad happened....');
        observer.complete();
    }, 500);
});

// observable.subscribe(
//     val => console.log(val),
//     err => console.error(err),
//     () => console.log('Done')
// );

// of(1, 2, 3, 4).subscribe(x => console.log(x));
// from([1, 2, 3, 4]).subscribe(x => console.log(x));
// range(1, 10).subscribe(x => console.log(x));

// const subscription = interval(1000).subscribe(x => console.log(x));
// setTimeout(() => subscription.unsubscribe(), 5100);

// interval(250).pipe(skip(1), take(5), map(x => x + 1),
//     filter(x => x % 2 === 0))
//     .subscribe(x => console.log(x));

const source1 = interval(100).pipe(take(10));
const source2 = interval(250).pipe(map(x => x * 10), take(10));

//concat(source1, source2).subscribe(x => console.log(x));
//merge(source1, source2).subscribe(x => console.log(x));

interface Customer {
    id: number;
    name: string;
    country: string;
}

const customers: Customer[] = [
    { id: 1, name: 'Foo Bar', country: 'AT' },
    { id: 2, name: 'John Doe', country: 'DE' }
];

//from<Customer>(customers).subscribe(x => console.log(x.name));

concat(interval(100).pipe(take(5)), interval(250).pipe(take(5)))
    .pipe(debounceTime(200))
    .subscribe(x => console.log(x))

