const squadreDiCalcio = [
    {
        'nomeSquadra': 'Manchester United',
        'puntiFatti': 0,
        'falliSubiti' : 0

    },

    {
        'nomeSquadra': 'Torino',
        'puntiFatti': 0,
        'falliSubiti' : 0
    },

    {
        'nomeSquadra': 'Cagliari',
        'puntiFatti': 0,
        'falliSubiti' : 0
    },

    {
        'nomeSquadra': 'Barcellona',
        'puntiFatti': 0,
        'falliSubiti' : 0
    },

    {
        'nomeSquadra': 'Juventus',
        'puntiFatti': 0,
        'falliSubiti' : 0
    },

    {
        'nomeSquadra': 'Milan',
        'puntiFatti': 0,
        'falliSubiti' : 0
    },

];

for (let i = 0; i < squadreDiCalcio.length; i++) {

    
    squadreDiCalcio[i].puntiFatti = inrangeRandomNumberGenerator(0,20);

    
    squadreDiCalcio[i].falliSubiti = inrangeRandomNumberGenerator(0,20);
    console.log(squadreDiCalcio[i].falliSubiti);
    

}

// Vengono immessi in un nuovo Array solo i nomi dei giocatori con i falli subiti

const nomiDelleSqadreEFalliSubiti = [
];



for (let i = 0; i < squadreDiCalcio.length; i++) {
    nomiDelleSqadreEFalliSubiti.push(squadreDiCalcio[i].nomeSquadra);
    nomiDelleSqadreEFalliSubiti.push(squadreDiCalcio[i].falliSubiti);
}


console.log(nomiDelleSqadreEFalliSubiti);