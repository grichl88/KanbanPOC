import Component from '@glimmer/component';
import EmberObject from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { action, computed, set } from '@ember/object';
import { isEmpty } from '@ember/utils';

const Assignment = EmberObject.extend({
  workType: '',
  title: '',
  status: '',
  description: ''
});

export default class NewCardComponent extends Component {
  @tracked assignmentObject = Assignment.create({
    workType: this.args.workType,
    title: '',
    status: '',
    description: ''
  });
  @tracked editDescription = false;
  @tracked editStatus = false;
  @tracked editTitle = false;
  @tracked editWorkType = false;

  @action
  clickToEdit(typeOfEdit) {
    if (typeOfEdit === 'editWorkType') {
      set(this, 'editWorkType', !this.editWorkType);
    }

    if (typeOfEdit === 'editTitle') {
      set(this, 'editTitle', !this.editTitle);
    }

    if (typeOfEdit === 'editDescription') {
      set(this, 'editDescription', !this.editDescription);
    }

    if (typeOfEdit === 'editStatus') {
      set(this, 'editStatus', !this.editStatus);
    }
  }

  @action
  enterToUpdate(typeOfEdit) {
    if (typeOfEdit === 'editTitle') {
      set(this, 'editTitle', !this.editTitle);
    }

    if (typeOfEdit === 'editDescription') {
      set(this, 'editDescription', !this.editDescription);
    }

    if (typeOfEdit === 'editStatus') {
      set(this, 'editStatus', !this.editStatus);
    }

  }

  @action
  changeWorkType(newSelection) {
    if (this.originalWorkType !== newSelection) {
      set(this, 'assignmentObject.workType', newSelection);
      this.editWorkType = false;
    }
  }

  @action
  addNewAssignment() {
    this.args.saveNewAssignment(this.assignmentObject);
  }

  @action
  clickToDelete() {
    this.args.deleteNewAssignment();
  }

  @computed('assignmentObject.{status,description,title,workType}')
  get allowSave() {
    const assignmentObject = this.assignmentObject;
    const workType = assignmentObject.workType;
    const title = assignmentObject.title;
    const status = assignmentObject.status;
    const description = assignmentObject.description
    return !isEmpty(workType) && !isEmpty(title) && !isEmpty(status) && !isEmpty(description);
  }
}
