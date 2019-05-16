import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccomodationsComponent } from './accomodations/accomodations.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { FoodAndBeveragesComponent } from './food-and-beverages/food-and-beverages.component';
import { LiefstyleComponent } from './liefstyle/liefstyle.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { OffersComponent } from './offers/offers.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path :'accomodation', component: AccomodationsComponent},
  { path :'celebrations', component: CelebrationsComponent},
  { path :'food-and-beverages', component: FoodAndBeveragesComponent},
  { path :'lifestyle' , component: LiefstyleComponent},
  { path :'weddings' , component: WeddingsComponent},
  { path :'offers' , component: OffersComponent},
  { path :'signin' , component: SigninComponent},
  { path :'signup' , component: SignupComponent}
];

@ NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
