import { Question, QuestionData, QuestionType } from "./Question";

interface Settings {
  singleChoiceEnabled: boolean;
  multipleChoiceEnabled: boolean;
  trueFalseChoiceEnabled: boolean;
}

export class QuizModel {
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

  setNextQuestion() {
    const randomlySelectedQuestion = this.getRandomQuestion(
      this.remainingQuestions
    );

    this.remainingQuestions = this.remainingQuestions.filter(
      (question) => question.id !== randomlySelectedQuestion.id
    );

    this.currentQuestion = new Question(randomlySelectedQuestion);
  }

  determineAnswerCorrectness(answers: string[]) {
    if (
      this.currentQuestion &&
      !this.currentQuestion.isAnsweredCorrectly(answers)
    )
      this.correctlyAnswered.push(this.currentQuestion.getData());
  }

  private getRandomQuestion(questions: QuestionData[]) {
    return questions[Math.floor(Math.random() * questions.length) - 1];
  }

  private filterOutQuestionType(limit: number, type: QuestionType) {
    let filteredQuestions: QuestionData[] = [];
    let count = 0;

    while (count < limit) {
      const randomlySelectedQuestion = this.getRandomQuestion(
        this.allQuestionsData
      );
      if (
        randomlySelectedQuestion &&
        randomlySelectedQuestion.type === type &&
        !filteredQuestions.some(
          (element) => element.id === randomlySelectedQuestion.id
        )
      ) {
        filteredQuestions.push(randomlySelectedQuestion);
        count++;
      }
    }

    return filteredQuestions;
  }

  private getQuestionTypesCounters() {
    const questionTypesCounters = {
      singleQuestionCountLimit: 5,
      multipleQuestionCountLimit: 5,
      trueFalseQuestionCountLimit: 5,
    };

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

    return questionTypesCounters;
  }

  private applySettings() {
    const questionTypesCounters = this.getQuestionTypesCounters();
    const singleChoiceQuestions = this.filterOutQuestionType(
      questionTypesCounters.singleQuestionCountLimit,
      "single-choice"
    );
    const multipleChoiceQuestions = this.filterOutQuestionType(
      questionTypesCounters.multipleQuestionCountLimit,
      "multiple-choice"
    );
    const trueFalseQuestions = this.filterOutQuestionType(
      questionTypesCounters.trueFalseQuestionCountLimit,
      "true-false"
    );

    this.allQuestionsData = [
      ...singleChoiceQuestions,
      ...multipleChoiceQuestions,
      ...trueFalseQuestions,
    ];
  }

  startQuiz() {
    this.applySettings();
    this.remainingQuestions = [...this.allQuestionsData];
    this.setNextQuestion();
  }
}
