import { Question } from "../model/Question";
import { QuizMultiplePresenter } from "./QuizMultiple";
import { QuizSinglePresenter } from "./QuizSingle";
import { QuizTrueFalsePresenter } from "./QuizTrueFalse";

export class QuestionPresenter {
  constructor(
    private currentQuestion: Question,
    private onConfirm: (inputsWrapper: HTMLDivElement) => void
  ) {}

  private questionType = this.currentQuestion.getData().type;

  destroyPage() {
    if (this.questionType === "single-choice") {
      QuizSinglePresenter.destroy();
    }
    if (this.questionType === "multiple-choice") {
      QuizMultiplePresenter.destroy();
    }
    if (this.questionType === "true-false") {
      QuizTrueFalsePresenter.destroy();
    }
  }

  initializePage() {
    if (this.questionType === "single-choice") {
      new QuizSinglePresenter(
        this.currentQuestion,
        this.onConfirm
      ).initialize();
    }
    if (this.questionType === "multiple-choice") {
      new QuizMultiplePresenter(
        this.currentQuestion,
        this.onConfirm
      ).initialize();
    }
    if (this.questionType === "true-false") {
      new QuizTrueFalsePresenter(
        this.currentQuestion,
        this.onConfirm
      ).initialize();
    }
  }
}
