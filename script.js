function showInfo(ingredient) {
    let text = "";
    let image = "";

    if (ingredient === "oxybenzone") {
        text = "Oksibenzons (C14H12O3): Plaša spektra UV filtrs un ketons ar diviem benzola gredzeniem, kas ļoti efektīvi izkliedē enerģiju, bet ir īpaši bīstams koraļļu rifiem, izraisot to balēšanu un DNS bojājumus.";
        image = "oksibenzons.gif";
    }
    else if (ingredient === "avobenzone") {
        text = "Avobenzons (C20H22O3): Ķīmiskais filtrs, kura aromātiskie gredzeni un konjugētās dubultsaites absorbē UVA staru enerģiju, pārvēršot to siltumā, taču gaismas ietekmē tas var sadalīties produktos, kas ietekmē ūdens organismu hormonālo sistēmu.";
        image = "avobenzone.png";
    }
    else if (ingredient === "zinc") {
        text = "Cinka oksīds (ZnO): Minerāls, kas veido fizikālu barjeru un izkliedē UV starojumu, darbojoties kā neorganisks režģis, kas nanodaļiņu veidā var kļūt toksisks planktonam un mazajiem vēžveidīgajiem.";
        image = "znnnno.png";
    }
    else if (ingredient === "titanium") {
        text = "Titāna dioksīds (TiO2): Neorganisks fizikālais filtrs, kas kā mikroskopisks spogulis atstaro UV starus, un tā stabilā kristāliskā struktūra ar titāna oksidēšanās pakāpi +4 nodrošina augstu izturību, taču nanodaļiņu formā tas var radīt oksidatīvo stresu ūdensaugiem.";
        image = "TiO.png";
    }
    else if (ingredient === "ūdens") {
        text = "Kalpo kā galvenais polārais šķīdinātājs, kurā tiek izkliedētas visas pārējās produkta sastāvdaļas.";
        image = "udens.png";
    }
    else if (ingredient === "glicerīns") {
        text = "Glicerīns (C3H8O3): Trīsvērtīgais spirts, kura trīs hidroksilgrupas (-OH) veido spēcīgas ūdeņraža saites ar ūdeni, nodrošinot intensīvu ādas mitrināšanu un ātru bioloģisko noārdīšanos vidē.";
        image = "glycerol.png";
    }
    else if (ingredient === "Hialuronskābe") {
        text = "Hialuronskābe ((C14H21NO11)n): Dabīgs biopolimērs, kura daudzās karboksilgrupas un hidroksilgrupas piesaista milzīgu ūdens daudzumu, aizpildot starpšūnu telpu, un šī viela ir pilnībā bioloģiski noārdāma un videi nekaitīga.";
        image = "Hyaluronic acid.png";
    }
    else if (ingredient === "Skvalāns") {
        text = "Skvalāns (C30H62): Piesātināts ogļūdeņradis (alkāns), kas imitē ādas dabisko aizsargslāni un ir ļoti stabils pret oksidēšanos, turklāt, ja tas iegūts no augiem, tas ir pilnībā videi draudzīgs un ilgtspējīgs.";
        image = "Squalene.gif";
    }
    else if (ingredient === "Kakao sviests") {
        text = "Kakao sviests (C55H98O6): Barojošs triglicerīdu maisījums ar garām taukskābju ķēdēm, kas veido aizsargbarjeru uz ādas, un, lai gan tā ir dabiska viela, tās ieguve ir saistīta ar globāliem tropu mežu saglabāšanas jautājumiem.";
                image = "kakao sviests.jpg";
    }
    else if (ingredient === "Bisabolols") {
        text = "Bisabolols (C15H26O): Nomierinošs terpēnu spirts ar specifisku telpisko uzbūvi, kas efektīvi mazina ādas kairinājumu un apsārtumu, būdams augu izcelsmes un videi pilnīgi drošs savienojums.";
                image = "bisabolols.gif";
    }
    else if (ingredient === "Glicerilstearāts") {
        text = "Glicerilstearāts (C21H42O4): Emulgators un esteris ar polāru un nepolāru molekulas daļu, kas notur kopā eļļas un ūdens fāzes stabilā emulsijā, un vidē tas neuzkrājas, jo bioloģiski ātri sadalās.";
        image = "GLYCERYL STEARATE.png";
    }
    else if (ingredient === "Oktinoksāts") {
        text = "Oktinoksāts (C18H26O3): Populārs UVB filtrs un esteris, kas ātri absorbē saules enerģiju, lai novērstu apdegumus, taču tas mēdz uzkrāties zivju audos un var darboties kā endokrīnais grāvējs.";
                        image = "oktinoksāts.gif";
    }
    else if (ingredient === "Meksorils") {
        text = "Meksorils (C28H34O8S2): Moderns un fotostabils filtrs ar sulfogrupām (-SO3H), kas padara to šķīstošu ūdenī un efektīvi pasargā ādu no fotonovecošanās, vienlaikus būdams videi drošāka alternatīva.";
                image = "meksorils.png";
    }

    document.getElementById("info-text").innerText = text;

    const img = document.getElementById("info-image");
    
    if (image !== "") {
        img.src = image;
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
}