window.onload = function() {
    $.getJSON('http://localhost:8080/service/youtube/subscribers', function(data) {
        console.log(data["items"]["0"]["statistics"]["subscriberCount"]);
    });
};
