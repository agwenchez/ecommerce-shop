import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  cols = 1
  category = 'shoes'

  constructor() { }

  ngOnInit(): void {
  }

  onColumsCountChange(colsNum: number):void{
    this.cols = colsNum
  }
  onCategorySelectChange(category:string):void{
    this.category = category
  }

}
