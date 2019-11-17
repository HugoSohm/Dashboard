function youtube() {
    let value = $("#widget-name-youtube").val();
    let selected = $("#widget-selector-youtube").val();

    if (selected == "subscribers") {
        $.getJSON('http://localhost:8080/service/youtube/subscribers?value=' + value, function (data) {
            let subscribers = data["items"]["0"]["statistics"]["subscriberCount"];
            let html = "<div class=\"card shadow\">\n" +
                "                    <div class=\"card-header border-0\">\n" +
                "                        <div class=\"row align-items-center\">\n" +
                "                            <div class=\"icon icon-shape bg-danger text-white rounded-circle shadow\">\n" +
                "                                <i class=\"fab fa-youtube\"></i>\n" +
                "                            </div>\n" +
                "                            <div class=\"col\">\n" +
                "                                <h3 class=\"mb-0\">Nombre d'abonnés</h3>\n" +
                "                            </div>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                    <div class=\"table-responsive\">\n" +
                "                        <!-- Projects table -->\n" +
                "                        <table class=\"table align-items-center table-flush\">\n" +
                "                            <thead class=\"thead-light\">\n" +
                "                            <tr>\n" +
                "                                <th scope=\"col\">Abonnés</th>\n" +
                "                            </tr>\n" +
                "                            </thead>\n" +
                "                            <tbody>\n" +
                "                            <tr>\n" +
                "                                <th>\n" +
                "                                    <span>" + subscribers + " abonnés" + "</span>\n" +
                "                                </th>\n" +
                "                            </tr>\n" +
                "                            </tbody>\n" +
                "                        </table>\n" +
                "                    </div>\n" +
                "                </div>";
            $("#youtube").html(html);
        });
    } else {
        $.getJSON('http://localhost:8080/service/youtube/lastvideo?value=' + value, function (data) {
        });
    }
}

function twitch() {
    let value = $("#widget-count-twitch").val();
    let selected = $("#widget-selector-twitch").val();

    if (selected == "streams") {
        $.getJSON('http://localhost:8080/service/twitch/streams?value=' + parseInt(value), function (data) {
            $.each(data["data"], function (data, value) {
                let username = value["user_name"];
                let viewercount = value["viewer_count"];
                let title = value["title"];
                let html = "<tr>\n" +
                    "                  <th scope=\"row\">" + username + "</th>\n" +
                    "                  <td>" + viewercount + "</td>\n" +
                    "                  <td>\n" +
                    "                    <div class=\"d-flex align-items-center\">\n" +
                    "                      <span class=\"mr-2\">" + title + "\n" +
                    "                    </div>\n" +
                    "                  </td>\n" +
                    "                </tr>";
                $("#streams").append(html);
            });
        });
    } else {
        $.getJSON('http://localhost:8080/service/twitch/games?value=' + parseInt(value), function (data) {
            $.each(data["data"], function (data, value) {
                let game = value["name"];
                let html = "<tr>\n" +
                    "                  <th scope=\"row\">" + game + "</th>\n" +
                    "                  </tr>";
                $("#games").append(html);
            });
        });
    }
}

function weather() {
    let value = $("#widget-name-weather").val();

    $.getJSON('http://localhost:8080/service/weather/temperature?value=' + value, function (data) {
        let temperature = data["main"]["temp"];
        temperature = temperature - 273.15;
        temperature = Math.floor(temperature);

        let html = "<div class=\"card shadow\">\n" +
            "                    <div class=\"card-header border-0\">\n" +
            "                        <div class=\"row align-items-center\">\n" +
            "                            <div class=\"icon icon-shape bg-yellow text-white rounded-circle shadow\">\n" +
            "                                <i class=\"fas fa-cloud\"></i>\n" +
            "                            </div>\n" +
            "                            <div class=\"col\">\n" +
            "                                <h3 class=\"mb-0\">Température</h3>\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                    <div class=\"table-responsive\">\n" +
            "                        <!-- Projects table -->\n" +
            "                        <table class=\"table align-items-center table-flush\">\n" +
            "                            <thead class=\"thead-light\">\n" +
            "                            <tr>\n" +
            "                                <th scope=\"col\">Degrès</th>\n" +
            "                            </tr>\n" +
            "                            </thead>\n" +
            "                            <tbody>\n" +
            "                            <tr>\n" +
            "                                <th>\n" +
            "                                    <span>" + temperature + "°C" + "</span>\n" +
            "                                </th>\n" +
            "                            </tr>\n" +
            "                            </tbody>\n" +
            "                        </table>\n" +
            "                    </div>\n" +
            "                </div>";
        $("#weather").html(html);
    });
}