"use strict";



var type;
var typeData;
var design;
var designData;
var adaptability;
var adaptabilityData;
var summ;
var summData;


function calk(){
    

type = prompt("Выберите тип сайта (Сайт-визитка, Лендинг, Портфолио, Промо-сайт, Сайт-витрина)"); /*сайт-визитка, лендинг, портфолио, промо-сайт, сайт-витрина*/
   
if ((type == "Сайт-визитка")) {
    type = 100
    typeData = 2
} else if ((type == "Лендинг")) {
    type = 200
    typeData = 4
} else if ((type == "Портфолио")) {
    type = 300
    typeData = 6
} else if ((type == "Промо-сайт")) {
    type = 400
    typeData = 8
} else if ((type == "Сайт-витрина")) {
    type = 500
    typeData = 10
}

    
design = prompt("Выберите дизайн сайта (Чистый, Стандартный, Художественный)"); /*чистый, стандартный, художественный*/
if ((design == "Чистый")) {
    design = 100
    designData = 2
} else if ((design == "Стандартный")) {
    design = 200
    designData = 4
} else if ((design == "Художественный")) {
    design = 300
    designData = 6
}

adaptability = prompt("Выберите адаптивный, не адаптивный (Адаптивный, Не адаптивный)"); /*адаптивный, не адаптивный*/
if ((adaptability == "Адаптивный")) {
    adaptability = 200
    adaptabilityData = 4
} else if ((adaptability == "Не адаптивный")) {
    adaptability = 100
    adaptabilityData = 0
}

summ = type + design + adaptability;
summData = typeData + designData + adaptabilityData;

alert(`Стоимость создания сайта составит: ${summ}$, Срок выполнения: ${summData} дней`);
}

/*let div = document.querySelector('.inpOutData');
let divV = document.querySelector('.inpOutCost');

function funcC(){
    div.innerHTML = summData;
    divV.innerHTML = summ;
};*/

setTimeout (calk, 3000);


$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(valHref).offset().top - 30 + "px"
    });
});

$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});

function notGo(){
    alert(`Хочешь скидку? Тогда смелей, заказывай свой сайт прямо сейчас!`);
}
setTimeout (notGo, 3000*5);

/*
$(document).ready(function(){
$(window).scroll(() => {
    let scrollDistance = $(window).scrollTop();
    
    $(".section").each((i, el) => {
        
        if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
            $("nav a").each((i, el) => {
                if ($(el).hasClass("active")){
                    $(el).removeClass("active");
                }
            });
            $('nav li:eq('+ i +')').find('a').addClass('active');
        }
    });
});
});*/ /*при скролинге active не работает*/

