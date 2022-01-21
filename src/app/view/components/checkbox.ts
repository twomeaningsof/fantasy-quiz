export enum State {
  CHECKED = 'checked',
  UNCHECKED = 'unchecked',
}

export class Checkbox {
  constructor(private id: string, private state: State, private onCheckFn: () => void = () => {}) {}


  static checked(id: string): Checkbox {
    return new Checkbox(id, State.CHECKED);
  }

  static unchecked(id: string): Checkbox {
    return new Checkbox(id, State.UNCHECKED);
  }

  onCheck(checkFn: () => void): Checkbox {
    return new Checkbox(this.id, this.state, checkFn);
  }

  render(): HTMLDivElement {
    const checkboxWrapper: HTMLDivElement = document.createElement('div');
    checkboxWrapper.classList.add('checkbox-wrapper')

    const checkboxInputElement: HTMLInputElement = document.createElement('input')
    checkboxInputElement.type = 'checkbox';
    checkboxInputElement.id = this.id;
    checkboxInputElement.classList.add('checkbox-checkmark');

    if (this.state == State.CHECKED) {
      checkboxInputElement.checked = true;
    }

    if (this.state == State.UNCHECKED) {
      checkboxInputElement.checked = false;
    }

    checkboxInputElement.onclick = this.onCheckFn;

    checkboxWrapper.append(checkboxInputElement);

    return checkboxWrapper;
  }
}