alert("4");
fetch("https://chess-dev.com/tournament/create").then((response) => response.text())
    .then((text) => {
                var parser = new DOMParser();

        var doc = parser.parseFromString(text, "text/html");
        
 var a = doc.getElementById('tournament-post-form').dataset.token;
 alert(a);
})
