import { FinishPage } from "../view/pages/Finish";
import { WelcomePresenter } from "./Welcome";

export class FinishPresenter {
  handleChangePageToWelcome() {
    const welcomePresenter = new WelcomePresenter();
    WelcomePresenter.destroy("opened-book");
    welcomePresenter.initialize();
  }

  static destroy() {
    document.getElementsByClassName("question-page")[0].remove();
  }

  initialize() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    document.body.append(wrapper);

    const finishPage = new FinishPage(this.handleChangePageToWelcome);
    finishPage.render();
  }
}
