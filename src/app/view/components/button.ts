export enum Size {
  BOLDED = 'bolded',
  STANDARD = 'standard',
}

export class Button {
  constructor(private id: string, private size: Size, private btnText: string = '', private onClickFn: () => void = () => {}) {}


  static standard(id: string) {
    return new Button(id, Size.STANDARD);
  }

  static bolded(id: string) {
    return new Button(id, Size.BOLDED);
  }

  withText(text: string) {
    return new Button(this.id, this.size, text, this.onClickFn);
  }

  onClick(clickFn: () => void) {
    return new Button(this.id, this.size, this.btnText, clickFn);
  }

  render() {
    const buttonDomElement = document.createElement('button');
    buttonDomElement.id = this.id;
    buttonDomElement.textContent = this.btnText;

    if (this.size == Size.STANDARD) {
      buttonDomElement.classList.add('button--standard');
    }

    if (this.size == Size.BOLDED) {
      buttonDomElement.classList.add('button--bolded');
    }

    buttonDomElement.onclick = this.onClickFn;
    return buttonDomElement;
  }
}
