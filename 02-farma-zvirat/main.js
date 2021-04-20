let krava = {
    jmeno: 'Kravicka',
    foto: 'obrazky/krava.jpg'
};

let ovecka = {
    jmeno: 'Ovecka',
    foto: 'obrazky/ovce.jpg'
};



// Vytvor obrazek zviratka krava s fotkou a popiskem.

// 1. Zacneme vytvorenim obalujiciho div element s tridou 'zvire'.

    let zvire = document.createElement('div');
    zvire.className = 'zvire';

    let zvire1 = document.createElement('div');
    zvire1.className = 'zvire';

// 2. Nyni vytvor dva elementy pro obrazek a jmeno zvirete, ktere budou uvnitr naseho obalujiciho div elementu zvire.
    //2.1. Vytvor img element s tridou 'foto'. Jako src obrazku pridej hodnotu objektu krava.

    let fotoZvirete = document.createElement('img');
    fotoZvirete.className = 'foto';
    fotoZvirete.src = krava.foto;
    

    let fotoZvirete1 = document.createElement('img');
    fotoZvirete1.className = 'foto';
    fotoZvirete1.src = ovecka.foto;

    //2.2. Dale vytvor div element s tridou 'jmeno'. Jako text elementu zobraz hodnotu vlastnosti jmeno objektu krava.

    let jmenoZvirete = document.createElement('span');
    jmenoZvirete.className = 'jmeno';
    jmenoZvirete.innerHTML = krava.jmeno;
    

    let jmenoZvirete1 = document.createElement('span');
    jmenoZvirete1.className = 'jmeno';
    jmenoZvirete1.innerHTML = ovecka.jmeno;

    //2.3. Zabal fotoZvire a jmenoZvirete do obalovaciho divu zvire, (psst zvire.appendChild)

    zvire.appendChild(fotoZvirete);
    zvire.appendChild(jmenoZvirete);

    zvire1.appendChild(fotoZvirete1);
    zvire1.appendChild(jmenoZvirete1);

// 3. Nakonec pojdme nas kod zapojit do html stranky. Na html strance vyber existujici element s tridou farma.
// a vloz do nej obalujici element zvire (pssst appendChild)

  let farma = document.querySelector('.farma');
  farma.append(zvire, zvire1);

  


// Bonus
// Co kdybychom meli program, kde tech zvirat je vic - objekt krava, objekt ovce, objekt prase...
// Musela bych pro kazdy objekt mit samostatnou promennou...jde to lépe?


