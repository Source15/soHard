'use strict';

document.addEventListener('DOMContentLoaded', function () {
   let left = 0,
      top = 0;


   const DomElement = function (selector, height, width, bg, fonSize) {
      this.selector = selector;
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fonSize = fonSize;
   };

   DomElement.prototype.createElem = function (txt) {
      if (this.selector[0] === '.') {
         const div = document.createElement('div');
         let newClass = this.selector.split('.')[1];
         div.classList.add(newClass);
         div.style.cssText = `
                height: ${this.height};
                width: ${this.width};
                background: ${this.bg};
                font-size: ${this.fonSize};
            `;
         div.textContent = txt;
         document.body.append(div);

      } else if (this.selector[0] === '#') {
         const paragraph = document.createElement('p');
         let newId = this.selector.split('#')[1];
         paragraph.setAttribute('id', newId);
         paragraph.style.cssText = `
                height: ${this.height};
                width: ${this.width};
                background: ${this.bg};
                font-size: ${this.fonSize};
            `;
         paragraph.textContent = txt;
         document.body.append(paragraph);
      }
   };

   const obj = new DomElement('#sel', '100px', '100px', '#9cd3d9', '25px');

   let addblock = obj.createElem('Привет Мир!');
   addblock = document.querySelector(obj.selector);
   addblock.style.position = 'absolute';

   document.addEventListener('keydown', function (a) {
      switch (a.keyCode) {
         case 37:
            addblock.style.cssText += `left:${left-=10}px`;
            break;
         case 38:
            addblock.style.cssText += `top:${top-=10}px`;
            break;
         case 39:
            addblock.style.cssText += `left:${left+=10}px`;
            break;
         case 40:
            addblock.style.cssText += `top:${top+=10}px`;
            break;
      }
   });
});