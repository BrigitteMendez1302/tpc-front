import { Component, OnInit } from '@angular/core';
import { SuggestionsApiService } from "../../../services/suggestions-api.service";
import { Suggestion } from "../../../models/suggestion";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-show-suggestions',
  templateUrl: './show-suggestions.component.html',
  styleUrls: ['./show-suggestions.component.css']
})
export class ShowSuggestionsComponent implements OnInit {
  displayedColumns = ['ID', 'Mensaje']
  dataSource: Suggestion[] = [];
  constructor(private suggestionsApiService: SuggestionsApiService, private router: Router, private route: ActivatedRoute) {  }

  ngOnInit(): void {
    this.suggestionsApiService.getAllSuggestions().subscribe(response => {
      this.dataSource = response.content
      console.log(response.content)
    })
  }

}
