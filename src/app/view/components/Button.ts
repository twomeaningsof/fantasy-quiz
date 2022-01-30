type type = "bolded" | "standard" | "trueFalse";

export class Button {
  constructor(
    private id: string,
    private type: type,
    private btnText: string = "",
    private onClickFn: () => void = () => {}
  ) {}

  static standard(id: string) {
    return new Button(id, "standard");
  }

  static bolded(id: string) {
    return new Button(id, "bolded");
  }

  static trueFalse(id: string) {
    return new Button(id, "trueFalse");
  }

  withText(text: string) {
    return new Button(this.id, this.type, text, this.onClickFn);
  }

  onClick(clickFn: () => void) {
    return new Button(this.id, this.type, this.btnText, clickFn);
  }

  render() {
    const buttonDomElement: HTMLButtonElement = document.createElement("button");
    buttonDomElement.id = this.id;
    buttonDomElement.textContent = this.btnText;
    buttonDomElement.value = this.btnText;

    if (this.type == "standard") {
      buttonDomElement.classList.add("button--standard");
    }

    if (this.type == "bolded") {
      buttonDomElement.classList.add("button--bolded");
    }

    if (this.type == "trueFalse") {
      buttonDomElement.classList.add("button--true-false");
    }

    buttonDomElement.onclick = this.onClickFn;

    return buttonDomElement;
  }
}
