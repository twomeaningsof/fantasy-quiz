export class LandingPage {
   render() {
    const contentWrapperElement = document.createElement('div');
    contentWrapperElement.className = 'content-wrapper';
    document.body.appendChild(contentWrapperElement);

    const closedBookElement = document.createElement('div');
    closedBookElement.className = 'closed-book cursor-hover';
    document.getElementsByClassName('content-wrapper')[0]?.appendChild(closedBookElement);
  }
}