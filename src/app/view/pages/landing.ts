export function LandingPageInitialization (): void {
  const contentWrapperElement = document.createElement('div');
  contentWrapperElement.className = 'content-wrapper';
  document.body.appendChild(contentWrapperElement);

  const closedBookElement = document.createElement('div');
  closedBookElement.className = 'closed-book';
  document.getElementsByClassName('content-wrapper')[0]?.appendChild(closedBookElement);
}
