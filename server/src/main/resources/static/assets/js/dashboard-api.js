window.onload = function() {
    $.getJSON('http://localhost:8080/service/youtube/subscribers', function(data) {
        var subscribers = data["items"]["0"]["statistics"]["subscriberCount"];
        document.getElementById("apiSubscribers").innerHTML = subscribers;
    });
};
