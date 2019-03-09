import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';


import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { CharacterRoutingModule } from './character/character-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { SidebarComponent } from './character/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttributesComponent } from './character/attributes/attributes.component';
import { SpellsComponent } from './character/spells/spells.component';
import { EquipmentComponent } from './character/equipment/equipment.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    SidebarComponent,
    DashboardComponent,
    AttributesComponent,
    SpellsComponent,
    EquipmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CharacterRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,

// // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// // and returns simulated server responses.
// // Remove it when a real server is ready to receive requests.
HttpClientInMemoryWebApiModule.forRoot(
  InMemoryDataService, { dataEncapsulation: false }
)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
