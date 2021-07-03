import { MapService } from './../_services/map.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IActivity } from '../_models/activity';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
 
  activity: IActivity;

  constructor(private mapService: MapService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.activity = this.mapService.getActivity( +this.route.snapshot.params['id']);
  }

  ngAfterViewInit(): void {
    this.mapService.plotActivity( +this.route.snapshot.params['id']);
  }
}
