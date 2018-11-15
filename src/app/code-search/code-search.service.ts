import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, filter, map} from 'rxjs/internal/operators';
import {GitHubSearchResult, GithubSearchItem} from '../models/GitHubSearch';

@Injectable({
  providedIn: 'root'
})
export class CodeSearchService {
  get results$(): Observable<GithubSearchItem[]> {
    return this._results$.asObservable();
  }

  get resultsErr$(): Observable<Error> {
    return this._resultsErr$.pipe(
      filter(result => result !== null)
    );
  }

  private _results$: BehaviorSubject<GithubSearchItem[]> = new BehaviorSubject([]);
  private _resultsErr$: BehaviorSubject<Error> = new BehaviorSubject(null);
  private url = 'https://api.github.com/search/repositories';


  constructor(private http: HttpClient) {
    this.findAll = this.findAll.bind(this);
  }

  findAll(keyword?: string) {
  const params = new HttpParams().set('q', keyword);

  this.http.get<GitHubSearchResult>(this.url, {params: params})
    .pipe(map<GitHubSearchResult, GithubSearchItem[]> (result => result.items),
      catchError((err) => {
        this._resultsErr$.next(err);
        return of([]);
    })
    ).subscribe(searchResult => this._results$.next(searchResult));

    return this.results$;
  }
}
