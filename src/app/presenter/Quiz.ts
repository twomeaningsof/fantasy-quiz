import { QuizModel } from "../model/Quiz";
import { QuestionPresenter } from "./Question";
import { SummaryPresenter } from "./Summary";
import { questions } from "../model/questions";

export class QuizPresenter {
  private quiz: QuizModel;
  private questionPresenter?: QuestionPresenter;

  constructor() {
    this.quiz = new QuizModel(questions, {
      singleChoiceEnabled: true,
      multipleChoiceEnabled: true,
      trueFalseChoiceEnabled: true,
    });

    this.quiz.startQuiz();

    if (this.quiz.currentQuestion) {
      this.questionPresenter = new QuestionPresenter(
        this.quiz.currentQuestion!,
        this.onConfirm
      );

      this.questionPresenter.initializePage();
    }
  }

  private getScore = () => {
    return `${this.quiz.correctlyAnswered.length}/${
      this.quiz.getAllQuestionsData().length
    }`;
  };

  private getAnswers(inputsWrapper: HTMLDivElement) {
    const currentQuestionType = this.quiz.currentQuestion?.getData().type;
    let inputElements: HTMLButtonElement[] | HTMLInputElement[];
    let answers: string[] = [];

    switch (currentQuestionType) {
      case "single-choice":
      case "multiple-choice":
        inputElements = [...inputsWrapper.getElementsByTagName("input")];
        inputElements.forEach((element) => {
          if (element.checked) answers.push(element.value);
        });
        break;

      case "true-false":
        inputElements = [...inputsWrapper.getElementsByTagName("button")];
        inputElements?.forEach((element) => {
          if (element.classList.contains("button--true-false-active")) {
            answers.push(element.value);
          }
        });
        break;
    }
    return answers;
  }

  private createAlert() {
    const alertBackground = document.createElement("div");
    alertBackground.classList.add("alert-wrapper");
    alertBackground.onclick = () => {
      alertBackground.remove();
    };

    const alertWrapper = document.createElement("div");
    alertWrapper.classList.add("alert-wrapper__alert");

    const alertText = document.createElement("div");
    alertText.classList.add("alert-wrapper__text");
    alertText.innerHTML =
      "Hey, fellow fantasy enthusiast!<br> Yeah, I mean you. <br> Choose some answer to proceed.";

    alertWrapper.appendChild(alertText);
    alertBackground.appendChild(alertWrapper);

    const rootWrapper = document.body;
    rootWrapper.appendChild(alertBackground);
  }

  private onConfirm = (inputsWrapper: HTMLDivElement) => {
    const answers = this.getAnswers(inputsWrapper);

    if (answers.length !== 0) {
      this.quiz.determineAnswerCorrectness(answers);
      this.questionPresenter?.destroyPage();
      if (this.quiz.remainingQuestions.length === 0) {
        new SummaryPresenter(
          this.getScore(),
          this.quiz.getAllQuestionsData(),
          this.quiz.correctlyAnswered
        ).initialize();
      } else {
        this.quiz.setNextQuestion();
        this.initializeNextQuestionPresenter();
      }
    } else {
      this.createAlert();
    }
  };

  private initializeNextQuestionPresenter() {
    if (this.quiz.currentQuestion) {
      this.questionPresenter = new QuestionPresenter(
        this.quiz.currentQuestion,
        this.onConfirm
      );
      this.questionPresenter.initializePage();
    }
  }
}
