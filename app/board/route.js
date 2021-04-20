import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class BoardRoute extends Route {
  @service store;
  async model() {
    return RSVP.hash({
      assignments: this.store.findAll('assignment'),
      workTypes: this.store.findAll('workType')
    });
  }

  setupController(controller, model) {
    super.setupController(...arguments)
  }
}
