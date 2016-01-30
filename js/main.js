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



/* Tabs */

$(function () {
    var tabContainers = $('div.tabs > div'); // получаем массив контейнеров
    tabContainers.hide().filter(':first').show(); // прячем все, кроме первого
    // далее обрабатывается клик по вкладке
    $('div.tabs ul.tabNavigation a').click(function () {
        tabContainers.hide(); // прячем все табы
        tabContainers.filter(this.hash).show(400); // показываем содержимое текущего
        $('div.tabs ul.tabNavigation a').removeClass('selected'); // у всех убираем класс 'selected'
        $(this).addClass('selected'); // текушей вкладке добавляем класс 'selected'
        return false;
    }).filter(':first').click();
});



