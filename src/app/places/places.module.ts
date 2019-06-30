import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlacesPage } from './places.page';
import { PlacesRoutingModule } from './places.routing.module';
import { DiscoverPage } from './discover/discover.page';
import { PlaceDetailPage } from './discover/place-detail/place-detail.page';
import { NewOfferPage } from './offers/new-offer/new-offer.page';
import { OffersPage } from './offers/offers.page';
import { EditOfferPage } from './offers/edit-offer/edit-offer.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacesRoutingModule
  ],
  declarations: [PlacesPage, DiscoverPage, PlaceDetailPage, NewOfferPage, OffersPage, EditOfferPage ]
})
export class PlacesPageModule {}
