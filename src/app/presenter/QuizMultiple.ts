import { Question } from "../model/Question";
import { MultipleChoiceQuestionPage } from "../view/pages/QuizMultiple";

export class QuizMultiplePresenter {
  constructor(private currentQuestion: Question) {}

  static destroy() {
    document.getElementsByClassName("question-page")[0].remove();
  }

  initialize() {
    const multiplePage = new MultipleChoiceQuestionPage(this.currentQuestion);
    multiplePage.render();
  }
}
