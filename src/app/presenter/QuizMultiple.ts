import { Question } from "../model/Question";
import { MultipleChoiceQuestionPage } from "../view/pages/QuizMultiple";

export class QuizMultiplePresenter {
  constructor(
    private currentQuestion: Question,
    private onConfirm: (inputsWrapper: HTMLDivElement) => void,
    private handleTimer: () => void
  ) {}

  static destroy() {
    document.getElementsByClassName("question-page")[0].remove();
  }

  initialize() {
    const multiplePage = new MultipleChoiceQuestionPage(
      this.currentQuestion,
      this.onConfirm,
      this.handleTimer
    );
    multiplePage.render();
  }
}
