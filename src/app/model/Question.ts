interface QuestionData {
  id: number;
  type: "single-choice" | "multiple-choice" | "true-false";
  content: string;
  correctAnswers: string[];
  possibleAnswers: string[];
}

export class Question {
  constructor(private data: QuestionData) {}

  isAnsweredCorrectly(answers: string[]): boolean {
    return answers.sort().join(",") === this.data.correctAnswers.sort().join(",");
  }
}
