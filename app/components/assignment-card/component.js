import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { computed, set } from '@ember/object';

export default class AssignmentCardComponent extends Component {
  @tracked editDescription = false;
  @tracked editStatus = false;
  @tracked editTitle = false;
  @tracked editWorkType = false;
  @tracked showEditModal = false;
  originalWorkType = this.args.workType;
  @tracked newWorkType = '';
  @tracked allowSelectionSave = false;

  @action
  clickToEdit(typeOfEdit) {
    if (typeOfEdit === 'editDescription') {
      set(this, 'editDescription', !this.editDescription);
    }

    if (typeOfEdit === 'editStatus') {
      set(this, 'editStatus', !this.editStatus);
    }
  }

  @action
  enterToUpdate(typeOfEdit) {
    if (typeOfEdit === 'editDescription') {
      set(this, 'editDescription', !this.editDescription);
      this.args.updateDescription(this.args.idForCard, this.args.description);
    }

    if (typeOfEdit === 'editStatus') {
      set(this, 'editStatus', !this.editStatus);
      this.args.updateStatus(this.args.idForCard, this.args.status);
    }

    if (typeOfEdit === 'editTitle') {
      set(this, 'editTitle', !this.editTitle);
      this.args.updateCard(this.args.idForCard, this.args.title, 'title');
      set(this, 'showEditModal', !this.showEditModal);
    }

  }

  @action
  changeWorkType(newSelection) {
    if (this.originalWorkType !== newSelection) {
      set(this, 'allowSelectionSave', true);
      this.newWorkType = newSelection;
    } else {
      set(this, 'allowSelectionSave', false);
    }
  }

  @action
  saveSelectedWorkType() {
    this.args.updateCard(this.args.idForCard, this.newWorkType, 'workType');
    set(this, 'showEditModal', !this.showEditModal);
  }

  @action
  clickToDelete() {
    this.args.deleteAssignment(this.args.idForCard);
  }

  @action
  editTitleAndWorkType() {
    set(this, 'showEditModal', true);
  }

  @action
  toggleModal() {
    set(this, 'showEditModal', !this.showEditModal);
  }

}
