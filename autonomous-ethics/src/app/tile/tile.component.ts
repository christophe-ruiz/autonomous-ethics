import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input()
  public type: String = "";
  public road: String = "";

  constructor() {

  }

  ngOnInit(): void {
    this.road = "road-" + this.type + ".png";
  }

}
