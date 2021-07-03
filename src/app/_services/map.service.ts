import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { SAVED_ACTIVITIES } from '../data/activity.data';

declare var omnivore: any;
declare var L: any;
const defaultCoords: number[] = [40, 48];
const defaultZoom: number = 8;
const apiToken = environment.mapBoxKey;

@Injectable()
export class MapService {

constructor() { }

getActivity(id: number) {
    return SAVED_ACTIVITIES.slice(0).find(run => run.id == id);
}

plotActivity(id: number) {
    const myStyle = {
      'color': '#3949AB',
      'weight': 5,
      'opacity': 0.95
    };

    const map = L.map('map').setView(defaultCoords, defaultZoom);

    map.maxZoom = 100;

    L.tileLayer('https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: `Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>
                    contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">
                    CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>`,
      maxZoom: 18,
      id: 'mapbox.dark',
      accessToken: apiToken
    }).addTo(map);

    const customLayer = L.geoJson(null, {
      style: myStyle
    });

    const gpxLayer = omnivore.gpx(SAVED_ACTIVITIES.slice(0).find(run => run.id === id).gpxData, null, customLayer)
    .on('ready', function() {
      map.fitBounds(gpxLayer.getBounds());
    }).addTo(map);
  }

}
