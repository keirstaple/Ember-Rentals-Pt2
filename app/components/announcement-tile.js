import Ember from 'ember';

export default Ember.Component.extend({
  announcementShowing: true,
  actions: {
    announcementHide: function() {
      this.set('announcementShowing', false);
    },
    announcementShow: function() {
      this.set('announcementShowing', true);
    },
    delete(announcement) {
      if(confirm('Are you sure you want to delete this announcement?')) {
        this.sendAction('destroyAnnouncement', rental);
      }
    }
  }
});
