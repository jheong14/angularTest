import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-test1',
  templateUrl: './module-test1.component.html',
  styleUrls: ['./module-test1.component.css']
})
export class ModuleTest1Component implements OnInit {

  value = 'StringValue';
  inputVal = 'a';
  inputVal1 = 'not 0900099';
  switchVal = '';
  radioVal = '';
  paramList = [
    'able', 'disable', 'cant'
  ];
  paramList2 = [
    {name : 'paramList0_name0', value: 'paramList0_value!'},
    {name : 'paramList0_name1', value: 'paramList0_value@'},
    {name : 'paramList0_name2', value: 'paramList0_value#'},
    {name : 'paramList0_name3', value: 'paramList0_value$'},
    {name : 'paramList0_name4', value: 'paramList0_value%'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
