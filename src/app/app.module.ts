import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import {StockService} from './stock/stock.service';

const routes = [
  {
    path: '',
    redirectTo: 'stocks',
    pathMatch: 'full'
  },
  {
    path: 'stocks',
    component: StockComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
