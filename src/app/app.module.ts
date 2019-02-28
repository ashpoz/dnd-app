import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {CharacterRoutingModule} from './character/character-routing.module';
import { AppComponent } from './app.component';
import { CharacterComponent } from './character/character.component';
import { SidebarComponent } from './character/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttributesComponent } from './character/attributes/attributes.component';
import { SpellsComponent } from './character/spells/spells.component';
import { EquipmentComponent } from './character/equipment/equipment.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

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
//     HttpClientModule,

// // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// // and returns simulated server responses.
// // Remove it when a real server is ready to receive requests.
// HttpClientInMemoryWebApiModule.forRoot(
//   InMemoryDataService, { dataEncapsulation: false }
// )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
