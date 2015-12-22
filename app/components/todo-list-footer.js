import Ember from 'ember';

export default Ember.Component.extend({

    clearCompletedAction: 'clearCompletedTodos',

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
    }),

    hasCompleted: Ember.computed("completed", function(){
        return this.get('completed') > 0;
    }),

    completed: Ember.computed("todos.@each.isCompleted", {
        get: function () {
            var model = this.get('todos');
            return model.filterBy('isCompleted', true).get('length');
        }
    }).readOnly(),

    actions: {
        clearCompleted: function() {
            var model = this.get('todos');
            var completed = model.filterBy('isCompleted', true);
            this.sendAction('clearCompletedAction', completed);
        }
    }

});
