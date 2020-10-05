import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

const matComponents = [
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
];

@NgModule({
  declarations: [],
  imports: [matComponents],
  exports: [matComponents],
})
export class MaterialsModule {}
