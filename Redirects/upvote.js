var randomLink = function(){

var links = [
              "https://discordservers.me/servers/MassProjects/upvote",
              "https://discordservers.com/server/771641009209475073/bump",
              "https://disboard.org/review/create/771641009209475073",
              "https://top.gg/servers/771641009209475073/vote"]

             var max = (links.length)

 window.open(links[Math.floor(Math.random()*max)]);

  var link = links[randomNumber];
  window.location = "http://" + link;

};
