let sorted = [
  "A-C",
  "2-C",
  "3-C",
  "4-C",
  "5-C",
  "6-C",
  "7-C",
  "8-C",
  "9-C",
  "1-C",
  "J-C",
  "Q-C",
  "K-C",
  "A-D",
  "2-D",
  "3-D",
  "4-D",
  "5-D",
  "6-D",
  "7-D",
  "8-D",
  "9-D",
  "1-D",
  "J-D",
  "Q-D",
  "K-D",
  "A-H",
  "2-H",
  "3-H",
  "4-H",
  "5-H",
  "6-H",
  "7-H",
  "8-H",
  "9-H",
  "1-H",
  "J-H",
  "Q-H",
  "K-H",
  "A-S",
  "2-S",
  "3-S",
  "4-S",
  "5-S",
  "6-S",
  "7-S",
  "8-S",
  "9-S",
  "1-S",
  "J-S",
  "Q-S",
  "K-S",
];

function c_create(number1, number2, kinekaköre) {
  let card = document.createElement("img");
  card.src = "Forrás/" + number2 + "-" + number1 + ".png";
  card.title = number1 + "_" + number2;
  card.alt = number1 + "_" + number2;
  card.id = number1 + "_" + number2;
  card.classList = "cards";
  document.getElementById(kinekaköre).appendChild(card); //document.getElementById helyére annak a halmaznak az id-ét kell beírni, ahová beakarjuk illeszteni a kártyát.
}
function deleteelement(id) {
  let elements = document.getElementById(id);
  while (elements.hasChildNodes()) {
      elements.removeChild(elements.firstChild);
  }
}

var random = [];
function randomizalas(sorted) {
  for (let i = 0; i < 52; i++) {
    let rnd = Math.floor(Math.random() * sorted.length);
    random.push(sorted[rnd]);
    let index = sorted.indexOf(random[random.length - 1]);
    if (index > -1) {
      sorted.splice(index, 1);
    }
  }
}

let valasztott = [0, 0, 1, 1, 0];
cserelendo = document.getElementsByName("kartya") /*valasztott*/;

function kártyaTörlés(kartyak) {
    let removedDB=0;
  for (let i = 0; i < 5; i++) {
    if (cserelendo[i].checked) {
      //1 = is checked
      let removedElement = kartyak.splice(i-removedDB, 1);
        removedDB++
      //console.log(kartyak);
      //console.log(removedElement);
    }
  }
}

function kártyaHúz(kartyak) {
  while (kartyak.length != 5) {
    kartyak.push(random[0]);
    random.splice(0, 1)
  }
}
function osztas(){
  kartyak = [random[0], random[1], random[2], random[3], random[4]];
  random.splice(0, 5);
}
function kiiras(){
  deleteelement("jatekos") //!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  for(let i = 0;i<kartyak.length;i++){
    if (kartyak[i][0] !== "1") {
      c_create(kartyak[i][2], kartyak[i][0], "jatekos"); //!!!!!!!!!!!!!!!!!!!!
  } else {
      c_create(kartyak[i][2], "10", "jatekos"); //!!!!!!!!!!!!!!!!!!
  }
  }
}

function main(){
  randomizalas(sorted);
  osztas();
  kiiras();
}

function újrahúz(){
  kártyaTörlés(kartyak);
  kártyaHúz(kartyak);
  kiiras()
}


var kartyak = []