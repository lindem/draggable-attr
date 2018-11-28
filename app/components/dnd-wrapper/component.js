import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
  attributeBindings: ['draggableAttribute:draggable'],

  classNames: ['curly-example'],

  draggableAttribute: computed('locked', function() {
    return this.locked ? 'false' : 'true';
  })
});
