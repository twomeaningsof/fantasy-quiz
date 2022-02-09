import { Question, QuestionData } from "./Question";
import { QuestionType } from "./questionType";
import { SettingsData } from "./Settings";

export class QuizModel {
  constructor(
    private allQuestionsData: QuestionData[],
    private settingsData: SettingsData
  ) {}

  remainingQuestions: QuestionData[] = [];
  correctlyAnswered: QuestionData[] = [];
  currentQuestion?: Question;

  getAllQuestionsData() {
    return this.allQuestionsData;
  }

  setNextQuestion() {
    const randomlySelectedQuestion = this.getRandomQuestion(
      this.remainingQuestions
    );

    this.allQuestionsData.push(randomlySelectedQuestion);

    this.remainingQuestions = this.remainingQuestions.filter(
      (question) => question.id !== randomlySelectedQuestion.id
    );

    this.currentQuestion = new Question(randomlySelectedQuestion);
  }

  determineAnswerCorrectness(answers: string[]) {
    if (
      this.currentQuestion &&
      this.currentQuestion.isAnsweredCorrectly(answers)
    )
      this.correctlyAnswered.push(this.currentQuestion.getData());
  }

  private getRandomQuestion(questions: QuestionData[]) {
    return questions[Math.floor(Math.random() * questions.length)];
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
      this.settingsData.singleChoiceEnabled &&
      this.settingsData.multipleChoiceEnabled &&
      !this.settingsData.trueFalseChoiceEnabled
    ) {
      questionTypesCounters.singleQuestionCountLimit = 8;
      questionTypesCounters.multipleQuestionCountLimit = 7;
      questionTypesCounters.trueFalseQuestionCountLimit = 0;
    }

    if (
      this.settingsData.singleChoiceEnabled &&
      !this.settingsData.multipleChoiceEnabled &&
      this.settingsData.trueFalseChoiceEnabled
    ) {
      questionTypesCounters.singleQuestionCountLimit = 8;
      questionTypesCounters.multipleQuestionCountLimit = 0;
      questionTypesCounters.trueFalseQuestionCountLimit = 7;
    }

    if (
      this.settingsData.singleChoiceEnabled &&
      !this.settingsData.multipleChoiceEnabled &&
      !this.settingsData.trueFalseChoiceEnabled
    ) {
      questionTypesCounters.singleQuestionCountLimit = 15;
      questionTypesCounters.multipleQuestionCountLimit = 0;
      questionTypesCounters.trueFalseQuestionCountLimit = 0;
    }

    if (
      !this.settingsData.singleChoiceEnabled &&
      this.settingsData.multipleChoiceEnabled &&
      this.settingsData.trueFalseChoiceEnabled
    ) {
      questionTypesCounters.singleQuestionCountLimit = 0;
      questionTypesCounters.multipleQuestionCountLimit = 8;
      questionTypesCounters.trueFalseQuestionCountLimit = 7;
    }

    if (
      !this.settingsData.singleChoiceEnabled &&
      this.settingsData.multipleChoiceEnabled &&
      !this.settingsData.trueFalseChoiceEnabled
    ) {
      questionTypesCounters.singleQuestionCountLimit = 0;
      questionTypesCounters.multipleQuestionCountLimit = 15;
      questionTypesCounters.trueFalseQuestionCountLimit = 0;
    }

    if (
      !this.settingsData.singleChoiceEnabled &&
      !this.settingsData.multipleChoiceEnabled &&
      this.settingsData.trueFalseChoiceEnabled
    ) {
      questionTypesCounters.singleQuestionCountLimit = 0;
      questionTypesCounters.multipleQuestionCountLimit = 0;
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
    this.allQuestionsData = [];
    this.setNextQuestion();
  }
}
