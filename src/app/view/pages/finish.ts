import { Button } from "../components/Button";
import { OpenedBook } from "../components/Opened-book";
import { renderWelcomePage } from "./Functions";

export class FinishPage {
  openedBook = new OpenedBook().render();

  private createLeftPage() {
    const leftPageBottom = this.openedBook.getElementsByClassName('left-page__bottom')[0];
    const leftPageButton = Button.standard('left-page-button').withText('Finish').onClick(renderWelcomePage);
    leftPageBottom.append(leftPageButton.render());
  }

  private createRightPage() {
    const rightPageTop = this.openedBook.getElementsByClassName('right-page__top')[0];
    const rightPageTitle = document.createElement('span');
    rightPageTitle.classList.add('right-page__title');
    rightPageTitle.textContent = 'Thank you for taking the quiz!';
    rightPageTop.append(rightPageTitle)

    const rightPageMiddle = this.openedBook.getElementsByClassName('right-page__middle')[0];
    rightPageMiddle.classList.remove('right-page__middle');
    rightPageMiddle.classList.add('right-page__middle-summary');

    const rightPageMiddleTop = document.createElement('div');
    rightPageMiddleTop.classList.add('right-page__middle-top');
    rightPageMiddleTop.textContent = "Correct Answers:";

    const rightPageMiddleBottom = document.createElement('div');
    rightPageMiddleBottom.classList.add('right-page__middle-bottom');

    const rightPageMiddleText = document.createElement('div');
    rightPageMiddleText.classList.add('right-page__middle-text');

    const questionOne = document.createElement('div');
    questionOne.classList.add('question-wrapper');

    const questionOneCounter = document.createElement('div');
    questionOneCounter.classList.add('question-wrapper__counter');
    questionOneCounter.textContent = '1.';

    const questionOneText = document.createElement('div');
    questionOneText.classList.add('question-wrapper__question');
    questionOneText.textContent = 'Who managed to bring the Ring to Mount Doom to destroy it and Sauron\'s power?'

    const questionOneAnswer = document.createElement('div');
    questionOneAnswer.classList.add('question-wrapper__answer');
    questionOneAnswer.innerHTML = `- <span class="question-wrapper__answered-false">Frodo Baggins</span>`

    questionOneText.append(questionOneAnswer);

    questionOne.append(questionOneCounter, questionOneText);

    const questionTwo = document.createElement('div');
    questionTwo.classList.add('question-wrapper');

    const questionTwoCounter = document.createElement('div');
    questionTwoCounter.classList.add('question-wrapper__counter');
    questionTwoCounter.textContent = '2.';

    const questionTwoText = document.createElement('div');
    questionTwoText.classList.add('question-wrapper__question');
    questionTwoText.textContent = 'Harry, are you a wizard?';

    const questionTwoAnswer = document.createElement('div');
    questionTwoAnswer.classList.add('question-wrapper__answer');
    questionTwoAnswer.innerHTML = `- <span class="question-wrapper__answered-true">True</span>`

    questionTwoText.append(questionTwoAnswer);

    questionTwo.append(questionTwoCounter, questionTwoText);

    const questionThree = document.createElement('div');
    questionThree.classList.add('question-wrapper');

    const questionThreeCounter = document.createElement('div');
    questionThreeCounter.classList.add('question-wrapper__counter');
    questionThreeCounter.textContent = '3.';

    const questionThreeText = document.createElement('div');
    questionThreeText.classList.add('question-wrapper__question');
    questionThreeText.textContent = 'What are the characteristics of Gandalf the Grey?'

    const questionThreeAnswer = document.createElement('div');
    questionThreeAnswer.classList.add('question-wrapper__answer');
    questionThreeAnswer.innerHTML = `- <span class="question-wrapper__answered-false">You shall not paaaas!</span>`

    questionThreeText.append(questionThreeAnswer);

    questionThree.append(questionThreeCounter, questionThreeText);

    rightPageMiddleText.append(questionOne,questionTwo,questionThree);

    // rightPageMiddleText.innerHTML = 'You have 3 minutes to answer as many questions as possible.<br><br> There is finite number of questions, if you answer all of them before times is up, the quiz will end.<br><br> You can see correct answers for all questions at the end.<br><br> There are 3 types of questions: single answer, multiple answer, true or false.<br><br> You can toggle in the settings which questions you want to see in the quiz, and extend your time limit up to 15 minutes.';

    const rightPageMiddleScroll = document.createElement('div');
    rightPageMiddleScroll.classList.add('right-page__scrollbar');

    rightPageMiddleBottom.append(rightPageMiddleText,rightPageMiddleScroll);

    rightPageMiddle.append(rightPageMiddleTop,rightPageMiddleBottom);

    this.openedBook.getElementsByClassName('right-page__bottom')[0].remove();
  }

  render () {
    this.createLeftPage();
    this.createRightPage();
    const rootWrapper = document.getElementsByClassName('wrapper')[0];
    rootWrapper?.appendChild(this.openedBook);
  }
}