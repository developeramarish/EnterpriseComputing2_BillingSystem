(function () {

    var RUIFWLocalConfig = RUIFW.LocalConfig = RUIFW.LocalConfig ||  {
        project : "leap",
    	cssMapping : true,
        URL : RUIFW.BaseURL,
        isResponsive : false,
        cssList : null,
        jsList: [
		    "core/javascript/util/RUIFW-Loader.js", // loader
		    "core/javascript/util/RUIFW-Calculator.js", // calculator
		    "dist/bootstrap-3.0.0/js/bootstrap-dropdown.js", // bootstrap dropdown menu
            "dist/bootstrap-3.0.0/js/bootstrap-alert.js", // bootstrap alert box
            "dist/bootstrap-3.0.0/js/bootstrap-button.js", // bootstrap buttons
            "dist/bootstrap-3.0.0/js/bootstrap-datepicker.js" // bootstrap date picker
        ]
    };


})();
