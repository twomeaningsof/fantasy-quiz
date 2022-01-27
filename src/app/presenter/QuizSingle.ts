import { SingleChoiceQuestionPage } from "../view/pages/Single-choice";
import { QuizMultiplePresenter } from "./QuizMultiple";

export class QuizSinglePresenter {
  handleChangePageToMultipleChoice() {
    const quizMultiplePresenter = new QuizMultiplePresenter();
    QuizMultiplePresenter.destroy();
    quizMultiplePresenter.initialize();
  }

  static destroy() {
    document.getElementsByClassName("wrapper")[0].remove();
  }

  initialize() {
    const multiplePage = new SingleChoiceQuestionPage(this.handleChangePageToMultipleChoice);
    multiplePage.render();
  }
}
