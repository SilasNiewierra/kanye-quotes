import { getLocaleDateFormat } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'kanye-quotes';
  readonly KANYE_QUOTE_API_URL = 'https://kanye-quotes-backend.herokuapp.com';
  readonly QUOTE_URL = this.KANYE_QUOTE_API_URL + '/quote';
  readonly IMAGE_URL = this.KANYE_QUOTE_API_URL + '/image';

  quote$: Quote;
  backgroundUrl$: any;

  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get<Quote>(this.QUOTE_URL)
    .subscribe(data => {
      this.quote$ = data;
      const params = new HttpParams().set('tweet',data.quote.toString());
      this.http.get(this.IMAGE_URL, {params})
        .subscribe(value => {
          console.log('hi my name is: ', value)
          this.backgroundUrl$ = value
        });
    });
  } 
}
