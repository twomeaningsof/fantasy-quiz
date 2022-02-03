import { Question } from "../model/Question";
import { TrueFalseQuestionPage } from "../view/pages/QuizTrueFalse";

export class QuizTrueFalsePresenter {
  constructor(private currentQuestion: Question) {}

  static destroy() {
    document.getElementsByClassName("question-page")[0].remove();
  }

  initialize() {
    const trueFalsePage = new TrueFalseQuestionPage(this.currentQuestion);
    trueFalsePage.render();
  }
}
