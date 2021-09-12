import { Component, OnInit } from '@angular/core';

// SERVICE 
import { LocalDataService } from '../../../services/local-data/local-data.service';

@Component({
  selector: 'app-tag-box',
  templateUrl: './tag-box.component.html',
  styleUrls: ['./tag-box.component.scss']
})
export class TagBoxComponent implements OnInit {

  public localDataUrl:string = '../../../../assets/data/items.json';
  public data: any[] = [];

  constructor(private localDataService: LocalDataService) {
    localDataService.getData(this.localDataUrl).subscribe(result => {
      console.log("Items ", result);
      this.data = result;
    });

  }

  ngOnInit(): void {
  }

}
