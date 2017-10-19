import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search.component';
import { SearchResultsComponent } from './search-results.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'search/:q', component: SearchResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
