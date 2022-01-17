import { LandingPage } from '../view/pages/landing';
import { WelcomePage } from '../view/pages/welcome';



export class LandingView {
  renderLanding() {
    const landingView = new LandingPage;
    landingView.render();
    document.getElementsByClassName("closed-book")[0].addEventListener("click", this.changePage);
  }
  changePage = (e: Event) => {
    document.getElementsByClassName("closed-book")[0].remove();
    const welcomeView = new WelcomePage;
    welcomeView.render();
  }
}

