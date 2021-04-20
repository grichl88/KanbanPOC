import Model, { attr, belongsTo } from '@ember-data/model';

export default class Assignment extends Model {
  @belongsTo('assignee') assignedTo;
  @belongsTo('creator') createdBy;
  @attr('string') title;
  @attr('string') status;
  @attr('string') description;
  @attr('string') workType;
  @attr('date', {
    defaultValue() { return new Date(); }
  }) createDate;
  @attr('date') startDate;
  @attr('date', {
    defaultValue() { return new Date(); }
  }) closeDate;
}
