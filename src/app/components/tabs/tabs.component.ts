import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Word } from 'src/app/model/word';
import { WordService } from 'src/app/service/word.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {


  @Input() palavrasAcessadas: Observable<Word[]>;
  @Input() palavrasFavoritas: Observable<Word[]>;


  constructor(private wordService: WordService) { }

  ngOnInit() {



  }
}
