import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },

    saveAnnouncement() {
      var params = {
        city: this.get('city'),
        date: this.get('date'),
        description: this.get('description')
      };
      this.set('addNewAnnouncement', false),
      this.sendAction('saveAnnouncement', params);
    }
  }
});
