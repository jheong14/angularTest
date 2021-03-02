import { Component } from '@angular/core';

/* @Component 함수를 통해 Component를 생성하고 export된 클래스를 app.module.ts에 등록해주면 다른 파일에서 사용할 수 있다. */
@Component({
  /* selector 사용될 태그 선언 index.html과 같아야 함. */
  selector: 'app-root',
  /* templateUrl은 selector에 담을 html code */
  templateUrl: './app.component.html',
  /* css */
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workspace';
}
