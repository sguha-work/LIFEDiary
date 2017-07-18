import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CalenderPage } from '../calender/calender';
import { UploadPage } from '../upload/upload';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = HomePage;
  tab2Root: any = CalenderPage;
  tab3Root: any = UploadPage;
  constructor(public navCtrl: NavController) {
  }
  
}
