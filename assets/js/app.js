// ONRESIZE

window.onresize = function () {
    bodyMinHeight();
    deadendHeaderFooter();
}

// ONRESIZE

window.onload = function () {
    setTimeout(function () {
        bodyMinHeight();
    }, 500);
    deadendHeaderFooter();

    lax.setup({
        breakpoints: {
            xs: 0,
            sm: 768,
            md: 1024
        }
    }) // init

    const updateLax = () => {
        lax.update(window.scrollY)
        window.requestAnimationFrame(updateLax)
    }

    window.requestAnimationFrame(updateLax)
}

window.onscroll = function () {
    deadendHeaderFooter();
}


// DEADEND HEADER & FOOTER

function deadendHeaderFooter() {
    jQuery(window).scroll(function () {
        setTimeout(function () {
            // FROM TOP
            if (jQuery(window).scrollTop() >= 10) {
                jQuery(".de-header").removeClass('is-top').addClass("is-scroll");
            } else {
                jQuery(".de-header").removeClass("is-scroll").addClass('is-top');
            }
            // TO BOTTOM
            if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
                jQuery(".de-footer").removeClass("is-scroll").addClass('is-bottom');
            } else {
                jQuery(".de-footer").removeClass('is-bottom').addClass("is-scroll");
            }
        }, 500);
    });
}


// MAIN MIN-HEIGHT

function bodyMinHeight() {
    wrapperHeight = jQuery('.de-wrapper').outerHeight();
    headerHeight = jQuery('.de-header').outerHeight(true);
    footerHeight = jQuery('.de-footer').outerHeight(true);
    subfooterHeight = jQuery('.de-subfooter').outerHeight(true);

    var mainMinHeight = `calc(${wrapperHeight}px - ${headerHeight}px - ${footerHeight}px - ${subfooterHeight}px - 2px)`;

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