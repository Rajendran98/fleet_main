import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ccss-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  sample ="3343"
  CustomAssetState: string[] = ['In Use', 'Maintenance', 'Overhaul', 'In Transit', 'Unplanned Down', 'Scheduled Down','Available','Rented'];
  constructor() { }

  ngOnInit(): void {
  }

}
