var data;
//url = "https://www.chess.com/bundles/web/favicons/apple-touch-icon.f72d3fd3.png"
url = "https://chess.com/dynproxy/10.20.0/https/7b7a8e4454.16"
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    data = xhr.responseText;
    console.log(data);
    document.body.innerHTML = data;
  }
};

xhr.open('GET', url);
xhr.send();
