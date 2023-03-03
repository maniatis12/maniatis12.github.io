alert("6");
//https://chess-dev.com/tournament/create

/*
fetch("https://chess-dev.com/tournament/create").then((response) => response.text())
    .then((text) => {
                var parser = new DOMParser();

        var doc = parser.parseFromString(text, "text/html");
        
 var a = doc.getElementById('tournament-post-form').dataset.token;
 alert(a);
})
*/
fetch("https://admin.chess.com/admin/members/vasNewtest/edit", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"99\", \"Google Chrome\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "no-cors",
  },
  "referrer": "https://admin.chess.com/",
  "body": null,
  "method": "GET",
  "mode": "no-cors",
  "credentials": "omit"
}).then((response) => response.text())
    .then((text) => {
                var parser = new DOMParser();

        var doc = parser.parseFromString(text, "text/html");
        
 var a = doc.getElementById('form__token');
 alert(a);
 alert(a.dataset.token);
})

/*fetch("https://chess-dev.com/callback/messages/list/inbox").then(response => response.json())
  .then(data => {console.log(data);
  for (var i = 0; i < data.length; i++){
      fetch("https://chess-dev.com/callback/messages/show/"+data[i].user.username).then(response => response.json())
  .then(data => {for (var i = 0; i < data.length; i++){console.log("Time: " + data[i].createDate + " From: " + data[i].from_user.username + " To: " + data[i].to_user.username + " Message: " + data[i].message)}})
  }
})
*/
