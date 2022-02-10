import { QuizModel } from "../model/Quiz";
import { SettingsModel } from "../model/Settings";
import { QuestionPresenter } from "./Question";
import { SummaryPresenter } from "./Summary";
import { questions } from "../model/questions";
import { Alert } from "../view/components/Alert";

export class QuizPresenter {
  private quiz: QuizModel;
  private questionPresenter?: QuestionPresenter;
  private timeLimitInMiliseconds: number;

  constructor(private settingsModel: SettingsModel) {
    this.quiz = new QuizModel(questions, settingsModel.getSettingsData());

    this.quiz.startQuiz();

    if (this.quiz.currentQuestion) {
      this.questionPresenter = new QuestionPresenter(
        this.quiz.currentQuestion!,
        this.onConfirm
      );

      this.questionPresenter.initializePage();
    }

    this.timeLimitInMiliseconds =
      parseInt(this.settingsModel.getSettingsData().timeLimit) * 60000;
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

  private handleTimer = () => {
    setInterval(() => {
      const timerElement = document.getElementById("timer");
      if (timerElement) {
        const minutes = Math.floor(this.timeLimitInMiliseconds % 60000);
      }
      this.timeLimitInMiliseconds - 1000;
      //tutaj updateujemy timer element
      if (this.timeLimitInMiliseconds < 0) this.quiz.forceQuizEnd();
    }, 1000);
  };

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
      new Alert().renderQuestionAlert();
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
