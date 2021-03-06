import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Something } from './something.model';

@Component({
  selector: 'null-check',
  template: `<p>{{result}}</p>`,
  styles: [],
})
export class NullCheckComponent {
  test: Observable<string>;

  result: string = '';

  num: number = 0;

  something: Something | null = null;

  constructor() {
    if (this.result) {
      console.log('result is something');
    } else {
      console.log('result is nothing');
    }

    if (this.test === null) {
      this.result += ' - test is null';
    }

    if (this.test === undefined) {
      this.result += ' - test is undefined ';
    }

    if (!this.test) {
      this.result += ' - non existing object';
    }

    if (this.num) {
      this.result += ' - num is something';
    } else {
      this.result += ' - num is nothing';
    }

    const json = JSON.parse(JSON.stringify(this.something));
    this.result += ' - ' + json;
    console.log("the following is json");
    console.log(json);
  }
}
