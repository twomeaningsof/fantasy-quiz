interface QuestionPattern {
  id: number;
  type: "single-choice" | "multiple-choice" | "true-false";
  content: string;
  correctAnswers: string[];
}

export class Question {
  constructor(private data: QuestionPattern) {}

  handleAnswer(answers: string[]): boolean {
    return answers.sort().join(",") === this.data.correctAnswers.sort().join(",");
  }
}
