import openedBookImg from '../../../assets/img/opened-book.png';

export class WelcomePage {
  render() {
    const openBookWrapper = document.createElement('div');
    openBookWrapper.className = 'opened-book';

    const openBookImage = document.createElement('img');
    openBookImage.className = 'opened-book__img';
    openBookImage.src = openedBookImg;

    const bookContent = document.createElement('div');
    bookContent.className = 'book-content';

    const leftPage = document.createElement('div');
    leftPage.className = 'left-page';
    const leftPageTop = document.createElement('div');
    leftPageTop.className = 'left-page__top';
    const leftPageBottom = document.createElement('div');
    leftPageBottom.className = 'left-page__bottom';
    leftPage.append(leftPageTop,leftPageBottom);

    const rightPage = document.createElement('div');
    rightPage.className = 'right-page';
    const rightPageTop = document.createElement('div');
    rightPageTop.className = 'right-page__top';
    const rightPageMiddle = document.createElement('div');
    rightPageMiddle.className = 'right-page__middle';
    const rightPageBottom = document.createElement('div');
    rightPageBottom.className = 'right-page__bottom';
    rightPage.append(rightPageTop,rightPageMiddle,rightPageBottom);

    bookContent.append(leftPage,rightPage);

    openBookWrapper.append(openBookImage, bookContent);
    document.getElementsByClassName('wrapper')[0]?.appendChild(openBookWrapper);
  }
}
