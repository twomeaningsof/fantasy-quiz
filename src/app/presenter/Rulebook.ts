import { RulebookPage } from "../view/pages/Rulebook";
import { SettingsPresenter } from "./Settings";
import { WelcomePresenter } from "./Welcome";
import { QuizSinglePresenter } from "./QuizSingle";

export class RulebookPresenter {
  handleChangePageToSettings() {
    const settingsPresenter  = new SettingsPresenter();
    settingsPresenter.initialize()
  }

  handleChangePageToRulebook() {
    const welcomePresenter  = new WelcomePresenter();
    welcomePresenter.initialize('opened-book')
  }

  handleChangePageToQuiz() {
    const quizPresenter  = new QuizSinglePresenter();
    quizPresenter.initialize()
  }

  initialize() {
    document.getElementsByClassName('opened-book')[0].remove();
    const rulebookPage = new RulebookPage(this.handleChangePageToSettings, this.handleChangePageToRulebook, this.handleChangePageToQuiz);
    rulebookPage.render();
  }
}
