import { SummaryPage } from "../view/pages/Summary";
import { FinishPresenter } from "./Finish";
import { QuestionData } from "../model/Question";

export class SummaryPresenter {
  constructor(
    private score: string,
    private allQuestionsData: QuestionData[],
    private correctlyAnsweredQuestions: QuestionData[]
  ) {}

  static destroy() {
    document.getElementsByClassName("question-page")[0].remove();
  }

  handleChangePageToFinish = () => {
    const finishPresenter = new FinishPresenter(
      this.allQuestionsData,
      this.correctlyAnsweredQuestions
    );
    SummaryPresenter.destroy();
    finishPresenter.initialize();
  };

  initialize() {
    const summaryPage = new SummaryPage(
      this.handleChangePageToFinish,
      this.score
    );
    summaryPage.render();
  }
}
