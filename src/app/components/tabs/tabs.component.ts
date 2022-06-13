import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Word } from 'src/app/model/word';
import { WordService } from 'src/app/service/word.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  palavrasAcessadas: Observable<Word[]>;
  palavrasFavoritas: Observable<Word[]>;

  constructor(private wordService: WordService) { }

  ngOnInit() {

    this.wordService.getAccessedWords().subscribe(data => {
      this.palavrasAcessadas = data.content
      console.log(this.palavrasAcessadas)
    });

    this.wordService.getFavoriteWords().subscribe(data => {
      this.palavrasFavoritas = data.content
      console.log(this.palavrasFavoritas)
    });

  }
}
