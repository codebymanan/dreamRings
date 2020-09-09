import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FocusPage } from '../focus/focus';
import { SleepPage } from '../sleep/sleep';
import { DreamPage } from '../dream/dream';
import { RelaxPage } from '../relax/relax';

@Component({
  selector: 'page-apps',
  templateUrl: 'apps.html'
})
export class AppsPage {

  constructor(public navCtrl: NavController) {
  }
  goToFocus(params){
    if (!params) params = {};
    this.navCtrl.push(FocusPage);
  }goToSleep(params){
    if (!params) params = {};
    this.navCtrl.push(SleepPage);
  }goToDream(params){
    if (!params) params = {};
    this.navCtrl.push(DreamPage);
  }goToRelax(params){
    if (!params) params = {};
    this.navCtrl.push(RelaxPage);
  }
}
