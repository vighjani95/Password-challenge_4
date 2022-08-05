document.querySelector('#jelszo').addEventListener ('change', jelszoValtozasKereso);
document.querySelector('#jelszo').addEventListener ('keyup', jelszoValtozasKereso);

function jelszoValtozasKereso(event){
    const eredmeny = jelszoEllenorzes(event)
    megjelenito(eredmeny)
}

function jelszoEllenorzes(event){
    const beirtJelszo = event.target.value;
    let hanyszorA = 0;
    let hanyszorC = 0;
    let hanyszorF = 0;
    for (const betu of beirtJelszo){
        if (betu === 'a'){
            hanyszorA++
        }
        if (betu === 'c'){
            hanyszorC++
        }
        if (betu === 'f'){
            hanyszorF++
        }
    }
    if (hanyszorA === 2 && hanyszorC === 2 && hanyszorF === 2){
        return true
    }
    return false;
}

function megjelenito(megjelenit){
    const iras = document.querySelector('#szoveg')
    iras.style.display = megjelenit ? 'block' : 'none'
}