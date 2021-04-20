import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  firstName(i) {
    if (i === 0) {
      return 'Richard';
    }
    return faker.name.firstName();
  },
  lastName(i) {
    if (i === 0) {
      return 'Garcia';
    }
    return faker.name.lastName();
  },
  role(i) {
    if (this.firstName === 'Richard' && this.lastName === 'Garcia') {
      return 'Developer';
    }
    return faker.random.arrayElement([
      'Developer',
      'Program Manager',
      'Tester',
      'Business Analyst'
    ])
  }
});
