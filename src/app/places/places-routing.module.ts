import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

const routes: Routes = [
  {
    path: '',
    component: PlacesPage,
  },
  {
    path: 'discover',
    loadChildren: () =>
      import('./discover/discover.module').then((m) => m.DiscoverPageModule),
    children: [
      {
        path: ':placeId',
        loadChildren: () =>
          import('./discover/place-details/place-details.module').then(
            (m) => m.PlaceDetailsPageModule
          ),
      },
    ],
  },
  {
    path: 'offers',
    loadChildren: () =>
      import('./offers/offers.module').then((m) => m.OffersPageModule),
    children: [
      {
        path: 'new',
        loadChildren: () =>
          import('./offers/new-offer/new-offer.module').then(
            (m) => m.NewOfferPageModule
          ),
      },
      {
        path: 'edit/:placeId',
        loadChildren: () =>
          import('./offers/edit-offer/edit-offer.module').then(
            (m) => m.EditOfferPageModule
          ),
      },
      {
        path: ':placeId',
        loadChildren: () =>
          import('./offers/offer-bookings/offer-bookings.module').then(
            (m) => m.OfferBookingsPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
