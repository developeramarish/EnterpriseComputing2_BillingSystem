(function (jQuery, window, undefined) {

    var RUIFW = window.RUIFW = window.RUIFW || {};
    var RUIFWUtils = RUIFW.Utils = RUIFW.Utils || {};
    var RUIFWCoreConfig = RUIFW.CoreConfig = RUIFW.CoreConfig || {};
    var RUIFWLocalConfig = (typeof RUIFWConfig == 'object' )? RUIFW.LocalConfig = RUIFW.LocalConfig = RUIFWConfig : RUIFW.LocalConfig = RUIFW.LocalConfig || {};
    var RUIFWLocalStorage = RUIFW.LocalStorage = RUIFW.LocalStorage || {};




    var RUIFW_HTML = document.getElementsByTagName('html')[0];
    var lang = RUIFW.CoreConfig.lang =  RUIFW.CoreConfig.lang  = (RUIFW_HTML.getAttribute("lang")!=null) ? RUIFW_HTML.getAttribute("lang") : "en";
    
    
    //localStorage var name list
    var projectNameSpace = (RUIFWLocalConfig.project) ? RUIFWLocalConfig.project+"." : "";
    
    RUIFWLocalStorage.PROJ_RESPONSIVE = projectNameSpace + "isResponsive";
    RUIFWLocalStorage.PROJ_BASEFONT = projectNameSpace + "baseFontSize";
    
    
    
    RUIFWCoreConfig.MEDIA_SM = 768;
    RUIFWCoreConfig.MEDIA_MD = 992;
    RUIFWCoreConfig.MEDIA_LG = 1200;


    (function () {
        if (window.jQuery === undefined) {
            throw "jQuery not included!";
        }
        if (jQuery.prototype.jquery === undefined) {
            throw "jQuery version not found!";
        }
        var usedVer = jQuery.prototype.jquery.split(".");
        if (parseInt(usedVer[0]) < 1 || parseInt(usedVer[1]) < 5) {
            throw "Minimum jQuery version must be 1.5";
        }

        if (window.console === undefined) {
            window.console = {
                log: function () {
                },
                debug: function () {
                },
                info: function () {
                },
                warn: function () {
                },
                error: function () {
                }
            };
        }

        RUIFW_HTML.className += " RUIFW-loading";

    })();


    RUIFWCoreConfig.removeDuplicateFromArray = function(arr){
        var filteredArray = [];
        jQuery.each(arr, function(i, el){
            if(jQuery.inArray(el, filteredArray) === -1) filteredArray.push(el);
        });
        return filteredArray;
    }
    RUIFWCoreConfig.ConfigLoader = {
    	cssMapping : ( typeof RUIFWLocalConfig.cssMapping !="undefined" ) ? RUIFWLocalConfig.cssMapping : true,
    	URL: ( typeof RUIFWLocalConfig.URL !="undefined" ) ? RUIFWLocalConfig.URL : "",
        detectDevice : ( typeof RUIFWLocalConfig.detectDevice !="undefined") ? RUIFWLocalConfig.detectDevice : true,
        isResponsive: (window.localStorage && localStorage.getItem(RUIFWLocalStorage.PROJ_RESPONSIVE))? (localStorage.getItem(RUIFWLocalStorage.PROJ_RESPONSIVE) === 'true') : ( typeof Modernizr != "undefined" && Modernizr.mq("only all")  ) ? RUIFWLocalConfig.isResponsive : false ,
        cssSysList : [ "dist/bootstrap-3.2.0/css/bootstrap.css",
			           "dist/bootstrap-3.0.0/css/bootstrap-theme.css",
			           "dist/bootstrap-3.0.0/css/bootstrap-datepicker.css",
			           "dist/font-awesome/css/font-awesome.css",
			           "core/css/B2ELab-RUIFW.css" ],
        cssList: ( RUIFWLocalConfig.cssList ) ? RUIFWLocalConfig.cssList : ["dist/bootstrap-3.0.0/css/bootstrap-slider.css"],
        jsSysList: [
            "core/javascript/B2ELab-RUIFW-Layout.js",
            "core/javascript/util/RUIFW-Map-Css.js",
            "core/javascript/util/RUIFW-Utils.js"
        ],
        jsList: (  RUIFWLocalConfig.jsList ) ? RUIFWLocalConfig.jsList : [
            "core/javascript/util/RUIFW-Resp-Tabs.js",
            "core/javascript/util/RUIFW-Scroll-Top.js",
            "core/javascript/util/RUIFW-Nav.js",
            "core/javascript/util/RUIFW-Selectable.js",
            "dist/bootstrap-3.0.0/js/bootstrap-dropdown.js",
            "dist/bootstrap-3.0.0/js/bootstrap-alert.js",
            "dist/bootstrap-3.0.0/js/bootstrap-button.js",
            "dist/bootstrap-3.0.0/js/bootstrap-datepicker.js",
            "dist/bootstrap-3.0.0/js/bootstrap-slider.js", // bootstrap slider
            "dist/bootstrap-3.0.0/js/tooltip.js",
            "dist/bootstrap-3.0.0/js/popover.js",
            "dist/bootstrap-3.0.0/js/collapse.js",
            "dist/bootstrap-3.0.0/js/tab.js",
            "dist/bootstrap-3.0.0/js/typeahead.js",
            "dist/bootstrap-3.0.0/js/modal.js",
            "dist/bootstrap-3.0.0/js/bootbox.js",//modal dialog(alertm confirmation) plug in for bt
            "dist/bootstrap-3.0.0/js/transition.js"
        ] ,


        loadCss: function (cssList, baseUrl, callback) {
            if(!baseUrl){
                if(RUIFWLocalConfig.URL){
                    baseUrl = RUIFWLocalConfig.URL;
                }
                else if(RUIFWCoreConfig.ConfigLoader.URL){
                    baseUrl = RUIFWCoreConfig.ConfigLoader.URL;
                }
            }
            cssList = RUIFWCoreConfig.removeDuplicateFromArray(cssList);
            head = document.head || jQuery("head")[0] || document.documentElement;
            for (var i = 0; i < cssList.length; i++) {
                cssLnk = document.createElement("link");
                cssLnk.href = baseUrl + cssList[i];
                cssLnk.rel = "stylesheet";
                cssLnk.type = "text/css";
                head.appendChild(cssLnk);
            }

           document.write('<!--[if lte IE 8]><link rel="stylesheet" type="text/css" href="' + RUIFWCoreConfig.ConfigLoader.URL + 'core/css/B2ELab-RUIFW-IE-Only.css" /><![endif]-->');
       //  document.write('<!--[if lte IE 8]><script language="javascript" type="text/javascript" src="' + RUIFWCoreConfig.ConfigLoader.URL  + 'dist/placeholderjs/placeholders.js"><\/script> <![endif]-->');

            if(typeof callback == "function"){
                callback();
            }
        },

        

        loadScript: function (jsList, baseUrl, callback) {

            if(!baseUrl){
                baseUrl = RUIFWCoreConfig.ConfigLoader.URL;
            }
            jsList = RUIFWCoreConfig.removeDuplicateFromArray(jsList);
            for (var i = 0; i < jsList.length; i++) {
                script = document.createElement("script");
                script.async = true;
                script.src =(jsList[i].indexOf("http") == 0 || jsList[i].indexOf("//") == 0 ) ? jsList[i] : baseUrl + jsList[i];
                script.type = "text/javascript";
                script.language = "javascript";
                document.write('<script type="text/javascript" language="javascript" src="' + script.src + '"></script>');
            }

            if(typeof callback == "function"){
                callback();
            }
        }

    };



    (function () {
        //load system language file
        if( RUIFW.Copy == null ) RUIFWCoreConfig.ConfigLoader.jsSysList.unshift( "core/javascript/localization/RUIFW-"+lang+".js");

        if(RUIFWCoreConfig.ConfigLoader.isResponsive){
            RUIFWCoreConfig.ConfigLoader.jsSysList.push( "core/javascript/B2ELab-RUIFW-Responsive.js");
            RUIFWCoreConfig.ConfigLoader.cssSysList.push( "core/css/B2ELab-RUIFW-Responsive.css");
        }else{
            RUIFWCoreConfig.ConfigLoader.cssSysList.push( "core/css/B2ELab-RUIFW-static.css");
        }


        var baseUrl = RUIFWCoreConfig.ConfigLoader.URL;
        var cssList = jQuery.merge(RUIFWCoreConfig.ConfigLoader.cssSysList, RUIFWCoreConfig.ConfigLoader.cssList);
        var jsList = jQuery.merge(RUIFWCoreConfig.ConfigLoader.jsSysList, RUIFWCoreConfig.ConfigLoader.jsList);


        RUIFWCoreConfig.ConfigLoader.loadCss(cssList, baseUrl);

        //loading system required js list+custom files
        RUIFWCoreConfig.ConfigLoader.loadScript(jsList, baseUrl);


        jQuery(document).ready(function () {
            if (RUIFWCoreConfig.ConfigLoader.isResponsive) {
                // Enable CSS active pseudo styles in Mobile Safari
                try {
                    document.addEventListener("touchstart", function () {
                    }, false);
                }
                catch (e) {
                }
            }
            
            if(RUIFWCoreConfig.ConfigLoader.isResponsive){
            	jQuery(window).on("screenChanged", function(){
            		jQuery.fn.RUIFWRespLayout();
            	});           
            }

            if(RUIFWCoreConfig.ConfigLoader.detectDevice){ 
            	try {
            		var device = RUIFW.Utils.detectDevice();
            		jQuery("html").addClass(device.replace(/ /g, "")); 	
            	}catch(err){
            		console.log("device detection error: "+ err);
            	}
            	
            }
           
            //console
            var returnLog = projectNameSpace+"isResponsive:" + RUIFWCoreConfig.ConfigLoader.isResponsive + " / " +
            				projectNameSpace+"baseFontSize:" + localStorage.getItem(RUIFWLocalStorage.PROJ_BASEFONT)  + " / " +
            				"device detection:" + RUIFWCoreConfig.ConfigLoader.detectDevice  + " / " +
            				"system css mapping:" + RUIFWCoreConfig.ConfigLoader.cssMapping;
            console.log(returnLog);

        });

        jQuery(window).load(function () {

            jQuery("body").RUIFWCSSMapping({complete: function () {
            	
            	//active default layout
            	jQuery.fn.RUIFWLayout();
            	
               
            	RUIFW_HTML.className = RUIFW_HTML.className.replace(/(?:^|\s)RUIFW-loading(?!\S)/g, "RUIFW-ready");// show page
            	
            	if(localStorage.getItem(RUIFW.LocalStorage.PROJ_BASEFONT)) RUIFW.Utils.toggleBaseFont(window.localStorage.getItem(RUIFW.LocalStorage.PROJ_BASEFONT)); // set default font-size
            	
                if (RUIFWCoreConfig.ConfigLoader.isResponsive) {
                	setTimeout(function () {
                		window.scrollTo(0, 1);
                	}, 0); // Hide the adddress bar
                	
                	jQuery.fn.RUIFWRespLayout();//active resp at page load
                }

                jQuery.fn.RUIFWCSSMappingCallBack.fire();
                
            	//adding accessiblity fix
            	jQuery.fn.RUIFWAccessibilityFix();
               
            }});

        });


    })();

})(jQuery, window);

