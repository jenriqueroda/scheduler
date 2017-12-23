import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { LeftMenuComponent } from './layout/left-menu/left-menu.component';
import { MainPageComponent } from './content/main-page/main-page.component';
import { EntitiesComponent } from './content/entity/entities/entities.component';
import { EntityinfoComponent } from './content/entity/entityinfo/entityinfo.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent },
  { path: 'entities', component: EntitiesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftMenuComponent,
    MainPageComponent,
    EntitiesComponent,
    EntityinfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
