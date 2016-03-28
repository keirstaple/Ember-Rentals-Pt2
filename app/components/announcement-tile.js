import Ember from 'ember';

export default Ember.Component.extend({
  announcementShowing: true,
  actions: {
    announcementShow: function() {
      this.set('announcementShowing', true);
    },
    announcementHide: function() {
      this.set('announcementShowing', false);
    },
    delete(announcements) {
      if(confirm('Are you sure you want to delete this announcement?')) {
        this.sendAction('destroyAnnouncement', announcements);
      }
    }
  }
});
