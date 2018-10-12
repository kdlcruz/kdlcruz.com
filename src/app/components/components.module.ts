import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { SkillItemComponent } from './skill-item/skill-item.component';
import { PortfolioSideComponent } from './portfolio-side/portfolio-side.component'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    MatProgressBarModule
  ],
  declarations: [SkillItemComponent, PortfolioSideComponent],
  exports: [
    SkillItemComponent,
    PortfolioSideComponent
  ]
})
export class ComponentsModule { }
