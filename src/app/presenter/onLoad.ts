import { LandingPage } from '../view/pages/landing';
import { WelcomePage } from '../view/pages/welcome';
import { RulebookPage } from '../view/pages/rulebook';



export class LandingView {
  renderLanding() {
    const landingView = new LandingPage();
    landingView.render();
    document.getElementsByClassName("closed-book")[0].addEventListener("click", this.renderWelcomePage);
  }
  renderWelcomePage() {
    document.getElementsByClassName("closed-book")[0].remove();
    const welcomeView = new WelcomePage();
    welcomeView.render();
  }
}
