import Ember from 'ember';

export default Ember.Component.extend({
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
});
