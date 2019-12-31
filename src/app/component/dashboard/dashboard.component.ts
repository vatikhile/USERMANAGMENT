import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
// import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  showFiller:boolean= false;
  extendSetting:boolean=false;
  extendUsers:boolean=false;
  extendWebpage:boolean=false;
  toggle:boolean=false;
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'Update', icon: 'pi pi-refresh', command: () => {
     
      }},
      {label: 'Delete', icon: 'pi pi-times', command: () => {
      
      }},
      {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
      {separator:true},
      {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
  ];
  }
  open(){
    console.log("red");
    
    this.toggle=!this.toggle
    this.showFiller=!this.showFiller
  }
webpage(){
  this.extendWebpage=!this.extendWebpage;
  this.extendUsers=false;
  this.extendSetting=false;
}
user(){
  this.extendUsers=!this.extendUsers
  this.extendSetting=false;
  this.extendWebpage=false;
}
setting(){
  this.extendSetting=!this.extendSetting
  this.extendUsers=false;
  this.extendWebpage=false;
}

}
