import {inject, bindable, customElement} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import $ from 'jquery';

@customElement('modal')
@inject(Element,EventAggregator)
export class Modal {
  @bindable id = '';

  static ShowModalEvent   = "showModal";
  static CloseModalEvent  = "closeModalEvent";
  static SaveModalEvent   = "saveModalEvent";

  constructor(element, eventAggregator) {
    this.element = element;
    this.eventAggregator = eventAggregator;
  }

  attached() {
    this.modal = $(this.element).find('.modal');

    this.eventAggregator.subscribe(Modal.ShowModalEvent, response => {
      this.showModal(response);
    });
    this.eventAggregator.subscribe(Modal.CloseModalEvent, response => {
      this.closeModal(response);
    });

  }

  closeModal(response) {
    if( response.id = this.id ) {
      this.modal.modal('hide');
    }
  }

  showModal(response) {
    if( response.id = this.id ) {
      this.modal.modal();
    }
  }

}