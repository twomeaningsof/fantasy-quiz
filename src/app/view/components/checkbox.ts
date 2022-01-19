export enum State {
  CHECKED = 'checked',
  UNCHECKED = 'unchecked',
}

export class Checkbox {
  constructor(private id: string, private size: State, private onCheckFn: () => void = () => {}) {}


  static checked(id: string): Checkbox {
    return new Checkbox(id, State.CHECKED);
  }

  static unchecked(id: string): Checkbox {
    return new Checkbox(id, State.UNCHECKED);
  }

  onCheck(checkFn: () => void): Checkbox {
    return new Checkbox(this.id, this.size, checkFn);
  }

  render(): HTMLInputElement {
    const checkboxDomElement: HTMLInputElement = document.createElement('input');
    checkboxDomElement.type = "checkbox";
    checkboxDomElement.id = this.id;
    checkboxDomElement.classList.add('checkbox');

    if (this.size == State.CHECKED) {
      checkboxDomElement.checked = true;
    }

    if (this.size == State.UNCHECKED) {
      checkboxDomElement.checked = false;
    }

    checkboxDomElement.onclick = this.onCheckFn;
    return checkboxDomElement;
  }
}