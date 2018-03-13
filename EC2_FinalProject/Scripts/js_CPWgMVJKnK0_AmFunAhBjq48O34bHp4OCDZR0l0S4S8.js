/**
 * @file
 * Apply Bootstrap Carousel plugin.
 */

 (function ($) {
  
  $(document).ready(function(){
    
    // Defining "player" as a global variable - is an array of elements videos
    player = {};
    
    applyCarousel();
    applyYouTubePlayer();
    

  });
  
  function pauseCarouselMouseOverIframe(){
    
    $('.carousel .item.active, .carousel iframe.ytplayer').mouseover(function() {
      $('.carousel').carousel('pause');
    }).mouseout(function() {
      var idVideo = $('.carousel .item.active iframe.ytplayer').attr('id');
      
      if (typeof(idVideo) != 'undefined') {
        var stateVideo = getStatePlayer(idVideo);
        if (stateVideo != 1) {
          $('.carousel').carousel('cycle');
        }
      }
      else {
        $('.carousel').carousel('cycle');
      }
      
    });
    
  }
  
  function applyYouTubePlayer() {
    if (typeof(YT) != 'undefined' && typeof(YT.Player) != 'undefined') {
      youTubeEmbeddedPlayer();
    } 
    else {
      window.onYouTubeIframeAPIReady = function() {
        youTubeEmbeddedPlayer();
      };
    }
    
  }
    
  function youTubeEmbeddedPlayer(){
    
    $('div.video-container div.ytplayer').each(function() {
    
      var idElememt = $(this).attr('id');
      var idVideo = $(this).data('videoid');
      
      // Replace the 'ytplayer+idElement' element with an <iframe> and
      // YouTube player after the API code downloads.
      player[idElememt] = new YT.Player(idElememt, {
        height: '315',
        width: '560',
        videoId: idVideo,
        events: {
          'onReady': onPlayerReady
        },
        playerVars: {
          wmode: "opaque"
        }
      });

    });
    
    pauseCarouselMouseOverIframe();
    
  }
  
  function onPlayerReady(event) {
    event.target.addEventListener('onStateChange', onPlayerStateChange);    
  }
    
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        $('.carousel').carousel('pause');
    }
  }
  
  function applyCarousel(){
    
    $('.carousel').carousel({
      interval: Drupal.settings.bootstrap_carousel.interval,
      pause: Drupal.settings.bootstrap_carousel.pause
    }).on('slide', function(event) {
      // if exist video player in current item
      var idItemCurrent = $(this).parent().find("div.item.active iframe.ytplayer").attr('id');
      
      if (typeof(idItemCurrent) != 'undefined') {
        // pause video
        pauseVideoWhenChangeSlide(idItemCurrent);
        // hide video
        $("#"+idItemCurrent).css("display", "none");
      }
    }).on('slid', function(event) {
      // if exist video player in next item
      var idItemDisabled = $(this).parent().find("div.item.active iframe.ytplayer").attr('id');
      
      if (typeof(idItemDisabled) != 'undefined') {
        //display video
        $("#"+idItemDisabled).css("display", "block");
      }
    });
        
  }
  
  
  function pauseVideoWhenChangeSlide(idItemCurrent) {
        
    var stateVideo = getStatePlayer(idItemCurrent);
        
    // If stateVideo == Playing then Pause Video
    if (stateVideo == 1) {
       var videoCurrent = player[idItemCurrent];
       videoCurrent.pauseVideo();
    }
    
  }
  
  function getStatePlayer(idElement) {
    
    var video = player[idElement];
    /**
     * getPlayerState(): Numeric
     * Returns the state of the player. Possible values:
     *   unstarted (-1), 
     *   ended (0), 
     *   playing (1), 
     *   paused (2), 
     *   buffering (3), 
     *   video cued (5).
     **/
    if (undefined !== video.getPlayerState) {
      return video.getPlayerState();
    }
    
  }
  
})(jQuery);
;
(function ($) {

Drupal.googleanalytics = {};

$(document).ready(function() {

  // Attach mousedown, keyup, touchstart events to document only and catch
  // clicks on all elements.
  $(document.body).bind("mousedown keyup touchstart", function(event) {

    // Catch the closest surrounding link of a clicked element.
    $(event.target).closest("a,area").each(function() {

      // Is the clicked URL internal?
      if (Drupal.googleanalytics.isInternal(this.href)) {
        // Skip 'click' tracking, if custom tracking events are bound.
        if ($(this).is('.colorbox') && (Drupal.settings.googleanalytics.trackColorbox)) {
          // Do nothing here. The custom event will handle all tracking.
          //console.info("Click on .colorbox item has been detected.");
        }
        // Is download tracking activated and the file extension configured for download tracking?
        else if (Drupal.settings.googleanalytics.trackDownload && Drupal.googleanalytics.isDownload(this.href)) {
          // Download link clicked.
          ga("send", {
            "hitType": "event",
            "eventCategory": "Downloads",
            "eventAction": Drupal.googleanalytics.getDownloadExtension(this.href).toUpperCase(),
            "eventLabel": Drupal.googleanalytics.getPageUrl(this.href),
            "transport": "beacon"
          });
        }
        else if (Drupal.googleanalytics.isInternalSpecial(this.href)) {
          // Keep the internal URL for Google Analytics website overlay intact.
          ga("send", {
            "hitType": "pageview",
            "page": Drupal.googleanalytics.getPageUrl(this.href),
            "transport": "beacon"
          });
        }
      }
      else {
        if (Drupal.settings.googleanalytics.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
          // Mailto link clicked.
          ga("send", {
            "hitType": "event",
            "eventCategory": "Mails",
            "eventAction": "Click",
            "eventLabel": this.href.substring(7),
            "transport": "beacon"
          });
        }
        else if (Drupal.settings.googleanalytics.trackOutbound && this.href.match(/^\w+:\/\//i)) {
          if (Drupal.settings.googleanalytics.trackDomainMode !== 2 || (Drupal.settings.googleanalytics.trackDomainMode === 2 && !Drupal.googleanalytics.isCrossDomain(this.hostname, Drupal.settings.googleanalytics.trackCrossDomains))) {
            // External link clicked / No top-level cross domain clicked.
            ga("send", {
              "hitType": "event",
              "eventCategory": "Outbound links",
              "eventAction": "Click",
              "eventLabel": this.href,
              "transport": "beacon"
            });
          }
        }
      }
    });
  });

  // Track hash changes as unique pageviews, if this option has been enabled.
  if (Drupal.settings.googleanalytics.trackUrlFragments) {
    window.onhashchange = function() {
      ga("send", {
        "hitType": "pageview",
        "page": location.pathname + location.search + location.hash
      });
    };
  }

  // Colorbox: This event triggers when the transition has completed and the
  // newly loaded content has been revealed.
  if (Drupal.settings.googleanalytics.trackColorbox) {
    $(document).bind("cbox_complete", function () {
      var href = $.colorbox.element().attr("href");
      if (href) {
        ga("send", {
          "hitType": "pageview",
          "page": Drupal.googleanalytics.getPageUrl(href)
        });
      }
    });
  }

});

/**
 * Check whether the hostname is part of the cross domains or not.
 *
 * @param string hostname
 *   The hostname of the clicked URL.
 * @param array crossDomains
 *   All cross domain hostnames as JS array.
 *
 * @return boolean
 */
Drupal.googleanalytics.isCrossDomain = function (hostname, crossDomains) {
  /**
   * jQuery < 1.6.3 bug: $.inArray crushes IE6 and Chrome if second argument is
   * `null` or `undefined`, http://bugs.jquery.com/ticket/10076,
   * https://github.com/jquery/jquery/commit/a839af034db2bd934e4d4fa6758a3fed8de74174
   *
   * @todo: Remove/Refactor in D8
   */
  if (!crossDomains) {
    return false;
  }
  else {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  }
};

/**
 * Check whether this is a download URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isDownload = function (url) {
  var isDownload = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  return isDownload.test(url);
};

/**
 * Check whether this is an absolute internal URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternal = function (url) {
  var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return isInternal.test(url);
};

/**
 * Check whether this is a special URL or not.
 *
 * URL types:
 *  - gotwo.module /go/* links.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternalSpecial = function (url) {
  var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
  return isInternalSpecial.test(url);
};

/**
 * Extract the relative internal URL from an absolute internal URL.
 *
 * Examples:
 * - http://mydomain.com/node/1 -> /node/1
 * - http://example.com/foo/bar -> http://example.com/foo/bar
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   Internal website URL
 */
Drupal.googleanalytics.getPageUrl = function (url) {
  var extractInternalUrl = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return url.replace(extractInternalUrl, '');
};

/**
 * Extract the download file extension from the URL.
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   The file extension of the passed url. e.g. "zip", "txt"
 */
Drupal.googleanalytics.getDownloadExtension = function (url) {
  var extractDownloadextension = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  var extension = extractDownloadextension.exec(url);
  return (extension === null) ? '' : extension[1];
};

})(jQuery);
;
