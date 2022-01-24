import { WelcomePage } from "./Welcome";
import { SettingsPage } from "./Settings";
import { RulebookPage } from "./Rulebook";
import { SingleChoiceQuestionPage } from "./Single-question";
import { MultipleChoiceQuestionPage } from "./Multiple-question";
import { TrueFalseQuestionPage } from "./True-false-question";

export const renderSettingsPage = () => {
  document.getElementsByClassName('opened-book')[0].remove();
    const settingsPage = new SettingsPage();
    settingsPage.render();
}

export const renderWelcomePage = () => {
  document.getElementsByClassName('opened-book')[0].remove();
    const welcomePage = new WelcomePage();
    welcomePage.render();
}
export const renderRulebookPage = () => {
  document.getElementsByClassName('opened-book')[0].remove();
    const rulebookPage = new RulebookPage();
    rulebookPage.render();
}

export const renderSCQuestionPage = () => {
  document.getElementsByClassName('wrapper')[0].remove();
    const singleChoiceQuestionPage = new SingleChoiceQuestionPage();
    singleChoiceQuestionPage.render();
}

export const renderMCQuestionPage = () => {
  document.getElementsByClassName('question-page')[0].remove();
  const multipleChoiceQuestionPage = new MultipleChoiceQuestionPage();
  multipleChoiceQuestionPage.render();
}

export const renderTrueFalseQuestionPage = () => {
  document.getElementsByClassName('question-page')[0].remove();
  const trueFalseQuestionPage = new TrueFalseQuestionPage();
  trueFalseQuestionPage.render();
}

export const trueFalseChoice = (type: "true" | "false") => {
  const button = document.getElementById(`answer-${type}`);
  const activeButtons = document.getElementsByClassName('button--true-false-active');

  if (button?.classList.contains('button--true-false-active')){
    return button.classList.remove('button-true-false-active');
  }

  if (activeButtons.length > 0) {
    activeButtons[0].classList.remove("button--true-false-active")
  }

  button?.classList.add('button--true-false-active');
}
