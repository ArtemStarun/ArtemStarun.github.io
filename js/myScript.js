"use strict";

window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

let btn = document.getElementById("needOut");

btn.addEventListener('click', () => {
    let select1 = +document.getElementById("type_1").value;
    let select1Data;

    if ((select1 == 100)) {
        select1Data = 2
    } else if ((select1 == 200)) {
        select1Data = 4
    } else if ((select1 == 300)) {
        select1Data = 6
    } else if ((select1 == 400)) {
        select1Data = 8
    } else if ((select1 == 500)) {
        select1Data = 10
    } else if ((select1 == 0)) {
        select1Data = 0
    }
    let select2 = +document.getElementById("design_1").value;
    let select2Data;
    if ((select2 == 100)) {
        select2Data = 2
    } else if ((select2 == 200)) {
        select2Data = 4
    } else if ((select2 == 300)) {
        select2Data = 6
    } else if ((select2 == 0)) {
        select2Data = 0
    }
    let select3 = +document.getElementById("adaptability_1").value;
    let select3Data;
    if ((select3 == 200)) {
        select3Data = 4
    } else if ((select3 == 100)) {
        select3Data = 0
    } else if ((select3 == 0)) {
        select3Data = 0
    }
    let summ = select1 + select2 + select3;
    let summData = select1Data + select2Data + select3Data;
    let cost = document.getElementById("resultCost");
    let data = document.getElementById("resultData");
    cost.innerText = summ;
    data.innerText = summData;
});

$('a[href^="#"]').click(function () {
    let valHref = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(valHref).offset().top - 20 + "px"
    });
});

$(document).ready(function () {
    $('.image-link').magnificPopup({
        type: 'image'
    });
});

function notGo(){
    alert(`Хочешь скидку? Тогда смелей, заказывай свой сайт прямо сейчас!`);
}
setTimeout (notGo, 3000*5);

//активная кнопка меню при скролинге Не меняется цвет
$(document).ready(function () {
    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();

        $(".section").each((i, el) => {

            if ($(el).offset().top - $("nav").outerHeight() <= scrollDistance) {
                $("nav a").each((i, el) => {
                    if ($(el).hasClass("active")) {
                        $(el).removeClass("active");
                    }
                });

                $('nav li:eq(' + i + ')').find('a').addClass('active');
            }
        });
    });
});

//анимация чисел при прокрутке страницы
