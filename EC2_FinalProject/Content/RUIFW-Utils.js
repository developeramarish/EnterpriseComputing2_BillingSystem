jQuery.fn.RUIFWCSSMappingCallBack = jQuery.Callbacks( "stopOnFalse" ); // please don't remove, it handles css mapping call back fn.
 
(function (jQuery) {

    //Global scope for now
    var RUIFW = window.RUIFW = window.RUIFW || {};
    var RUIFWUtils = RUIFW.Utils = RUIFW.Utils || {};
    var RUIFWCopy = RUIFW.Copy = RUIFW.Copy || {};
    var RUIFWCoreConfig = RUIFW.CoreConfig = RUIFW.CoreConfig || {};
    var RUIFWLocalStorage = RUIFW.LocalStorage = RUIFW.LocalStorage || {};
   
    
    
    RUIFWUtils.routeAjaxRequests = function (isGetRequest, postData, endPointsArray, onError, onSuccess, doAlways)  {
        this.makeCall = function (endpoint, isGetRequest, postData) {
            var xhrOptions = {
                url: endpoint,
                type: (isGetRequest) ? "GET" : "POST",
                data: postData
            };
            return jQuery.ajax(xhrOptions);
        }


        var eArray = [];
        for (var i = 0; i < endPointsArray.length; i++) {
            eArray.push(jQuery.when(this.makeCall(endPointsArray[i], isGetRequest, postData)));
        }
        jQuery.each(eArray, function (i, data) {
            data.fail(function (data) {
                if(typeof onError == "function"){
                    onError(data)
                }
            }),
                data.done(function (data) {
                    if(typeof onSuccess == "function"){
                        onSuccess(data);
                    }
                }),
                data.always(function (data) {
                        if(typeof onSuccess == "function"){
                            doAlways(data);
                        }
                    }
                )
        });
    },
    
    RUIFWUtils.toggleDiv = function (options){
    	
    	 options = jQuery.extend({
    		 onShow : null,
    		 onHide : null
		   }, options);
    	
    	if(options.toggleDiv) {
    		jQuery(options.toggleDiv).hasClass("RUIFW-hide") ? RUIFWUtils.showDiv(options.toggleDiv, options.onShow) : RUIFWUtils.hideDiv(options.toggleDiv, options.onHide);
    	}
    	
    	if(options.hideDiv) {
    		RUIFWUtils.hideDiv(options.hideDiv, options.onHide);    
    	}

    	if(options.showDiv){
    		RUIFWUtils.showDiv(options.showDiv, options.onShow);
    	}
    
    	
    	
    },
    
    RUIFWUtils.hideDiv = function(obj, callBack){
        var obj = jQuery(obj);
        obj.addClass("RUIFW-hide").attr("aria-hidden", "true").find("a").attr("aria-hidden", "true").attr("tabIndex", '-1');
        if(obj.hasClass("fade")){
            obj.removeClass("in");
        }

        if ( jQuery.isFunction( callBack ) ) {
            callBack.call( this );
        }
    },
    
    RUIFWUtils.showDiv = function(obj, callBack){
        var obj = jQuery(obj);
    	obj.removeClass("RUIFW-hide").attr("aria-hidden", "false").find("a").attr("aria-hidden", "false").removeAttr("tabIndex")
    	if(obj.hasClass("fade")) {
            obj.addClass("in");
        }
    	
    	if ( jQuery.isFunction( callBack ) ) {
    		callBack.call( this );
		}
    }
    
    RUIFWUtils.shuffle = function(o){ 
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };
    
    RUIFWUtils.pageTop = function(){
    	RUIFWUtils.scrollTo(0);
    };
    
    RUIFWUtils.scrollTo = function(pos){   	
    	jQuery("body, html").animate({
			  scrollTop: pos
		}, 800);
    }
    
    RUIFWUtils.print = function(options, handler){

    	var printContent = (options.content) ?  options.content : jQuery(options.target).html();
    
    	var printModal = RUIFWUtils.modal({
    		id : "RUIFW-print-modal",
    		title : "Print",
    		body : printContent,
    		hasFooter : false
    	});
    	printModal.on("shown.bs.modal", function(){
    		jQuery(this).addClass("RUIFW-print-view");
			
			var modal_header = jQuery(this).find(".modal-header");
			
			//remove current close btn
			jQuery(modal_header).find(".close").remove();
			
			// adding cancel + print btn at the top
			var btn_cancel = jQuery("<button>").html(RUIFWCopy.uiStatic.btnCancel).addClass("btn btn-default").attr("data-dismiss","modal");
			var btn_print = jQuery("<button>").html(RUIFWCopy.uiStatic.btnPrint + " <span class='icon-print'></span>").addClass("btn btn-primary").click(function(){ window.print();});
			
			jQuery(modal_header).append(btn_cancel).append(btn_print);
			jQuery(btn_print).focus();
    	}).on("hidden.bs.modal", function(evt){
            jQuery(handler).focus();
            $("body").removeClass("modalPrint");
        });
    	
    	printModal.modal("show");
    	
    
    }
    
    /* CSS for Leap Phase 2 Applications start*/
    
    RUIFWUtils.printTerms = function(options, handler,modalTitle){

        // alert("hii");
     	var printContent = (options.content) ?  options.content : jQuery(options.target).html();
         var printTermsModal = RUIFWUtils.modal({
                         id : "RUIFW-print-terms-modal",
                         title : modalTitle,
                         body : printContent,
                         hasFooter : false
         });
         printTermsModal.on("shown.bs.modal", function(){
                         //jQuery(this).addClass("RUIFW-print-view");
                                         
                                         var modal_header = jQuery(this).find(".modal-header");
                                         //remove current close btn
                                         jQuery(modal_header).find(".close").remove();
                                         
                                         
                             jQuery(modal_header).append('<button type="button" class="close_icon" data-dismiss="modal"></button>');
                                         
                                       // jQuery(btn_print).focus();
         }).on("hidden.bs.modal", function(evt){
     jQuery(handler).focus();
 });
         
         printTermsModal.modal("show");
     	
     
     }
    /* CSS for Leap Phase 2 Applications end*/  

    RUIFWUtils.toggleResponsive= function(){
        try{
            var responsiveKey = (localStorage.getItem(RUIFW.LocalStorage.PROJ_RESPONSIVE) === "true");
           if(typeof responsiveKey!= undefined ){
                localStorage.setItem(RUIFW.LocalStorage.PROJ_RESPONSIVE, !responsiveKey);
            }
            else{
                localStorage.setItem(RUIFW.LocalStorage.PROJ_RESPONSIVE,  !RUIFWCoreConfig.ConfigLoader.isResponsive)
            }
            RUIFWCoreConfig.ConfigLoader.isResponsive = (localStorage.getItem(RUIFW.LocalStorage.PROJ_RESPONSIVE) === 'true');
            window.location.reload();
        }
        catch(e){
            console.log(e);
        }
    }

    RUIFWUtils.isSiteResponsive= function(){
        return  RUIFWCoreConfig.ConfigLoader.isResponsive;
    }

    RUIFWUtils.deleteResponsiveKey= function(){
        localStorage.removeItem(RUIFW.LocalStorage.PROJ_RESPONSIVE);
    }


    RUIFWUtils.curMediaType = jQuery('.RUIFW-media-type').css("font-family");
    
     var mediaType = function(){
        var curMedia;

    	jQuery(window).resize(function () {
            curMedia =jQuery('.RUIFW-media-type').css("font-family");

    		if(curMedia !=RUIFWUtils.curMediaType) {
                RUIFWUtils.curMediaType = curMedia;
                jQuery(window).trigger("screenChanged");
    		}
        });
    
     };
     
     
     
     RUIFWUtils.deviceType = function(device){
    	var curDevice;
    	curDevice = ( navigator.userAgent.toLowerCase().indexOf(device) != -1);
    	//alert(navigator.userAgent);
    	return curDevice;
    };
    
    RUIFWUtils.detectDevice = function(){
    
    	var deviceMobile = ["android", "webos", "iphone", "ipad", "blackberry",  "blackberry 9", "bb10", "windows phone"];

    	if(RUIFWUtils.deviceType("mobi")){
        	for(i in deviceMobile) {
        		if((RUIFWUtils.deviceType(deviceMobile[i]))){
        			device = deviceMobile[i];
        			break;
        		}
	        }
        }else{
        	device = "desktop";
        }
        
        return device;
        
      
    };
    
    RUIFWUtils.rounding = function(num, roundTo){
    	var n = num/roundTo;
    	var r = parseInt(n);
    	var newNum =  ( n - r  >= 0.5 ) ? r+1 : r; 
    
    	newNum = newNum * roundTo ;
    		
    	return newNum;
    	

    };
    
    RUIFWUtils.toggleBaseFont = function(newFont){
    	var baseFont = localStorage.getItem(RUIFW.LocalStorage.PROJ_BASEFONT);
    	if( baseFont != newFont) jQuery("html").removeClass(baseFont);
    	
    	if(newFont){   		
    		jQuery("html").addClass(newFont);
    		localStorage.setItem(RUIFW.LocalStorage.PROJ_BASEFONT, newFont);   		   		
    	}else{    		
    		localStorage.removeItem(RUIFW.LocalStorage.PROJ_BASEFONT);
    	}  	
    	 
    	 
    };
    
    RUIFWUtils.modal = function(options){
    	 options = jQuery.extend({
             id: "RUIFW-Modal",
             title : "-",
             hasHeader : true,
             hasFooter : true
         }, options);
    	 
    	 
    	 
    	 dialog = jQuery(RUIFWUtils.modalTemplate.dialog).attr({"id":options.id });
    	 dialogContent = dialog.find(".modal-content");
    	 dialogBody = jQuery(RUIFWUtils.modalTemplate.body).html(options.body);
    	 dialogHeader = jQuery(RUIFWUtils.modalTemplate.header).find(".modal-title").html(options.title).end();   	 
    	 dialogFooter = jQuery(RUIFWUtils.modalTemplate.footer);
    	
    	 if(options.hasHeader) dialogContent.append(dialogHeader);
    	 dialogContent.append(dialogBody);
    	 if(options.hasFooter) dialogContent.append(dialogFooter);
    	 
    	 jQuery("body").append(dialog);
    	 
    	 dialog.on("hidden.bs.modal", function(e) {
    	      if (e.target === this) dialog.remove();
    	 });   
    	 
    	 return dialog; 	
    };
    
    RUIFWUtils.modalTemplate = {
	    dialog:
	        "<div class='RUIFW-modal modal fade' tabindex='-1' role='dialog' aria-labelledby='modal dialog' aria-hidden='true' data-backdrop='static'>" +
	          "<div class='modal-dialog'>" +	          	 
    	          "<div class='modal-content'></div>" +
	          "</div>" +
	        "</div>",
	      header:
	        "<div class='modal-header'>" +
	          "<button type='button' class='close' data-dismiss='modal'><span aria-hidden='true'>x</span><span class='sr-only'>Close</span></button>"+
	          "<h4 class='modal-title'></h4>" +
	        "</div>",
	      body:
              "<div class='modal-body' role='document'></div>",
	      footer:
	        "<div class='modal-footer'></div>"
    	      
    };
    


    jQuery(document).ready(function () {
        if (RUIFWCoreConfig.ConfigLoader.isResponsive) {
            mediaType();           
        }
    });

})( jQuery );