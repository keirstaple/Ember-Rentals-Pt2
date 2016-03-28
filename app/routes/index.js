import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
    rentals: this.store.findAll('rentals'),
    announcements: this.store.findAll('announcements')
  });
  },

  actions: {
    save3(params) {
      var newRental = this.store.createRecord('rentals', params);
      newRental.save();
      this.transitionTo('index');
    },

    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    },

    save(params) {
      var newAnnouncement = this.store.createRecord('announcements', params);
      newAnnouncement.save();
      this.transitionTo('index');
    },

    destroyAnnouncement(announcement) {
      announcement.destroyRecord();
      this.transitionTo('index');
    }
  }
});
