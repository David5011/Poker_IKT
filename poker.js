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
  "10-C",
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
  "10-D",
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
  "10-H",
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
  "10-S",
  "J-S",
  "Q-S",
  "K-S",
];


const random = [];
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
cserelendo = /*document.getElementsByClassName("jatekos")*/ valasztott;

function kártyaTörlés(kartyak) {
    let removedDB=0;
  for (let i = 0; i < 5; i++) {
    if (cserelendo[i] == 1) {
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




randomizalas(sorted);
var kartyak = [random[0], random[1], random[2], random[3], random[4]];
random.splice(0, 5);

console.log(kartyak);
kártyaTörlés(kartyak);
console.log(kartyak);
kártyaHúz(kartyak);
console.log(kartyak);