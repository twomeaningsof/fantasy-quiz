export class RadioButton {
  constructor(private id: string, private labelText: string = '', private onCheckFn: () => void = () => {}) {}

  static unchecked(id: string): RadioButton {
    return new RadioButton(id);
  }

  withText(text:string): RadioButton {
    return new RadioButton(this.id,text);
  }

  onCheck(checkFn: () => void): RadioButton {
    return new RadioButton(this.id, this.labelText, checkFn);
  }

  render(): HTMLDivElement {
    const questionPageAnswer: HTMLDivElement = document.createElement('div');
    questionPageAnswer.classList.add('question-page__answer-radio-button')

    const radioButtonWrapperElement: HTMLDivElement = document.createElement('div');
    radioButtonWrapperElement.classList.add('radio-button')
    const radioButtonInputElement: HTMLInputElement = document.createElement('input')
    radioButtonInputElement.type = 'radio';
    radioButtonInputElement.id = this.id;
    radioButtonInputElement.classList.add('radio-button__input');
    radioButtonInputElement.name = 'radio-group'
    radioButtonInputElement.checked = false;
    radioButtonWrapperElement.append(radioButtonInputElement);

    const radioButtonLabelElement: HTMLLabelElement = document.createElement('label');
    radioButtonLabelElement.classList.add('radio-button__label');
    radioButtonLabelElement.htmlFor = this.id;
    radioButtonLabelElement.textContent = this.labelText;

    radioButtonInputElement.onclick = this.onCheckFn;

    questionPageAnswer.append(radioButtonWrapperElement,radioButtonLabelElement);

    return questionPageAnswer;
  }
}

// const radioButtonWrapper: HTMLDivElement = document.createElement('div');
// radioButtonWrapper.classList.add('question-page__answer-wrapper')

// const radioButtonInputElement: HTMLInputElement = document.createElement('input')
// radioButtonInputElement.type = 'radio';
// radioButtonInputElement.id = this.id;
// radioButtonInputElement.classList.add('radio-button');
// radioButtonInputElement.name = 'radio-group'
// radioButtonInputElement.checked = false;

// const radioButtonLabelElement: HTMLLabelElement = document.createElement('label');
// radioButtonLabelElement.classList.add('radio-button__label');
// radioButtonLabelElement.htmlFor = this.id;

// radioButtonInputElement.onclick = this.onCheckFn;

// radioButtonWrapper.append(radioButtonInputElement,radioButtonLabelElement);

// return radioButtonWrapper;