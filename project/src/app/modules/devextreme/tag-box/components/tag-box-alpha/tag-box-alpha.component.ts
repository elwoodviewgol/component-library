import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag-box-alpha',
  templateUrl: './tag-box-alpha.component.html',
  styleUrls: ['./tag-box-alpha.component.scss']
})
export class TagBoxAlphaComponent implements OnInit {

  @Input() data: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
