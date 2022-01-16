import { LandingPage } from '../view/pages/landing';
import { WelcomePage } from '../view/pages/welcome';


export class Presenter {

  constructor() {
    new LandingPage;
    document.getElementsByClassName("closed-book")[0].addEventListener("click", this.changePage);
  }

  changePage = (e: Event) => {
    document.getElementsByClassName("closed-book")[0].remove();
    new WelcomePage;
  }
}
