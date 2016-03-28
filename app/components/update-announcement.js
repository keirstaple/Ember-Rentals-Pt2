import Ember from 'ember';

export default Ember.Component.extend({
  updateAnnouncementForm: false,
  actions: {
    updateAnnouncementForm() {
      this.set('updateAnnouncementForm', true);
    },
    update(announcements) {
      var params = {
        city: this.get('city'),
        date: this.get('date'),
        description: this.get('description'),
      };
      this.set('updateAnnouncementForm', false);
      this.sendAction('update', announcements, params);
    }
  }
});
