export class RadioButton {
  constructor(
    private id: string,
    private labelText: string = "",
    private onCheckFn: () => void = () => {}
  ) {}

  static unchecked(id: string) {
    return new RadioButton(id);
  }

  withText(text: string) {
    return new RadioButton(this.id, text);
  }

  onCheck(checkFn: () => void) {
    return new RadioButton(this.id, this.labelText, checkFn);
  }

  render() {
    const questionPageAnswer = document.createElement("div");
    questionPageAnswer.classList.add("question-page__answer--radio-button");

    const radioButtonWrapperElement = document.createElement("div");
    radioButtonWrapperElement.classList.add("radio-button");
    const radioButtonInputElement = document.createElement("input");
    radioButtonInputElement.type = "radio";
    radioButtonInputElement.id = this.id;
    radioButtonInputElement.classList.add("radio-button__input");
    radioButtonInputElement.name = "radio-group";
    radioButtonInputElement.checked = false;
    radioButtonWrapperElement.append(radioButtonInputElement);

    const radioButtonLabelElement = document.createElement("label");
    radioButtonLabelElement.classList.add("question-page__answer");
    radioButtonLabelElement.htmlFor = this.id;
    radioButtonLabelElement.textContent = this.labelText;

    radioButtonInputElement.onclick = this.onCheckFn;

    questionPageAnswer.append(radioButtonWrapperElement, radioButtonLabelElement);

    return questionPageAnswer;
  }
}
