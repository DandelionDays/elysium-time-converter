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

//--------------------------------------------
// 8/8/2024 - test 5: getElementById altaretime
// ALTARE TIME:
const altareLocalTime = document.getElementById("altaretime")
console.log(altareLocalTime)
  // YES THIS WORKED LOL
const altareStandardTime = new Date('August 5, 2024 13:00:00 GMT+00:00'); 
altareLocalTime.textContent = (altareStandardTime.toLocaleTimeString('en-US'));
//--------------------------------------------
// ALTARE TIME B:
const altareLocalTimeB = document.getElementById("altaretimeb")
console.log(altareLocalTimeB)
  // YES THIS WORKED LOL
const altareStandardTimeB = new Date('August 5, 2024 23:00:00 GMT+00:00'); //change time to typical stream time in GMT
altareLocalTimeB.textContent = (altareStandardTimeB.toLocaleTimeString('en-US'));
//--------------------------------------------
// AXEL TIME:
const axelLocalTime = document.getElementById("axeltime")
console.log(axelLocalTime)
const axelStandardTime = new Date('August 5, 2024 3:00:00 GMT+00:00'); //change time to typical stream time in GMT
axelLocalTime.textContent = (axelStandardTime.toLocaleTimeString('en-US'));
//--------------------------------------------
// BETTEL TIME:
const bettelLocalTime = document.getElementById("betteltime")
console.log(bettelLocalTime)
const bettelStandardTime = new Date('August 5, 2024 21:00:00 GMT+00:00'); //change time to typical stream time in GMT
bettelLocalTime.textContent = (bettelStandardTime.toLocaleTimeString('en-US'));
//--------------------------------------------
// FLAYON TIME:
const flayonLocalTime = document.getElementById("flayontime")
console.log(flayonLocalTime)
const flayonStandardTime = new Date('August 5, 2024 23:00:00 GMT+00:00'); //change time to typical stream time in GMT
flayonLocalTime.textContent = (flayonStandardTime.toLocaleTimeString('en-US'));
//--------------------------------------------
// HAKKA TIME:
const hakkaLocalTime = document.getElementById("hakkatime")
console.log(hakkaLocalTime)
const hakkaStandardTime = new Date('August 5, 2024 0:00:00 GMT+00:00'); 
hakkaLocalTime.textContent = (hakkaStandardTime.toLocaleTimeString('en-US'));
//--------------------------------------------
// SHINRI TIME:
const shinriLocalTime = document.getElementById("shinritime")
console.log(shinriLocalTime)
const shinriStandardTime = new Date('August 5, 2024 1:00:00 GMT+00:00'); 
shinriLocalTime.textContent = (shinriStandardTime.toLocaleTimeString('en-US'));
//--------------------------------------------
// JURARD TIME:
const jurardLocalTime = document.getElementById("jurardtime")
console.log(jurardLocalTime)
const jurardStandardTime = new Date('August 5, 2024 5:00:00 GMT+00:00'); 
jurardLocalTime.textContent = (jurardStandardTime.toLocaleTimeString('en-US'));
//--------------------------------------------
// GOLDBULLET TIME:
const goldbulletLocalTime = document.getElementById("goldbullettime")
console.log(goldbulletLocalTime)
const goldbulletStandardTime = new Date('August 5, 2024 16:00:00 GMT+00:00'); 
goldbulletLocalTime.textContent = (goldbulletStandardTime.toLocaleTimeString('en-US'));
//--------------------------------------------
// OCTAVIO TIME:
const octavioLocalTime = document.getElementById("octaviotime")
console.log(octavioLocalTime)
const octavioStandardTime = new Date('August 5, 2024 1:00:00 GMT+00:00'); 
octavioLocalTime.textContent = (octavioStandardTime.toLocaleTimeString('en-US'));
//--------------------------------------------
// OCTAVIO TIME B:
const octavioLocalTimeB = document.getElementById("octaviotimeb")
console.log(octavioLocalTimeB)
const octavioStandardTimeB = new Date('August 5, 2024 12:00:00 GMT+00:00'); 
octavioLocalTimeB.textContent = (octavioStandardTimeB.toLocaleTimeString('en-US'));
//--------------------------------------------
// RUZE TIME:
const ruzeLocalTime = document.getElementById("ruzetime")
console.log(ruzeLocalTime)
const ruzeStandardTime = new Date('August 5, 2024 18:00:00 GMT+00:00'); 
ruzeLocalTime.textContent = (ruzeStandardTime.toLocaleTimeString('en-US'));
//--------------------------------------------
// RUZE TIME B:
const ruzeLocalTimeb = document.getElementById("ruzetimeb")
console.log(ruzeLocalTimeb)
const ruzeStandardTimeb = new Date('August 5, 2024 02:00:00 GMT+00:00'); 
ruzeLocalTimeb.textContent = (ruzeStandardTimeb.toLocaleTimeString('en-US'));
// COULD MAKE THESE AS EMBEDDABLE THINGS MAYBE??