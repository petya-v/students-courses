import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import {StudentsModule} from './students/students.module';
import {CoursesModule} from './courses/courses.module';
import {TestModule} from './test/test.module';
import {CodeSearchModule} from './code-search/code-search.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StudentsModule,
    CoursesModule,
    TestModule,
    CodeSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule {}
