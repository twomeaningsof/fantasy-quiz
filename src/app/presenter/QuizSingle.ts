import { Question } from "../model/Question";
import { SingleChoiceQuestionPage } from "../view/pages/QuizSingle";

export class QuizSinglePresenter {
  constructor(private currentQuestion: Question, private onConfirm: () => {}) {}

  static destroy() {
    document.getElementsByClassName("question-page")[0].remove();
  }

  initialize() {
    const singlePage = new SingleChoiceQuestionPage(
      this.currentQuestion,
      this.onConfirm
    );
    singlePage.render();
  }
}
