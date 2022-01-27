import { SummaryPage } from "../view/pages/Summary";
import { FinishPresenter } from "./Finish";

export class SummaryPresenter {
  handleChangePageToFinish() {
    const finishPresenter = new FinishPresenter();
    finishPresenter.initialize();
  }

  static destroy() {
    document.getElementsByClassName("question-page")[0].remove();
  }

  initialize() {
    const summaryPage = new SummaryPage(this.handleChangePageToFinish);
    summaryPage.render();
  }
}
