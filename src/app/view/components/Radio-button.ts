export class RadioButton {
  constructor(private id: string, private labelText: string = "") {}

  static unchecked(id: string) {
    return new RadioButton(id);
  }

  withText(text: string) {
    return new RadioButton(this.id, text);
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
    radioButtonInputElement.value = this.labelText;
    radioButtonInputElement.checked = false;
    radioButtonWrapperElement.append(radioButtonInputElement);

    const radioButtonLabelElement = document.createElement("label");
    radioButtonLabelElement.classList.add("question-page__answer");
    radioButtonLabelElement.htmlFor = this.id;
    radioButtonLabelElement.textContent = this.labelText;

    questionPageAnswer.append(
      radioButtonWrapperElement,
      radioButtonLabelElement
    );

    return questionPageAnswer;
  }
}
