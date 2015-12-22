import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('todo');
    },

    actions: {
        createTodo: function(title) {
            // Create the new Todo model
            var todo = this.store.createRecord('todo', {
              title: title,
              isCompleted: false
            });
            // Save the new model
            todo.save();
        },

        toggleTodo: function(todo, value) {
            todo.set('isCompleted', value);
            todo.save();
        },

        updateTodo: function(todo, title) {
            if (Ember.isEmpty(title)) {
                this.send('deleteTodo', todo);
            } else {
                todo.save();
            }
        },

        deleteTodo: function(todo) {
            todo.deleteRecord();
            todo.save();
        },

        clearCompletedTodos: function(completed) {
            completed.invoke('deleteRecord');
            completed.invoke('save');
        }
    }
});
