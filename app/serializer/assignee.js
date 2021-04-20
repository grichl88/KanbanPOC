import JSONAPISerializer from '@ember-data/serializer/json';

export default class AssigneeSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    return super.normalizeResponse(...arguments);
  }
}
