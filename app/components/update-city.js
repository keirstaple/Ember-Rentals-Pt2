import Ember from 'ember';

export default Ember.Component.extend({
  updateCityForm: false,
  actions: {
    updateCityForm() {
      this.set('updateCityForm', true);
    },

    update(city) {
      var params = {
        name: this.get('name'),
        country: this.get('country')
      };
      this.set('updateCityForm', false);
      this.sendAction('update', city, params);
    }
  }
});
