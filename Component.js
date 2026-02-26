sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device"
],
    function (UIComponent, Device) {
        "use strict";

        return UIComponent.extend("sap.training.exc.Component", {

            metadata: {
                manifest: "json"
            },

            init: function () {
                // Call the base component's init funtion 
                UIComponent.prototype.init.apply(this, arguments);
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
            }
            

        });
    }
);