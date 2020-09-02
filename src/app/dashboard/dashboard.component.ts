import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../shared/service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
search='';
filteredData =[];
display = true
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

}
