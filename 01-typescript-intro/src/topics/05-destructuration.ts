export{};

interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details
}

interface Details{
    author: string
    year: number
}

const details: Details = {
    author: "Ed Sheeran",
    year: 2015
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: details
}

// const song = 'new song';

// const { 
//     song: songDes, 
//     audioVolume: volDes, 
//     details:{author: aut}
// } = audioPlayer;
const { song: songDes, audioVolume: volDes, details:det} = audioPlayer;
const { author:aut } = det;

// console.log(song, songDes, volDes, aut);

const pokemons: string[] = [ 'bulbasor','charmander','squartel' ];

const [, , , p4 = 'Este pokemon no esta registrado en tu Pokedex'] = pokemons;

// console.log(`El primer pokemon es: ${p1}`);
// console.log(`El segundo pokemon es: ${p2}`);
console.log(`El cuarto pokemon es: ${p4}`);
