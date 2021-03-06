

twitchClick();

function twitchCall(channelName) {

    var url = ("https://wind-bow.gomix.me/twitch-api/streams/" + channelName + "?callback=?");

    $.getJSON(url, function(twitchData) {
        var userCallVar;
        if (twitchData.stream === null) {
            $.getJSON("https://wind-bow.gomix.me/twitch-api/users/" + channelName + "?callback=?", function(userData) {

                if (userData.status === 404) {
                    userCallVar = "User does not exist";

                    document.getElementById("mainDiv").innerHTML += ("<a href='https://twitch.tv/" + channelName + "'><img alt='channel logo' width='40' height='40' src='https://i.vimeocdn.com/portrait/10159238_300x300'><b>" + channelName + "</b> || Channel Offline ||" + userCallVar + "</a><br>");

                } else {
                    userCallVar = "";
                    document.getElementById("mainDiv").innerHTML += ("<a href='https://twitch.tv/" + channelName + "'><img alt='channel logo' width='40' height='40' src='https://i.vimeocdn.com/portrait/10159238_300x300'><b>" + channelName + "</b> || Channel Offline ||</a><br>");

                }
            });


        } else {

            document.getElementById("mainDiv").innerHTML +=
                ("<a href='https://twitch.tv/" + channelName + "'><img alt='channel logo' width='40' height='40' src='" + twitchData.stream.channel.logo + "'><b>" + channelName + "</b> || Channel Online || <i>" + twitchData.stream.channel.status + "</i></a><br>");


        }


    });
}

function onlineCall(channelName) {
    var url = ("https://wind-bow.gomix.me/twitch-api/streams/" + channelName + "?callback=?");
    $.getJSON(url, function(twitchData) {
        if (twitchData.stream === null) {} else {
            document.getElementById("mainDiv").innerHTML +=
                ("<a href='https://twitch.tv/" + channelName + "'><img alt='channel logo' width='40' height='40' src='" + twitchData.stream.channel.logo + "'><b>" + channelName + "</b> || Channel Online || <i>" + twitchData.stream.channel.status + "</i></a><br>");


        }


    });
}

function offlineCall(channelName) {
    var url = ("https://wind-bow.gomix.me/twitch-api/streams/" + channelName + "?callback=?");
    $.getJSON(url, function(twitchData) {
        if (twitchData.stream === null) {
            $.getJSON("https://wind-bow.gomix.me/twitch-api/users/" + channelName + "?callback=?", function(userData) {

                if (userData.status === 404) {
                    userCallVar = "User does not exist";

                    document.getElementById("mainDiv").innerHTML += ("<a href='https://twitch.tv/" + channelName + "'><img alt='channel logo' width='40' height='40' src='https://i.vimeocdn.com/portrait/10159238_300x300'><b>" + channelName + "</b> || Channel Offline ||" + userCallVar + "</a><br>");

                } else {
                    userCallVar = "";
                    document.getElementById("mainDiv").innerHTML += ("<a href='https://twitch.tv/" + channelName + "'><img alt='channel logo' width='40' height='40' src='https://i.vimeocdn.com/portrait/10159238_300x300'><b>" + channelName + "</b> || Channel Offline ||</a><br>");

                }
            });

        }


    });
}

function twitchClick() {
  var twitchStreamers = ["FreeCodeCamp", "OPL", "SaltyBet", "RedBull", "brunofin"];
    document.getElementById("mainDiv").innerHTML = null;
    for (i = 0; i < twitchStreamers.length; i++) {
        twitchCall(twitchStreamers[i]);

    }

}

function onlineClick() {
  var twitchStreamers = ["FreeCodeCamp", "OPL", "SaltyBet", "RedBull", "brunofin"];
    document.getElementById("mainDiv").innerHTML = null;
    for (i = 0; i < twitchStreamers.length; i++) {
        onlineCall(twitchStreamers[i]);
    }


}

function offlineClick() {
  var twitchStreamers = ["FreeCodeCamp", "OPL", "SaltyBet", "RedBull", "brunofin"];
    document.getElementById("mainDiv").innerHTML = null;
    for (i = 0; i < twitchStreamers.length; i++) {
        offlineCall(twitchStreamers[i]);
    }
}

function userClick() {
var twitchStreamers = ["FreeCodeCamp", "OPL", "SaltyBet", "RedBull", "brunofin"];
    for (i = 0; i < twitchStreamers.length; i++) {
        userCall(twitchStreamers[i]);
    }
}
