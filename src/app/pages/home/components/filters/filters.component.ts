import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filter.component.html',
})
export class FiltersComponent implements OnInit {

  @Output() showCategory = new EventEmitter<string>()
  categories = ['shoes', 'sports']
  constructor() { }

  ngOnInit(): void {
  }

  onSelectCategory(category: string){
    this.showCategory.emit(category)
  }

}
