/* Load Partial
 * 
 */
var timeInterval;
(function($){
    var RUIFW = window.RUIFW = window.RUIFW || {};
    var RUIFWleap = RUIFW.Leap = RUIFW.Leap || {};
    RUIFWleap.partialsLoaded = false;
    var loadPartials = function(){
        var el =  $("[data-include]");
        var len =el.length;
        var loaded = 0;
        el.each(function(index, el){
          //  console.log(index)
            $(this).load( $(this).data("include") , function(response, status, xhr){
                //console.log(el)
                 $(el).html($(el).html().replace(/{id}/g,index) );
                $(el).RUIFWCSSMapping();
                $(el).contents().unwrap().addClass( jQuery(this).data("class"));

                if ( status === "success" ){
                    loaded ++;
                }

                if ( loaded === len ) {
                    $(window).trigger("partialsLoaded");
                }
            });
        });
    };

    $(document).ready(function () {
        loadPartials();
    });

})(jQuery);

/* Time Out Count Down
 * 
 */

var countDownTime; //in miliseconds
var sessionTime = 610000; //in miliseconds
var whenToShowAdditionalTimeDialog = 540000; //in miliseconds
var isAdditionalTimeDialogShowed = false;
var countDownStarted = false;
var minute;
var second;
var timeVar;
var signedOut='signedOut';

function countDownInit() {
	if(timeInterval){
		clearInterval(timeInterval);
	}
	timeInterval = window.setInterval(checkCountDown, 1000);
	sessionTime = 610000;
	countDownTime = (new Date()).getTime();
	minute = 1;
	second = 00;
	countDownStarted = false;
	isAdditionalTimeDialogShowed = false;
}

function checkCountDown() {		
	var now = (new Date()).getTime();
	if ((now - countDownTime) > whenToShowAdditionalTimeDialog) {							
		countDownStarted = true;
	}
	var custStatus= $("input[id$='custStatus']").attr('value') ;
	var noInterestBtn = $("#campaignForm\\:notInterestedButton")[0];

	if (countDownStarted) {			
		second = second - 1;
		if (0 > second && minute >= 1) {
			second = 59;
			minute = minute - 1;
		}
		if (0 >= minute) {		
			jQuery("body").append(jQuery("#ActSumryTimeOut"));
			var additionalTimeDialog = document.getElementById('ActSumryTimeOut');	
			/*if(typeof noInterestBtn !="undefined" && noInterestBtn != null &&  ! isAdditionalTimeDialogShowed){
				additionalTimeDialog.setAttribute("style", "display: none;");
				//noInterestBtn.click();
				
				// var position = $("#targetMarketingModalWindow").offset();
				// position.top += 180; 
				// $("#targetMarketingModalWindow").css(position);
				
				//showModalDialog('ActSumryTimeOut');
				isAdditionalTimeDialogShowed=true;
			}
			else{*/					
				if(additionalTimeDialog!=null &&  ! isAdditionalTimeDialogShowed){
					//additionalTimeDialog.setAttribute("style", "display: block;");
					showModalDialog('ActSumryTimeOut');
					isAdditionalTimeDialogShowed=true;
				}
			//}			
			
			if(minute <= 0 && second <= 0){					
				clearInterval(timeInterval);
				landToSignOnWeb();
			}
			return;	
		}			
	}
}


///----- Function to handle Multiple Modals ------------

$(document).on('show.bs.modal', '.modal', function () {
    var zIndex = 1050 + (10 * $('.modal:visible').length);
    $(this).css('z-index', zIndex);
    setTimeout(function() {
        $('.modal-backdrop').not('.modal-stack,.ng-scope').css('z-index', zIndex - 1).addClass('modal-stack');
    }, 0);
});

$(document).on('hidden.bs.modal', '.modal', function () {
    $('.modal:visible').length && $(document.body).addClass('modal-open');
});

function setLastAccessTime(){
	$("input[id$='custStatus']").attr('value', 'signedOut') ;
}

function landToSignOnWeb(){		
	$("input[id$='signoutSubHideWebbtn']").attr('value', 'webtimeout'); 
	$("input[id$='signOutsubmitbtn']").click() ;		
}

function hideAlert(){
	var additionalTimeDialog = document.getElementById('myid');	
	if(additionalTimeDialog!=null){		
		additionalTimeDialog.setAttribute("style", "display: none;");
	}
	isAdditionalTimeDialogShowed=false;
	countDownInit();
}

function hideAlertNo(){		
	var additionalTimeDialog = document.getElementById('myid');	
	if(additionalTimeDialog!=null){		
		additionalTimeDialog.setAttribute("style", "display: none;");
	}
	isAdditionalTimeDialogShowed=true;	
}

function hideAlertYesActSumryTimeOut(){
	var additionalTimeDialog = document.getElementById('ActSumryTimeOut');	
	if(additionalTimeDialog!=null){		
		//additionalTimeDialog.setAttribute("style", "display: none;");
		hideModalDialog('ActSumryTimeOut');
	}
	
	isAdditionalTimeDialogShowed=false;
	countDownInit();
}


function hideAlertNoActSumryTimeOut(){		
	var additionalTimeDialog = document.getElementById('ActSumryTimeOut');	
	if(additionalTimeDialog!=null){		
		//additionalTimeDialog.setAttribute("style", "display: none;");
		hideModalDialog('ActSumryTimeOut');
	}
	
	isAdditionalTimeDialogShowed=true;

//	landToSignOnWeb();
}

/* PDF Detector
 * 
 */
function hasPdfPlugin() {   
	//detect in mimeTypes array
	if (navigator.mimeTypes != null && navigator.mimeTypes.length > 0) {        
	    for (i = 0; i < navigator.mimeTypes.length; i++) {
	        var mtype = navigator.mimeTypes[i];
	        if(mtype.type == "application/pdf" && mtype.enabledPlugin)
	            return true;
	    }
	}

	//detect in plugins array
	if (navigator.plugins != null && navigator.plugins.length > 0) {
	    for (i = 0; i < navigator.plugins.length; i++) {
	        var plugin = navigator.plugins[i];
	        if (plugin.name.indexOf("Adobe Acrobat") > -1 || plugin.name.indexOf("Adobe Reader") > -1) {
	            return true;
	        }

	    }
	} 
	// detect IE plugin
	if (window.ActiveXObject) {
	    // check for presence of newer object       
	    try {
	        var oAcro7 = new window.ActiveXObject('AcroPDF.PDF');
	        if (oAcro7) {
	            return true;
	        }
	    } catch (e) {
	    }
	    
	    // check for presence of object in IE6 or early 
	    try {
	        var oAcro6 = new window.ActiveXObject('PDF.PdfCtrl');
	        if (oAcro6) {
	            return true;
	        }
	    } catch (e) {
	    }
	}
	
    //IE11 only
	if(!(window.ActiveXObject) && "ActiveXObject" in window) {
		 var isAcroPDF = new ActiveXObject('AcroPDF.PDF');
	        if (isAcroPDF) {
	            return true;
	        }
	}
	
	//IE11 only
	    if (!(window.ActiveXObject) && "ActiveXObject" in window) {
			var isAcroPDF = new ActiveXObject('AcroPDF.PDF');
				if (isAcroPDF) {
					return true;
				}
	     }
	  //Firefox has inbuilt pdf reader thats why it returns true
	       if(navigator.userAgent.indexOf("Firefox") != -1 ) 
	       {
	            return true;
	       }
	    //If Tablet or Mobile using web URL
	       var isMobileOrTab = (/iphone|ipad|ipod|tablet|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
	       if(isMobileOrTab){
	             return true;
	       }
	// Can't detect in all other cases
	return false;
}


// JavaScript Document
function reRenderCSS(componentID) {
  if (componentID === undefined || componentID === null) {
    jQuery("#content_main").RUIFWCSSMapping({
      complete : function() {
      }
    });
  } else {
    var IDs = componentID.split(" ");
    for ( var i = 0; i < IDs.length; i++) {
      jQuery("#" + IDs[i]).RUIFWCSSMapping({
        complete : function() {
        }
      });
    }
  }
}

function contactUsModalWindow(page) {
	jQuery("externalLink").html('<iframe style="border: 0px; " src="' + page + '" width="100%" height="100%"></iframe>');
	jQuery("#contactUsDialog").modal("show");
}

// ----------- Swap between Responsive & Presentation Design -------------------
function swapresp() {
  var RUIFW = window.RUIFW = window.RUIFW || {};
  var RUIFWUtils = RUIFW.Utils = RUIFW.Utils || {};

  // toggle responsiveness, used to overwrite the localConfig.isResponsive value
  RUIFWUtils.toggleResponsive();

}

// ----------------- Toggle Action -------------------------

function hideShowFn(e, divID) {
  RUIFW.Utils.toggleDiv({
    toggleDiv : "#" + divID,
    onShow : function() {
      jQuery(e).addClass("Open");
    },
    onHide : function() {
      jQuery(e).removeClass("Open");
    },
  });

}

// ----------------- show Action -------------------------

function showFn(e, divID) {
  RUIFW.Utils.toggleDiv({
    showDiv : "#" + divID,
    onShow : function() {
      jQuery(e).addClass("Open");
    },
    onHide : function() {
      jQuery(e).removeClass("Open");
    },
  });

}

// ----------------- hide Action -------------------------

function hideFn(e, divID) {
  RUIFW.Utils.toggleDiv({
    hideDiv : "#" + divID,
    onShow : function() {
      jQuery(e).addClass("Open");
    },
    onHide : function() {
      jQuery(e).removeClass("Open");
    },
  });

}

// ------- Security Image Selection ---------------------
$(document).ready(function() {
  $(".security-img-container img").click(function(e) {

    $(".security-img-container img").removeClass('selected');
    $(this).addClass('selected');
  });

  // ------- Payee Image Selection ---------------------

  $(".payee-img img").click(function(e) {

    $(".payee-img img").removeClass('selected');
    $(this).addClass('selected');
    $(".selectedpayee").fadeIn(200);
  });

});

function highlightRow(e) {
  $(".selector-row tr").removeClass("highlight-row");
  $(e).addClass("highlight-row");
}

// ------------------------ Toggle Div -------------------------------------

function toggleDiv(args) {
  showDiv = args.show;
  hideDiv = args.hide;
  toggleClass = args.toggleClass;
  $(hideDiv).fadeOut("fast", function() {
    $(showDiv).fadeIn("fast");
  });
  if (toggleClass) {
    $(showDiv).removeClass(toggleClass);
    $(hideDiv).addClass(toggleClass);
  }
}

// ------------ is checked disabled/ enable button -----------

function chkBoxToggleBtn(e, btnID) {

  if ($(e).is(":checked")) {
    $('#' + btnID).removeAttr("disabled");

  }

  else {
    $('#' + btnID).attr("disabled", "disabled");

  }

}

// ------------ Hide/Show Toggle -----------

function hideShowToggle(itemID) {

  jQuery("#" + itemID).fadeToggle(200);

}

// ------------------- End Open Main Nav / Close Main Nav---------------

jQuery(document).ready(function() {
  jQuery("#btnToggleDiv").on("click", function(e) {

    RUIFW.Utils.toggleDiv({
      toggleDiv : "#myToggleDiv",
      onShow : function() {
        jQuery(e.target).html("Less");
        jQuery(e.target).toggleClass("Open");
      },
      onHide : function() {
        jQuery(e.target).html("More");
        jQuery(e.target).toggleClass("Open");
      },
    });
  });

});

// ------------------------------Calendar Active Show Items-------

jQuery(document).ready(function(e) {

  // define popover content
  var popCloseBtn = jQuery("<span>X</span>").addClass("close");
  var popOverContent = "";

  jQuery(".datepicker").on("mousedown", ".day.activeEvent", function(evt){                       
      jQuery(evt.target).attr("tabindex","0");
      jQuery(evt.target).popover({
                      html : true,
                      placement : "top",
                      title : "Upcoming Transactions <span class='close'>X</span>",
                      content : popOverContent,
                      container : "body",
                      //trigger: "focus",
      }).on("shown.bs.popover", function (evt) {
                      var popTitle = jQuery(".popover-title .close");
                      jQuery(popTitle).click(function(e){
                                      jQuery(evt.target).popover("hide");
                      });
                      
                });
      
  	});

  /**
  $('html').on('click', function(e) {
	  if (typeof $(e.target).data('original-title') == 'undefined' &&
	     !$(e.target).parents().is('.popover.in')) {
	    $('[data-original-title]').popover('hide');
	  }
	});
 **/
  $('html').on('click', function(e) {
	  if (typeof $(e.target).data('original-title') == 'undefined' &&  !$(e.target).parents().is('.popover.in')) 
	  {
	    $('.activeEvent[data-original-title]').popover('hide');
	  }
  });
		  
  
});

//---------- Select Show Other Options -------------------

function showOtherOptions(e, divRef)
{
	if($(e).val()=="1")
	{
		jQuery("."+divRef).fadeOut(200);
		jQuery("#enter_date").removeAttr("disabled");
	}
	
	else
	{
		jQuery("."+divRef).fadeIn(200);
		jQuery("#enter_date").attr("disabled","disabled");
	}
	
	}

$(document).ready(function () {
    $('#enter_date').datepicker({
        autoclose: true
        
    });
});

// ---------- security image gallery -------------------

clickMenu = function(menu) {
  var getEls = document.getElementById(menu).getElementsByTagName("LI");
  var getAgn = getEls;

  for ( var i = 0; i < getEls.length; i++) {
    getEls[i].onclick = function() {
      for ( var x = 0; x < getAgn.length; x++) {
        if ((this.className.indexOf('default')) == -1) {
          getAgn[x].className = getAgn[x].className.replace("default", "off");
        }
        getAgn[x].className = getAgn[x].className.replace("unclick", "");
        getAgn[x].className = getAgn[x].className.replace("click", "unclick");
      }
      if ((this.className.indexOf('unclick')) != -1) {
        for ( var x = 0; x < getAgn.length; x++) {
          getAgn[x].className = getAgn[x].className.replace("off", "default");
        }
        this.className = this.className.replace("unclick", "");
      } else {
        this.className += " click";
      }
    };
  }
};

// ---------- password info tooltip -------------------

$(document).ready(function() {

  $('input[id=pswd]').keyup(function() {
    var pswd = $(this).val();

    if (pswd.length < 8) {
      $('#length').removeClass('valid').addClass('invalid');
    } else {
      $('#length').removeClass('invalid').addClass('valid');
    }

    if (pswd.match(/[a-z]/)) {
      $('#letter').removeClass('invalid').addClass('valid');
    } else {
      $('#letter').removeClass('valid').addClass('invalid');
    }

    // validate capital letter
    if (pswd.match(/[A-Z]/)) {
      $('#capital').removeClass('invalid').addClass('valid');
    } else {
      $('#capital').removeClass('valid').addClass('invalid');
    }

    // validate number
    if (pswd.match(/\d/)) {
      $('#number').removeClass('invalid').addClass('valid');
    } else {
      $('#number').removeClass('valid').addClass('invalid');
    }

  }).focus(function() {
    $('#pswd_info').show();

    // }).keypress(function() {
    // $('#pswd_info').show();
    // $('#pswd_infoDefault').hide();

  }).blur(function() {
    $('#pswd_info').hide();

  });

});

$(document).ready(function() {

  $('input[id=repswd]').keyup(function() {
    var repswd = $(this).val();

    if (repswd.length < 8) {
      $('#length1').removeClass('valid').addClass('invalid');
    } else {
      $('#length1').removeClass('invalid').addClass('valid');
    }

    if (repswd.match(/[a-z]/)) {
      $('#letter1').removeClass('invalid').addClass('valid');
    } else {
      $('#letter1').removeClass('valid').addClass('invalid');
    }

    // validate capital letter
    if (repswd.match(/[A-Z]/)) {
      $('#capital1').removeClass('invalid').addClass('valid');
    } else {
      $('#capital1').removeClass('valid').addClass('invalid');
    }

    // validate number
    if (repswd.match(/\d/)) {
      $('#number1').removeClass('invalid').addClass('valid');
    } else {
      $('#number1').removeClass('valid').addClass('invalid');
    }

  }).focus(function() {
    $('#repswd_info').show();

    // }).keypress(function() {
    // $('#pswd_info').show();
    // $('#pswd_info_default').hide();

  }).blur(function() {
    $('#repswd_info').hide();

  });

});

// ---------- quick links box size adjuster -------------------
// originally was using height() in html version. in xhtml version we need to
// use outerHeight()
equalheight = function(container) {

  var currentTallest = 0, currentRowStart = 0, rowDivs = new Array(), $el, topPosition = 0;

  $(container).each(
      function() {
        $el = $(this);
        $($el).height('auto');
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
          for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
          }
          rowDivs.length = 0; // empty the array
          currentRowStart = topPostion;
          currentTallest = $el.outerHeight(true);
          rowDivs.push($el);
        } else {
          rowDivs.push($el);
          currentTallest = (currentTallest < $el.outerHeight(true)) ? ($el
              .outerHeight(true)) : (currentTallest);
        }

        for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
          rowDivs[currentDiv].height(currentTallest);
        }
      });

};

$(window).load(function() {
  equalheight('.quick-menu-box a');
});

$(window).resize(function() {
  equalheight('.quick-menu-box a');
});

$(window).load(function() {
  equalheight('.device_image li');
});

$(window).resize(function() {
  equalheight('.device_image li');
});

// ------------ Select box div toggle -----------
$(document).ready(function() {
  $('.box').hide();
  $('#option').show();
  $('#date_list').change(function() {
    $('.box').hide();
    $('#' + $(this).val()).show();
  });
});

$(document).ready(function() {
  $('.box').hide();
  $('#option').show();
  $('#date_list2').change(function() {
    $('.box').hide();
    $('#' + $(this).val()).show();
  });
});

function clearEmptyMessages() {
  if (document.getElementById("messages") != null) {
    errorMsgs = document.getElementById("messages").innerHTML;
    if (errorMsgs.indexOf("(Error #") == -1) {
      document.getElementById("messages").innerHTML = "";
    }
  }
};

$.fn.datepicker.dates['es'] = {
  days : [ 'domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes',
      'sábado' ],
  daysShort : [ 'dom', 'lun', 'mar', 'mié', 'juv', 'vie', 'sáb' ],
  daysMin : [ 'D', 'L', 'M', 'M', 'J', 'V', 'S' ],
  months : [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio',
      'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
  monthsShort : [ 'ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago',
      'sep', 'oct', 'nov', 'dic' ],
  today : "Hoy",
  clear : "Cerrar"
};

/**
 * @author: rrenke - call this function to show bootstrap modal window/dialog
 * parameter: id of modal window/dialog e.g. pass "cancelTpt" for <div id="cancelTpt"..><model window code></div>
 * 
 * */
function showModalDialog(dialogId) {
	jQuery("#" + dialogId).modal("show");
}

function hideModalDialog(dialogId) {
	jQuery("#" + dialogId).modal("hide");
}

$(document).ready(function() {
    // Get all textareas that have a "maxlength" property.
    $('textarea[maxlength]').each(function() {

        // Store the jQuery object to be more efficient...
        var $textarea = $(this);

        // Store the maxlength and value of the field.
        var maxlength = $textarea.attr('maxlength');
        var val = $textarea.val();

        // Trim the field if it has content over the maxlength.
        $textarea.val(val.slice(0, maxlength));

        // Bind the trimming behavior to the "keyup" event.
        $textarea.bind('keyup', function() {
            $textarea.val($textarea.val().slice(0, maxlength));
        });

    });
});

	function setLeapNativeActionRequest(action){
		sessionStorage.setItem("leapNative.actionRequest", action);
	}
	
	function setLeapNativeFieldId(fieldId){
		sessionStorage.setItem("leapNative.inputFieldId", fieldId)
	}

//------------ print  -----------
	function printContent(contentId){		
       var printContents = document.getElementById(contentId).innerHTML;
       var originalContents = document.body.innerHTML;
       document.body.innerHTML = "<html><head><title></title></head><body>" + printContents + "</body></html>";
       window.print();
       document.body.innerHTML = originalContents;  	   
	}
	
function printFunction() {
	$("#overview_tab").addClass("in");
	$("#myToggleDiv").addClass('in');
	$("#RUIFW-main-content").removeClass("noprint");
	 $("body").removeClass("modalPrint");
	 $("#printPageCreated").removeClass("noprint");
	$("#headerData").addClass("noprint");
	$("#printFooterExtraText").addClass("noprint");
	
    window.print();
	
}

function printSapReceipt() {
	$("#headerData_sap").removeClass("noprint");
	$("#printFooterExtraText").removeClass("noprint");
	 $("#transactionDetails").removeClass("noprint");
	 $("#messages").addClass("noprint");
	$("#tab-one").addClass("noprint");
	$("#tab-empty").addClass("noprint");
	$("#quickmenu_content").addClass("noprint");
	var plazaText = $("#sapTransferUI_fromAcct_bankName").text();
	$('#plaza_div_sap').text(plazaText);
    window.print();
}

function printFunctionTransactions() {
	$("#overview_tab").addClass("in");
	$("#myToggleDiv").addClass('in');
	$("#RUIFW-main-content").removeClass("noprint");
	 $("body").removeClass("modalPrint");
	 $("#printPageCreated").addClass("noprint");
	$("#headerData").removeClass("noprint");
	//$("#printFooterExtraText").removeClass("noprint");
	//$("#plaza_div").addClass("noprint");
	$("#headerData_transaction_receipt").addClass("noprint");
	
	 $("#transactionDetails").removeClass("noprint");
	$("#cmContentOnlyw1").addClass("noprint");
    window.print();
	
}

                      
					  //------------ print transaction recipt -----------
					$(document).on('click', '.print-confirmation', function(evt){ 
						
					    var printTarget = jQuery(evt.target).parent().parent().attr("class");
					    
						$("#"+printTarget+"_receiptData").removeClass("divOff");
						$("#headerData").addClass("noprint");
						   $("#RUIFW-main-content").addClass("noprint");
						   $("#transactionDetails").addClass("noprint");
						   $("#printPageCreated").addClass("noprint");
						   $("#headerData_transaction_receipt").removeClass("noprint");
						   $("#printFooterExtraText").removeClass("noprint");
						   $("body").addClass("modalPrint");
					      //  var printTarget = jQuery(evt.target).parent().parent().attr("class");
					        RUIFW.Utils.print({target: "."+printTarget }, this); // 'this' = bring back focus when modal closed. 
					        var transactionReceiptLabel = $("#transactionReceiptLabel").val();
					        //var plazaLabel = $("#plazaLabel").val();
					        var plazaText = $("#"+printTarget+"_bankName").text();
					       // var plazaDivText = plazaLabel + " : " + plazaText;
					      
					        $('#plaza_div').text(plazaText);
							     $("h4.modal-title").text(transactionReceiptLabel);
							     $("#"+printTarget+"_receiptData").addClass("divOff");
					});

  /* RUIFW-calculator */
                       
                       jQuery(document).ready(function(){
                       jQuery("#flexuiCalculator").RUIFWCalculator(); 
                                          }) ;
                       
/* Page loader */
function displayPageLoaderAjax(data) {
	switch (data.status) {
		case "begin":
			loader = jQuery(window).RUIFWLoader({className:"full-page"});
			break;
		case "complete":
            loader.done();
            break;
    }    
}

function displayPageLoader() {
	//var loader;
	loader = $(window).RUIFWLoader({className:"full-page"});
	$("*").blur();
}

function displayPageLoaderDone() {
	loader.done();
}

function verifyLocalStorageDisplayPageLoader(timeInMins) {
	
	var now  = new Date().getTime();
	var tsFromLocalStorage = localStorage.getItem("gibasc");
	
	if (tsFromLocalStorage != null){
		var diff = Math.abs(now - tsFromLocalStorage);
		
		var minutes = Math.floor(diff/1000/60);
		
		if (minutes < timeInMins){
			document.getElementById('contentForm:gibasc').value = "true" ;
		}
	
	}
	displayPageLoader();
}
function toggleContentLoaderAjax(data, divId) {
	  if (data.status == "begin") {
		  setTimeout(function(){ loader=jQuery("#" + divId).RUIFWLoader() }, 500);
	  } else if (data.status == "success") {
		  setTimeout(function(){  loader.done() }, 500);
		 // loader.done();  
	  }
}

jQuery(document).ready(function() {
	var loader;
});

function formatDollarAmountOnblurWithZeroDefault(inputString) {
	inputString = inputString.replace(/ /g, "");
	if (inputString != "")
		return formatDollarAmount(inputString);
	else
		return '';
}
function formatDollarAmount(inputString) {

	// var pattern = /^([ ]*)?(\$)?([
	// ]*)?([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(\.[0-9]*)?([ ]*)?$/;
	var pattern = /^([ ]*)?(-)?([ ]*)?(\$)?([ ]*)?(-)?([ ]*)?(([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(\.[0-9]*)?|\.[0-9]+)([ ]*)?$/;
	var result = pattern.test(inputString);
	// valid dollar input
	if (result == true) {
		inputString = inputString.replace(/\$/, "");
		inputString = inputString.replace(/^[ ]*/, "");
		inputString = inputString.replace(/[ ]*$/, "");

		var commaPos = inputString.indexOf(",");
		while (commaPos != -1) {
			inputString = inputString.replace(/[,]/, "");
			commaPos = inputString.indexOf(",");
		}

		var decimalPos = inputString.indexOf(".");
		var stringLength = inputString.length - 1;

		// no decimal place entered
		if (decimalPos == -1)
			inputString = inputString + ".00";
		// "." was entered in the last position but no decimal place entered
		// after that
		else if (decimalPos == stringLength)
			inputString = inputString + "00";
		// one decimal place was entered
		else if (decimalPos == stringLength - 1)
			inputString = inputString + "0";
		// two decimal places were entered
		else if (decimalPos == stringLength - 2) { /* do nothing */
		}
		// more than two decimal places were entered
		else if (decimalPos < stringLength - 2) {
			inputString = inputString.substring(0, decimalPos + 3);
		}

		// numbers like '.98' was entered
		if (decimalPos == 0)
			inputString = "0" + inputString;

		return inputString;
	}
	// invalid dollar input 
	else {
		return inputString;
	}
}   

	function tokenSyncPopup(data) {
		if (data.status === "success") {
			var syncAuthRequiredObj = $("input[id$='syncTokenIncludeForm:synchronizationAuthFlag']").attr('value');		
			if (syncAuthRequiredObj != null && syncAuthRequiredObj != "undefined" && syncAuthRequiredObj === 'true') {	
				$("body").append(jQuery("#syncTokenPopup"));
				$("#syncTokenPopup").modal("show");
			}
		}
	}
	
	function cancelSynchronize(data) {
		if (data === null || data.status === "success") {
			$("#syncTokenPopup").modal("hide");
		}
	}
	
	function afterTokenSync(data) {
		if (data.status === "success") {
			var syncAuthRequiredObj = $("input[id$='syncTokenIncludeForm:synchronizationAuthFlag']").attr('value');
			if (syncAuthRequiredObj != null && syncAuthRequiredObj != "undefined" && syncAuthRequiredObj === 'false') {	
				$("#syncTokenPopup").modal("hide");
			}
		}
	}

/* Bluebox
 * 
 */
	var winFeatures = "toolbar=0,scrollbars=1,resizable=1,width=840,height=400,left=20,top=20";

	//--------------------------------------------------------------------------
	// Automatic switch cursor to next egrid challenge
	//--------------------------------------------------------------------------
	function jumpToNextEGridBox(boxObj) {
		if (boxObj.value.length < 2) {
			return;
		} else {
			var boxId = boxObj.id;
			var boxIdLastLetter = boxId.substr(boxId.length - 1);
			var nextLetter;
			if (boxIdLastLetter == "A") {
				nextLetter = "B";
			} else if (boxIdLastLetter == "B") {
				nextLetter = "C";
			} else {
				return;
			}
			var temp = boxId.substr(0, boxId.length - 1);
			var nextBox = document.getElementById((boxId.substr(0, boxId.length - 1).concat(nextLetter)));
			nextBox.focus();
			return nextBox;
		}

	}


	function popupWindow(src) {
		var win = window.open('','',winFeatures);
		win.document.open();
		win.document.write("<html><head><title>Scotia OnLine Banking</title></head>");
		win.document.write("<body>");
		win.document.write("<table width='100%'><tr><td><h1>Under construction ...</h1></td></tr>");
		win.document.write("<tr><td><iframe src='"+src+"' style='height:300px;width:100%;' frameborder='0'></iframe></td></tr>");
		win.document.write("<tr><td></td></tr>");
		win.document.write("<tr><td><br><br><a href='javascript:window.close()'>Close</a></td></tr>");
		win.document.write("</table>");
		win.document.write("</body></html>");
		win.document.close();
	}

	function popupHelpWin(headerSrc, bodySrc, footerSrc) {
		var win = window.open('','',winFeatures);
		win.document.open();
		win.document.write("<html><head><title>Scotia OnLine Banking</title></head>");
		win.document.write("<frameset framespacing='0' frameborder='0' rows='66,*,40'>");
		win.document.write("<frame name='header' src='"+headerSrc+"' resize='no' scrolling='no' frameborder='no' border='0'>");
		win.document.write("<frame name='body' src='"+bodySrc+"' scrolling='auto'>");
		win.document.write("<frame name='footer' src='"+footerSrc+"' resize='no' scrolling='no' frameborder='no'>");
		win.document.write("</frameset>");
		win.document.write("</html>");
		win.document.close();
	}

	function popupWinByURL(url) {
		window.open(url,'',winFeatures);
	}

	var sWinFeatures = 'toolbar=0,scrollbars=0,resizable=1,ststus=0,menubar=0,width=840,height=540,left=20,top=20';
	function popupStatement(url, id, sid, errPage) {
		if(id == "" || sid == ""){
			return;
		}
		
		var anyPDFviewer = hasPdfPlugin();
		if(anyPDFviewer == true){
			var keys = ["jsessionid","id"];
			var values = [sid, id];
			
			var popup;
			var ieversion;
			
			if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) { //test for MSIE x.x;
				ieversion=new Number(RegExp.$1) // capture x.x portion and store as a number
			}
			
			if(ieversion && ieversion >= 6 && ieversion < 7) {
				keys = ["jsessionid","id","toolbar","navpanes"];
				values = [sid, id, 1, 0];
				
				// use GET for IE 6
				popup = openPopupWithGet(url, 'Statement', sWinFeatures, keys, values);
			}
			else {

				// use POST for all other browsers
				popup = openPopupWithPost(url + '#toolbar=1&navpanes=0', 'Statement', sWinFeatures, keys, values);
			}

			if(popup){
				popup.focus();
			}		
		}else{
			var popup = window.open(errPage, 'Error', sWinFeatures);
			popup.focus();
		}					
	}

	function openPopupWithGet(url, name, feature, keys, values){
		if (keys && values && (keys.length == values.length)){
			var queryString = "?"
			for (var i=0; i < keys.length; i++){
				queryString += keys[i] + '=' + values[i];
				if (i < keys.length - 1){
				 queryString += '&';
				}
			}
			url += queryString;
		}
		return window.open(url, name, feature);
	}

	function openPopupWithPost(url, name, feature, keys, values){
		
		var newPopup = window.open("", "", feature); 

		var html = "";
		html += "<html><head></head><body><form id='statement' method='post' action='" + url + "'>";
		if (keys && values && (keys.length == values.length)){
			for (var i=0; i < keys.length; i++){
				html += "<input type='hidden' name='" + keys[i] + "' value='" + values[i] + "'/>";
			}			
		}
		
		html += "</form><script type='text/javascript'>document.getElementById(\"statement\").submit()</script></body></html>";
		
		newPopup.document.write(html);
		return newPopup;
	}

	function showMessageInObj(msgObjID, msg)
	{
		var msgObj = getObj(msgObjID);
		if (msgObj)
		{
			if (!msg
				&& msgObj.generated
				&& msgObj.parentNode)
				msgObj.parentNode.removeChild(msgObj);
			else if (msgObj.value != undefined)
				msgObj.value = msg;
			else if (msgObj.data != undefined)
				msgObj.data = msg;
			else
			{
				while (msgObj.childNodes && msgObj.childNodes.length > 0)
					msgObj.removeChild(msgObj.lastChild);
				var msgs = msg.replace(/\s+$/, '').split(/\n/);
				for (var i = 0; i < msgs.length; i++)
				{
					if (i > 0)
						msgObj.appendChild(document.createElement('br'));
					var aLine = document.createElement('span');
					aLine.innerHTML = msgs[i];
					msgObj.appendChild(aLine);
				}
			}
			if (msg && msgObj.generated)
			{
				msgObj.style.width = '';
				if (msgObj.offsetWidth > msgObj.savedOffsetWidth)
					msgObj.style.width = msgObj.savedOffsetWidth + 'px';
			}
		}
		else if (msg != '')
			alert(msg);
	}

	var cWinFeatures = 'width=840,height=540,resizable=1,scrollbars=1,toolbar=0,location=0,status=0,menubar=0,left=20,top=20';
	function showChequeImageDetailPage(url)
	{
		popup = window.open(url, 'Cheque', cWinFeatures);
		if (window.focus) {popup.focus()}
		return false;
	}

	function htmlDecode(input){
		var e = document.createElement('div');
		e.innerHTML = input;
		var decoded = e.childNodes[0].nodeValue;
		return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
	}
	//This fix added to fix fortify scan cross site scripting issues.
	function escapeHtml(str) {
	    var div = document.createElement('div');
	    div.appendChild(document.createTextNode(str));
	    return div.innerHTML;
	}
	
	function getObj(b){
		if (!b){
			return null
		}
		
		if(typeof(b)=="string"){
			return document.getElementById(b)
		}
		
		var a=b;
		if(isArray(a) && a.length>0){
			return a[0]
		}
		
		return a
	}
	
	function formatDollarAmountOnblurWithZeroDefault13Digits(inputString) {
		console.log("fdgs"+inputString);	
		
			inputString = inputString.replace(/ /g, "");
	if (inputString != "")
		return formatDollarAmount13Digits(inputString);
	else
		return '';
}
   function formatDollarAmount13Digits(inputString) {
			
	// var pattern = /^([ ]*)?(\$)?([
	// ]*)?([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(\.[0-9]*)?([ ]*)?$/;
	var pattern = /^([ ]*)?(-)?([ ]*)?(\$)?([ ]*)?(-)?([ ]*)?(([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(\.[0-9]*)?|\.[0-9]+)([ ]*)?$/;
	var result = pattern.test(inputString);
	// valid dollar input
	if (result == true) {
		inputString = inputString.replace(/\$/, "");
		inputString = inputString.replace(/^[ ]*/, "");
		inputString = inputString.replace(/[ ]*$/, "");

		var commaPos = inputString.indexOf(",");
		while (commaPos != -1) {
			inputString = inputString.replace(/[,]/, "");
			commaPos = inputString.indexOf(",");
		}

		var decimalPos = inputString.indexOf(".");
		var stringLength = inputString.length - 1;

		// no decimal place entered
		if (decimalPos == -1 && stringLength == 10)
		inputString = inputString + ".0";
	
		else if(decimalPos == -1 && stringLength == 11){
		}
		else if(decimalPos == -1 && stringLength == 12){
		}
		else if(decimalPos == -1 && stringLength < 10){
			inputString = inputString + ".00";
		}
		// "." was entered in the last position but no decimal place entered
		// after that
		else if (decimalPos == stringLength && stringLength < 11)
			inputString = inputString + "00";
		else if (decimalPos == stringLength && stringLength == 11)
			inputString = inputString + "0";			
		else if (decimalPos == stringLength && stringLength == 12)
			inputString = inputString.replace (".","")	;		
		
		// one decimal place was entered
		
		else if (decimalPos == stringLength - 1 && stringLength < 13){
		inputString = inputString + "0";
		}
		// two decimal places were entered
		else if (decimalPos == stringLength - 2) { /* do nothing */
		}
		// more than two decimal places were entered
		else if (decimalPos < stringLength - 2) {
			inputString = inputString.substring(0, decimalPos + 3);
		}
		// numbers like '.98' was entered
		if (decimalPos == 0)
			inputString = "0" + inputString;

		return inputString;
	}
	// invalid dollar input 
	else {
		return inputString;
	}
}
	
	$(document).ready(function() {	
		function autoPlayYouTubeModal() {
			var trigger = $("body").find('[data-toggle="modal"]');
			trigger.click(function () {
				var theModal = $(this).data("target"),
	              	videoSRC = $(this).attr("data-theVideo"),
	              	videoSRCauto = videoSRC + "?autoplay=1";
				$(theModal + ' iframe').attr('src', videoSRCauto);
				$(theModal + ' button').click(function () {
					$(theModal + ' iframe').attr('src', videoSRC);
				});
			});
		}
	});
	
	function initPopoverUnFocusListener(){
		$('html').on('click', function(e) {
	          if (typeof $(e.target).data('original-title') == 'undefined' && !$(e.target).parents().is('.popover.in')) {
	              $('.popover').remove();
	          }
       });
	}
	
	
	$(document).ready(function() {
		if( !$.trim( $('div[id^= "cmContentOnlyMenu_payment"]').html() ).length ) {
			$("#menuItems_payment").addClass('no-banner');
		}
		if( !$.trim( $('div[id^= "cmContentOnlyMenu_transfer"]').html() ).length ) {
			$("#menuItems_transfer").addClass('no-banner');
		}
		if( !$.trim( $('div[id^= "cmContentOnlyMenu_investMenu"]').html() ).length ) {
			$("#menuItems_investMenu").addClass('no-banner');
		}
		if( !$.trim( $('div[id^= "cmContentOnlyMenu_topUpMenu"]').html() ).length ) {
			$("#menuItems_topUpMenu").addClass('no-banner');
		}
		if( !$.trim( $('div[id^= "cmContentOnlySettings"]').html() ).length ) {
			$("#menuItems_settings").addClass('no-banner');
		}
		if( !$.trim( $('div[id^= "cmContentOnlyHelp"]').html() ).length ) {
			$("#menuItems_Help").addClass('no-banner');
		} 
		
	});
	
	//Setup the eVar21, prop21 variables data when transaction links are clicked.
	function setLinkAnalyticsData(env, eVarProp, linkName) {
		var s=s_gi(s_account); 
		s.linkTrackVars='eVar21,prop21';
		var evp21;
		var link;
		
		if(env == 'scotiabankleapprod'){
			evp21 = 'LP:' + eVarProp;
			link = 'LP:' + linkName;
		}else if(env == 'scotiabankleappreprod'){
			evp21 = 'Lp:' + eVarProp;
			link = 'Lp:' + linkName;
		}else if(env == 'scotiabankleapuat'){
			evp21 = 'LU:' + eVarProp;
			link = 'LU:' + linkName;
		}else if(env == 'scotiabankleapdev'){
			evp21 = 'LD:' + eVarProp;
			link = 'LD:' + linkName;
		}
		
		s.eVar21=evp21;
		s.prop21=evp21; 
		s.tl(this, 'o', link);
	}
	function captureReportingBasicTrafficAdobe(pageName,pageURL,event){
		if(analyticsEnabled === true ){
			//alert("captureReportingBasicTrafficAdobe");
			s.pageName= pageName;
			s.eVar71='D=pageName';
			s.prop72=pageURL;
			s.eVar72='D=prop72';
			s.events=event;
			if(s.events == "null")
	  			s.events = undefined	
	  		if(pageName == "null"){
	  			s.eVar71 = undefined;
	   		}
			if(s.prop72 == "null"){
				s.prop72 = undefined;
	         	s.eVar72 = undefined;
	      	}
			var s_code=s.t();
		}
		//if(s_code)document.write(s_code);
		
	}
	
	function captureInterceptAdobe(interceptType,interceptName,interceptStep,event){
		if(analyticsEnabled === true ){
			//alert("captureInterceptAdobe");
			s.eVar69 =interceptType;
			s.prop69='D=eVar69';
			s.eVar70 =interceptName;
			s.prop70='D=eVar70';
			s.eVar74=interceptStep + ": "+interceptName;
			s.prop74='D=eVar74';
			s.events=event;		
			if(s.events == "null")
	  			s.events = undefined	
	  		if(s.eVar69 == "null"){
	      		s.eVar69 = undefined;
	      		s.prop69 = undefined;
	  		}
			if(s.eVar70 == "null"){
	         	s.eVar70 = undefined;
	         	s.prop74 = undefined;
	      	}
	      	if(s.eVar74 == "null"){
	         	s.eVar74 = undefined;
	         	s.prop70 = undefined;
	      	}
	      		
			var s_code=s.t();
		}
		//if(s_code)document.write(s_code);
	}
	
	function interceptLinkAnalyticsData(interceptName, linkName,linkType,eventName) {
		//alert("interceptLinkAnalyticsData");
		if(analyticsEnabled === true ){
			var s=s_gi(s_account); 
			s.linkTrackVars='eVar21,prop21,events';
			//alert(eventName);
			s.linkTrackEvents=eventName;
			s.eVar21= linkName+": "+interceptName;
			s.prop21='D=eVar21';
			s.events=eventName;
			s.tl(this, 'o', linkType);
		}
		//if(s_code)document.write(s_code);
	}
	
	//Handles click event on the Transfer between accounts link from Menu
	$(document).on('click', '#transferBetweenOwnAcct a', function (e) {
		setLinkAnalyticsData(localStorage.getItem('analyticsEnv'), 'MX:D:Transfer between accounts:Menu', 'MX:D:Monetary Transactions');
	    e.preventDefault();
	});
	
	//Handles click event on the Transfer to Others link from Menu
	$(document).on('click', '#transfer_to_others a', function (e) {
		setLinkAnalyticsData(localStorage.getItem('analyticsEnv'), 'MX:D:Transfer to Others:Menu', 'MX:D:Monetary Transactions');
	    e.preventDefault();
	});
	
	//Handles click event on the Pay a Bill link from Menu
	$(document).on('click', '#add a', function (e) {
		if(e.srcElement.innerText == 'Pay a Bill')
		setLinkAnalyticsData(localStorage.getItem('analyticsEnv'), 'MX:D:Pay a Bill:Menu', 'MX:D:Monetary Transactions');
	    e.preventDefault();
	});
	
	//This function manages the clicks for WebAnalytics Custom links of Dropdown on each accounts in Accounts Summary page.
	$(document).on('click', '.quick-menu.dropdown.open a', function (e) {
		if(e.srcElement.innerText == 'Transfer Between Accounts')
			setLinkAnalyticsData(localStorage.getItem('analyticsEnv'), 'MX:D:Transfer between accounts:Dropdown', 'MX:D:Monetary Transactions');
		else if(e.srcElement.innerText == 'Transfer to Others')
			setLinkAnalyticsData(localStorage.getItem('analyticsEnv'), 'MX:D:Transfer to Others:Dropdown', 'MX:D:Monetary Transactions');
		else if(e.srcElement.innerText == 'Pay a Bill')
			setLinkAnalyticsData(localStorage.getItem('analyticsEnv'), 'MX:D:Pay a Bill:Dropdown', 'MX:D:Monetary Transactions');
		
	    e.preventDefault();
	});
