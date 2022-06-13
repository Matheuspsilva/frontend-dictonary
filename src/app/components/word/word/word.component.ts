import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WordService } from 'src/app/service/word.service';
import { Word } from 'src/app/model/word';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  palavras: Observable<Word[]>;
  palavra: Observable<Word>;
  searchTerm: String;

  constructor(private wordService: WordService, private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
      this.searchTerm = params["searchTerm"];
   });
  }

  ngOnInit() {

      this.wordService.getWord((this.searchTerm)).subscribe(data => {
      console.log(data[0])
      this.palavra = data[0];

    });
  }


}
