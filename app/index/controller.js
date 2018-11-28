import Controller from '@ember/controller';
import {computed} from '@ember/object';
import Ember from 'ember';

function getDraggableAttr(sel) {
  return document.querySelector(sel).outerHTML;
}

export default Controller.extend({
  lockstatus: true,
  version: computed(function() {
    return Ember.VERSION;
  }),
  draggableState: computed('lockstatus', function() {
    return this.lockstatus ? 'false' : 'true';
  }),

  curlyAttr: computed('lockstatus', function() {
    return getDraggableAttr('.curly-example');
  }),

  angleAttr: computed('lockstatus', function() {
    return getDraggableAttr('.angle-bracket-example');
  }),

  normalDivAttr: computed('lockstatus', function() {
    return getDraggableAttr('.normal-div');
  }),
});
