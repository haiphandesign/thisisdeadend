var headerHeight;
var footerHeight;

jQuery(window).on('load', function () {
    headerHeight = jQuery('.de-header').outerHeight(true);
    footerHeight = jQuery('.de-footer').outerHeight(true);

    var mainMinHeight = `calc(100% - ${headerHeight}px - ${footerHeight}px)`;

    // if (window.innerWidth < 1025) {
    //     var mainMinHeight = `calc(100% - 3rem - ${headerHeight}px - ${footerHeight}px - 6px)`;
    // } else {
    //     var mainMinHeight = `calc(100% - ${headerHeight}px - ${footerHeight}px)`;
    // }

    jQuery('.de-body').css('min-height', mainMinHeight);
});