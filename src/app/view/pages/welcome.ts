import openedBookImg from '../../../assets/img/opened-book.png';

export class WelcomePage {
  openBookWrapper: HTMLDivElement;
  openBookImage: HTMLImageElement;
  leftPage: HTMLDivElement;
  rightPage: HTMLDivElement;

  constructor () {
    this.openBookWrapper = document.createElement('div');
    this.openBookWrapper.className = 'opened-book';

    this.openBookImage = document.createElement('img');
    this.openBookImage.className = 'opened-book__img';
    this.openBookImage.src = openedBookImg;

    this.leftPage = document.createElement('div');
    this.leftPage.className = 'page__left';
    this.rightPage = document.createElement('div');
    this.rightPage.className = 'page__right';

    this.openBookWrapper.append(this. openBookImage, this.leftPage,this.rightPage);

    document.getElementsByClassName('content-wrapper')[0]?.appendChild(this.openBookWrapper);

  }
}
