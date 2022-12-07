        
$( document ).ready(function() {
$.fn.isVisible = function() {
    // Am I visible?
    // Height and Width are not explicitly necessary in visibility detection, the bottom, right, top and left are the
    // essential checks. If an image is 0x0, it is technically not visible, so it should not be marked as such.
    // That is why either width or height have to be &gt; 0.
    var rect = this[0].getBoundingClientRect();
    return (
        (rect.height > 0 || rect.width > 0) &&
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

function doCheck() {
    var elementToDetect = $('#skills');
    if (elementToDetect.isVisible()) {
        jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
            width:jQuery(this).attr('data-percent')
        },6000);
    });
    } else {
      
    }   
}

$(document)
    .ready(function(e){
        doCheck();
    });

$(window)
    .scroll(function(e){
        doCheck();    
    });

});

