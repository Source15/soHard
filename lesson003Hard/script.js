//через if
let lang = 'ru';
if (lang == 'ru') {
   arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
}
if (lang == 'en') {
   arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
}
alert(arr);
//через switch-case 

switch (lang) {
   case 'ru':
      arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
      break;
   case 'en':
      arr = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
      break;
}
alert(arr);

//через многомерный массив без ифов и switch.
var arr = {
   'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
   'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
alert(arr[lang]);

//задание 2
name = prompt('Как тебя зовут?');
let namePerson = (name === 'Артем') ? 'Директор' :
   (name == 'Максим') ? 'Предподователь' :
   (name <= 'Cтудент') ? 'Учится' : 'хорошо';

alert(namePerson);