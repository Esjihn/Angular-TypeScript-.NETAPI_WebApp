import { Component } from '@angular/core';
import { AutoWarehouseServiceService } from "../auto-warehouse-service/auto-warehouse-service.service";
import { AutoPart } from "../../assets/AutoPart";


@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  model: AutoPart[] = [];
  queryStr: string = '';
  constructor(private autoPartsService: AutoWarehouseServiceService) {  }

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

    this.autoPartsService.getAutoParts().subscribe((data => {
      this.model = data;

      console.log(data);
      console.log(this.model);
    }));

    // Filter data on sanitized query.
    //this.model.parts = this.model.parts.filter(str =>
    //  str.indexOf(this.queryStr) === -1);

  }
}

export class CarParts {
  parts = ['tire', 'wheel', 'engine'];
}
