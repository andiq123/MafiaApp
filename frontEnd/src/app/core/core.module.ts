import { MaterialsModule } from './../mc/materials/materials.module';
import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [NavComponent],
  imports: [MaterialsModule],
  exports: [NavComponent],
})
export class CoreModule {}
