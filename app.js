const wrapper = document.querySelector('#wrapper')

const pokemon = [

    {
        name: "Eevee",
        color:"yellow",
        type: "Normal",
        maxHp: 220,
        moves: ["Growl", "Tackle", "Quick Attack"],
        special: "Bouncy Bubble"

    },

    {
        name: "JigglyPuff",
        color:"pink",
        type: "Normal/Fairy",
        maxHp: 340,
        moves: ["Disarming Voice", "Charm", "Rollout"],
        special: "Calm Mind"

    },

    {
        name: "Bulbasaur",
        color:"green",
        type: "Grass/Poison",
        maxHp: 200,
        moves: ["Vine Whip", "Razor Leaf", "Poison Powder"],
        special: "Energy Ball"

    }

];


function renderItems() {
    wrapper.innerHTML = '';
    pokemon.forEach((item) => {
        const ele = document.createElement("div");
        const header = document.createElement("h1");
        const type = document.createElement("h3");
        const maxHp = document.createElement("h3");
        const moves = document.createElement("h3");
        const special = document.createElement("h3");
        // ele.style.color="red"
        header.innerHTML = item.name;
        type.innerHTML = item.type;
        maxHp.innerHTML = item.maxHp;
        moves.innerHTML = item.moves;
        special.innerHTML = item.special;
        ele.appendChild(header);
        ele.appendChild(type);
        ele.appendChild(maxHp);
        ele.appendChild(moves);
        ele.appendChild(special);
        wrapper.appendChild(ele);
    })
}

renderItems();

document.getElementById("form").addEventListener("click", () => {
    const obj ={
        name:document.getElementById("name").value
    }
    pokemon.push(obj)
    renderItems();
})
