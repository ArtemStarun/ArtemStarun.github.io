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
    

type = prompt("Выберите тип сайта (сайт-визитка, лендинг, портфолио, промо-сайт, сайт-витрина)"); /*сайт-визитка, лендинг, портфолио, промо-сайт, сайт-витрина*/
if ((type == "сайт-визитка")) {
    type = 100
    typeData = 2
} else if ((type == "лендинг")) {
    type = 200
    typeData = 4
} else if ((type == "портфолио")) {
    type = 300
    typeData = 6
} else if ((type == "промо-сайт")) {
    type = 400
    typeData = 8
} else if ((type == "сайт-витрина")) {
    type = 500
    typeData = 10
}

design = prompt("Выберите дизайн сайта (чистый, стандартный, художественный)"); /*чистый, стандартный, художественный*/
if ((design == "чистый")) {
    design = 100
    designData = 2
} else if ((design == "стандартный")) {
    design = 200
    designData = 4
} else if ((design == "художественный")) {
    design = 300
    designData = 6
}

adaptability = prompt("Выберите адаптивный, не адаптивный (адаптивный, не адаптивный)"); /*адаптивный, не адаптивный*/
if ((adaptability == "адаптивный")) {
    adaptability = 200
    adaptabilityData = 4
} else if ((adaptability == "не адаптивный")) {
    adaptability = 100
    adaptabilityData = 0
}



summ = type + design + adaptability;
summData = typeData + designData + adaptabilityData;

alert(`Стоимость создания сайта составит: ${summ}$, Срок выполнения: ${summData} дней`);
    }

setTimeout (calk, 3000);
