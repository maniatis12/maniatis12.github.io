var data;
url = "https://www.chess.com/bundles/web/favicons/apple-touch-icon.f72d3fd3.png"

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
