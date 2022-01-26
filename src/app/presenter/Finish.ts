import { FinishPage } from "../view/pages/Finish";
import { WelcomePresenter } from "./Welcome";

export class FinishPresenter {
  handleChangePageToWelcome() {
    const welcomePresenter  = new WelcomePresenter();
    welcomePresenter.initialize('opened-book');
  }

  initialize() {
    document.getElementsByClassName('question-page')[0].remove();
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    document.body.append(wrapper);

    const finishPage = new FinishPage(this.handleChangePageToWelcome);
    finishPage.render();
  }
}
