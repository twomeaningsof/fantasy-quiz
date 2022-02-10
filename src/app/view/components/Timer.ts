export class Timer {
  static destroy = () => {
    document.getElementById("timer")?.remove();
  };

  render = () => {
    const timerElementWrapper = document.createElement("div");
    timerElementWrapper.classList.add("timer-wrapper");

    const timerElement = document.createElement("div");
    timerElement.classList.add("timer-wrapper_timer");
    timerElement.id = "timer";

    timerElementWrapper.appendChild(timerElement);

    document.body.appendChild(timerElementWrapper);
  };
}
