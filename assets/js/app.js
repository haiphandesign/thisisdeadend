// ONSCROLL

jQuery(function () {
    //caches a jQuery object containing the header element
    var header = jQuery(".de-header");
    jQuery(".de-wrapper").scroll(function () {
        var scroll = jQuery(".de-wrapper").scrollTop();

        setTimeout(function () {
            if (scroll >= 10) {
                header.removeClass('is-top').addClass("is-scroll");
            } else {
                header.removeClass("is-scroll").addClass('is-top');
            }
        }, 200);
    });
});

// ONRESIZE

window.onresize = function () {
    bodyMinHeight();
}

// MAIN MIN-HEIGHT

jQuery(window).on('load', function () {
    setTimeout(function () {
        bodyMinHeight()
    }, 500);
});

function bodyMinHeight() {
    wrapperHeight = jQuery('.de-wrapper').outerHeight();
    headerHeight = jQuery('.de-header').outerHeight(true);
    footerHeight = jQuery('.de-footer').outerHeight(true);

    var mainMinHeight = `calc(${wrapperHeight}px - ${headerHeight}px - ${footerHeight}px - 2px)`;

    // if (window.innerWidth < 1025) {
    //     var mainMinHeight = `calc(100% - 3rem - ${headerHeight}px - ${footerHeight}px - 6px)`;
    // } else {
    //     var mainMinHeight = `calc(100% - ${headerHeight}px - ${footerHeight}px)`;
    // }

    jQuery('.de-body').css('min-height', mainMinHeight);
}


const toggleClass = (el, className) => el.classList.toggle(className);

document.querySelector('.de-navbar-menu-toggle').addEventListener('click', function () {
    toggleClass(document.querySelector('.de-navbar-menu-toggle'), 'is-active');
})