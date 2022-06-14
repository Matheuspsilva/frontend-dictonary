import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { isUndefined } from "util";
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

  getWordListParam(word : String, page: String, size: String): Observable<any>{
    return this.http.get<any>(AppConstants.baseUrl + "entries/en?search=" + word + "&page=" + page + "&limit=" + size);
  }

  getAllWordListParam( page: String, size: String): Observable<any>{
    return this.http.get<any>(AppConstants.baseUrl + "entries/en?" + "page=" + page + "&limit=" + size);
  }

  getWord(word : String): Observable<any>{
    return this.http.get<any>(AppConstants.baseUrl + "entries/en/" + word);
  }

  getAccessedWords(): Observable<any>{
    return this.http.get<any>(AppConstants.baseUrl + "user/me/history");
  }

  getFavoriteWords(): Observable<any>{
    return this.http.get<any>(AppConstants.baseUrl + "user/me/favorites");
  }

  favoriteWord(word : String):Observable<any>{
    return this.http.post<any>(AppConstants.baseUrl + "entries/en/" + word +"/favorite", {});
  }

  unfavoriteWord(word : String):Observable<any>{
    return this.http.delete<any>(AppConstants.baseUrl + "entries/en/" + word +"/unfavorite", {});
  }
}
