import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitTitle: function() {
      // Get the todo title set by the "New Todo" text field
      var title = this.get('newTitle');
      if (!title.trim()) { return; }
      this.set('newTitle', '');
      this.sendAction('createTodoAction', title);
    }
  }
});
