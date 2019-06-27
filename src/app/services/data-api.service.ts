import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { SuperHeroeInterface } from "../models/superheroe-interface";
import { PublisherInterface } from '../models/publisher-interface';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  constructor(private http: HttpClient) {}
  publishers: Observable<any>;
  publisher: Observable<any>;

    headers : HttpHeaders = new HttpHeaders({
      "Content-Type": "application/json"
    })
    getlAllPublisher(){
      const url_api = "http://127.0.0.1:8000/publisher/";
      return this.http.get(url_api);
    }

    getPublisherById(id: string){
      const url_api = 'http://127.0.0.1:8000/publisher/${id}';
      return (this.publisher = this.http.get(url_api));
    }

    savePublisher(publisher: PublisherInterface){
      const url_api = 'http://127.0.0.1:8000/publisher/';
      return this.http.post<PublisherInterface>(url_api, publisher,{headers: this.headers})
      .pipe(map(data => data));
    }

    updatePublisher(publisher: PublisherInterface){
      const url_api = 'http://127.0.0.1:8000/publisher/';
      return this.http.put<PublisherInterface>(url_api, publisher,{headers: this.headers})
      .pipe(map(data => data));
    }

    deletePublisher(publisher: PublisherInterface){
      const url_api = 'http://127.0.0.1:8000/publisher/';
      return this.http.delete<PublisherInterface>(url_api,{headers: this.headers})
      .pipe(map(data => data));
    }
}
