<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttributesComponent } from './attributes/attributes.component';
import { SpellsComponent } from './spells/spells.component';
import { EquipmentComponent } from './equipment/equipment.component';


const characterRoutes: Routes = [
  { path: '', redirectTo: '/attributes', pathMatch: 'full' },
  { path: 'attributes', component: AttributesComponent },
  { path: 'spells', component: SpellsComponent },
  { path: 'equipment', component: EquipmentComponent },
=======
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AttributesComponent } from "./attributes/attributes.component";
import { CharacterComponent } from "./character.component";
import { SpellsComponent } from "./spells/spells.component";
import { EquipmentComponent } from "./equipment/equipment.component";

const characterRoutes: Routes = [
  {
    path: "character",
    children: [
      {
        path: ":id",
        component: CharacterComponent
      },
      { path: "attributes", component: AttributesComponent }
    ]
  }
  // { path: 'attributes', component: AttributesComponent },
  // { path: 'spells', component: SpellsComponent },
  // { path: 'equipment', component: EquipmentComponent },
>>>>>>> 9b3924d016c5bf22300fa2ca16b1606e734d1c20
];

@NgModule({
  imports: [RouterModule.forRoot(characterRoutes)],
  exports: [RouterModule]
})
<<<<<<< HEAD
export class AppRoutingModule { }
=======
export class CharacterRoutingModule {}
>>>>>>> 9b3924d016c5bf22300fa2ca16b1606e734d1c20
