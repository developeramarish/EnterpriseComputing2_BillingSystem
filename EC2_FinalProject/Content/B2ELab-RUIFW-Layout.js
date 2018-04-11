(function( jQuery ) {

    var RUIFW = window.RUIFW = window.RUIFW || {};
    var RUIFWCopy = RUIFW.Copy = RUIFW.Copy || {};
    var RUIFWUtils = RUIFW.Utils = RUIFW.Utils || {};


    jQuery.fn.RUIFWLayout = function() {

        //adjust layout
        if(!jQuery(".RUIFW-content-side").length ) jQuery(".RUIFW-content-main").removeClass("col-md-9").addClass("col-md-12")  ;
        if(!jQuery(".RUIFW-container-header").length ) jQuery(".RUIFW-page-wrap").addClass("RUIFW-page-wo-header");

        //globe active datepicker
        if ( typeof Datepicker != "undefined") {
            if(typeof Modernizr != "undefined" && Modernizr.inputtypes.date){
                jQuery("input[type=text].RUIFW-date-picker").datepicker({autoclose : true, format :"yyyy-mm-dd"});
            }else{
                jQuery("input.RUIFW-date-picker").datepicker({autoclose : true, format :"yyyy-mm-dd"});
            }
        }

        //globe active tooltip
        if ( typeof Tooltip != "undefined" && typeof Modernizr != "undefined" && !Modernizr.touch ){
            jQuery('.RUIFW-tooltip').tooltip({ container: 'body'});
        }






        //media type detection helper

        if( jQuery(".RUIFW-media-type").length ===0 ){
            jQuery("<span class='RUIFW-media-type'></span>").appendTo("body");
        }
        RUIFWUtils.curMediaType = jQuery('.RUIFW-media-type').css("font-family");



    };


    //adding red/gray nav background bar to page
    jQuery.fn.RUIFWPageBg = function(args){

        // options.render val: redOnly, grayOnly

        var render = (args && args.render) ? args.render : "";

        if(!jQuery(".RUIFW-bg-bar").length){
            if(!jQuery(".RUIFW-container-nav-main").length) jQuery("<div></div>").addClass("RUIFW-container-nav-main").appendTo(".RUIFW-container-header");

            var bgBar = jQuery("<div></div>").addClass("RUIFW-bg-bar");
            var bgMainNav = jQuery("<div></div>").addClass("RUIFW-bg-main-nav");
            var bgSubNav = jQuery("<div></div>").addClass("RUIFW-bg-sub-nav");


            jQuery("body").append(bgBar);
            if( render != "grayOnly") jQuery(bgBar).append(bgMainNav);

            if( render != "redOnly") jQuery(bgBar).append(bgSubNav);

        }

    };

    jQuery.fn.RUIFWAccessibilityFix = function() {
        //globe - adding skip to content link  
        var elContainerMain = jQuery(".RUIFW-container-main");

        if (elContainerMain.attr("id")== undefined) {
            elContainerMain.attr("id", "RUIFW-main-content");
        }
        elContainerMain.attr("tabindex", "-1");
        var skipContent = jQuery("<a>"+RUIFWCopy.uiStatic.skipToMainContent+"</a>").addClass("sr-only RUIFW-skip-main").attr("href", "#" + elContainerMain.attr("id")); //adding skip to content link
        jQuery(".RUIFW-page-header").prepend(skipContent);


        //global - adding "active" class to active accordion panels + accessibility fix
        if ( typeof jQuery.fn.collapse != "undefined" ){

            var srOnly = jQuery("<span>"+RUIFWCopy.uiStatic.collapsed+"</span>").addClass("sr-only");
            var panelGroup = jQuery(".RUIFW-panel-group");
            panelGroup.find("a[data-toggle='collapse']").prepend(srOnly);
            //open default panel
            panelGroup.find("a[data-status='open']").click();

            panelGroup.on("shown.bs.collapse", function (evt) {
                jQuery(evt.target).parent(".RUIFW-panel").addClass("active").find("a[data-toggle='collapse'] .sr-only").html(RUIFWCopy.uiStatic.expanded);
            }).on("hidden.bs.collapse", function (evt) {
                    jQuery(evt.target).parent(".RUIFW-panel").removeClass("active").find("a[data-toggle='collapse'] .sr-only").html(RUIFWCopy.uiStatic.collapsed);
                });
        }

        //global - accessibility fix for dropdown

        jQuery("[data-toggle='dropdown']").prepend("<span class='sr-only RUIFW'>"+RUIFWCopy.uiStatic.open+"</span>");

        jQuery(".dropdown-menu").parent().on('show.bs.dropdown', function (evt) {
            jQuery(evt.target).parent().find("[data-toggle='dropdown'] .sr-only.RUIFW").html(RUIFWCopy.uiStatic.close);
        }).on("hide.bs.dropdown", function (evt) {
                jQuery(evt.target).parent().find("[data-toggle='dropdown'] .sr-only.RUIFW").html(RUIFWCopy.uiStatic.open);
            });

        //globe - accessibility fix for modal
        jQuery(".RUIFW-modal .RUIFW-modal-content").attr( "role", "document");
        jQuery(".RUIFW-modal").on("show.bs.modal", function(evt){
            this.trigger = evt.relatedTarget;

            var input = jQuery(this).find('a, select, input, textarea, button');
            var firstInput = input.first();
            var lastInput = input.last();

            /*set focus on first input*/
            firstInput.focus();

            /*redirect last tab to first input*/
            lastInput.on('keydown', function (e) {
                if ((e.which === 9 && !e.shiftKey)) {
                    e.preventDefault();
                    firstInput.focus();
                }
            });

            /*redirect first shift+tab to last input*/
            firstInput.on('keydown', function (e) {
                if ((e.which === 9 && e.shiftKey)) {
                    e.preventDefault();
                    lastInput.focus();
                }
            });

        }).on("hidden.bs.modal", function(evt){
                jQuery(this.trigger).focus();
            });

        //globe - accessibility for pop over
        var  popoverElement = jQuery("[data-toggle='popover']");
        popoverElement.append("<span class='sr-only RUIFW'>"+RUIFWCopy.uiStatic.openPopOver+"</span>")
        popoverElement.on("show.bs.popover", function(evt){
            jQuery(evt.target).find(".sr-only.RUIFW").html(RUIFWCopy.uiStatic.closePopOver);
        }).on("hide.bs.popover", function (evt) {
                jQuery( evt.target).find(".sr-only.RUIFW").html(RUIFWCopy.uiStatic.openPopOver);
            });
    }


})( jQuery );
