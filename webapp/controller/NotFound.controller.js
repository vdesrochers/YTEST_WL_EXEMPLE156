sap.ui.define([
		"ca/beyondtechnologies/YTEST_WL_EXEMPLE156/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("ca.beyondtechnologies.YTEST_WL_EXEMPLE156.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);