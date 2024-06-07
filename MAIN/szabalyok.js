function szabalyok() {
    const game_div = document.getElementById('game');
    game_div.innerHTML = `
        <h3>A lapok erősorrendje</h3>
        <p>Az ötlapos póker játékot hagyományos 52-es franciakártya-paklival játsszák. Az 5 lapos póker játék szabályai előtt ismerjük meg a pókerkezek rangsorát. Ez nem más, mint az 5 lapos póker lapok erőssége.</p>
        <ol>
        <li>Royal Flush vagy rojálflös: színsor 10-estől ászig, mindent visz</li>
        <li>Színsor: 5 azonos színű lap sorrendben</li>
        <li>Póker: négy egyforma lap</li>
        <li>Full House vagy full: egy pár és egy drill</li>
        <li>Flush vagy flös: öt egyforma színű lap</li>
        <li>Sor: sorrendben öt egymást követő lap</li>
        <li>Drill: három egyforma lap</li>
        <li>Két pár</li>
        <li>Egy pár: két egyforma lap</li>
        <li>Magas lap: általában bubitól ászig</li>
        </ol>
        <h3>Az 5 lapos póker játékszabályai</h3>
        <ul>
        <li>Az 5 lapos póker kétféle módon indulhat: az egyik változat az ante, ahol minden játékos ugyanakkora tétet fizet be. A másik a vakjáték, ahol az osztótól balra elsőként ülő játékos a kisvak, aki általában minimális licitet rak, a tőle tovább balra ülő a nagyvak, aki az előző tét kétszeresét teszi. A többieknek a játékba kerüléshez a nagyvaktól kezdve kell a licitről megállapodni.</li>
        <li>Az osztó minden játékosnak öt lapot oszt tőle balra, az óramutató járásával azonos irányba haladva.</li>
        <li>A játékosok lerakják a tétjeiket.</li>
        <li>A játékosok megnézik a lapjaikat, és eldöntik, hogy kérnek-e új kártyát a régit letéve, passzolnak vagy emelnek, miközben a lehető legjobb kezet próbálják összerakni.</li>
        <li>Ebben a körben a játékosok eldönthetik, hogy passzolnak vagy emelnek. Ha egy játékos emeli a tétet, az őt követő játékosok csak akkor maradhatnak játékban, ha ők is elfogadják az emelést. Másik eshetőség: ha mindenki kiszáll, akkor az a játékos viszi a bankot, aki egyedüliként emelt.</li>
        <li>A bent maradó játékosok megmutatják a lapjaikat.</li>
        <li>A legerősebb kézzel rendelkező játékos nyer.</li>
        <li>Ha kettő vagy több játékosnak egyenlő lapértékei vannak, akkor egyenlően osztoznak a nyereményen.</li>
        </ul>
        <h3>Alaplépések</h3>
        <ul>
        <li>A 0-ás tétrakás az ellenőrzés.</li>
        <li>Tartjuk a tétet, ha valaki emeléséhez társulunk.</li>
        <li>Emelünk, amikor megnöveljük az előző tét összegét.</li>
        <li>Passzolunk, vagy felmutatjuk a lapjainkat, kiszállunk a játékból.</li>
    `;
}