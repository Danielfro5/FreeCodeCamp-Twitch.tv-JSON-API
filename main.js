$(function() {
 twitchCall("OPL");
 twitchCall("SaltyBet");
 twitchCall("RedBull");

});


function twitchCall(channelName){
  var url = ("https://wind-bow.gomix.me/twitch-api/streams/"+channelName+"?callback=?");
  $.getJSON(url,function(twitchData){
    if(twitchData.stream === null){
      document.getElementById("mainDiv").innerHTML += ("<a href='https://twitch.tv/"+channelName+"'><img alt='channel logo' width='40' height='40' src='https://i.vimeocdn.com/portrait/10159238_300x300'><b>"+channelName+"</b> || Channel Offline ||</a><br>");

    }
    else{
      document.getElementById("mainDiv").innerHTML +=
      ("<a href='https://twitch.tv/"+channelName+"'><img alt='channel logo' width='40' height='40' src='"+twitchData.stream.channel.logo+"'><b>"+channelName+"</b> || Channel Online || <i>"+twitchData.stream.channel.status+"</i></a><br>");


    }
    console.log(twitchData);
    console.log();

});
}

function onlineCall(channelName){
  var url = ("https://wind-bow.gomix.me/twitch-api/streams/"+channelName+"?callback=?");
  $.getJSON(url,function(twitchData){
    if(twitchData.stream === null){}

    else{
      document.getElementById("mainDiv").innerHTML +=
      ("<a href='https://twitch.tv/"+channelName+"'><img alt='channel logo' width='40' height='40' src='"+twitchData.stream.channel.logo+"'><b>"+channelName+"</b> || Channel Online || <i>"+twitchData.stream.channel.status+"</i></a><br>");


    }


});
}

function offlineCall(channelName){
  var url = ("https://wind-bow.gomix.me/twitch-api/streams/"+channelName+"?callback=?");
  $.getJSON(url,function(twitchData){
    if(twitchData.stream === null){
      document.getElementById("mainDiv").innerHTML += ("<a href='https://twitch.tv/"+channelName+"'><img alt='channel logo' width='40' height='40' src='https://i.vimeocdn.com/portrait/10159238_300x300'><b>"+channelName+"</b> || Channel Offline ||</a><br>");

    }


});
}

function twitchClick(){
  document.getElementById("mainDiv").innerHTML = null;
  twitchCall("OPL");
  twitchCall("SaltyBet");
  twitchCall("RedBull");
}

function onlineClick(){
    document.getElementById("mainDiv").innerHTML = null;
  onlineCall("OPL");
  onlineCall("SaltyBet");
  onlineCall("RedBull");
}

function offlineClick(){
  document.getElementById("mainDiv").innerHTML = null;
  offlineCall("OPL");
  offlineCall("SaltyBet");
  offlineCall("RedBull");
}
