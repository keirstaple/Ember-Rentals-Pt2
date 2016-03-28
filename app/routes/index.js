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

    destroyRental(rentals) {
      rentals.destroyRecord();
      this.transitionTo('index');
    },

    update(rentals, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          rentals.set(key,params[key]);
        }
      });
      rentals.save();
      this.transitionTo('index');
    },

    saveAnnouncement(params) {
      var newAnnouncement = this.store.createRecord('announcements', params);
      newAnnouncement.save();
      this.transitionTo('index');
    },

    destroyAnnouncement(announcements) {
      announcements.destroyRecord();
      this.transitionTo('index');
    }
  }
});
