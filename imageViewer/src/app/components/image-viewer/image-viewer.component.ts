import { Component, OnInit } from '@angular/core';
import { ImagesLoadingService } from 'src/app/services/image-loading.service';

@Component({
  selector: 'image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
})
export class ImageViewerComponent implements OnInit {
  imageService: ImagesLoadingService;

  searchInput: string = '';
  searchImageList: any[] = [];
  title: string = 'Images Component';

  imagesList: any[] = [];
  currentPage: number = 0;
  resultsPerPage: number = 3;

  constructor(imageService: ImagesLoadingService) {
    console.log('constructor');
    this.imageService = imageService;
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.loadMoreImages();
  }

  loadMoreImages(): void {
    this.imageService
      .loadMoreImages(this.currentPage, this.resultsPerPage)
      .subscribe((resp: any) => {
        console.log('resp -->', resp);
        console.log(' this.imagesList -->', this.imagesList);
        this.imagesList = [...this.imagesList, ...resp.result];
        console.log(' this.imagesList  after-->', this.imagesList);

        this.currentPage = this.currentPage + 1;
      });
  }

  searchImages(): void {
    this.searchImageList = [];

    if (this.searchInput) {
      this.imagesList.map((image) => {
        if (image.name.includes(this.searchInput)) {
          this.searchImageList.push(image);
        }
      });
    } else {
      this.searchImageList = [];
    }
  }
}
