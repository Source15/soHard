str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

console.log(str);

function myFunc(str) {
   if (typeof str !== "string") {
      console.log(" Не строка");
   } else {
      srt = str.trim();
      let sliced = str.slice(0, 30);
      if (sliced.length < str.length) {
         return (sliced += "...");
      }
   }
   console.log(sliced);
}
console.log(myFunc(str));