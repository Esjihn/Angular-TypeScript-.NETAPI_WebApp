import { Component } from '@angular/core';
import { AutoWarehouseServiceService } from "../auto-warehouse-service/auto-warehouse-service.service";
import { AutoPart } from "../../assets/AutoPart";


@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  model: AutoPart = new AutoPart();
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
      console.log(data);
      this.model.autoPartId = data[0].autoPartId;
      this.model.partName = data[0].partName;
      this.model.lastModifiedBy = data[0].lastModifiedBy;
      this.model.lastModifiedDate = data[0].lastModifiedDate;
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
