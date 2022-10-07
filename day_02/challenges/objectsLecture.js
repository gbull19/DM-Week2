let pikachu = {
    name: 'Pikachu',
    types: [
        {
        name: 'Electric',
        weaknesses: ['Ground','Grass','Electric','Dragon'],
        strengths: ['Flying','Water']
        }
    ],
    evolutionChain: {
        count: 3,
        names: {
            baby: 'Pichu',
            teen: 'Pikachu',
            adult: 'Raichu'
        }
    },
    generation: 'Generation I',
    canEvolve: true,
    evolutionRequirements: "Thunder Stone",
    moves: [
        {
            name: "Thundershock",
            type: "Electric",
            damageType: "Special"
        },
        {
            name: "Dig",
            type: "Ground",
            damageType: "Physical"
        },
        {
            name: "Thunder Wave",
            type: "Electric",
            damageType: "Status"
        },
        {
            name: "Brick Break",
            type: "Fighting",
            damageType: "Physical"
        }
    ]
};

console.table(pikachu)
/*
console.log(
    `My ${pikachu.name} is the best Pokemon in the world\nIt is an ${pikachu.types[0].name} type Pokemon, which means that it is weak to ${pikachu.types[0].weaknesses} types, and strong against ${pikachu.types[0].strengths} types.\nIts adult evolved form is ${pikachu.evolutionChain.names.adult}. It needs a ${pikachu.evolutionChain.names.teen} to evolve into ${pikachu.evolutionChain.names.adult}, and it evolves from ${pikachu.evolutionChain.names.baby}!\nMy ${pikachu.name} knows many moves, and even though ${pikachu.name} is an ${pikachu.types[0].name} type, not all of its moves are that type.\nFor example, my ${pikachu.name} knows ${pikachu.moves[3].name} which is a ${pikachu.moves[3].type} type move, and does ${pikachu.moves[3].damageType} damage.`
);
*/

// Write a function that creates a grammatically correct sentence, spelling out all of Pikachu's weaknesses, strengths, and moves (Their names, types, and damage types) and logs it to the console.

const pikaParagraph = () => {
    const {name} = pikachu;
    const {name: typeName, weaknesses, strengths} = pikachu.types[0];
    const {baby, adult, teen} = pikachu.evolutionChain.names;
    const {evolutionRequirements} = pikachu;
    const {name: altMoveName, type: altMoveType, damageType: altDamageType} = pikachu.moves[3];
    const weaknessesStr = weaknesses.sort() + "";
    const strengthsStr = strengths.sort() + "";
    return "My " + name + " is the best Pokemon in the world!\nIt is a " + typeName + " type Pokemon, which means that it is weak to " + weaknessesStr + " types, and strong against " + strengthsStr + " types.\nIts adult evolved form is " + adult + ". It needs a " + evolutionRequirements + " to evolve into " + adult + ", and it evolves from " + baby + "!\nMy " + name + " knows many moves and, even though " + name + " is an " + typeName + " type, not all of its moves are that type.\nFor example, my " + name + " knows " + altMoveName + " which is a " + altMoveType + " type move, and does " + altDamageType + " damage.";
}
console.log(pikaParagraph());