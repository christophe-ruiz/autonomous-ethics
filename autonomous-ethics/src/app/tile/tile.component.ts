import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {Scenario} from '../../models/scenario';
import {serverUrl} from '../../configs/server.config';
import {SessionService} from '../../services/session.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  public serverUrl = serverUrl;

  @Input()
  public scenario !: Scenario;

  @Input()
  public type: String = "";
  public road: String = "";

  constructor(private sessionService: SessionService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.scenario = changes.scenario.currentValue;
  }


  ngOnInit(): void {
    this.sessionService.scenario$.subscribe(s => this.scenario = s);
    this.road = "road-" + this.type + ".png";
  }

}
