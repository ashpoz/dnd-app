import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
