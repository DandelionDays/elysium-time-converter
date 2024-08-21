# About Elysium Time Converter
I built this project in order to better understand using JavaScript's toLocalTimeString() method to display time conversions of a specific time into the user's local device time. I first implemented a time conversion script for [Banzoin Hakka Fansite](https://github.com/DandelionDays/banzoin-hakka-fansite). With Elysium Time Converter, I aimed to:
1. improve my implementation of the JavaScript time conversion in order to display multiple time conversions on the same webpage
2. solidify my understanding of basic HTML and CSS

You can view Elysium Time Converter at https://dandeliondays.github.io/elysium-time-converter/

# Comparing toLocalTimeString() Implementations
Elysium Time Converter:
```const hakkaLocalTime = document.getElementById("hakkatime")
console.log(hakkaLocalTime)
const hakkaStandardTime = new Date('August 5, 2024 0:00:00 GMT+00:00'); 
hakkaLocalTime.textContent = (hakkaStandardTime.toLocaleTimeString('en-US'));```

Banzoin Hakka Fansite:
```let myLocalTime = document.querySelector("samp");
const event = new Date('August 5, 2024 0:00:00 GMT+00:00');
myLocalTime.textContent = (event.toLocaleTimeString('en-US'));```
