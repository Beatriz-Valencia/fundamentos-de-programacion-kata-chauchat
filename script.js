function chauchat(cargador) {
    let disparo = Math.random() * 100; 
    let disparosSeguidos = 0;
    if (disparo > 80) { 
        console.log("Illo, me he quedao pillá!");
    } else { 
        for (let i = 0; i < 7; i++) {
            if (disparosSeguidos == 3) {
                disparosSeguidos = 0;
                console.log("\n");
                i--; 
            } else {
                console.log(cargador[i]);
                disparosSeguidos++;
            }
        }
    }
}
let cargador = ["pium!", "pium!", "pium!", "pium!", "pium!", "pium!", "pium!"];
chauchat(cargador);
