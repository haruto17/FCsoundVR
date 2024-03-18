AFRAME.registerComponent("event-manager", {
  init: function () {
    this.bindMethods();
    this.ButtonEls = document.querySelectorAll("[button]");
    this.ButtonEls.forEach((ButtonEl) => {
      ButtonEl.addEventListener("click", this.onClick);
    });
  },
  bindMethods: function () {
    this.onClick = this.onClick.bind(this);
  },
  onClick: function (event) {
    let targetEl = event.target;
    ButtonEls.forEach((ButtonEl) => {
      if (targetEl === ButtonEl) {
        ButtonEl.removeState("pressed");
      } else {
        targetEl.addState("pressed");
      }
    });
  },
});
