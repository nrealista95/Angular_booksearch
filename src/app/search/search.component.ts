import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { query } from '@angular/core/src/render3';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  searchQuery: string;

  ngOnInit() {
    this.dataService.currentQuery.subscribe(query => this.searchQuery = query);
  }

  onSearch() {
    this.dataService.queryMessage(this.searchQuery);
    this.router.navigate(['/book', this.searchQuery ], {queryParams: {filter: this.searchQuery}});
  }

}
