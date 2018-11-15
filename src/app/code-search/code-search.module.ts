import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GitHubCodeSearchComponent } from './git-hub-code-search/git-hub-code-search.component';
import { SearchInputComponent } from './git-hub-code-search/search-input/search-input.component';
import { SearchResultsComponent } from './git-hub-code-search/search-results/search-results.component';
import { SearchResultItemComponent } from './git-hub-code-search/search-results/search-result-item/search-result-item.component';
import {CodeSearchService} from './code-search.service';
import {RouterModule, Routes} from '@angular/router';
import {ToastaModule} from 'ngx-toasta';

const routes: Routes = [
  { path: 'codeSearch/gitHub', component: GitHubCodeSearchComponent }
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ToastaModule.forRoot()
  ],
  declarations: [
    GitHubCodeSearchComponent,
    SearchInputComponent,
    SearchResultsComponent,
    SearchResultItemComponent],
  providers: [
    CodeSearchService
  ],
  exports: [
    ToastaModule
  ]
})
export class CodeSearchModule { }
