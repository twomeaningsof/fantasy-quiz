import { Question, QuestionData } from "./Question";

interface Settings {
  singleChoiceEnabled: boolean;
  multipleChoiceEnabled: boolean;
  trueFalseChoiceEnabled: boolean;
}

export class Quiz {
  constructor(
    private allQuestionsData: QuestionData[],
    private settings: Settings = {
      singleChoiceEnabled: true,
      multipleChoiceEnabled: true,
      trueFalseChoiceEnabled: true,
    }
  ) {}

  remainingQuestions: QuestionData[] = [];
  correctlyAnswered: QuestionData[] = [];

  currentQuestion?: Question;

  setNextQuestion(answers?: string[]) {
    if (this.currentQuestion !== undefined && answers !== undefined) {
      this.isAnsweredCorrectly(answers);
    }

    const randomlySelectedQuestion =
      this.remainingQuestions[Math.floor(Math.random() * this.remainingQuestions.length) - 1];

    this.remainingQuestions = this.remainingQuestions.filter(function (question) {
      return question.id !== randomlySelectedQuestion.id;
    });

    this.currentQuestion = new Question(randomlySelectedQuestion);
  }

  isAnsweredCorrectly(answers: string[]) {
    if (this.currentQuestion?.isAnsweredCorrectly(answers))
      this.correctlyAnswered.push(this.currentQuestion.getData());
  }

  applySettings(): QuestionData[] {
    let filteredQuestions: QuestionData[] = [];

    const questionTypesCounters = {
      singleQuestionCountLimit: 0,
      multipleQuestionCountLimit: 0,
      trueFalseQuestionCountLimit: 0,
    };

    if (
      this.settings.singleChoiceEnabled &&
      this.settings.multipleChoiceEnabled &&
      this.settings.trueFalseChoiceEnabled
    ) {
      questionTypesCounters.singleQuestionCountLimit = 5;
      questionTypesCounters.multipleQuestionCountLimit = 5;
      questionTypesCounters.trueFalseQuestionCountLimit = 5;
    }

    if (
      this.settings.singleChoiceEnabled &&
      this.settings.multipleChoiceEnabled &&
      !this.settings.trueFalseChoiceEnabled
    ) {
      questionTypesCounters.singleQuestionCountLimit = 8;
      questionTypesCounters.multipleQuestionCountLimit = 7;
    }

    if (
      this.settings.singleChoiceEnabled &&
      !this.settings.multipleChoiceEnabled &&
      this.settings.trueFalseChoiceEnabled
    ) {
      questionTypesCounters.singleQuestionCountLimit = 8;
      questionTypesCounters.trueFalseQuestionCountLimit = 7;
    }

    if (
      this.settings.singleChoiceEnabled &&
      !this.settings.multipleChoiceEnabled &&
      !this.settings.trueFalseChoiceEnabled
    ) {
      questionTypesCounters.singleQuestionCountLimit = 15;
    }

    if (
      !this.settings.singleChoiceEnabled &&
      this.settings.multipleChoiceEnabled &&
      this.settings.trueFalseChoiceEnabled
    ) {
      questionTypesCounters.multipleQuestionCountLimit = 8;
      questionTypesCounters.trueFalseQuestionCountLimit = 7;
    }

    if (
      !this.settings.singleChoiceEnabled &&
      this.settings.multipleChoiceEnabled &&
      !this.settings.trueFalseChoiceEnabled
    ) {
      questionTypesCounters.multipleQuestionCountLimit = 15;
    }

    if (
      !this.settings.singleChoiceEnabled &&
      !this.settings.multipleChoiceEnabled &&
      this.settings.trueFalseChoiceEnabled
    ) {
      questionTypesCounters.trueFalseQuestionCountLimit = 15;
    }

    let singleChoiceQuestionCount = 0;

    while (singleChoiceQuestionCount < questionTypesCounters.singleQuestionCountLimit) {
      const randomlySelectedQuestion =
        this.allQuestionsData[Math.floor(Math.random() * this.allQuestionsData.length) - 1];

      if (
        randomlySelectedQuestion.type === "single-choice" &&
        !filteredQuestions.some((element) => {
          if (element.id === randomlySelectedQuestion.id) {
            return true;
          }
        })
      ) {
        filteredQuestions.push(randomlySelectedQuestion);
        singleChoiceQuestionCount++;
      }
    }

    let multipleChoiceQuestionCount = 0;

    while (multipleChoiceQuestionCount < questionTypesCounters.multipleQuestionCountLimit) {
      const randomlySelectedQuestion =
        this.allQuestionsData[Math.floor(Math.random() * this.allQuestionsData.length) - 1];

      if (
        randomlySelectedQuestion.type === "multiple-choice" &&
        !filteredQuestions.some((element) => {
          if (element.id === randomlySelectedQuestion.id) {
            return true;
          }
        })
      ) {
        filteredQuestions.push(randomlySelectedQuestion);
        multipleChoiceQuestionCount++;
      }
    }

    let trueFalseChoiceQuestionCount = 0;

    while (trueFalseChoiceQuestionCount < questionTypesCounters.trueFalseQuestionCountLimit) {
      const randomlySelectedQuestion =
        this.allQuestionsData[Math.floor(Math.random() * this.allQuestionsData.length) - 1];

      if (
        randomlySelectedQuestion.type === "true-false" &&
        !filteredQuestions.some((element) => {
          if (element.id === randomlySelectedQuestion.id) {
            return true;
          }
        })
      ) {
        filteredQuestions.push(randomlySelectedQuestion);
        trueFalseChoiceQuestionCount++;
      }
    }

    this.allQuestionsData = JSON.parse(JSON.stringify(filteredQuestions));
    return filteredQuestions;
  }

  startQuiz(answers?: string[]) {
    this.remainingQuestions = this.applySettings();
    this.setNextQuestion(answers);
  }
}
