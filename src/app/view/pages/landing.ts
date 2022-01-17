export class LandingPage {
  render() {
    const contentWrapperElement = document.createElement('div');
    contentWrapperElement.className = 'wrapper';
    document.body.appendChild(contentWrapperElement);

    const closedBookElement = document.createElement('div');
    closedBookElement.className = 'closed-book cursor-hover';
    document.getElementsByClassName('wrapper')[0]?.appendChild(closedBookElement);
  }
}