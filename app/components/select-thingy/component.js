import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  tagName: 'select',
  layout,
  input(e) {
    this.inputAction(e.target.value);
  }
})
