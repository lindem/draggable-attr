import Component from '@ember/component';

export default Component.extend({
  attributeBindings: ['draggableAttr:draggable'],

  classNames: ['curly-example'],
});
