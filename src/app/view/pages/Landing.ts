export class LandingPage {
  private createContentWrapper() {
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('wrapper');
    return contentWrapper;
  }

  private createClosedBook() {
    const closedBook = document.createElement('div');
    closedBook.classList.add('closed-book', 'cursor-hover');
    return closedBook;
  }

  render() {
    const contentWrapper = this.createContentWrapper();
    const closedBook = this.createClosedBook();

    contentWrapper.append(closedBook);
    document.body.appendChild(contentWrapper);
  }
}
