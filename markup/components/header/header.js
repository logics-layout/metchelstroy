var inputToggle = $('.mobile-list-anim__input');
$(document).click(function(e) {
    var target = $(e.target);

    if(target.is(inputToggle)){
        inputToggle.not(target).each(function () {
            this.checked = false;
        });
        inputToggle.each(function(){
            var _this = $(this),
                id = _this.attr('id'),
                block = $('[data-for="'+id+'"]'),
                checked = target.is(_this) && this.checked,
                fn = '',
                arg = '';

            fn = 'slideUp';
            arg = 300;
            if(checked) {
                fn = 'slideDown';
            }

            if(checked){
                block.on('mousewheel.chosen DOMMouseScroll.chosen', function(evt) {
                    search_results_mousewheel(evt, block);
                });
            }else{
                block.off('mousewheel.chosen DOMMouseScroll.chosen');

            }

            block[fn](arg);
        });
    }
});

function offsetTopHeaderBottom(){
    return $('.header-bottom').offset().top;
}

var header = $('.header');
window.offsetTopH = offsetTopHeaderBottom();

function fixHeader(bool) {
    if(bool !== false && $(window).scrollTop() >= offsetTopH){
        header.addClass('fix');
    }else{
        header.removeClass('fix');
    }
}