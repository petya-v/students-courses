import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CodeSearchService} from '../../code-search.service';
import {fromEvent} from 'rxjs';
import {debounceTime, switchMap} from 'rxjs/internal/operators';
import {ToastaService, ToastaConfig} from 'ngx-toasta';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  constructor(private codeSearchService: CodeSearchService,
              private toastaService: ToastaService,
              private toastaConfig: ToastaConfig) {
    this.toastaConfig.theme = 'bootstrap';
  }

  @ViewChild('input') inputRef: ElementRef;

  ngOnInit() {
    const inputSubs = fromEvent(this.inputRef.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        switchMap((ev: any) => this.codeSearchService.findAll(ev.target.value)),
      ).subscribe();

    this.codeSearchService.resultsErr$
      .subscribe(err => this.toastaService.error(err.message));
  }
}
