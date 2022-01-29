import { SummaryPage } from "../view/pages/Summary";
import { FinishPresenter } from "./Finish";

export class SummaryPresenter {
  static destroy() {
    document.getElementsByClassName("question-page")[0].remove();
  }

  handleChangePageToFinish() {
    const finishPresenter = new FinishPresenter();
    SummaryPresenter.destroy();
    finishPresenter.initialize();
  }

  initialize() {
    const summaryPage = new SummaryPage(this.handleChangePageToFinish);
    summaryPage.render();
  }
}
