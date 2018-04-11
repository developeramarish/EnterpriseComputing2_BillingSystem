(function( jQuery ) {
    var RUIFW = window.RUIFW = window.RUIFW || {};
    var RUIFWCoreConfig = RUIFW.CoreConfig = RUIFW.CoreConfig || {};

    jQuery.fn.RUIFWCSSMapping = function(options) {

        options = jQuery.extend({
            complete : null
        }, options);


        var mainCssMaps = {
            //"RUIFW-nav-footer" : "nav navbar-nav collapse navbar-collapse",
            "RUIFW-content-main" : "col-md-9",
            "RUIFW-content-side" : "col-md-3"
        };

        var comCSSMaps =  {
            "RUIFW-nav" : "nav",
            "RUIFW-dropdown-toggle" : "dropdown-toggle",
            "RUIFW-dropdown" : "dropdown",
            "RUIFW-dropdown-menu" : "dropdown-menu",
            "RUIFW-navbar-nav" : "nav navbar-nav",
            "RUIFW-nav-main" : "nav navbar-nav",
            "RUIFW-pull-right" : "pull-right",
            "RUIFW-tabs" : "nav nav-tabs",
            "RUIFW-sr" : "sr-only",
            "RUIFW-row" : "row",
            "RUIFW-col-xs-1" : "col-xs-1",
            "RUIFW-col-xs-2" : "col-xs-2",
            "RUIFW-col-xs-3" : "col-xs-3",
            "RUIFW-col-xs-4" : "col-xs-4",
            "RUIFW-col-xs-5" : "col-xs-5",
            "RUIFW-col-xs-6" : "col-xs-6",
            "RUIFW-col-xs-7" : "col-xs-7",
            "RUIFW-col-xs-8" : "col-xs-8",
            "RUIFW-col-xs-9" : "col-xs-9",
            "RUIFW-col-xs-10" : "col-xs-10",
            "RUIFW-col-xs-11" : "col-xs-11",
            "RUIFW-col-xs-12" : "col-xs-12",
            "RUIFW-col-1" : "col-sm-1",
            "RUIFW-col-2" : "col-sm-2",
            "RUIFW-col-3" : "col-sm-3",
            "RUIFW-col-4" : "col-sm-4",
            "RUIFW-col-5" : "col-sm-5",
            "RUIFW-col-6" : "col-sm-6",
            "RUIFW-col-7" : "col-sm-7",
            "RUIFW-col-8" : "col-sm-8",
            "RUIFW-col-9" : "col-sm-9",
            "RUIFW-col-10" : "col-sm-10",
            "RUIFW-col-11" : "col-sm-11",
            "RUIFW-col-12" : "col-sm-12",
            "RUIFW-col-md-1" : "col-md-1",
            "RUIFW-col-md-2" : "col-md-2",
            "RUIFW-col-md-3" : "col-md-3",
            "RUIFW-col-md-4" : "col-md-4",
            "RUIFW-col-md-5" : "col-md-5",
            "RUIFW-col-md-6" : "col-md-6",
            "RUIFW-col-md-7" : "col-md-7",
            "RUIFW-col-md-8" : "col-md-8",
            "RUIFW-col-md-9" : "col-md-9",
            "RUIFW-col-md-10" : "col-md-10",
            "RUIFW-col-md-11" : "col-md-11",
            "RUIFW-col-md-12" : "col-md-12",
            "RUIFW-pull-1" : "col-sm-pull-1",
            "RUIFW-pull-2" : "col-sm-pull-2",
            "RUIFW-pull-3" : "col-sm-pull-3",
            "RUIFW-pull-4" : "col-sm-pull-4",
            "RUIFW-pull-5" : "col-sm-pull-5",
            "RUIFW-pull-6" : "col-sm-pull-6",
            "RUIFW-pull-7" : "col-sm-pull-7",
            "RUIFW-pull-8" : "col-sm-pull-8",
            "RUIFW-push-1" : "col-sm-push-1",
            "RUIFW-push-2" : "col-sm-push-2",
            "RUIFW-push-3" : "col-sm-push-3",
            "RUIFW-push-4" : "col-sm-push-4",
            "RUIFW-push-5" : "col-sm-push-5",
            "RUIFW-push-6" : "col-sm-push-6",
            "RUIFW-push-7" : "col-sm-push-7",
            "RUIFW-push-8" : "col-sm-push-8",
            "RUIFW-push-9" : "col-sm-push-9",
            "RUIFW-push-10" : "col-sm-push-10",
            "RUIFW-pull-md-1" : "col-md-pull-1",
            "RUIFW-pull-md-2" : "col-md-pull-2",
            "RUIFW-pull-md-3" : "col-md-pull-3",
            "RUIFW-pull-md-4" : "col-md-pull-4",
            "RUIFW-pull-md-5" : "col-md-pull-5",
            "RUIFW-pull-md-6" : "col-md-pull-6",
            "RUIFW-pull-md-7" : "col-md-pull-7",
            "RUIFW-pull-md-8" : "col-md-pull-8",
            "RUIFW-push-md-1" : "col-md-push-1",
            "RUIFW-push-md-2" : "col-md-push-2",
            "RUIFW-push-md-3" : "col-md-push-3",
            "RUIFW-push-md-4" : "col-md-push-4",
            "RUIFW-push-md-5" : "col-md-push-5",
            "RUIFW-push-md-6" : "col-md-push-6",
            "RUIFW-push-md-7" : "col-md-push-7",
            "RUIFW-push-md-8" : "col-md-push-8",
            "RUIFW-push-md-9" : "col-md-push-9",
            "RUIFW-push-md-10" : "col-md-push-10",
            "RUIFW-offset-1" : "col-sm-offset-1",
            "RUIFW-offset-2" : "col-sm-offset-2",
            "RUIFW-offset-3" : "col-sm-offset-3",
            "RUIFW-offset-4" : "col-sm-offset-4",
            "RUIFW-offset-5" : "col-sm-offset-5",
            "RUIFW-offset-6" : "col-sm-offset-6",
            "RUIFW-offset-7" : "col-sm-offset-7",
            "RUIFW-offset-8" : "col-sm-offset-8",
            "RUIFW-offset-9" : "col-sm-offset-9",
            "RUIFW-offset-10" : "col-sm-offset-10",
            "RUIFW-offset-md-1" : "col-md-offset-1",
            "RUIFW-offset-md-2" : "col-md-offset-2",
            "RUIFW-offset-md-3" : "col-md-offset-3",
            "RUIFW-offset-md-4" : "col-md-offset-4",
            "RUIFW-offset-md-5" : "col-md-offset-5",
            "RUIFW-offset-md-6" : "col-md-offset-6",
            "RUIFW-offset-md-7" : "col-md-offset-7",
            "RUIFW-offset-md-8" : "col-md-offset-8",
            "RUIFW-offset-md-9" : "col-md-offset-9",
            "RUIFW-offset-md-10" : "col-md-offset-10",
            "RUIFW-offset-xs-1" : "col-xs-offset-1",
            "RUIFW-offset-xs-2" : "col-xs-offset-2",
            "RUIFW-offset-xs-3" : "col-xs-offset-3",
            "RUIFW-offset-xs-4" : "col-xs-offset-4",
            "RUIFW-offset-xs-5" : "col-xs-offset-5",
            "RUIFW-offset-xs-6" : "col-xs-offset-6",
            "RUIFW-offset-xs-7" : "col-xs-offset-7",
            "RUIFW-offset-xs-8" : "col-xs-offset-8",
            "RUIFW-offset-xs-9" : "col-xs-offset-9",
            "RUIFW-offset-xs-10" : "col-xs-offset-10",
            "RUIFW-label" : "label",
            "RUIFW-badge" : "badge",
            "RUIFW-btn" : "btn btn-default",
            "RUIFW-btn-lg" : "btn btn-default btn-lg",
            "RUIFW-btn-sm" : "btn btn-default btn-sm",
            "RUIFW-btn-primary" : "btn btn-primary",
            "RUIFW-btn-success" : "btn btn-success",
            "RUIFW-btn-primary-lg" : "btn btn-primary btn-lg",
            "RUIFW-btn-link" : "btn btn-link",
            "RUIFW-btn-disabled" : "btn btn-default disabled",
            "RUIFW-btn-block" : "btn-block",
            "RUIFW-btn-group" : "btn-group",
            "RUIFW-btn-radio-group" : "btn-group",
            "RUIFW-input-group" : "input-group",
            "RUIFW-input-group-addon" : "input-group-addon",
            "RUIFW-btn-paginate" : "btn btn-default paginate_button",
            "RUIFW-table" : "table",
            "RUIFW-table-border" : "table",
            "RUIFW-table-hover" : "table table-hover",
            "RUIFW-hidden-xs" : "hidden-xs",
            "RUIFW-hidden-sm" : "hidden-sm hidden-xs",
            "RUIFW-visible-xs" : "visible-xs",
            "RUIFW-visible-sm" : "visible-sm visible-xs",
            "RUIFW-alert-warning" : "alert alert-warning",
            "RUIFW-alert-danger" : "alert alert-danger",
            "RUIFW-alert-success" : "alert alert-success",
            "RUIFW-alert-info" : "alert alert-info",
            "RUIFW-form" : "form-control",
            "RUIFW-textarea" : "form-control",
            "RUIFW-form-inline" : "form-inline",
            "RUIFW-form-group" : "form-group",
            "RUIFW-selectable" : "form-control",
            "RUIFW-bg-bar" : "hidden-xs",
            "RUIFW-last-login" : "hidden-xs hidden-sm",
            "RUIFW-error" : "has-error",
            "RUIFW-tmp-help" : "hidden-xs hidden-sm",
            "RUIFW-nav-tabs" : "nav nav-tabs",
            "RUIFW-tab-content" : "tab-content",
            "RUIFW-tab-pane" : "tab-pane fade",
            "RUIFW-panel-group" : "panel-group",
            "RUIFW-panel" : "panel panel-default",
            "RUIFW-panel-heading" : "panel-heading",
            "RUIFW-panel-header" : "panel-heading",
            "RUIFW-panel-title" : "panel-title",
            "RUIFW-panel-body" : "panel-body",
            "RUIFW-panel-footer" : "panel-footer",
            "RUIFW-collapse" : "collapse",
            "RUIFW-modal" : "modal fade",
            "RUIFW-modal-dialog" : "modal-dialog",
            "RUIFW-modal-content" : "modal-content",
            "RUIFW-modal-header" : "modal-header",
            "RUIFW-modal-title" : "modal-title",
            "RUIFW-modal-body" : "modal-body",
            "RUIFW-modal-footer" : "modal-footer",
            "RUIFW-nav-main li ul" : "dropdown-menu",
            "RUIFW-form-el" : "form-control",
            "RUIFW-img-resp" : "img-responsive"
        };

        /* only @ cssMapping == true */
         var jsOnlyCSSMaps = {

         "RUIFW-tab-content > * " : "tab-pane fade",
         "RUIFW-panel-group > div" : "panel panel-default",
         //"RUIFW-panel-group > div > *:nth-child(1)" : "panel-heading",
        // "RUIFW-panel-group > div > *:nth-child(2)" : "panel-collapse collapse",
         //"RUIFW-panel-group > div > *:nth-child(2) > *" : "panel-body",
         "RUIFW-modal > div" : "modal-dialog",
         "RUIFW-modal > div > div" : "modal-content",
        // "RUIFW-modal > div > div > *:nth-child(1)" : "modal-header",
         //"RUIFW-modal > div > div > *:nth-child(1) > h4" : "modal-title",
         //"RUIFW-modal > div > div > *:nth-child(1) > h5" : "modal-title",
        // "RUIFW-modal > div > div > *:nth-child(2)" : "modal-body",
        // "RUIFW-modal > div > div > *:nth-child(3)" : "modal-footer",
         "RUIFW-sm-3-col > div" : "col-sm-4 col-md-12",
         "RUIFW-row.RUIFW-1-col > div" : "col-sm-12",
         "RUIFW-row.RUIFW-2-col > div" : "col-sm-6",
         "RUIFW-row.RUIFW-3-col > div" : "col-sm-4",

         "RUIFW-input-group > .RUIFW-btn" : "input-group-addon"

         }
        

        //selectors that cannot be substituted on server side
        var jsOnlyHTMLObjMaps = {
            "select" : "form-control",
            "input[type!='checkbox'][type!='radio'][type!='hidden'][type!='button'][type!='submit'][type!='reset']" : "form-control",
            "textarea" : "form-control"
        }



        return this.each( function() {
            if(RUIFWCoreConfig.ConfigLoader.cssMapping){
                var elem =  jQuery(this);

                if( elem.is( "body" )){
                    comCSSMaps = jQuery.extend( mainCssMaps, comCSSMaps );
                }
                
                if( RUIFW.LocalConfig.cssMapping == true ){
                	comCSSMaps = jQuery.extend( jsOnlyCSSMaps, comCSSMaps );
                }

                //mapping through css class selector
                for (a in comCSSMaps) {
                    var foundElements = this.querySelectorAll("." + a); //foundElements is a collection array-like object
                    var foundElementsArr = $.makeArray( foundElements); //make it an array
                    for(var i= 0,  len = foundElementsArr.length;  i<len; i++){
                        foundElementsArr[i].className +=" "+ comCSSMaps[a];
                    }
                }
                //mapping through html obj selector
                for (a in jsOnlyHTMLObjMaps) {
                    elem.find(a).addClass(jsOnlyHTMLObjMaps[a]);
                }

            }
            if ( jQuery.isFunction( options.complete ) ) {
                options.complete.call( this );
            }

        });

    };

})( jQuery );
