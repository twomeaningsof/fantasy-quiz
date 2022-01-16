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
    this.openBookImage.src = "/src/assets/img/opened-book.png";

    this.leftPage = document.createElement('div');
    this.leftPage.className = 'left-page';
    this.rightPage = document.createElement('div');
    this.rightPage.className = 'right-page';

    this.openBookWrapper.append(this. openBookImage, this.leftPage,this.rightPage);

    document.getElementsByClassName('content-wrapper')[0]?.appendChild(this.openBookWrapper);

  }
}
