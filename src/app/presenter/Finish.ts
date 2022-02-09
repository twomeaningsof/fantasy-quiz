import { FinishPage } from "../view/pages/Finish";
import { WelcomePresenter } from "./Welcome";
import { QuestionData } from "../model/Question";
import { SettingsModel } from "../model/Settings";

export class FinishPresenter {
  constructor(
    private allQuestionsData: QuestionData[],
    private correctlyAnsweredQuestions: QuestionData[]
  ) {}

  static destroy() {
    document.getElementsByClassName("opened-book")[0].remove();
  }

  handleChangePageToWelcome() {
    const welcomePresenter = new WelcomePresenter(new SettingsModel());
    FinishPresenter.destroy();
    welcomePresenter.initialize();
  }

  initialize() {
    const finishPage = new FinishPage(
      this.handleChangePageToWelcome,
      this.allQuestionsData,
      this.correctlyAnsweredQuestions
    );
    finishPage.render();
  }
}
