import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

class Boe {
  boeboe: string;

  constructor(b: string) {
    this.boeboe = b;
  }
}

@Component({
  selector: 'rxjs-test',
  templateUrl: './rxjs-test.component.html',
  styles: [],
})
export class RxjsTestComponent {
  tapTest: Observable<string>;

  tapTestResult: string = '';

  constructor() {
    const source = of(1, 3, 5, 7, 9);

    source
      .pipe(
        tap((n) => {
          n += 1;
          console.log('Tap ' + n);
        })
      )
      .subscribe((n) => {
        console.log('Next ' + n);
      });

    const source2 = of(new Boe('a'), new Boe('b'), new Boe('c'));

    source2
      .pipe(
        tap({
          next: (s) => {
            s.boeboe += 'z';
            console.log('Tap ' + s.boeboe);
          },
          complete: () => {
            console.log('Tap complete');
          },
        })
      )
      .subscribe({
        next: (s) => {
          console.log('Next: ' + s.boeboe);
        },
        complete: () => {
          console.log('Sub complete');
        },
      });

    this.tapTestResult = 'See console';
  }
}
