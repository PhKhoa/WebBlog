import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { ArticleEffects } from './ngrx/effects/data.effects';
import { articleReducer } from './ngrx/reducers/data.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({article:articleReducer}, {}),
    EffectsModule.forRoot([ArticleEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
