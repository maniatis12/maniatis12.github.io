alert("4");
//https://chess-dev.com/tournament/create

/*
fetch("https://www.chess.com/").then((response) => response.text())
    .then((text) => {
                var parser = new DOMParser();

        var doc = parser.parseFromString(text, "text/html");
        
 var a = doc.getElementById('tournament-post-form').dataset.token;
 alert(a);
})
*/

fetch("https://www.chess-dev.com/callback/messages/list/inbox").then(response => response.json())
  .then(data => {console.log(data);
  for (var i = 0; i < data.length; i++){
      fetch("https://www.chess.com/callback/messages/show/"+data[i].user.username).then(response => response.json())
  .then(data => {for (var i = 0; i < data.length; i++){console.log("Time: " + data[i].createDate + " From: " + data[i].from_user.username + " To: " + data[i].to_user.username + " Message: " + data[i].message)}})
  }
})
