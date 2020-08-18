'use strict';

let day = document.querySelectorAll('.day');
let dayList = document.querySelector('.day-list');

let date = new Date();
let today = date.getDay();

let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

let bustOfDay = function () {
   day.forEach((item, index, arr) => {
      item.textContent = week[index];
      arr[0].style.fontStyle = 'italic';
      arr[arr.length - 1].style.fontStyle = 'italic';
      arr[today].style.fontWeight = '800';
   });
};

bustOfDay();
//Метод getDay() возвращает порядковый номер дня недели указанной даты по местному времени, где 0 соответствует воскресенью.
//Методы document.write и document.writeln пишут напрямую в текст документа, до того как браузер построит из него DOM, поэтому они могут записать в документ все, что угодно, любые стили и незакрытые теги.
//Обратные кавычки же имеют «расширенную функциональность». Они позволяют нам встраивать выражения в строку, заключая их в ${…}