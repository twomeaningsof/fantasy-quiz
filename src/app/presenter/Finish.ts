import { FinishPage } from "../view/pages/Finish";
import { WelcomePresenter } from "./Welcome";

export class FinishPresenter {
  static destroy() {
    document.getElementsByClassName("opened-book")[0].remove();
  }

  handleChangePageToWelcome() {
    const welcomePresenter = new WelcomePresenter();
    FinishPresenter.destroy();
    welcomePresenter.initialize();
  }

  initialize() {
    const finishPage = new FinishPage(this.handleChangePageToWelcome);
    finishPage.render();
  }
}
