AFRAME.registerComponent("button", {
  schema: {
    label: {
      default: "label",
    },
    width: {
      default: 0.11,
    },
  },
  init: function () {
    let el = this.el;
    let labelEl = (this.labelEl = document.createElement("a-entity"));
    this.color = "#3a50c5";
    el.setAttribute("geometry", {
      primitive: "box",
      width: this.data.width,
      height: 0.05,
      depth: 0.04,
    });
    el.setAttribute("material", {
      color: this.color,
    });
    el.setAttribute("pressable", "");
    labelEl.setAttribute("position", "0 0 0.02");
    labelEl.setAttribute("text", {
      value: this.data.label,
      color: "white",
      align: "center",
    });
    labelEl.setAttribute("scale", "0.75 0.75 0.75");
    this.el.appendChild(labelEl);
  },
});
