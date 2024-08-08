let altareTime = document.querySelector(".altaretime"); // not sure if this makes sense lol
/* 8/7/24 - trying to follow the complex selectors instructions in this webpage on document.querySelector() https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector but I really don't know what I'm doing lol. wondering if I change <samp id="altare"> to <samp class="altare"> if that will work?*/
// complete css and make new branch before I try working on this more
const event = new Date('August 5, 2024 0:00:00 GMT+00:00');
altareTime.textContent = (event.toLocaleTimeString('en-US'));