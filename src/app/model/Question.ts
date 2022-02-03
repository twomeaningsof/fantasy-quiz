export type QuestionType = "single-choice" | "multiple-choice" | "true-false";

export interface QuestionData {
  id: string;
  type: QuestionType;
  content: string;
  correctAnswers: string[];
  possibleAnswers: string[];
}

export class Question {
  constructor(private data: QuestionData) {}

  isAnsweredCorrectly(answers: string[]): boolean {
    return (
      answers.sort().join(",") === this.data.correctAnswers.sort().join(",")
    );
  }

  getData() {
    return this.data;
  }
}
