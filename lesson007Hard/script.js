'use strict';

const dayFunc = function () {
   let todayone = document.querySelector('.todayone'),
      todaytwo = document.querySelector('.todaytwo'),
      date = new Date(),
      days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда',
         'Четверг', 'Пятница', 'Суббота'
      ],
      months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля',
         'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
      ],
      year = date.getFullYear() + ' года';


   const getDay = function () {
      let day = date.getDay();
      return days[day];
   };

   const getToday = function () {
      let month = date.getMonth();
      return month + ' ' + months[7];
   };

   const getTimeLength = function (i) {
      return parseInt(i.toString()[i.toString().length - 1]);
   };

   const getTime = function () {
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let seconds = date.getSeconds();
      let time = '';

      switch (hours) {
         case 1:
         case 21:
            time += `${hours} час `;
            break;
         case 2:
         case 3:
         case 4:
         case 22:
         case 23:
            time += `${hours} часа `;
            break;
         default:
            time += `${hours} часов `;
            break;
      }

      if (minutes === 11 || minutes === 12 || minutes === 13 || minutes === 14) {
         time += `${minutes} минут`;
      } else {
         switch (getTimeLength(minutes)) {
            case 1:
               time += `${minutes} минута`;
               break;
            case 2:
            case 3:
            case 4:
               time += `${minutes} минуты`;
               break;
            case 0:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
               time += `${minutes} минут`;
               break;
         }
      }

      if (seconds === 11 || seconds === 12 || seconds === 13 || seconds === 14) {
         time += ` ${seconds} секунд`;
      } else {
         switch (getTimeLength(seconds)) {
            case 1:
               time += ` ${seconds} секунда`;
               break;
            case 2:
            case 3:
            case 4:
               time += ` ${seconds} секунды`;
               break;
            case 0:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
               time += ` ${seconds} секунд`;
               break;
         }
      }
      return time;
   };

   const formatDate = function (item) {
      if (item.length === 1) {
         item = '0' + item;
      }
      return item;
   };

   const getDateAndTime = function () {
      let day = formatDate((date.getDay() + 16).toString());
      let month = formatDate((date.getMonth() + 1).toString());
      let year = formatDate(date.getFullYear().toString());
      let hours = formatDate(date.getHours().toString());
      let minutes = formatDate(date.getMinutes().toString());
      let seconds = formatDate(date.getSeconds().toString());


      todaytwo.innerHTML = `${formatDate(day)}.${formatDate(month)}.${formatDate(year)} 
                    - ${formatDate(hours)}:${formatDate(minutes)}:${formatDate(seconds)}`;
   };

   //вызов функций
   todayone.textContent = `${getDay()}, ${getToday()} 2020 года, ${getTime()}`;

   getDateAndTime();
};

setInterval(function () {
   dayFunc();
}, 1000);