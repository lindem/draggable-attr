import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
  attributeBindings: ['draggableAttribute:draggable'],

  draggableAttribute: computed('locked', function() {
    return this.locked ? 'false' : 'true';
  })
});
