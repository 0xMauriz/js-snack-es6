const bicicletta = [
    {
        'nomeBicicletta': 'Bicicletta Intergalactic Turbo',
        'peso': '30Kg'

    },

    {
        'nomeBicicletta': 'Bicicletta BMX',
        'peso': '31Kg'
    },

    {
        'nomeBicicletta': 'Mountain Bike',
        'peso': '27Kg'
    },

    {
        'nomeBicicletta': 'Bicicletta Intel 5',
        'peso': '32Kg'
    },

    {
        'nomeBicicletta': 'Bicicletta Medical One',
        'peso': '29Kg'
    },

    {
        'nomeBicicletta': 'Bicicletta Thunderbolt Galaxy',
        'peso': '37Kg'
    },

    {
        'nomeBicicletta': 'Bicicletta Mega Saturday',
        'peso': '40Kg'
    },

];

let minorWeigth = parseInt(bicicletta[0].peso);
let pesoBici;

// console.log(bicicletta[0].peso);
//console.log(bicicletta[1].peso);

// console.log(bicicletta[1].peso);

//console.log(bicicletta.length);

for (let i = 1; i < bicicletta.length; i++) {
    let pesoBici = parseInt(bicicletta[i].peso);

    if (pesoBici < minorWeigth) {
        minorWeigth = pesoBici;
    }
}

console.log(minorWeigth);
