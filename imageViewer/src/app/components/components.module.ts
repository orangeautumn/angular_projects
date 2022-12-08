import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ImageViewerComponent],
  imports: [CommonModule, FormsModule],
  exports: [ImageViewerComponent],
})
export class ComponentsModule {}
