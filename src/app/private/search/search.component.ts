import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'esm-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  searchTerm!: string;

  @Output() searchResults: EventEmitter<any> = new EventEmitter();
  @Input() urlObject!: string;

  constructor(private _searchService: SearchService) { }

  ngOnInit() {
  }

  search() {
    if (this.searchTerm) {
      this._searchService.objectsSearch(this.urlObject, this.searchTerm).subscribe(response => {
        this.searchResults.emit({response:response});
      });
    } else {
      this._searchService.objectsSearch(this.urlObject).subscribe(response => {
        this.searchResults.emit({response:response});
      });
    }
  }
}
