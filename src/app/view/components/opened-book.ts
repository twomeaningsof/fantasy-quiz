import { Button } from "./button";
import { renderSCQuestionPage } from "../pages/renderFunctions";

export class OpenedBook {
  static render(): HTMLDivElement {
    const openedBook = document.createElement('div');
    openedBook.classList.add('opened-book');

    const bookContent = document.createElement('div');
    bookContent.classList.add('book-content');

    const leftPage = document.createElement('div');
    leftPage.classList.add('left-page');

    const leftPageTop = document.createElement('div');
    leftPageTop.classList.add('left-page__top');

    const leftPageImage = document.createElement('div');
    leftPageImage.classList.add('left-page__img');
    leftPageTop.append(leftPageImage);

    const leftPageBottom = document.createElement('div');
    leftPageBottom.classList.add('left-page__bottom');

    leftPage.append(leftPageTop,leftPageBottom);

    const rightPage = document.createElement('div');
    rightPage.classList.add('right-page');

    const rightPageTop = document.createElement('div');
    rightPageTop.classList.add('right-page__top');

    const rightPageMiddle = document.createElement('div');
    rightPageMiddle.classList.add('right-page__middle');

    const rightPageBottom = document.createElement('div');
    rightPageBottom.classList.add('right-page__bottom');
    const rightPagePlayButton: Button = Button.standard('right-page-right-button').withText('Play').onClick(renderSCQuestionPage);
    rightPageBottom.append(rightPagePlayButton.render());

    rightPage.append(rightPageTop,rightPageMiddle,rightPageBottom);

    bookContent.append(leftPage,rightPage);
    openedBook.append(bookContent)

    return openedBook;
  }
}
