/* Accordion */

function openFirstPanel(){
    $('.accordion > dt:first-child').next().addClass('active').slideDown(500);
}

(function($) {

    var allPanels = $('.accordion > dd').hide();

    openFirstPanel();

    $('.accordion > dt > a').click(function() {
        $this = $(this);
        $target =  $this.parent().next();


        if($target.hasClass('active')){
            $target.removeClass('active').slideUp(500);
        }else{
            allPanels.removeClass('active').slideUp(500);
            $target.addClass('active').slideDown(500);
        }

        return false;
    });

})(jQuery);



/* Popup */

$(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(500);

        e.preventDefault();
    });

    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(500);

        e.preventDefault();
    });

});



/* Tabs */

$(function () {
    var tabContainers = $('div.tabs > div');
    tabContainers.hide().filter(':first').show();

    $('div.tabs ul.tabNavigation a').click(function () {
        tabContainers.hide();
        tabContainers.filter(this.hash).show(400);
        $('div.tabs ul.tabNavigation a').removeClass('selected');
        $(this).addClass('selected');
        return false;
    }).filter(':first').click();
});


/* slider */

$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide",
        controlsContainer: $(".custom-controls-container"),
        customDirectionNav: $(".custom-navigation a")
    });
});



