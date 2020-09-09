import { Component, Input } from '@angular/core';

/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {
  text: number;
  @Input('progress') progress;
  @Input('type') type;
  @Input('totalDuration') totalDuration;
  @Input('currentDuration') currentDuration;
  constructor() {
    setInterval(() => {
      this.text = this.progress;
    }, 100)
    console.log('Hello ProgressBarComponent Component');
  }

}
