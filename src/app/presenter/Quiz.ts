import { QuizModel } from "../model/Quiz";
import { QuestionPresenter } from "./Question";
import { questions } from "../model/questions";

export class QuizPresenter {
  private quiz: QuizModel;
  private questionPresenter: QuestionPresenter;

  constructor() {
    this.quiz = new QuizModel(questions, {
      singleChoiceEnabled: true,
      multipleChoiceEnabled: true,
      trueFalseChoiceEnabled: true,
    });

    this.quiz.startQuiz();
    this.questionPresenter = new QuestionPresenter(
      this.quiz.currentQuestion!,
      this.onConfirm
    );
  }

  private onConfirm(answers: string[]) {
    this.quiz.determineAnswerCorrectness(answers);
  }

  private initializeNextQuestionPresenter() {
    this.questionPresenter = new QuestionPresenter(this.quiz.currentQuestion!);
  }
}
