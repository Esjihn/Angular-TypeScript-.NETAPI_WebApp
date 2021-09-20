import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  model: CarParts = new CarParts();
  queryStr: string = '';
  constructor() {  }

  ngOnInit() {
  }

  queryList(event: any) {
    console.log(this.queryStr);

    // Sanitize query
    for (let character of this.queryStr) {
      if (character === 'patternMatching') {
        this.queryStr.replace(character, '');
      }
    }

    // Filter data on sanitized query.
    this.model.parts = this.model.parts.filter(str =>
      str.indexOf(this.queryStr) === -1);

    console.log(this.model.parts);
  }
}

export class CarParts {
  parts = ['tire', 'wheel', 'engine'];
}
