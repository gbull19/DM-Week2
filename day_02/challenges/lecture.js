class pokeBall {
    constructor (name, type, move, hpStat, attackStat, defenseStat, spAttackStat, spDefenseStat, speedStat) {
        this.name = name;
        this.type = type;
        this.move = move;
        this.hpStat = hpStat;
        this.attackStat = attackStat;
        this.defenseStat = defenseStat;
        this.spAttackStat = spAttackStat;
        this.spDefenseStat = spDefenseStat;
        this.speedStat = speedStat;
    };
    attack() {
        return `${this.name} attacks with ${this.move}.`
    };
}

let battle = (pokemon1, pokemon2) => {
    return `${pokemon1.name} attacks ${pokemon2.name} with ${pokemon1.move}!`
}

let MewTwo = new pokeBall ("MewTwo", "Psychic", "Psystrike", 106, 110, 90, 154, 90, 130);
// console.log(MewTwo.attack());

let Gengar = new pokeBall ("Gengar", "Ghost", "Shadowball", 60, 65, 60, 130, 75, 110);
// console.log(Gengar.attack());

console.log(battle(MewTwo, Gengar));

// Math.round((0.5 * attackPower * attackStat/defenseStat * modifier)+1)
// console.log(Math.round(0.5 * 100 * 110/60 * 1)+1) //MewTwo attack
// console.log(Math.round(0.5 * 80 * 65/90 * 1)+1) //Gengar attack
// console.log(Math.round(0.5 * pokemon1.attackPower * pokemon1.attackStat/pokemon2.defenseStat * modifier)+1) //Gengar attack