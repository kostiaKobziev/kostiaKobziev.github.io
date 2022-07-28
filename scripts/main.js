var background_h = $('#services_section').height();
$('#services_section').attr('style', 'height: ' + background_h + 'px !important;  transition:0.3s;');
$(document).on('click', '.services_block', function () {
    if ($(this).hasClass('active')) { } else {
        $('.services_block').attr('style', '');
        $('.services_block').removeClass('active')
        $('.services_block .services_block_p').attr('style', '');
        $('.col-md-3').attr('style', '');
        $('.col-md-4').attr('style', '');


        $(this).addClass('active');
        var h = $(this).find('p').height();
        h_p = h + 40;
        h_pp = h / 2;


        $(this).attr('style', 'height: ' + h_p + 'px ;  transition:0.3s;');
        $(this).find('.services_block_p').attr('style', 'height: ' + h + 'px ;  transition:0.3s;');
        $(this).find('.col-md-4').attr('style', 'height: ' + h + 'px ;  transition:0.3s;');
        $(this).find('.col-md-3').attr('style', 'height: ' + h + 'px ;  transition:0.3s;');
        $(this).find('.col-md-3').attr('style', 'height: ' + h + 'px ;  transition:0.3s;');

    }
})

var reviews_count = $('.reviews_block').length;
if (reviews_count != 1 && reviews_count != 0) {
    $('.reviews_container').slick({
        arrows: true,
    });
} else {
    $('.review_control').remove();
}

$(document).on('click', '.review_control', function () {
    $('#reviews button.slick-next.slick-arrow').trigger('click');
})

$(document).on('click', '.button_show_hide_header', function () {
    $('.button_show_hide_header').toggleClass('active');
    $('.hide_header').toggleClass('active');
    $('.show_header').toggleClass('active');

})

$(".hide_header").on("click", "a", function (event) {
    event.preventDefault();
    $('.button_show_hide_header').removeClass('active');
    $('.hide_header').removeClass('active');
    $('.show_header').removeClass('active');
    var id = $(this).attr('href'),
        top = $(id).offset().top - 80;
    $('body,html').animate({ scrollTop: top }, 1500);
});

$('#form select').select2();
$('.services_block:nth-child(1)').trigger('click');