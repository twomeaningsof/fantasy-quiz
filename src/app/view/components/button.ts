export enum Type {
  BOLDED = 'bolded',
  STANDARD = 'standard',
  TRUEFALSE = 'trueFalse'
}

export class Button {
  constructor(private id: string, private type: Type, private btnText: string = '', private onClickFn: () => void = () => {}) {}


  static standard(id: string) {
    return new Button(id, Type.STANDARD);
  }

  static bolded(id: string) {
    return new Button(id, Type.BOLDED);
  }

  static trueFalse(id:string) {
    return new Button(id, Type.TRUEFALSE);
  }

  withText(text: string) {
    return new Button(this.id, this.type, text, this.onClickFn);
  }

  onClick(clickFn: () => void) {
    return new Button(this.id, this.type, this.btnText, clickFn);
  }

  render() {
    const buttonDomElement: HTMLButtonElement = document.createElement('button');
    buttonDomElement.id = this.id;
    buttonDomElement.textContent = this.btnText;

    if (this.type == Type.STANDARD) {
      buttonDomElement.classList.add('button--standard');
    }

    if (this.type == Type.BOLDED) {
      buttonDomElement.classList.add('button--bolded');
    }

    if (this.type == Type.TRUEFALSE) {
      buttonDomElement.classList.add('button--true-false');
    }

    buttonDomElement.onclick = this.onClickFn;

    return buttonDomElement;
  }
}
