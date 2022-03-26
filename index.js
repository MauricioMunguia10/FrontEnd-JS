const api_url = `https://pokeapi.co/api/v2/pokemon/`

const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("img/snorlaxzz.gif")
            pokeImageB("img/snorlaxzz.gif")
            pokeImageC("img/snorlaxzz.gif")
            pokeImageD("img/snorlaxzz.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);

            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            let pokeImgb = data.sprites.back_default;
            pokeImageB(pokeImgb);
            console.log(pokeImgb);

            let pokeImgc = data.sprites.other.dream_world.front_default;
            pokeImageC(pokeImgc);
            console.log(pokeImgc);

            let pokeImgd = data.sprites.other.home.front_default;
            pokeImageD(pokeImgd);
            console.log(pokeImgd);

            let name = data.name;
            pokeNam(name);
            console.log(name);

            let altura = data.height;
            pokeAltura(altura);
            console.log(altura);

            let peso = data.weight;
            pokePeso(peso);
            console.log(peso);

            let xp = data.base_experience;
            pokeXp(xp);
            console.log(xp);


            let id = data.id;
            pokeId(id);
            console.log(id);

            let habilidad = data.abilities.map(ability => ability.ability.name);
            pokehabilidad(habilidad);
            console.log(habilidad);

            let movimiento = data.moves.map(move => move.move.name);
            pokeMovimiento(movimiento);
            console.log(movimiento);

            let tipo = data.types.map(typ => typ.type.name);
            pokeTipo(tipo);
            console.log(tipo);

            let estadisticasHp = data.stats[0].base_stat;
            pokeEstadisticasHp(estadisticasHp);
            console.log(estadisticasHp);

            let estadisticasAtk = data.stats[1].base_stat;
            pokeEstadisticasAtk(estadisticasAtk);
            console.log(estadisticasAtk);

            let estadisticasDef = data.stats[2].base_stat;
            pokeEstadisticasDef(estadisticasDef);
            console.log(estadisticasDef);

            let estadisticasSAtk = data.stats[3].base_stat;
            pokeEstadisticasSAtk(estadisticasSAtk);
            console.log(estadisticasSAtk);

            let estadisticasSDef = data.stats[4].base_stat;
            pokeEstadisticasSDef(estadisticasSDef);
            console.log(estadisticasSDef);

            let estadisticasSPD = data.stats[5].base_stat;
            pokeEstadisticasSPD(estadisticasSPD);
            console.log(estadisticasSPD);
        }

    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeImageB = (url) => {
    const pokePhotoB = document.getElementById("pokeImgB");
    pokePhotoB.src = url;
}

const pokeImageC = (url) => {
    const pokePhotoC = document.getElementById("pokeImgC");
    pokePhotoC.src = url;
}

const pokeImageD = (url) => {
    const pokePhotoD = document.getElementById("pokeImgD");
    pokePhotoD.src = url;
}

const pokeNam = (name) =>{
    const nombre = document.getElementById("name");
    nombre.innerHTML = ("Nombre: "+ name);
}

const pokePeso = (peso) =>{
    const pes = document.getElementById("peso");
    pes.innerHTML = ("Peso: "+ peso);
}

const pokeAltura = (altura) =>{
    const altu = document.getElementById("altura");
    altu.innerHTML = ("Altura: "+ altura);
}

const pokeXp = (xp) =>{
    const exp = document.getElementById("xp");
    exp.innerHTML = ("Xp: "+ xp);
}

const pokeId = (id) =>{
    const idi = document.getElementById("id");
    idi.innerHTML = ("ID: "+ id);
}

const pokehabilidad = (habilidad) =>{
    const ability = document.getElementById("habilidad");
    ability.innerHTML = (habilidad);
}

const pokeTipo = (tipo) =>{
    const tip = document.getElementById("tipo");
    tip.innerHTML = ("Tipo: "+ tipo);
}

const pokeMovimiento = (movimiento) =>{
    const movimi = document.getElementById("movimiento");
    movimi.innerHTML = (movimiento);
}

const pokeEstadisticasHp = (estadisticasHp) =>{
    const estadiHp = document.getElementById("estadisticasHp");
    estadiHp.innerHTML = ("Hp: " + estadisticasHp);
}

const pokeEstadisticasAtk = (estadisticasAtk) =>{
    const estadiAtk = document.getElementById("estadisticasAtk");
    estadiAtk.innerHTML = ("Atk: " + estadisticasAtk);
}
const pokeEstadisticasDef = (estadisticasDef) =>{
    const estadiDef = document.getElementById("estadisticasDef");
    estadiDef.innerHTML = ("Def: " + estadisticasDef);
}

const pokeEstadisticasSAtk = (estadisticasSAtk) =>{
    const estadiSAtk = document.getElementById("estadisticasSAtk");
    estadiSAtk.innerHTML = ("SAtk: " + estadisticasSAtk);
}
const pokeEstadisticasSDef = (estadisticasSDef) =>{
    const estadiSDef = document.getElementById("estadisticasSDef");
    estadiSDef.innerHTML = ("SDef: " + estadisticasSDef);
}
const pokeEstadisticasSPD = (estadisticasSPD) =>{
    const estadiSPD = document.getElementById("estadisticasSPD");
    estadiSPD.innerHTML = ("SPD: " + estadisticasSPD);
}

// Menus
function easyTabs() {
    var groups = document.querySelectorAll('.t-container');
    if (groups.length > 0) {
      for (i = 0; i < groups.length; i++) {
        var tabs = groups[i].querySelectorAll('.t-tab');
        for (t = 0; t < tabs.length; t++) {
          tabs[t].setAttribute("index", t+1);
          if (t == 0) tabs[t].className = "t-tab selected";
        }
        var contents = groups[i].querySelectorAll('.t-content');
        for (c = 0; c < contents.length; c++) {
          contents[c].setAttribute("index", c+1);
          if (c == 0) contents[c].className = "t-content selected";
        }
      }
      var clicks = document.querySelectorAll('.t-tab');
      for (i = 0; i < clicks.length; i++) {
        clicks[i].onclick = function() {
          var tSiblings = this.parentElement.children;
          for (i = 0; i < tSiblings.length; i++) {
            tSiblings[i].className = "t-tab";
          }
          this.className = "t-tab selected";
          var idx = this.getAttribute("index");
          var cSiblings = this.parentElement.parentElement.querySelectorAll('.t-content');
          for (i = 0; i < cSiblings.length; i++) {
            cSiblings[i].className = "t-content";
            if (cSiblings[i].getAttribute("index") == idx) {
              cSiblings[i].className = "t-content selected";
            }
          }
        };
      }
    }
  }
  (function() { 
    easyTabs();
  })();
