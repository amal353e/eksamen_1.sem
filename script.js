// ------------------------------------------------ burger menu ---------------------------------------------
// variabel der refere til "button"
const btn = document.querySelector("button");
// variabel der refere til "nav"
const nav = document.querySelector("nav");

// Lav en function til "button" som hedder "toggleMenu"
function toggleMenu() {
  // Toggle en klasse på nav vha. classList.toggle og Toggle en klasse, der hedder "shown"
  nav.classList.toggle("shown");

  //   Variabel der hedder menu som svarer til nav-variablen som har klassen "shown" ved at bruge classList.contains("")
  const menu = nav.classList.contains("shown");

  // Lav en if/else - if (...) {...} else {...}

  // spørg om menu i "if"
  if (menu) {
    // Hvis nav har klassen "shown", sæt til btn.textContent til "Luk" - viser menuen
    btn.classList.add = "open";

    // Hvis ikke nav har klassen "shown" så sæt btn.textContent til "Menu" - viser ikke menuen
  } else {
    btn.classList.remove = "open";
  }
}
// Tilføj et klik-event til bm så den sætter toggleMenu funktionen igang
btn.addEventListener("click", toggleMenu);
//
