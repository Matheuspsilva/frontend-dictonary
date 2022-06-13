import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(private http: HttpClient) {

  }

  getWordList(): Observable<any>{
    return this.http.get<any>(AppConstants.baseUrl + "entries/en/");
  }

  getWordListParam(word : String): Observable<any>{
    console.log(word)
    return this.http.get<any>(AppConstants.baseUrl + "entries/en?search=" + word);
  }

  getWord(word : String): Observable<any>{
    return this.http.get<any>(AppConstants.baseUrl + "entries/en/" + word);
  }

}
