import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

const apiUrl = environment.apiCrossRef;

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  constructor( public httpClient: HttpClient) { }

  getWorks(page:any, pageSize: any){
    let pagedData = page * pageSize;
    console.log('Api URL Service:: ' + apiUrl + 'works?rows=' + pageSize + '&offset=' + pagedData);
    return new Promise(resolve => {
      this.httpClient.get(apiUrl + 'works?rows=' + pageSize + '&offset=' + pagedData)
                     .subscribe(data => {
                      resolve(data);
                     }, error => {
                      resolve(error);
                     });
    });
  }
}
