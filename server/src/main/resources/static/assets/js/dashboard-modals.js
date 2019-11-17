window.onload = function() {
    $('#deezer').hide();
    $('#weather').hide();
    $('#games-div').hide();
    $('#streams-div').hide();
    $('#subscribers').hide();
    $('#lastvideo').hide();
};

function hideYoutubeModal() {
    $('#YoutubeModal').modal('hide');
}

function hideTwitchModal() {
    $('#TwitchModal').modal('hide');
}

function hideWeatherModal() {
    $('#WeatherModal').modal('hide');
}

function hideDeezerModal() {
    $('#DeezerModal').modal('hide');
}

function hideYoutubeDeleteModal() {
    $('#YoutubeDeleteModal').modal('hide');
}

function hideTwitchDeleteModal() {
    $('#TwitchDeleteModal').modal('hide');
}

function hideYoutubeWidget() {
    let value = $("#widget-selector-youtube-delete").val();

    if (value == "subscribers-delete") {
        $('#subscribers').hide();
    } else {
        $('#lastvideo').hide();
    }
}

function hideTwitchWidget() {
    let value = $("#widget-selector-twitch-delete").val();

    if (value == "streams-delete") {
        $('#streams-div').hide();
    } else {
        $('#games-div').hide();
    }
}

function hideWeatherWidget() {
    $('#weather').hide();
}

function hideDeezerWidget() {
    $('#deezer').hide();
}