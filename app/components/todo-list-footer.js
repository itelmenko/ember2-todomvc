import Ember from 'ember';

export default Ember.Component.extend({

  remaining: Ember.computed("todos.@each.isCompleted", {
      get: function () {
        var model = this.get('todos');
        return model.filterBy('isCompleted', false).get('length');
      }
    }).readOnly(),

    inflection: Ember.computed("remaining", {
        get: function () {
            var remaining = this.get('remaining');
            return remaining === 1 ? 'item' : 'items';
        }
    })

});
