import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { computed, set } from '@ember/object';
import { filterBy } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default class BoardController extends Controller {
  @service store;
  @tracked workType = 'All';
  @tracked addingNewWorkType = false;
  @tracked newWorkType = '';
  @tracked creatingNewAssignment = false;

  @computed('workType', 'model.workTypes')
  get assignmentList() {
    const assignmentList = this.model.assignments;
    if(this.workType === 'All') {
      return assignmentList;
    }
    return assignmentList.filter((assignment) => {
      return assignment.workType === this.workType;
    });
  }

  @computed('model.workTypes')
  get workTypesList() {
    return this.model.workTypes;
  }

  @computed('model.workTypes', 'workType')
  get columnsTypeList() {
    const workTypesList = this.model.workTypes;
    if (this.workType === 'All') {
      return workTypesList;
    } else {
      return workTypesList.filter((workType) => {
        return workType.workTitle === this.workType;
      });
    }
  }

  @action
  selectWorkType(typeOfWork) {
    set(this, 'addingNewWorkType', false);
    set(this, 'newWorkType', '');
    set(this, 'workType', typeOfWork);
  }

  @action
  updateDescription(id, newDescription) {
    this.store.findRecord('assignment', id).then((assignment) => {
      set(assignment, 'description', newDescription);
      assignment.save();
    });
  }

  @action
  updateStatus(id, newStatus) {
    this.store.findRecord('assignment', id).then((assignment) => {
      set(assignment, 'status', newStatus);
      assignment.save();
    });
  }

  @action
  updateCard(id, newValue, property) {
    this.store.findRecord('assignment', id).then((assignment) => {
      set(assignment, property, newValue);
      assignment.save();
    });
  }

  @action
  deleteAssignment(id) {
    this.store.findRecord('assignment', id, { reload: true }).then((assignment) => {
      assignment.deleteRecord();
      assignment.save();
    });
  }

  @action
  addNewWorkType() {
    set(this, 'addingNewWorkType', true);
  }

  @action
  saveNewWorkType() {
    this.addingNewWorkType = false;
    const newWorkType = this.store.createRecord('workType', {
      workTitle: this.newWorkType
    });
    newWorkType.save().then((workType) => {
      set(this, 'newWorkType', '');
    });
  }

  @action
  addNewAssignment() {
    set(this, 'creatingNewAssignment', !this.creatingNewAssignment)
  }

  @action
  saveNewAssignment(assignment) {
    const newAssignment = this.store.createRecord('assignment', assignment, { reload: true });
    newAssignment.save().then(() => {
      set(this, 'creatingNewAssignment', false);
    });
  }

  @action
  deleteNewAssignment() {
    set(this, 'creatingNewAssignment', false);
  }

}
