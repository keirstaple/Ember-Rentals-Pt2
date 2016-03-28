import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    update(rentals, params) {
      this.sendAction('update', rentals, params);
    },
    delete(rentals) {
      if (confirm('Are you sure you want delete this rental?')) {
        this.sendAction('destroyRental', rentals);
      }
    }
  }
});
