import { Button } from "../components/button";
import { OpenedBook } from "../components/opened-book";
import { renderFinishPage, renderWelcomePage } from "./functions";

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

    const rightPageMiddleText = document.createElement('span');
    rightPageMiddleText.classList.add('right-page__middle-text');
    rightPageMiddleText.innerHTML = 'You have 3 minutes to answer as many questions as possible.<br><br> There is finite number of questions, if you answer all of them before times is up, the quiz will end.<br><br> You can see correct answers for all questions at the end.<br><br> There are 3 types of questions: single answer, multiple answer, true or false.<br><br> You can toggle in the settings which questions you want to see in the quiz, and extend your time limit up to 15 minutes.';

    const rightPageMiddleScroll = document.createElement('div');
    rightPageMiddleScroll.classList.add('right-page__scrollbar');

    rightPageMiddle.append(rightPageMiddleText,rightPageMiddleScroll);

    this.openedBook.getElementsByClassName('right-page__bottom')[0].remove();
  }

  render () {
    this.createLeftPage();
    this.createRightPage();
    const rootWrapper = document.getElementsByClassName('wrapper')[0];
    rootWrapper?.appendChild(this.openedBook);
  }
}