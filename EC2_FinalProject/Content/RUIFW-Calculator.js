
(function(jQuery){
	
 var RUIFW = window.RUIFW = window.RUIFW || {};
    var RUIFWUtils = RUIFW.Utils = RUIFW.Utils || {};
    var RUIFWCopy = RUIFW.Copy = RUIFW.Copy || {};
    var RUIFWCoreConfig = RUIFW.CoreConfig = RUIFW.CoreConfig || {};	
	
jQuery.fn.RUIFWCalculator = function(){

var calckeyval='<div class="RUIFW-calculator">\
          <div class="RUIFW-calculator-head">\
		  <div class="close"><span class="icon-remove-circle"></span></div>\
		  </div>\
          <input id="calculator-field" class="RUIFW-form-el form-control" value="0" readonly></input><div id="calculator-getNumber" class="calc-getnumber-field"></div>\
          <div class="RUIFW-calculator-keys">\
            <div class="row-fluid">\
              <button class="RUIFW-key btn btn-default RUIFW-calculator-numb" type="button">7</button>\
              <button class="RUIFW-key btn btn-default RUIFW-calculator-numb" type="button">8</button>\
              <button class="RUIFW-key btn btn-default RUIFW-calculator-numb" type="button">9</button>\
              <button class="RUIFW-key btn btn-default RUIFW-calculator-math" type="button"> + </button>\
            </div>\
            <div class="row-fluid">\
              <button class="RUIFW-key btn btn-default RUIFW-calculator-numb" type="button">4</button>\
              <button class="RUIFW-key btn btn-default RUIFW-calculator-numb" type="button">5</button>\
              <button class="RUIFW-key btn btn-default RUIFW-calculator-numb" type="button">6</button>\
              <button class="RUIFW-key btn btn-default RUIFW-calculator-math" type="button"> - </button>\
            </div>\
            <div class="row-fluid">\
              <button class="RUIFW-key btn btn-default RUIFW-calculator-numb" type="button">1</button>\
              <button class="RUIFW-key btn btn-default RUIFW-calculator-numb" type="button">2</button>\
              <button class="RUIFW-key btn btn-default RUIFW-calculator-numb" type="button">3</button>\
              <button class="RUIFW-key btn btn-default RUIFW-calculator-math" type="button"> * </button>\
            </div>\
            <div class="row-fluid">\
              <button class="RUIFW-key btn btn-default RUIFW-calculator-numb" type="button">0</button>\
              <button class="RUIFW-key btn btn-default RUIFW-calculator-numb" type="button">.</button>\
              <button class="RUIFW-key btn btn-default" id="calcbtn-RESET" type="button">C</button>\
              <button class="RUIFW-key btn btn-default RUIFW-calculator-math" type="button"> / </button>\
            </div>\
            <div class="row-fluid">\
              <button class="RUIFW-key btn btn-primary calculator-btn" id="calcbtn-CALC" type="button">=</button>\
            </div>\
          </div>\
</div>';

jQuery("body").append(calckeyval);


this.each(function(){
        jQuery(this).on("click",function(){
			jQuery('.RUIFW-calculator').fadeIn("100").draggable({ handle: ".RUIFW-calculator-head" });
			 var offsetval=getOffset(this);
			 l=offsetval[0];
			 t=offsetval[1];
			 jQuery(".RUIFW-calculator").css({"left": l, "top": t+25});
			});
    }); 


//------- get Offset ------------

function getOffset(e){
            
			 var offset = jQuery(e).offset();
			 var l = (jQuery(e).is(jQuery(window))) ? "0" : offset.left;
			 var t = (jQuery(e).is(jQuery(window))) ? "0" : offset.top;	
			 if($( window ).width()-l <250){l=$( window ).width()-270}		 
			 return [l,t];
}

//------ Number Keys-------------

jQuery(".RUIFW-calculator .RUIFW-calculator-keys .RUIFW-calculator-numb").on("click",function(){ jQuery(".RUIFW-calculator #calculator-getNumber").append(jQuery(this).html()); jQuery(".RUIFW-calculator #calculator-field").val(jQuery('#calculator-getNumber').html())});


//------ Reset Key-------------

jQuery(".RUIFW-calculator #calcbtn-RESET").on("click",function(){ jQuery(".RUIFW-calculator #calculator-getNumber").html("");jQuery(".RUIFW-calculator #calculator-field").val("0")});

//------ Calculator Math Keys-------------

jQuery(".RUIFW-calculator .RUIFW-calculator-math").on("click",function(){ 
jQuery(".RUIFW-calculator #calculator-getNumber").html(eval(jQuery("#calculator-getNumber").html())).append(jQuery(this).html());
jQuery(".RUIFW-calculator #calculator-field").val(jQuery('#calculator-getNumber').html());
});

//------ Calculate Key-------------

jQuery(".RUIFW-calculator .calculator-btn").on("click",function(){ jQuery(".RUIFW-calculator #calculator-getNumber").html(eval(jQuery("#calculator-getNumber").html()));jQuery(".RUIFW-calculator #calculator-field").val(jQuery('#calculator-getNumber').html()); jQuery('#calculator-field').focus()});


//------ Calculator Close-------------

jQuery(".RUIFW-calculator .close").on("click",function(){ 
  jQuery(this).parent().parent().fadeOut("100"); 
  jQuery(".RUIFW-calculator #calculator-getNumber").html("");
  jQuery(".RUIFW-calculator #calculator-field").val("0");
});



			
};	

    

})(jQuery);
