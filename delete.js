
document.getElementById('ourForm').addEventListener('submit', deleteData);

function deleteData(e) {
    e.preventDefault();

    var xhr = new XMLHttpRequest();

    xhr.open('DELETE', `https://web-app-senditb.herokuapp.com/parcel/${id}/cancel`);

    xhr.addEventListener('load', function () {
        
        window.document.location = "get.html"
    });

    xhr.addEventListener('error', function () {
        console.log('error deleting message');
    });

    xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');

    xhr.setRequestHeader('Access-Control-Request-Method', 'DELETE');

    xhr.send();
}


