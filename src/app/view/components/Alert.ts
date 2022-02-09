export class Alert {
  private renderAlert(text: string) {
    const alertBackground = document.createElement("div");
    alertBackground.classList.add("alert-wrapper");
    alertBackground.onclick = () => {
      alertBackground.remove();
    };

    const alertWrapper = document.createElement("div");
    alertWrapper.classList.add("alert-wrapper__alert");

    const alertText = document.createElement("div");
    alertText.classList.add("alert-wrapper__text");
    alertText.innerHTML = text;

    alertWrapper.appendChild(alertText);
    alertBackground.appendChild(alertWrapper);

    const rootWrapper = document.body;
    rootWrapper.appendChild(alertBackground);
  }

  renderQuestionAlert() {
    this.renderAlert(
      "Hey, fellow fantasy enthusiast!<br> Yeah, I mean you. <br> Choose some answer to proceed."
    );
  }

  renderSettingsAlert() {
    this.renderAlert(
      "I'm afraid it's impossible to start the quiz without any question type enabled."
    );
  }
}
