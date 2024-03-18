AFRAME.registerComponent("menu", {
  init: function () {
    var el = this.el;
    var menuBackGroundEl = document.createElement("a-entity");
    menuBackGroundEl.setAttribute("geometry", {
      primitive: "box",
      width: 1.0,
      height: 0.4,
      depth: 0.01,
    });
    menuBackGroundEl.setAttribute("material", {
      color: "gray",
    });
    menuBackGroundEl.setAttribute("position", "0 0 -0.025");
    el.appendChild(menuBackGroundEl);
  },
});
