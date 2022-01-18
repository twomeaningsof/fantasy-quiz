import { Button } from "../components/button";
import { renderSettingsPage, renderWelcomePage, renderQuizPage } from "./renderFunctions";

export class RulebookPage {
  private createOpenedBook() {
    const openedBook = document.createElement('div');
    openedBook.classList.add('opened-book');
    return openedBook;
  }

  private createBookContent() {
    const bookContent = document.createElement('div');
    bookContent.classList.add('book-content');
    return bookContent;
  }

  private createLeftPage() {
    const leftPage = document.createElement('div');
    leftPage.classList.add('left-page');

    const leftPageTop = document.createElement('div');
    leftPageTop.classList.add('left-page__top');

    const leftPageImage = document.createElement('div');
    leftPageImage.classList.add('left-page__img');
    leftPageTop.append(leftPageImage);

    const leftPageBottom = document.createElement('div');
    leftPageBottom.classList.add('left-page__bottom');

    const leftPageButton: Button = Button.standard('left-page-button').withText('Settings').onClick(renderSettingsPage);
    leftPageBottom.append(leftPageButton.render());
    leftPage.append(leftPageTop,leftPageBottom);

    return leftPage;
  }

  private createRightPage() {
    const rightPage = document.createElement('div');
    rightPage.classList.add('right-page');

    const rightPageTop = document.createElement('div');
    rightPageTop.classList.add('right-page__top');

    const rightPageTitle = document.createElement('span');
    rightPageTitle.classList.add('right-page__title');
    rightPageTitle.textContent = 'Welcome to the fantasy quiz!'
    rightPageTop.append(rightPageTitle);

    const rightPageMiddle = document.createElement('div');
    rightPageMiddle.classList.add('right-page__middle');

    const rightPageMiddleText = document.createElement('span');
    rightPageMiddleText.classList.add('right-page__middle-text');
    rightPageMiddleText.textContent = 'You have 3 minutes to answer as many questions as possible. There is finite number of questions, if you answer all of them before times is up, the quiz will end. You can see correct answers for all questions at the end.There are 3 types of questions. Single answer, multiple answer, true or false. You can toggle in the settings which questions you want to see in the quiz.';

    const rightPageMiddleScroll = document.createElement('div');
    rightPageMiddleScroll.classList.add('right-page__scrollbar');

    rightPageMiddle.append(rightPageMiddleText,rightPageMiddleScroll);

    const rightPageBottom = document.createElement('div');
    rightPageBottom.classList.add('right-page__bottom');

    const rightPageLeftButton: Button = Button.standard('right-page-left-button').withText('Back').onClick(renderWelcomePage);
    const rightPageRightButton: Button = Button.standard('right-page-right-button').withText('Play').onClick(renderQuizPage);
    rightPageBottom.append(rightPageLeftButton.render(),rightPageRightButton.render());

    rightPage.append(rightPageTop,rightPageMiddle,rightPageBottom);

    return rightPage;
  }

  render () {
    const openedBook = this.createOpenedBook();
    const bookContent = this.createBookContent();
    const leftPage = this.createLeftPage();
    const rightPage = this.createRightPage();

    bookContent.append(leftPage,rightPage);
    openedBook.append(bookContent);
    const rootWrapper = document.getElementsByClassName('wrapper')[0];
    rootWrapper?.appendChild(openedBook);

  }
}
