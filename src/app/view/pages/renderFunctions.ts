import { WelcomePage } from "./welcome";
import { SettingsPage } from "./settings";
import { RulebookPage } from "./rulebook";

export const renderSettingsPage = () => {
  document.getElementsByClassName("opened-book")[0].remove();
    const settingsPage = new SettingsPage();
    settingsPage.render();
}

export const renderWelcomePage = () => {
  document.getElementsByClassName("opened-book")[0].remove();
    const welcomePage = new WelcomePage();
    welcomePage.render();
}

export const renderRulebookPage = () => {
  document.getElementsByClassName("opened-book")[0].remove();
    const rulebookPage = new RulebookPage();
    rulebookPage.render();
}
