//Задание №1Создать массив arr = []
//— Записать в него 7 любых многозначных чисел в виде строк
//— Вывести в консоль только те, что начинаются с цифры 2 или 4 (Должны присутствовать в массиве)
let arr = ['11', '22', '33', '44', '55', '66', '77'];

const numbers = () => {
   let newArr = [];
   for (let i = 0; i < arr.length; i++) {
      if (arr[i].charAt(0) === '2' || arr[i].charAt(0) === '4') {
         newArr.push(arr[i]);
      }
   }

   return newArr;
};

console.log(numbers());
console.log(numbers().toString());

//Задание 2  Вывести в столбик все простые числа от 1 до 100 (сделать при помощи цикла)
let Numb = [];
let newNumbs;

const arrCompletion = (arr) => {
   for (let i = 1; i <= 100; i++) {
      arr[i - 1] = i;
   }
};


const Num = (number) => {
   if (number <= 1) {
      return false;
   } else if (number === 2) {
      return true;
   } else {
      for (let i = 2; i < number; i++) {
         if (number % i === 0) {
            return false;
         }
      }
      return true;
   }
};

const NewArray = (arr) => {
   for (let i = 0; i < arr.length; i++) {
      console.log(arr[i] + ` Делители этого числа: 1 и ${arr[i]}`);
   }
};

arrCompletion(Numb);
newNumbs = Numb.filter(Num);
NewArray(newNumbs);