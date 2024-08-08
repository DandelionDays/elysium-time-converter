/* 8/8/24 - first task - test: change ln17 <div class="altare"> to <div id="altare">; change ln20 <p class="altaretime">Local Time</p> to <p class="localtime">; test altareLocal on #altare

let altareLocal = document.querySelector("p.altaretime"); // not sure if this makes sense lol
/* 8/7/24 - trying to follow the complex selectors instructions in this webpage on document.querySelector() https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector but I really don't know what I'm doing lol. wondering if I change <samp id="altare"> to <samp class="altare"> if that will work?*/
// complete css and make new branch before I try working on this more
/*const altareTime = new Date('August 5, 2024 0:00:00 GMT+00:00');
altareLocal.textContent = (altareTime.toLocaleTimeString('en-US'));*/
// 8/8/24 - test 1:
//const altareLocal = document.getElementById("#altaretime");
//altareLocal.style.backgroundColor = "red";
const title = document.getElementById("#title");
console.log(title);