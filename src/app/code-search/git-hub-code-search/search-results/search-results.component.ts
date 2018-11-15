import { Component } from '@angular/core';
import {CodeSearchService} from '../../code-search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
  constructor(private codeSearchService: CodeSearchService) { }

  public resultsList$ = this.codeSearchService.results$;
}
