import Model, { attr, hasMany } from '@ember-data/model';

export default class WorkType extends Model {
  @attr('string') workTitle;
}
