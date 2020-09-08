import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { DashboardService } from '../shared/service/dashboard.service';
import { filterOption, sortOrder } from '../shared/constant';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  @ViewChild('icon', { static: false }) icon: ElementRef;
  filterOption = filterOption;
  sortOrder = sortOrder;
  search = '';
  sortBy = new FormControl();
  sortOrderVal = new FormControl(sortOrder[0].value);
  filteredData = [];
  display = true;
  selectedItem;
  type = 'card';
  subscription: Subscription;
  subscription1: Subscription;
  subscription2: Subscription;
  showModal = false;
  selected = false;
  selectedFavItem;
  showFavModal = false;
  favList = [];

  constructor(
    private dashboardService: DashboardService,
    private cd: ChangeDetectorRef
  ) {
    this.subscription = this.dashboardService.getData().subscribe((data) => {
      this.filteredData = data;
      this.sortData('title', 'ASC');
    });
    this.subscription1 = this.sortBy.valueChanges.subscribe((data) => {
      this.sortData(data, this.sortOrderVal.value);
    });
    this.subscription2 = this.sortOrderVal.valueChanges.subscribe((data) => {
      this.sortData(this.sortBy.value, data);
    });
  }

  ngOnInit() {
    this.sortBy.setValue(this.filterOption[0].value);
    this.sortOrderVal.setValue(this.sortOrder[0].value);
  }

  sortData(sortBy, sortOrder1) {
    switch (sortOrder1) {
      case 'ASC':
        sortBy === 'title'
          ? (this.filteredData = this.filteredData.sort((a, b) =>
              a.title.localeCompare(b.title)
            ))
          : (this.filteredData = this.filteredData.sort(
              (a, b) => a.albumId - b.albumId
            ));
        console.log(this.filteredData);
        break;
      case 'DESC':
        sortBy === 'title'
          ? (this.filteredData = this.filteredData.sort((a, b) =>
              b.title.localeCompare(a.title)
            ))
          : (this.filteredData = this.filteredData.sort(
              (a, b) => b.albumId - a.albumId
            ));
        console.log(this.filteredData);
        break;
      default:
        break;
    }
    this.cd.detectChanges();
  }
  // to toggle between grid and card
  displayChange(type) {
    this.type = type;
  }

  showImage(item) {
    this.selectedItem = item;
    this.showModal = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addToFav(item, evt) {
    this.selectedFavItem = item;
    if (item.id.toString() === evt.target.id && !evt.target.classList.contains('fa-heart')) {
      this.favList.push(item);
      evt.target.classList.add('fa-heart');
      evt.target.classList.remove('fa-heart-o');
  } else {
    this.favList.splice(this.favList.findIndex(x => x.id === item.id), 1);
    evt.target.classList.remove('fa-heart');
    evt.target.classList.add('fa-heart-o');
  }
    console.log(this.favList);
}
removeFav(index, evt) {
  this.favList.splice(index, 1);
  if (!this.favList.length) { this.showFavModal = false; }
  const elem = evt.srcElement.id;
  const element = document.getElementById(elem);
  element.classList.remove('fa-heart');
  element.classList.add('fa-heart-o');
}
}
