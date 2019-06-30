import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacesPage } from './places.page';
import { DiscoverPage } from './discover/discover.page';
import { OffersPage } from './offers/offers.page';
import { PlaceDetailPage } from './discover/place-detail/place-detail.page';
import { EditOfferPage } from './offers/edit-offer/edit-offer.page';

const routes: Routes = [
  { path: '', redirectTo: 'discover', pathMatch: 'full' },
  {
    path: '',
    component: PlacesPage,
    children: [
      {
        path: 'discover',
        component: DiscoverPage
      },
      { path: 'discover/:id', component: PlaceDetailPage },
      {
        path: 'offers',
        component: OffersPage,
        children: [{ path: 'new', component: EditOfferPage }]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesRoutingModule {}
