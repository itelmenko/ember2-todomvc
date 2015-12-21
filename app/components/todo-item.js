import Ember from 'ember';

export default Ember.Component.extend({

    updateTodoAction: 'updateTodo',
    deleteTodoAction: 'deleteTodo',

    isEditing: false,

    isCompleted: Ember.computed("item.isCompleted", {
        get: function () {
            var model = this.get('item');
            return model.get('isCompleted');
        },
        set: function (key, value) {
            var model = this.get('item');
            this.sendAction('toggleTodoItemAction', model, value);
            return value;
        }
    }),

    actions: {
      editTodo: function() {
        this.set('isEditing', true);
      },

      acceptChanges: function() {
        this.set('isEditing', false);
        this.sendAction('updateTodoAction', this.get('item'), this.get('item.title'));
      },

      removeTodo: function () {
        this.sendAction('deleteTodoAction', this.get('item'));
      }
    }
});
