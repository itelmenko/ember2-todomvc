import Ember from 'ember';

export default Ember.Component.extend({
    allAreDone: Ember.computed("todos.@each.isCompleted", {
        get: function(key, value) {
            var todos = this.get('todos');
            console.log('todos', todos);
            return !!todos.get('length') && todos.isEvery('isCompleted');
        }
    }).readOnly()
});