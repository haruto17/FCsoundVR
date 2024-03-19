let osc = [];

init();
register();

function init() {
  for (let i = 0; i < 13; i++) {
    let f = 261.626 * (2 ** 0.083333) ** i;
    osc[i] = new Tone.Oscillator(f, "square").toDestination();
  }
}

function register() {
  const ButtonEls = document.querySelectorAll("[button]");
  for (let i = 0; i < ButtonEls.length; i++) {
    let el = ButtonEls[i];
    el.addEventListener("pressedstarted", () => {
      playSound(i);
    });
    el.addEventListener("pressedended", () => {
      stopSound(i);
    });
  }
}

function playSound(index) {
  osc[index].start();
}

function stopSound(index) {
  osc[index].stop();
}
