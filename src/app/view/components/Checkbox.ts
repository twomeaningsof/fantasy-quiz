export class Checkbox {
  constructor(
    private id: string,
    private size = "",
    private labelText: string = "",
    private onClickFn: () => void = () => {}
  ) {}

  static small(id: string) {
    return new Checkbox(id, "small");
  }

  static large(id: string) {
    return new Checkbox(id, "large");
  }

  withText(labelText: string) {
    return new Checkbox(this.id, this.size, labelText);
  }

  onClick(clickFn: () => void) {
    return new Checkbox(this.id, this.size, this.labelText, clickFn);
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
