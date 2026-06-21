$(document).ready(function () {

    // 1. تنظیم اولیه اسلایدرها (بدون تعریف arrow در اینجا)
    $('.gallerySlider').slick({
        slidesToShow: 3.5,
        slidesToScroll: 1,
        infinite: false,
        arrows: false, // دکمه‌های پیش‌فرض خود اسلیک را غیرفعال میکنیم
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 2.5 } },
            { breakpoint: 576, settings: { slidesToShow: 1.2 } }
        ]
    });

    // 2. مدیریت دکمه‌های بالا: کلیک روی دکمه‌ها به اسلایدرِ "تب فعال" دستور بدهد
    $('.galleryPrev').click(function () {
        // پیدا کردن اسلایدر داخل تبی که الان کلاس active دارد
        $('.tab-pane.active .gallerySlider').slick('slickPrev');
    });

    $('.galleryNext').click(function () {
        $('.tab-pane.active .gallerySlider').slick('slickNext');
    });

    // 3. حل مشکل لود شدن در تب‌های بوت‌استرپ
    $('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
        var targetId = $(this).data('bs-target');
        $(targetId).find('.gallerySlider').slick('setPosition');
    });
});
$(document).ready(function () {

    // 1. تنظیم اولیه اسلایدرها (بدون تعریف arrow در اینجا)
    $('.testimonialSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true,
        speed: 300
    });
});


$(document).ready(function () {
    $('.my-select-2').select2({
        // placeholder: "Select an option",
        // allowClear: true,
        // اگر می‌خواهی باکس جستجو حذف شود:
        // minimumResultsForSearch: Infinity 
    });
});

$(document).ready(function () {
    AOS.init({
        duration: 1000,
    });
});
