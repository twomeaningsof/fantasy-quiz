import { TrueFalseQuestionPage } from "../view/pages/True-false-choice";
import { SummaryPresenter } from "./Summary";

export class QuizTrueFalsePresenter {
  handleChangePageToSummary() {
    const summaryPresenter = new SummaryPresenter();
    SummaryPresenter.destroy();
    summaryPresenter.initialize();
  }

  static destroy() {
    document.getElementsByClassName("question-page")[0].remove();
  }

  initialize() {
    const trueFalsePage = new TrueFalseQuestionPage(this.handleChangePageToSummary);
    trueFalsePage.render();
  }
}

export const trueFalseChoice = (type: "true" | "false") => {
  const button = document.getElementById(`answer-${type}`);
  const activeButtons = document.getElementsByClassName("button--true-false-active");

  if (button?.classList.contains("button--true-false-active")) {
    return button.classList.remove("button-true-false-active");
  }

  if (activeButtons.length > 0) {
    activeButtons[0].classList.remove("button--true-false-active");
  }

  button?.classList.add("button--true-false-active");
};
