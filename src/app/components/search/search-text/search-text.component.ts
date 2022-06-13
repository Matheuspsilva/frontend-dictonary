import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Word } from 'src/app/model/word';
import { WordService } from 'src/app/service/word.service';
import {Router, NavigationExtras} from "@angular/router";

@Component({
  selector: 'app-search-text',
  templateUrl: './search-text.component.html',
  styleUrls: ['./search-text.component.css']
})
export class SearchTextComponent implements OnInit {

  palavras: Observable<Word[]>;
  searchText: String;

  constructor(private wordService: WordService, private router: Router) { }

  ngOnInit() {
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
    this.wordService.getWordListParam(this.searchText).subscribe(data => {
      this.palavras = data.content
      console.log(this.palavras)
    });
  }


}
