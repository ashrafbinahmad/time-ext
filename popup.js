// Initialize butotn with users's prefered color
let Timedisplay = document.getElementById("Timedisplay");

chrome.storage.sync.get("time", ({ color }) => {
  changeColor.style.backgroundColor = color;
});




// When the button is clicked, inject setPageBackgroundColor into current page
Timedisplay.addEventListener("click", async () => {
  setInterval(() => {
    fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata').then(response => {
      response.json().then(data => {
        console.log(data);
        let longtime = data.datetime.toString()
        let shorttime = longtime.substring(longtime.indexOf('T') + 1, longtime.lastIndexOf('.'))
        document.getElementById('time').innerText = shorttime
      })
    })
  }, 1000)
});

// The body of this function will be execuetd as a content script inside the
// current page
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }
