import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttributesComponent } from './attributes/attributes.component';
import { CharacterComponent } from './character.component';
import { SpellsComponent } from './spells/spells.component';
import { EquipmentComponent } from './equipment/equipment.component';


const characterRoutes: Routes = [
  {
    path: 'character',
    children: [
      {
        path: ':id',
        component: CharacterComponent,
        children: [
          { path: 'attributes', component: AttributesComponent },
          { path: 'spells', component: SpellsComponent },
          { path: 'equipment', component: EquipmentComponent },
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(characterRoutes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule {}
