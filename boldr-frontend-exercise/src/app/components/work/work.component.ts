import { Component, OnInit } from '@angular/core';
import { WorksService } from '../../services/works.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  works: any;
  datos: any;
  page = 1;
	pageSize = 20;
	collectionSize = 0;
  searchText: any;

  constructor(public workService: WorksService) { 
    this.getWorks(this.page);
  }

  ngOnInit(): void {
  }

  getWorks(page:any){
    this.workService.getWorks(page, this.pageSize)
    .then(response => {
      this.works = response;
      this.collectionSize = this.works.message['total-results'];
    });
  }

  renderPage(event: number) {
    this.page = event;
    this.getWorks(this.page);
  }
}
