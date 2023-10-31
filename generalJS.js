//  Function to display the right time.  

function updateTime() {
    var currentTimeElement = document.querySelector('.current-time');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var timeString = hours + ':' + minutes + ' ' + ampm;
    currentTimeElement.textContent = timeString;
}

setInterval(updateTime, 1000);

updateTime();