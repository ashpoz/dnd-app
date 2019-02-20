import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttributesComponent } from './character/attributes/attributes.component';
import { SpellsComponent } from './character/spells/spells.component';
// import { EquipmentComponent } from './character/equipment/equipment.component';


const routes: Routes = [
  // NOTE: place more specfic routes above less specific routes
  { path: 'character', component: CharacterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'character/attributes/:id', component: AttributesComponent },
  { path: 'character/spells/:id', component: SpellsComponent },
  // { path: 'character/equipment', component: EquipmentComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // set up PageNotFoundComponent component later
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true } // <-- debugging purposes only
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
