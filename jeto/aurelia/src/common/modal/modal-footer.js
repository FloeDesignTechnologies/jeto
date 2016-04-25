import {bindable, inject} from 'aurelia-framework';
import {Modal}    from 'common/modal/modal';
import {EventAggregator}  from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class ModalFooter {
  @bindable buttons = [];
  @bindable id = '';

  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
  }

  onButtonClick(button) {
    switch(button) {
      case 'Cancel':
        this.eventAggregator.publish(Modal.CloseModalEvent, {id:this.id});
        break;
      case 'Save':
        this.eventAggregator.publish(Modal.SaveModalEvent, {id:this.id});
        break;
    }
  }

}