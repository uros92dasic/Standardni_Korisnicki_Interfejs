function galerija(slika){
    document.getElementById("zoomImage").src = "images/"+slika.alt+".jpg";
    document.getElementById("zoomImage").alt = slika.alt;
}

/* grupa 1 */

var umotvorine = ['Bolje vrabac u ruci, nego golub na grani!', 'Gvozđe se kuje dok je vruće.', 'Ko drugome jamu kopa, sam u nju upada!', 'U laži su kratke noge...', 'Ko sa vragom tikve sadi, o glavi mu se lupaju!'];
var brojac = 0;

function prikazUmotvorina() {
    brojac++;
    if (brojac >= umotvorine.length)
        brojac = 0;
    return umotvorine[brojac];
}

setInterval(function () {
    document.getElementById('umotvorina').innerText = prikazUmotvorina();
}, 10000);

/* grupa 2 */

function sortirajTabelu1() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
  function sortirajTabelu2() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[1];
        y = rows[i + 1].getElementsByTagName("TD")[1];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
  function sortirajTabelu3() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[2];
        y = rows[i + 1].getElementsByTagName("TD")[2];
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

/* grupa 3 */

var seconds = 10;

function prikaziVreme() {
    seconds--;
    if (seconds <= 0) {
        clearInterval(timer);
    }
    return seconds;
}

var timer = setInterval(function () {
    document.getElementById('timer').innerText = prikaziVreme() + ' seconds';
}, 1000);


var poslednjiBroj = 1;

function slucajniBrojevi() {
    var brojevi = [];
    while (brojevi.length < 16) {
        var broj = Math.floor((Math.random() * 16) + 1);
        if (!brojevi.includes(broj)) {
            brojevi.push(broj);
        }
    }

    return brojevi;
}

function setovanjeBrojeva() {
    var brojevi = slucajniBrojevi();

    document.getElementsByTagName("td")[0].innerText = brojevi[0];
    document.getElementsByTagName("td")[1].innerText = brojevi[1];
    document.getElementsByTagName("td")[2].innerText = brojevi[2];
    document.getElementsByTagName("td")[3].innerText = brojevi[3];
    document.getElementsByTagName("td")[4].innerText = brojevi[4];
    document.getElementsByTagName("td")[5].innerText = brojevi[5];
    document.getElementsByTagName("td")[6].innerText = brojevi[6];
    document.getElementsByTagName("td")[7].innerText = brojevi[7];
    document.getElementsByTagName("td")[8].innerText = brojevi[8];
    document.getElementsByTagName("td")[9].innerText = brojevi[9];
    document.getElementsByTagName("td")[10].innerText = brojevi[10];
    document.getElementsByTagName("td")[11].innerText = brojevi[11];
    document.getElementsByTagName("td")[12].innerText = brojevi[12];
    document.getElementsByTagName("td")[13].innerText = brojevi[13];
    document.getElementsByTagName("td")[14].innerText = brojevi[14];
    document.getElementsByTagName("td")[15].innerText = brojevi[15];
}

function brojevi(broj) {
    if (seconds > 0) {
        var trenutniBroj = parseInt(broj.innerText);

        if (poslednjiBroj == trenutniBroj) {
            broj.innerText = '*';
            poslednjiBroj++;
        }

        if (poslednjiBroj == 17) {
            alert('Čestitam, pobedili ste!');
        }
    } else {
        alert('Isteklo Vam je vreme! Pokušajte ponovo.');
    }
}