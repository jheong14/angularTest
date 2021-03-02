import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-test0',
  templateUrl: './module-test0.component.html',
  styleUrls: ['./module-test0.component.css']
})
export class ModuleTest0Component implements OnInit {

  /* false 이외 값이 들어가면 true 로 처리함.  */
  checkDisabled = true;
  /*checkDisabled = 'false';*/

  /* 문자열을 정의할 때는 ""말고 ''로 정의해야함. */
  resultText = 'this is div tag module-test0';

  count = 0;
  /* 반드시 카멜케이스로 해야함. */
  /*
  * click 클릭
  * dblclick 더블 클릭
  * blur focus를 잃었을떄
  * focus focus 되었을때
  * copy 값이 복사 되었을때
  * paste 값을 붙혀넣었을때
  * cut 값을 잘라냈을때
  * keydown 키보드 키를 눌러졌을때
  * keyup 키보드 키를 눌렀다가 뗐을때
  * keypress 키보드 키를 눌렀을때
  * mousedown 마우스 클릭 되었을때
  * mouseup 마우스 클릭 하고 뗐을때
  * mouseenter 마우스가 해당 Object 위로 올라갔을때
  * mouseleave 마우스가 해당 Object 밖으로 나갔을때
  * mousemove 마우스가 해당 Object 위에서 움직였을때
  * mouseover 마우스가 해당 Object 위에 있을 때
  */
  bindingEvent = () => {
    this.count++;
    this.resultText = 'event binding' + this.count;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
