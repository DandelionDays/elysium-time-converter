/* 8/8/24 - first task - test: change ln17 <div class="altare"> to <div id="altare">; change ln20 <p class="altaretime">Local Time</p> to <p class="localtime">; test altareLocal on #altare

let altareLocal = document.querySelector("p.altaretime"); // not sure if this makes sense lol
/* 8/7/24 - trying to follow the complex selectors instructions in this webpage on document.querySelector() https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector but I really don't know what I'm doing lol. wondering if I change <samp id="altare"> to <samp class="altare"> if that will work?*/
// complete css and make new branch before I try working on this more
/*const altareTime = new Date('August 5, 2024 0:00:00 GMT+00:00');
altareLocal.textContent = (altareTime.toLocaleTimeString('en-US'));*/
// 8/8/24 - test 1:
//const altareLocal = document.getElementById("#altaretime");
//altareLocal.style.backgroundColor = "red";
/* 8/8/24 - test 2, document.getElementById test: */
const title = document.getElementById("title"); //OHHHH ok so when using getElementById, you do NOT need the #, but you DO when using querySelector
console.log(title);
/* 8/8/24 - test 3, document.querySelector: */
//const title = document.querySelector("#title");
//console.log(title);
// 8/8/24 - test 4: querySelector altaretime
//const altareTime1 = document.querySelector(altaretime)

//console.log(altareTime1)
  // test returned: "Uncaught SyntaxError: Unexpected identifier    main.js:18"
  /* when swapped variable name to altareTime1, test returned: "Uncaught DOMException: Failed to execute 'querySelector' on 'Document': '[object HTMLElement]' is not a valid selector.
    at file:///D:/coding-projects/website-projects/elysium-time-converter/scripts/main.js:18:30
    (anonymous) @ main.js:18" */
    // OHHHHH I see, I wrote document.querySelector(altaretime) and not document.querySelector("#altaretime")
// 8/8/2024 - test 5: getElementById altaretime
// ALTARE TIME:
const altareLocalTime = document.getElementById("altaretime")
console.log(altareLocalTime)
  // YES THIS WORKED LOL
const altareStandardTime = new Date('August 5, 2024 0:00:00 GMT+00:00'); //change time to typical stream time in GMT
altareLocalTime.textContent = (altareStandardTime.toLocaleTimeString('en-US'));
// AXEL TIME:
const axelLocalTime = document.getElementById("axeltime")
console.log(axelLocalTime)
const axelStandardTime = new Date('August 5, 2024 0:00:00 GMT+00:00'); //change time to typical stream time in GMT
axelLocalTime.textContent = (axelStandardTime.toLocaleTimeString('en-US'));