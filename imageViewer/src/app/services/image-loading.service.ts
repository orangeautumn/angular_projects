import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImagesLoadingService {
  private httpClient: HttpClient;
  private imageURL = 'https://interview.donkeymob.com/api/pokemon';
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getImages(): any {
    return this.httpClient.get(this.imageURL);
  }

  loadMoreImages(currentPage: number, resultsPerPage: number): any {
    return this.httpClient.get(
      `${this.imageURL}?q=${''}&p=${currentPage}&l=${resultsPerPage}`
    );
  }
}
