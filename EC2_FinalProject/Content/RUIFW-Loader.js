(function( jQuery ) {
    var RUIFW = window.RUIFW = window.RUIFW || {};
    var RUIFWCopy = RUIFW.Copy = RUIFW.Copy || {};

	jQuery.fn.RUIFWLoader = function( options ){
		
		
		var options = jQuery.extend({
				//innerHTML : RUIFWCopy.uiStatic.loading,
				callback :  null
		     }, options);
		

		var obj ; 
		
		var RUIFWLoader = {
				 loader : jQuery("<div></div>").attr({"class":"RUIFW-page-loader", "aria-live" : RUIFWCopy.uiStatic.polite}),
				 done: function() {
					 jQuery(this.loader).remove();
					 jQuery(obj).removeClass("RUIFW-loading").addClass("RUIFW-ready");					 
					 jQuery(window).off("resize", _resize);
				}
		}	

		var _resize = function(evt){
			  var offset = jQuery(obj).offset();

			  var l = (jQuery(obj).is(jQuery(window))) ? "0" : offset.left;
			  var t = (jQuery(obj).is(jQuery(window))) ? "0" : offset.top;
			  var h = (jQuery(obj).is(jQuery(window))) ? "100%" :jQuery(obj).outerHeight() + "px";
			  var w = (jQuery(obj).is(jQuery(window))) ? "100%" :jQuery(obj).outerWidth() + "px";

			
			jQuery(RUIFWLoader.loader).css({"left": l, 
					"top": t,
					"height": h,
					"width": w});
			 
		
		};
		
	 
		
		
	  this.each( function() {
		  obj = this;

		  jQuery(obj).removeClass("RUIFW-ready");

		  var loader_html;
		  if( options.innerHTML == null || options.innerHTML == ""){
			  loader_html = jQuery("<span><span class='sr-only'>"+ RUIFWCopy.uiStatic.loading +"</span></span>");
		  }else{
			  loader_html = jQuery("<span><span>"+ options.innerHTML +"</span></span>");
		  }
		  
		  loader_html.attr({"class":"RUIFW-loader", "aria-live" : RUIFWCopy.uiStatic.polite})
		 
		  var className = (options.className) ? options.className : "";
		  jQuery(RUIFWLoader.loader).addClass(className).append(loader_html);

		  if( !jQuery(obj).hasClass("RUIFW-loading") ){
			  jQuery(obj).addClass("RUIFW-loading");
			  jQuery("body").append(RUIFWLoader.loader);			 
		  }
		  _resize();
		  jQuery(window).on("resize", _resize);
		 
		  
		  if ( jQuery.isFunction( options.callback ) ) {
				 options.callback.call( this );
		  }
		  
		  
      });
	
	 return RUIFWLoader;
	 
	};
	    
})( jQuery );


