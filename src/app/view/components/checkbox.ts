export class Checkbox {
  constructor(private id: string, private checked: boolean, private onCheckFn: () => void = () => {}) {}


  static checked(id: string) {
    return new Checkbox(id, true);
  }

  static unchecked(id: string) {
    return new Checkbox(id, false);
  }

  onCheck(checkFn: () => void) {
    return new Checkbox(this.id, this.checked, checkFn);
  }

  render() {
    const checkboxWrapper = document.createElement('div');
    checkboxWrapper.classList.add('checkbox-wrapper')

    const checkboxDOMElement = document.createElement('input')
    checkboxDOMElement.type = 'checkbox';
    checkboxDOMElement.id = this.id;
    checkboxDOMElement.classList.add('checkbox-checkmark');
    checkboxDOMElement.checked = this.checked;
    checkboxDOMElement.onclick = this.onCheckFn;

    checkboxWrapper.append(checkboxDOMElement);

    return checkboxWrapper;
  }
}