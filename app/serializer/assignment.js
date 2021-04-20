import JSONAPISerializer from '@ember-data/serializer/json';
import { EmbeddedRecordsMixin } from '@ember-data/serializer/rest';

export default class AssignmentSerializer extends JSONAPISerializer.extend(EmbeddedRecordsMixin) {
  attrs = {
    assignedTo: {
      serialize: 'ids',
      deserialize: 'ids' },
    createdBy: {
      serialize: 'ids',
      deserialize: 'ids' }
  };
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    return super.normalizeResponse(...arguments);
  }
}
