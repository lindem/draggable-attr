import Controller from '@ember/controller';
import {computed, set} from '@ember/object';
import {VERSION} from '@ember/version';

function getDraggableAttr(sel) {
  return document.querySelector(sel).outerHTML;
}

export default Controller.extend({
  version: computed(function() {
    return VERSION;
  }),

  // strings 'null', 'true', 'false' -- select tag provides strings, see below
  lockstatus: 'null',

  attributeMustBeOmitted: computed('lockstatus', function() {
    if (this.lockstatus === 'null') {
      return true;
    }
  }),

  // make boolean values or null from the string above
  draggableState: computed('lockstatus', function() {
    switch (this.lockstatus) {
      case 'true':
        return true;
      case 'false':
        return false;
      default:
        return null;
    }
  }),

  stateType: computed('draggableState', function() {
    return typeof this.draggableState;
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
  staticDivAttr: computed(function() {
    return getDraggableAttr('.static-div');
  }),

  actions: {
    changeLockstate(newState) {
      set(this, 'lockstatus', newState);
    }
  }
});
