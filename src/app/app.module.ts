import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModuleTestComponent} from './moduleTest/moduleTest.component';
import { ModuleTest0Component } from './module-test0/module-test0.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

/* Angular 9 부터 @angular/material 은 사용이 불가능 함. import 하려면 각각 따로따로 가서 해야 함. @angular/material/card */
/* material 은 BrowserAnimationsModule import 후에 해야한다고 함. */
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ModuleTest1Component } from './module-test1/module-test1.component';

@NgModule({
  /* declarations 만든 클래스를 다른 파일에서 사용할 수 있도록 선언 */
  declarations: [
    AppComponent,
    ModuleTestComponent,
    ModuleTest0Component,
    ModuleTest1Component,
  ],
  /* angular 의 모듈에서 사용되는 클래스를 다른파일에서 사용할 수 있도록 선언 */
  imports: [
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  /* bootstrap 가장 먼저 실행되는 모듈 */
  bootstrap: [AppComponent]
})
export class AppModule { }
