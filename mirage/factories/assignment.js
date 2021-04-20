import { Factory, association } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  title: faker.hacker.phrase,
  status(i) {
    return faker.random.arrayElement([
      'Open',
      'Closed',
      'Deferred'
    ])
  },
  description(i) {
    return faker.lorem.sentence();
  },
  workType(i) {
    return faker.random.arrayElement([
      'Story',
      'Task',
      'Defect'
    ]);
  },
  createDate(i) {
    return faker.date.between(faker.date.recent(5).toLocaleDateString(), Date()).toLocaleDateString();
  },
  startDate(i) {
    if (this.status === 'Closed' || faker.datatype.boolean()) {
      return faker.date.between(this.createDate, Date()).toLocaleDateString();
    }
    return null;
  },
  closeDate(i) {
    if (this.startDate && this.status === 'Closed') {
      return faker.date.between(this.startDate, Date()).toLocaleDateString();
    }
    return null;
  },

  assignedTo: association(),
  createdBy: association()
});
