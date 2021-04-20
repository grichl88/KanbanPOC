import JSONAPISerializer from '@ember-data/serializer/json';

export default class WorkTypeSerializer extends JSONAPISerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    return super.normalizeResponse(...arguments);
  }
}
