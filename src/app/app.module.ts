import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatRadioModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SearchComponent } from './search.component';
import { SearchResultsComponent } from './search-results.component';
import { AppRoutingModule } from './app-routing.module';

import { BeerSearchService } from './beer-search.service';

import { FilterPipe } from './filter.pipe';
import { SortByPipe } from './sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultsComponent,
    FilterPipe,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [BeerSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
