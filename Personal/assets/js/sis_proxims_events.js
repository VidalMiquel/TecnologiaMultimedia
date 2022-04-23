

function cargarDatos() {

    var xmlhttp = new XMLHttpRequest();
    var url = "assets/js/events.json";

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            dades = JSON.parse(xmlhttp.responseText);
            sortJSON(dades, 'startDate', 'asc');
            console.log(dades);
            //console.log(dades.sort((a, b) => a.startDate > b.startDate));
            dataVisualizar(dades);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function dataVisualizar(data) {
    let date = new Date();
    var actualDate = date.toISOString();
    var i = 0;
    for (let index = 0; index < data.length; index++) {
        if (i < 6) {
            if (data[index].startDate > actualDate) {
                visualitzarEvent(data[index]);
                i++;
            }
        } else {
            break;
        }

    }
}

function ordenarAscedentment(fitxer, clau){
    fitxer.sort(function (a,b){
        return a[clau] < b[clau];
    });
}

function sortJSON(data, key, orden) {
    return data.sort(function (a, b) {
        var x = a[key],
        y = b[key];

        if (orden === 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        if (orden === 'desc') {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
    });
}


function visualitzarEvent(data) {
    const contenidor = document.createElement("div");
    const contenidor2 = document.createElement("div");
    const contenidor3 = document.createElement("div");
    const titol = document.createElement("h4");
    const link1 = document.createElement("a");
    const link2 = document.createElement("a");
    const text = document.createElement("p");
    const dia = document.createElement("p");
    dia.innerHTML = data.startDate;
    contenidor.className = "col-lg-4 col-md-6 d-flex align-items-stretch mt-4";
    contenidor2.className = "shadow icon-box";
    link1.innerHTML = data.name;
    text.innerHTML = data.description;
    link2.href = "#";
    link2.className = "btn btn-skin btn--radius-2";
    link2.innerHTML = "Veure esdeveniment";
    titol.appendChild(link1);
    contenidor2.appendChild(titol);
    contenidor2.appendChild(dia);
    contenidor2.appendChild(text);
    contenidor2.appendChild(link2);
    contenidor.appendChild(contenidor2);
    eventsProxims.appendChild(contenidor);

}

cargarDatos();