import Model, { attr, hasMany } from '@ember-data/model';

export default class Assignee extends Model {
  @attr('string') role;
  @attr('string') firstName;
  @attr('string') lastName;
  @hasMany('assignment') assignments;
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
