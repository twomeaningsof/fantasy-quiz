export class Checkbox {
  constructor(
    private id: string,
    private checked: boolean,
    private size = "",
    private labelText: string = "",
    private onClickFn: () => void = () => {}
  ) {}

  static checked(id: string) {
    return new Checkbox(id, true);
  }

  static unchecked(id: string) {
    return new Checkbox(id, false);
  }

  small() {
    return new Checkbox(this.id, this.checked, (this.size = "small"));
  }

  large() {
    return new Checkbox(this.id, this.checked, (this.size = "large"));
  }

  withText(labelText: string) {
    return new Checkbox(this.id, this.checked, this.size, labelText);
  }

  onClick(clickFn: () => void) {
    return new Checkbox(
      this.id,
      this.checked,
      this.size,
      this.labelText,
      clickFn
    );
  }

  render() {
    const checkboxWrapper = document.createElement("div");
    checkboxWrapper.classList.add("checkbox-wrapper");

    const checkboxInputElementWrapper = document.createElement("div");
    checkboxInputElementWrapper.classList.add(
      "checkbox-wrapper__input-wrapper",
      `checkbox-wrapper__input-wrapper--${this.size}`
    );

    const checkboxDOMElement = document.createElement("input");
    checkboxDOMElement.type = "checkbox";
    checkboxDOMElement.id = this.id;
    checkboxDOMElement.classList.add("checkbox-wrapper__checkmark");
    checkboxDOMElement.value = this.labelText;
    checkboxDOMElement.checked = this.checked;

    checkboxInputElementWrapper.append(checkboxDOMElement);

    const checkboxLabelElement = document.createElement("label");
    if (this.size === "small") {
      checkboxLabelElement.classList.add("right-page__settings-element-text");
    }

    if (this.size === "large") {
      checkboxLabelElement.classList.add("question-page__answer");
    }

    checkboxLabelElement.htmlFor = this.id;
    checkboxLabelElement.textContent = this.labelText;

    checkboxWrapper.append(checkboxInputElementWrapper, checkboxLabelElement);

    checkboxWrapper.onclick = this.onClickFn;

    return checkboxWrapper;
  }
}
