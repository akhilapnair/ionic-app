import { Component, OnInit } from '@angular/core';
import { Places } from '../places.model';
import { PlacesRoutingModule } from '../places.routing.module';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss']
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Places[];
  constructor(private placeService: PlacesService) {
    this.loadedPlaces = this.placeService.getData();
  }

  ngOnInit() {}
}
