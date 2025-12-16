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

let minorWeigth;
let pesoBici;

// console.log(bicicletta[0].peso);
//console.log(bicicletta[1].peso);

// console.log(bicicletta[1].peso);

console.log(bicicletta.length);



for (let i = 0; i < bicicletta.length; i++) {


    pesoBici = parseInt(bicicletta[i].peso);

    console.log(pesoBici);
    

    for (let y = 1; y < bicicletta.length; y++) {

        let pesoBiciCompare = parseInt(bicicletta[y].peso);
        
    console.log(pesoBiciCompare);

        if (pesoBici < pesoBiciCompare) {

            minorWeigth = pesoBici;

        }

        else if (pesoBici > pesoBiciCompare) {
            minorWeigth = pesoBiciCompare;
        }


    }
}

console.log(minorWeigth);
