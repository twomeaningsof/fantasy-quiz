export class WelcomePage {
  render() {
    const openBookWrapper = document.createElement('div');
    openBookWrapper.className = 'opened-book';

    const bookContent = document.createElement('div');
    bookContent.className = 'book-content';

    const leftPage = document.createElement('div');
    leftPage.className = 'left-page';
    const leftPageTop = document.createElement('div');
    leftPageTop.className = 'left-page__top';
    const leftPageImage = document.createElement('div');
    leftPageImage.className = 'left-page__img'
    leftPageTop.append(leftPageImage);
    const leftPageBottom = document.createElement('div');
    leftPageBottom.className = 'left-page__bottom';
    const leftPageSettingsButton  = document.createElement('button');
    leftPageSettingsButton.className = 'button-small'
    leftPageSettingsButton.textContent = 'Settings';
    leftPageBottom.append(leftPageSettingsButton);
    leftPage.append(leftPageTop,leftPageBottom);

    const rightPage = document.createElement('div');
    rightPage.className = 'right-page';
    const rightPageTop = document.createElement('div');
    rightPageTop.className = 'right-page__top';
    const rightPageTitle = document.createElement('span');
    rightPageTitle.className = 'right-page__title';
    rightPageTitle.textContent = 'Welcome to the fantasy quiz!'
    rightPageTop.append(rightPageTitle);
    const rightPageMiddle = document.createElement('div');
    rightPageMiddle.className = 'right-page__middle';
    const rightPageMiddleText = document.createElement('span');
    rightPageMiddleText.className = 'right-page__middle-text';
    rightPageMiddleText.textContent = 'Read the rules, brace yourself and test your fantasy knowledge with the best fantasy quiz in the world!'
    rightPageMiddle.append(rightPageMiddleText);
    const rightPageBottom = document.createElement('div');
    rightPageBottom.className = 'right-page__bottom';
    const rightPageRulebook = document.createElement('button');
    rightPageRulebook.className = 'button-small';
    rightPageRulebook.textContent = 'Rulebook';
    const rightPagePlay = document.createElement('button');
    rightPagePlay.className = 'button-small';
    rightPagePlay.textContent = 'Play';
    rightPageBottom.append(rightPageRulebook,rightPagePlay);
    rightPage.append(rightPageTop,rightPageMiddle,rightPageBottom);

    bookContent.append(leftPage,rightPage);

    openBookWrapper.append(bookContent);
    document.getElementsByClassName('wrapper')[0]?.appendChild(openBookWrapper);
  }
}
