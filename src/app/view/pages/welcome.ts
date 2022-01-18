import { Button } from "../components/button";
import { renderSettingsPage, renderQuizPage,renderRulebookPage } from "./renderFunctions";

export class WelcomePage {
  private createOpenedBook() {
    const openBook = document.createElement('div');
    openBook.classList.add('opened-book');
    return openBook;
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
    rightPageMiddleText.textContent = 'Read the rules, brace yourself and test your fantasy knowledge with the best fantasy quiz in the world!'
    rightPageMiddle.append(rightPageMiddleText);

    const rightPageBottom = document.createElement('div');
    rightPageBottom.classList.add('right-page__bottom');

    const rightPageLeftButton: Button = Button.standard('right-page-left-button').withText('Rulebook').onClick(renderRulebookPage);
    const rightPageRightButton: Button = Button.standard('right-page-right-button').withText('Play').onClick(renderQuizPage);
    rightPageBottom.append(rightPageLeftButton.render(),rightPageRightButton.render());

    rightPage.append(rightPageTop,rightPageMiddle,rightPageBottom);

    return rightPage;
  }
  render() {
    const openedBook = this.createOpenedBook();
    const bookContent = this.createBookContent();
    const leftPage = this.createLeftPage();
    const rightPage = this.createRightPage()

    bookContent.append(leftPage,rightPage);
    openedBook.append(bookContent);
    const rootWrapper = document.getElementsByClassName('wrapper')[0];
    rootWrapper?.appendChild(openedBook);
  }
}
