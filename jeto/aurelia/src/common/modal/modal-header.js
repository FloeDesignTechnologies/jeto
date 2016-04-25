import {inject, bindable, customElement} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Modal}           from 'common/modal/modal';

@customElement('modal-header')
@inject(EventAggregator)
export class ModalHeader {

  @bindable title = '';
  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
  }

  attached() {
    this.eventAggregator.subscribe(Modal.ShowModalEvent, response => {
      this.title = response.title;
    });
  }
}