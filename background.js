let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  setInterval(() => {
    fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata').then(response => {
        response.json().then(data => {
            console.log(data);
            let longtime = data.datetime.toString()
            let shorttime = longtime.substring(longtime.indexOf('T')+1,longtime.lastIndexOf('.'))
            document.getElementById('time').innerText = shorttime
        })
    })
},1000)
});
