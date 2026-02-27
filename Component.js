sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "sap/ui/core/Fragment",
    "sap/m/MessageToast"
],
    function (UIComponent, Device, Fragment, MessageToast) {
        "use strict";

        return UIComponent.extend("sap.training.exc.Component", {

            metadata: {
                manifest: "json"
            },

            init: function () {
                // Call the base component's init funtion 
                UIComponent.prototype.init.apply(this, arguments);
                this.getRouter().initialize();

                //cargar fragmento desde el Component V1 
                //this._loadWelcomeDialog();

                //v2
                this._showWelcomeDialog();
            },

            getContentDensityClass: function () {
                if (!this.__sContentDensityClass) {
                    if (Device.support.touch) {
                        this.__sContentDensityClass = "sapUiSizeCozy";
                    } else {
                        this.__sContentDensityClass = "sapUiSizeCompact";
                    }
                }

                return this.__sContentDensityClass;
            },

            /* version 1
            _loadWelcomeDialog: function () {
                var oDialog;
                //crear un objeto CONTROLADOR personalizado
                var oFragmentController = {
                    onWelcomeConfirm: function () {
                        MessageToast.show("!Bienvenido popo");
                        oDialog.close();
                    }
                };


                // cargar fragmento con Fragment.load()
                Fragment.load({
                    name: "sap.training.exc.fragments.Welcome",
                    controller: oFragmentController //controller personalizado
                }).then(function (oLoadedDialog){
                    oDialog = oLoadedDialog;  //Asigna la referencia 
                    oDialog.open();
                });
            } */

            //version 2
            _showWelcomeDialog: function () {
                var oWelcomeDialog;   //1. variable para el dialogo
                // 2. crear controller personalizado
                var oFragmentController = {
                    onWelcomeConfirm: function () {
                        MessageToast.show("Bienvenido a la aplicacion");
                        oWelcomeDialog.close();
                    },
                    onWelcomeCancel: function () {
                        MessageToast.show("Dialogo cancelado");
                        oWelcomeDialog.close();
                    }
                };
                // 3 cargar el fragmento
                Fragment.load({
                    name: "sap.training.exc.fragments.Welcome",
                    controller: oFragmentController
                }).then(function (oDialog) {
                    oWelcomeDialog = oDialog;     //asigna la referencia
                    oWelcomeDialog.open();        // Abre el dialogo
                });
            }
        });
    }
);