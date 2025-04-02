
import { default as bookList } from "../mocks/books";
import Manager from "./components/manager";

/* Vyvinúť webovú aplikáciu za využitia knižnice React, ktorá bude slúžiť na správu informácií o obľúbených knihách. 
Užívateľské rozhranie bude vertikálne rozdelené na dve polovice. 
V ľavej časti sa bude nachádzať formulár na zadávanie údajov o knihe, ktorý bude obsahovať nasledujúce polia: 
 - názov (povinný údaj), 
 - autor, 
 - krátky opis (maximálne 300 znakov) 
 - obrázok. 
 
Pod formulárom bude umiestnené tlačidlo na uloženie údajov. Po jeho stlačení sa informácie o knihe uložia do aplikačnej pamäte (perzistencia dát nie je potrebná).
V pravej časti rozhrania sa bude nachádzať zoznam uložených kníh. Tento zoznam bude schopný zobraziť neobmedzený počet kníh a umožniť ich filtrovanie podľa názvu.
Po kliknutí na konkrétnu knihu sa zobrazí modálne okno s podrobnosťami o vybranej knihe (tie ktoré sme uložili cez formulár).
Pokiaľ ide o dizajn, je potrebné zabezpečiť responzívne zobrazenie, vrátane podpory pre menšie obrazovky s šírkou až do 320px. 
Inak je úroveň CSS aj samotné UI na rozhodnutí autora. Flexibilne sa môže meniť aj orientácia z vertikálneho na horizontálne delenie pri určitých šírkach obrazovky.
Použitie knižníc tretích strán nie je obmedzené.
 */
export default function Home() {
    return (
        <Manager initialBooks={bookList} />
    );
}
