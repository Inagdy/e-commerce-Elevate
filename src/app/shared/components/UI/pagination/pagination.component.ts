import {
  Component,
  effect,
  input,
  InputSignal,
  output,
  OutputEmitterRef,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  numberOfPages: InputSignal<number> = input.required<number>();
  pages: number[] = [];
  currentPage: number = 1;
  maxVisible: number = 5;
  getCurrentPage: OutputEmitterRef<number> = output();
  ngOnInit() {
    this.updateVisiblePages();
  }
  updateVisiblePages() {
    const start = Math.max(
      1,
      this.currentPage - Math.floor(this.maxVisible / 2)
    );
    const end = Math.min(this.numberOfPages(), start + this.maxVisible - 1);
    this.pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }
  gotoCurrentPage(pageNum: number) {
    this.currentPage = pageNum;
    this.updateVisiblePages();
    this.getCurrentPage.emit(this.currentPage);
  }
  getPrevPage() {
    if (this.currentPage !== 1) {
      this.currentPage--;
      this.updateVisiblePages();
      this.getCurrentPage.emit(this.currentPage);
    }
  }
  getNextPage() {
    if (this.currentPage < this.numberOfPages()) {
      this.currentPage++;
      this.getCurrentPage.emit(this.currentPage);
    }
    this.updateVisiblePages();
  }
}
