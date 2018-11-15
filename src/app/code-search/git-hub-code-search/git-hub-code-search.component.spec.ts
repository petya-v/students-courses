import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubCodeSearchComponent } from './git-hub-code-search.component';

describe('GitHubCodeSearchComponent', () => {
  let component: GitHubCodeSearchComponent;
  let fixture: ComponentFixture<GitHubCodeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubCodeSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubCodeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
