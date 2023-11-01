//  Function to display the right time.  

function updateTime() {
    var currentTimeElement = document.querySelector('.current-time');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var timeString = hours + ':' + minutes;
    currentTimeElement.textContent = timeString;
}

setInterval(updateTime, 1000);

updateTime();