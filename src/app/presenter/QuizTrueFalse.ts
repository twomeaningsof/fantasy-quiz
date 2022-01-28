import { TrueFalseQuestionPage } from "../view/pages/QuizTrueFalse";
import { SummaryPresenter } from "./Summary";

export class QuizTrueFalsePresenter {
  static destroy() {
    document.getElementsByClassName("question-page")[0].remove();
  }

  handleChangePageToSummary() {
    const summaryPresenter = new SummaryPresenter();
    QuizTrueFalsePresenter.destroy();
    summaryPresenter.initialize();
  }

  initialize() {
    const trueFalsePage = new TrueFalseQuestionPage(this.handleChangePageToSummary);
    trueFalsePage.render();
  }
}
