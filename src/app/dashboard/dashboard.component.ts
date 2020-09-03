import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../shared/service/dashboard.service';
import { OverlayPanel } from 'primeng/overlaypanel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
search='';
filteredData =[];
display = true;
selectedItem
type = 'card'

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getData().subscribe((data)=>{
      console.log(this.filteredData)
      this.filteredData= data;
    })
  }

  // to toggle between grid and card
  displayChange(type) {
    this.type = type;
  }

  showModal = false;
  showImage( item) {
      this.selectedItem = item;
      this.showModal = true;
  }

}
