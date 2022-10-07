class pokeBall {
    constructor (name, type, move, hpStat, attackStat, defenseStat, spAttackStat, spDefenseStat, speedStat, weaknesses, resistances) {
        this.name = name;
        this.type = type;
        this.move = move;
        this.stats = {
            hpStat,
            attackStat,
            defenseStat,
            spAttackStat,
            spDefenseStat,
            speedStat
        };
        this.weaknesses = [weaknesses];
        this.resistances = [resistances];
        
    };
    attack() {
        return `${this.name} attacks with ${this.move}.`
    };
}
let MewTwo = new pokeBall ("MewTwo", "Psychic", "Psystrike", 106, 110, 90, 154, 90, 130, ["Bug", "Ghost", "Dark"], ["Fighting", "Psychic"]);
// console.log(MewTwo.stats.hpStat);

let Gengar = new pokeBall ("Gengar", "Ghost", "Shadow Ball", 60, 65, 60, 130, 75, 110, ["Normal", "Grass", "Fighting", "Poison", "Bug", "Fairy"], ["Ground", "Psychic", "Ghost", "Dark"]);
// console.log(Gengar.attack());

let battle = (pokemon1, pokemon2) => {
    let hurt = Math.round(0.5 * pokemon1.stats.attackStat * pokemon1.stats.attackStat/pokemon2.stats.defenseStat+1);
    let hpLeft = pokemon2.stats.hpStat - hurt;
    console.log(`${pokemon1.name} attacks ${pokemon2.name} with ${pokemon1.move}!\n${pokemon1.name} deals ${hurt} damage to ${pokemon2.name}`);
    if (hurt >= pokemon2.stats.hpStat) {
        return `${pokemon2.name} fainted.\n`;
    } else {
        return `${pokemon2.name} now has ${hpLeft} hp.\n`;
    };
}

console.log(battle(Gengar, MewTwo));
console.log(battle(MewTwo, Gengar));

// Math.round((0.5 * attackPower * attackStat/defenseStat * modifier)+1)
// console.log(Math.round(0.5 * 100 * 110/60 * 1)+1) //MewTwo attack
// console.log(Math.round(0.5 * 80 * 65/90 * 1)+1) //Gengar attack
// console.log(Math.round(0.5 * pokemon1.attackPower * pokemon1.attackStat/pokemon2.defenseStat * modifier)+1) //Gengar attack