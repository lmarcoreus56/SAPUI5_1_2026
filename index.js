
sap.ui.define(["sap/ui/core/mvc/XMLView"], function (XMLView) {

  XMLView.create({
    id: "App",
    viewName: "sap.training.exc.view.App"
  }).then(function (oView) {
    oView.placeAt("content");
  })
})