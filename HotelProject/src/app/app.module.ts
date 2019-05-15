import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AccomodationsComponent } from './accomodations/accomodations.component';
import { RoomsComponent } from './accomodations/rooms/rooms.component';
import { FoodAndBeveragesComponent } from './food-and-beverages/food-and-beverages.component';
import { RetaurantComponent } from './food-and-beverages/retaurant/retaurant.component';
import { BarsComponent } from './food-and-beverages/bars/bars.component';
import { LiefstyleComponent } from './liefstyle/liefstyle.component';
import { WellnessAndSpaComponent } from './liefstyle/wellness-and-spa/wellness-and-spa.component';
import { ResortActivitiesComponent } from './liefstyle/resort-activities/resort-activities.component';
import { ExpirencesComponent } from './liefstyle/expirences/expirences.component';
import { ExcursionsComponent } from './liefstyle/excursions/excursions.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { ThaiWeddingsComponent } from './weddings/thai-weddings/thai-weddings.component';
import { WesternWeddingsComponent } from './weddings/western-weddings/western-weddings.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    AccomodationsComponent,
    RoomsComponent,
    FoodAndBeveragesComponent,
    RetaurantComponent,
    BarsComponent,
    LiefstyleComponent,
    WellnessAndSpaComponent,
    ResortActivitiesComponent,
    ExpirencesComponent,
    ExcursionsComponent,
    WeddingsComponent,
    ThaiWeddingsComponent,
    WesternWeddingsComponent,
    CelebrationsComponent,
    OffersComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
