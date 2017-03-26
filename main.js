$(function() {
 twitchCall("opl","testId");
 //twitchCall("saltybet","testId");
 //twitchCall("redbull","testId");

});


function twitchCall(channelName, elementId){
  var url = ("https://wind-bow.gomix.me/twitch-api/streams/"+channelName+"?callback=?");
  $.getJSON(url,function(twitchData){
    if(twitchData.stream === null){
      document.getElementById(elementId).innerHTML = ("Channel Offline");
      console.log("https://i.vimeocdn.com/portrait/10159238_300x300");
    }
    else{
      document.getElementById(elementId).innerHTML = ("Channel Online<br>"+twitchData.stream.channel.status);
      console.log(twitchData.stream.channel.logo);//logo image
      
    }
    console.log(twitchData);
    console.log("https://twitch.tv/"+channelName);

});
}
