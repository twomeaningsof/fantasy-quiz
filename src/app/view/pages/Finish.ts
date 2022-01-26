import { Button } from "../components/Button";
import { OpenedBook } from "../components/Opened-book";

type handleChange = () => void;

interface Question {
  index: number;
  isCorrect: boolean;
  content: string;
  correctAnswers: string[];
}

export class FinishPage {
  constructor(private handleChangeToWelcome: handleChange) {}

  openedBook = new OpenedBook().render();

  private renderQuestion({
    index,
    isCorrect,
    content,
    correctAnswers
  }: Question ) {
    const question = document.createElement('div');
    question.classList.add('question-wrapper');

    const questionCounter = document.createElement('div');
    questionCounter.classList.add('question-wrapper__counter');
    questionCounter.textContent = `${index + 1}.`;

    const questionText = document.createElement('div');
    questionText.classList.add('question-wrapper__question');
    questionText.textContent = content

    const questionAnswer = document.createElement('div');
    questionAnswer.classList.add('question-wrapper__answer');
    questionAnswer.innerHTML = `- <span class="question-wrapper__answered-${isCorrect}">${correctAnswers.join(", ")}</span>`

    questionText.append(questionAnswer);
    question.append(questionCounter, questionText);
    return question;
  }

  private createLeftPage() {
    const leftPageBottom = this.openedBook.getElementsByClassName('left-page__bottom')[0];
    const leftPageButton = Button.standard('left-page-button').withText('Finish').onClick(this.handleChangeToWelcome);
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

    const questionOne = this.renderQuestion({
      index: 0,
      content: 'Who managed to bring the Ring to Mount Doom to destroy it and Sauron\'s power?',
      correctAnswers: ["Frodo Baggins"],
      isCorrect: false
    })
    const questionTwo = this.renderQuestion({
      index: 1,
      content: 'Harry, are you a wizard?',
      correctAnswers: ["True"],
      isCorrect: true
    })
    const questionThree = this.renderQuestion({
      index: 3,
      content: 'What are the characteristics of Gandalf the Grey?',
      correctAnswers: ["You shall not paaaas!"],
      isCorrect: false
    })

    rightPageMiddleText.append(questionOne,questionTwo,questionThree);

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
