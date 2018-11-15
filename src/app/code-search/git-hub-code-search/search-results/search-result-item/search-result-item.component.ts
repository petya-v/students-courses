import {Component, Input, OnInit} from '@angular/core';
import {GithubSearchItem} from '../../../../models/GitHubSearch';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.css']
})
export class SearchResultItemComponent implements OnInit {
  @Input() searchItem: GithubSearchItem;

  constructor() { }

  ngOnInit() {
  }

}
