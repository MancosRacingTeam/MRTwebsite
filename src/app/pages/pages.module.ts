import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';

import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { ChampionshipsComponent } from './championships/championships.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HomeComponent,
    TeamComponent,
    ChampionshipsComponent,
    ProfileComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [],
  providers: []
})
export class PagesModule {}
