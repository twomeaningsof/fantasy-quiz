export class QuestionPage {
  private createPage() {
    const questionPage = document.createElement('div');
    questionPage.classList.add('question-page');

    const questionPageQuestion = document.createElement('div');
    questionPageQuestion.classList.add('question-page__question');

    const questionPageAnswers = document.createElement('div');
    questionPageAnswers.classList.add('question-page__answers');

    const questionPageConfirmButtonWrapper = document.createElement('div');
    questionPageConfirmButtonWrapper.classList.add('question-page__confirm-button-wrapper');

    questionPage.append(questionPageQuestion, questionPageAnswers, questionPageConfirmButtonWrapper);

    return questionPage;
  }

  render() {
    return this.createPage();
  }
}
