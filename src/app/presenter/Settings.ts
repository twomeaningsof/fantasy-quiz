import { SettingsPage } from "../view/pages/Settings";
import { WelcomePresenter } from "./Welcome";
import { RulebookPresenter } from "./Rulebook";
import { QuizSinglePresenter } from "./QuizSingle";

export class SettingsPresenter {

  handleChangePageToWelcome() {
    const welcomePresenter  = new WelcomePresenter();
    welcomePresenter.initialize('opened-book')
  }

  handleChangePageToRulebook() {
    const rulebookPresenter  = new RulebookPresenter();
    rulebookPresenter.initialize()
  }

  handleChangePageToQuiz() {
    const quizPresenter  = new QuizSinglePresenter();
    quizPresenter.initialize()
  }

  initialize() {
    document.getElementsByClassName('opened-book')[0].remove();
    const settingsPage = new SettingsPage(this.handleChangePageToWelcome, this.handleChangePageToRulebook, this.handleChangePageToQuiz);
    settingsPage.render();
  }
}
