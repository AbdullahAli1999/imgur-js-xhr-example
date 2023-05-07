const clientId = "ae46f54c86c85c3";

var defaultAlbumId = '';

function requestAlbum() {
    let albumId = document.getElementById("albumIdField").value;
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            //processAlbumRequest(req.responseText);
            let response = JSON.parse(req.responseText)
            for(item of response.data){
                let imgElem = document.createElement("img");
                imgElem.src = item.link;

                resultDiv.appendChild(imgElem);
            }
        }
        else if (req.readyState == 4 && req.status != 200) {
            console.log(req.status + " Error with the imgur API: ", req.responseText);
        }
    }
    req.open('GET', 'https://api.imgur.com/3/album/' + albumId + '/images', true); // true for asynchronous     
    req.setRequestHeader('Authorization', 'Client-ID ' + clientId);
    req.send();
}
