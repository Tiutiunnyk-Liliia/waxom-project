$(function () {

    $('.header-slider').slick({
        dots: true,
        prevArrow: '<button class="header-slider__arrows header-slider__arrows-prev">\n' +
            '                <?xml version="1.0"?>\n' +
            '                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"' +
            ' version="1.1" id="arrow-p" x="0px" y="0px" viewBox="0 0 490.787 490.787" style="enable-background:new 0' +
            ' 0 490.787 490.787;" xml:space="preserve"  class="hovered-paths"><g><path style="fill:#E3E9ED" d="M362.671,490.787c-2.831,0.005-5.548-1.115-7.552-3.115L120.452,253.006  c-4.164-4.165-4.164-10.917,0-15.083L355.119,3.256c4.093-4.237,10.845-4.354,15.083-0.262c4.237,4.093,4.354,10.845,0.262,15.083  c-0.086,0.089-0.173,0.176-0.262,0.262L143.087,245.454l227.136,227.115c4.171,4.16,4.179,10.914,0.019,15.085  C368.236,489.664,365.511,490.792,362.671,490.787z" data-original="#F44336" class="hovered-path active-path" data-old_color="#F44336"/><path d="M362.671,490.787c-2.831,0.005-5.548-1.115-7.552-3.115L120.452,253.006c-4.164-4.165-4.164-10.917,0-15.083L355.119,3.256  c4.093-4.237,10.845-4.354,15.083-0.262c4.237,4.093,4.354,10.845,0.262,15.083c-0.086,0.089-0.173,0.176-0.262,0.262  L143.087,245.454l227.136,227.115c4.171,4.16,4.179,10.914,0.019,15.085C368.236,489.664,365.511,490.792,362.671,490.787z" data-original="#000000" class="" data-old_color="#000000" style="fill:#E3E9ED"/></g> </svg>\n' +
            '            </button>',
        nextArrow: '<button class="header-slider__arrows header-slider__arrows-next">\n' +
            '                <?xml version="1.0"?>\n' +
            '                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"' +
            ' version="1.1" id="arrow-n" x="0px" y="0px" viewBox="0 0 490.8 490.8" style="enable-background:new 0 0' +
            ' 490.8 490.8;" xml:space="preserve" ><g><path style="fill:#E3E9ED" d="M135.685,3.128c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82  l227.115,227.136L120.581,472.461c-4.237,4.093-4.354,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262  c0.089-0.086,0.176-0.173,0.262-0.262l234.667-234.667c4.164-4.165,4.164-10.917,0-15.083L135.685,3.128z" data-original="#F44336" class="active-path" data-old_color="#F44336"/><path d="M128.133,490.68c-5.891,0.011-10.675-4.757-10.686-10.648c-0.005-2.84,1.123-5.565,3.134-7.571l227.136-227.115  L120.581,18.232c-4.171-4.171-4.171-10.933,0-15.104c4.171-4.171,10.933-4.171,15.104,0l234.667,234.667  c4.164,4.165,4.164,10.917,0,15.083L135.685,487.544C133.685,489.551,130.967,490.68,128.133,490.68z" data-original="#000000" class="" style="fill:#E3E9ED" data-old_color="#000000"/></g> </svg>\n' +
            '            </button>'
    });

    $('.realisation-slider').slick({
        arrows: false,
        slidesToShow: 1,
        centerMode: true,
    });


    $('.tab').on('click', function (e) {
        e.preventDefault();
        $($(this).siblings()).removeClass('tab--active');
        $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');

    });


});

