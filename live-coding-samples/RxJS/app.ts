import {Observable, of, range, interval, from, concat, merge} from 'rxjs';
import {take, map, tap} from 'rxjs/operators';

(() => {
    const observable = Observable.create((observer) => {
        observer.next(1);
        observer.next(2);
        observer.next(3);

        // Simulate web api call
        setTimeout(() => {
            observer.next(4);
            //observer.error("ERROR");
            observer.complete();
        }, 1000);
    });

    try {
        const subscription = observable.subscribe({
            next: val => console.log(val),
            error: err => console.error(`Something bad happened: ${err}`),
            complete: () => console.log('Done')
        });

        setTimeout(() => {
            const subscription2 = observable.subscribe({
                next: val => console.log(val),
                error: err => console.error(`Something bad happened: ${err}`),
                complete: () => console.log('Done')
            });
        }, 500);

        console.log('After subscribe');
    } catch (err) {
        console.error(err);
    }
});//();

(() => {
    from([1, 2, 3, 4]).subscribe(x => console.log(x));
    of(1, 2, '3', 4).subscribe(x => console.log(x));
    range(1, 4).subscribe(x => console.log(x));
    const subscription = interval(1000).subscribe(x => console.log(x));
    setTimeout(() => subscription.unsubscribe(), 5100);
}); //();

(() => {
    // interval(250).pipe(
    //     tap(x => console.log(`Zwischenergebnis: ${x}`)),
    //     take(5),
    //     map(x => x + 1)
    // ).subscribe(x => console.log(x));

    concat(of(1, 2), of(3, 4)).subscribe(x => console.log(x));

    // merge(interval(250).pipe(take(5)), interval(100).pipe(take(20)))
    //     .subscribe(x => console.log(x));
})();
