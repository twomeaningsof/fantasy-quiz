export class LandingPage {
  contentWrapperElement: HTMLDivElement;
  closedBookElement: HTMLDivElement;

  constructor () {
    this.contentWrapperElement = document.createElement('div');
    this.contentWrapperElement.className = 'content-wrapper';
    document.body.appendChild(this.contentWrapperElement);

    this.closedBookElement = document.createElement('div');
    this.closedBookElement.className = 'closed-book';
    document.getElementsByClassName('content-wrapper')[0]?.appendChild(this.closedBookElement);
  }
}