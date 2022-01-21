export enum State {
  CHECKED = 'checked',
  UNCHECKED = 'unchecked',
}

export class Checkbox {
  constructor(private id: string, private checked: State, private onCheckFn: () => void = () => {}) {}


  static checked(id: string): Checkbox {
    return new Checkbox(id, State.CHECKED);
  }

  static unchecked(id: string): Checkbox {
    return new Checkbox(id, State.UNCHECKED);
  }

  onCheck(checkFn: () => void): Checkbox {
    return new Checkbox(this.id, this.checked, checkFn);
  }

  render(): HTMLDivElement {
    const checkboxWrapper: HTMLDivElement = document.createElement('div');
    checkboxWrapper.classList.add('checkbox-wrapper')

    const checkboxDOMElement: HTMLInputElement = document.createElement('input')
    checkboxDOMElement.type = 'checkbox';
    checkboxDOMElement.id = this.id;
    checkboxDOMElement.classList.add('checkbox-checkmark');

    if (this.checked == State.CHECKED) {
      checkboxDOMElement.checked = true;
    }

    if (this.checked == State.UNCHECKED) {
      checkboxDOMElement.checked = false;
    }

    checkboxDOMElement.onclick = this.onCheckFn;

    checkboxWrapper.append(checkboxDOMElement);

    return checkboxWrapper;
  }
}