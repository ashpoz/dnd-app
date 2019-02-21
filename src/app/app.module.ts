import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
=======
import {CharacterRoutingModule} from './character/character-routing.module';
>>>>>>> 9b3924d016c5bf22300fa2ca16b1606e734d1c20
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
<<<<<<< HEAD
    AppRoutingModule
=======
    AppRoutingModule,
    CharacterRoutingModule
>>>>>>> 9b3924d016c5bf22300fa2ca16b1606e734d1c20
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
