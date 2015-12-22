import Ember from 'ember';

export default Ember.Component.extend({

    setAllTodosCompletedAction: 'setAllTodosCompletedState',

    allAreDone: Ember.computed("todos.@each.isCompleted", {
        get: function() {
            var todos = this.get('todos');
            return !!todos.get('length') && todos.isEvery('isCompleted');
        },
        set: function(key, value) {
            var todos = this.get('todos');
            this.sendAction('setAllTodosCompletedAction', todos, value);
            return value;
        }
    })
});