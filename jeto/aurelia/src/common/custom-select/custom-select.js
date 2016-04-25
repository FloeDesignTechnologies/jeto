import {bindable, inject, customElement} from 'aurelia-framework';

import $ from 'jquery';
import 'select2';

@customElement('custom-select')
@inject(Element)
export class CustomSelect {
  @bindable name = null;
  @bindable selected = false;
  @bindable options = {};

  constructor(element) {
    this.element = element;
  }
  attached() {
    console.log("attached");
    $(this.element).find('select')
      .select2()
      .on('change', (event) => {
        let changeEvent;

        if (window.CustomEvent) {
          changeEvent = new CustomEvent('change', {
            detail: {
              value: event.target.value
            },
            bubbles: true
          });
        }
        else {
          changeEvent = document.createEvent('CustomEvent');
          changeEvent.initCustomEvent('change', true, true, {value: event.target.value});
        }
        this.element.dispatchEvent(changeEvent);
      });
  }
}