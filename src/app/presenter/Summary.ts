import { SummaryPage } from "../view/pages/Summary";
import { FinishPresenter } from "./Finish";

export class SummaryPresenter {
  handleChangePageToFinish() {
    const finishPresenter  = new FinishPresenter();
    finishPresenter.initialize()
  }

  initialize() {
    document.getElementsByClassName('question-page')[0].remove();
    const summaryPage = new SummaryPage(this.handleChangePageToFinish);
    summaryPage.render();
  }
}
