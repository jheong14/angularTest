import { Component } from '@angular/core';
@Component({
  /* selector 는 카멜케이스 사용하면 안 되는 듯 함. 케밥케이스로 선언해야 하는 것으로 보임 */
  selector: 'app-moduletst',
  templateUrl: './moduleTest.component.html',
  styleUrls: ['./moduleTest.component.css']
})

export class ModuleTestComponent {
  boolTrue = true;
  color = 'red';
  value = 75;
  result = 'selector may be kebab-case i dont know why';

  /* angular9 에서는 name 에 ''를 안 넣어도 되는거 같음 미친 구글에서는 넣으라 해서 존나 헤맴 */
  list = [
    { name: 'test0', ID: 'D1' },
    { name: 'test1', ID: 'D2' }
  ];
  checked = this.list[0].name;

  onKeyUp = (event) => {
    console.log(event.target.value);
  }

}
