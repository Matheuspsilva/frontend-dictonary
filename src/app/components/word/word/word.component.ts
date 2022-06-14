import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, filter, scan, delay } from 'rxjs/operators';
import { WordService } from 'src/app/service/word.service';
import { Word } from 'src/app/model/word';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  palavra: Word;
  palavrasAcessadas: Observable<Word[]>;
  palavrasFavoritas: Word[];
  searchTerm: String;
  isFavoriteBtnDisabled: boolean = false;

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

    this.wordService.getAccessedWords().subscribe(data => {
      this.palavrasAcessadas = data.content
      console.log(this.palavrasAcessadas)
    });

    this.getFavoriteWords()

  }

  ngDoCheck() {
    this.isFavoriteBtnDisabled = this.checkIfFavorite(this.palavra.word)
  }

  getFavoriteWords() {
    this.wordService.getFavoriteWords().subscribe(data => {
      this.palavrasFavoritas = data.content
    });
  }


  favorite(palavra: String) {
    this.wordService.favoriteWord(palavra).subscribe(data => {
      console.log(data)
      this.getFavoriteWords()
    });
  }

  unfavorite(palavra: String) {
    this.wordService.unfavoriteWord(palavra).subscribe(data => {
      console.log(data)
      this.getFavoriteWords()
    });
  }

  checkIfFavorite(palavra: String) {
    let result = this.palavrasFavoritas.map(a => a.word);
    let existsOnArray = result.indexOf(this.palavra.word) > -1

    return existsOnArray;

  }


}
