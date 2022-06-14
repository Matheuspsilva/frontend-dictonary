import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Word } from 'src/app/model/word';
import { WordService } from 'src/app/service/word.service';
import { Router, NavigationExtras } from "@angular/router";
import { PageEvent } from '@angular/material/paginator';
import { isNull, isUndefined } from 'util';

@Component({
  selector: 'app-search-text',
  templateUrl: './search-text.component.html',
  styleUrls: ['./search-text.component.css']
})
export class SearchTextComponent implements OnInit {

  palavras: Observable<Word[]>;
  searchText: String;
  totalElements: number = 0;

  constructor(private wordService: WordService, private router: Router) { }

  ngOnInit() {
    this.getProducts({ page: "0", size: "10" });
  }

  public onTap(palavra: String) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "searchTerm": palavra,
      }
    };
    this.router.navigate(["palavra"], navigationExtras);
  }

  searchFilter() {
    this.wordService.getWordListParam(this.searchText, "0", "10").subscribe(data => {
      this.palavras = data.content
      this.totalElements = data['totalElements']
      console.log(this.palavras)

    });
  }

  getProducts(request){

    if(isUndefined(this.searchText)){
      this.wordService.getAllWordListParam(request['page'], request['size']).subscribe(data => {
        this.palavras = data['content']
        this.totalElements = data['totalElements']
        console.log(this.palavras)

      });
    }

    this.wordService.getWordListParam(this.searchText, request['page'], request['size']).subscribe(data => {
      this.palavras = data['content']
      this.totalElements = data['totalElements']
      console.log(this.palavras)

    });
  }

  nextPage(event: PageEvent) {
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    this.getProducts(request);
  }



}
