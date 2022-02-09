import { SettingsPage } from "../view/pages/Settings";
import { WelcomePresenter } from "./Welcome";
import { RulebookPresenter } from "./Rulebook";
import { QuizPresenter } from "./Quiz";
import { SettingsModel } from "../model/Settings";
import { Alert } from "../view/components/Alert";

export class SettingsPresenter {
  constructor(private settingsModel: SettingsModel) {}

  static destroy(toRemove: string) {
    document.getElementsByClassName(toRemove)[0].remove();
  }

  handleChangePageToWelcome = () => {
    const welcomePresenter = new WelcomePresenter(this.settingsModel);
    SettingsPresenter.destroy("opened-book");
    welcomePresenter.initialize();
  };

  handleChangePageToRulebook = () => {
    const rulebookPresenter = new RulebookPresenter(this.settingsModel);
    SettingsPresenter.destroy("opened-book");
    rulebookPresenter.initialize();
  };

  handleChangePageToQuiz = () => {
    if (
      Object.values(this.settingsModel.getSettingsData()).some(
        (setting) => setting === true
      )
    ) {
      new QuizPresenter(this.settingsModel);
      SettingsPresenter.destroy("wrapper");
    } else {
      new Alert().renderSettingsAlert();
    }
  };

  initialize = () => {
    const settingsPage = new SettingsPage(
      this.handleChangePageToWelcome,
      this.handleChangePageToRulebook,
      this.handleChangePageToQuiz,
      this.settingsModel
    );
    settingsPage.render();
  };
}
