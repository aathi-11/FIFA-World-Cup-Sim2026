import type { Player, PlayerPosition, Team } from '../types';
import { realPlayersData } from './realPlayersData';

// Real-world rosters for major contenders (expanded to exactly 26 players: 3 GK, 9 DEF, 8 MID, 6 FWD)
const preloadedSquads: Record<string, Omit<Player, 'id'>[]> = {
  ARG: [
    // GKs (3)
    { name: "Emiliano Martinez", age: 33, position: "GK", rating: 89, form: 1.0, injured: false, suspended: false, club: "Aston Villa" },
    { name: "Geronimo Rulli", age: 34, position: "GK", rating: 80, form: 1.0, injured: false, suspended: false, club: "Marseille" },
    { name: "Walter Benitez", age: 33, position: "GK", rating: 81, form: 1.0, injured: false, suspended: false, club: "PSV" },
    // DEFs (9)
    { name: "Cristian Romero", age: 28, position: "DEF", rating: 89, form: 1.0, injured: false, suspended: false, club: "Tottenham" },
    { name: "Lisandro Martinez", age: 28, position: "DEF", rating: 85, form: 1.0, injured: false, suspended: false, club: "Manchester United" },
    { name: "Nicolas Otamendi", age: 38, position: "DEF", rating: 79, form: 1.0, injured: false, suspended: false, club: "Benfica" },
    { name: "Nahuel Molina", age: 28, position: "DEF", rating: 81, form: 1.0, injured: false, suspended: false, club: "Atletico Madrid" },
    { name: "Nicolas Tagliafico", age: 33, position: "DEF", rating: 80, form: 1.0, injured: false, suspended: false, club: "Lyon" },
    { name: "Gonzalo Montiel", age: 29, position: "DEF", rating: 78, form: 1.0, injured: false, suspended: false, club: "Sevilla" },
    { name: "Marcos Acuna", age: 34, position: "DEF", rating: 79, form: 1.0, injured: false, suspended: false, club: "River Plate" },
    { name: "German Pezzella", age: 34, position: "DEF", rating: 77, form: 1.0, injured: false, suspended: false, club: "River Plate" },
    { name: "Leonardo Balerdi", age: 27, position: "DEF", rating: 79, form: 1.0, injured: false, suspended: false, club: "Marseille" },
    // MIDs (8)
    { name: "Alexis Mac Allister", age: 27, position: "MID", rating: 87, form: 1.0, injured: false, suspended: false, club: "Liverpool" },
    { name: "Enzo Fernandez", age: 25, position: "MID", rating: 85, form: 1.0, injured: false, suspended: false, club: "Chelsea" },
    { name: "Rodrigo De Paul", age: 32, position: "MID", rating: 84, form: 1.0, injured: false, suspended: false, club: "Atletico Madrid" },
    { name: "Leandro Paredes", age: 31, position: "MID", rating: 81, form: 1.0, injured: false, suspended: false, club: "AS Roma" },
    { name: "Giovani Lo Celso", age: 30, position: "MID", rating: 82, form: 1.0, injured: false, suspended: false, club: "Real Betis" },
    { name: "Exequiel Palacios", age: 27, position: "MID", rating: 83, form: 1.0, injured: false, suspended: false, club: "Bayer Leverkusen" },
    { name: "Guido Rodriguez", age: 32, position: "MID", rating: 78, form: 1.0, injured: false, suspended: false, club: "West Ham" },
    { name: "Thiago Almada", age: 25, position: "MID", rating: 79, form: 1.0, injured: false, suspended: false, club: "Botafogo" },
    // FWDs (6)
    { name: "Lionel Messi", age: 38, position: "FWD", rating: 91, form: 1.0, injured: false, suspended: false, club: "Inter Miami" },
    { name: "Lautaro Martinez", age: 28, position: "FWD", rating: 89, form: 1.0, injured: false, suspended: false, club: "Inter Milan" },
    { name: "Julian Alvarez", age: 26, position: "FWD", rating: 86, form: 1.0, injured: false, suspended: false, club: "Atletico Madrid" },
    { name: "Alejandro Garnacho", age: 21, position: "FWD", rating: 82, form: 1.0, injured: false, suspended: false, club: "Manchester United" },
    { name: "Nicolas Gonzalez", age: 28, position: "FWD", rating: 80, form: 1.0, injured: false, suspended: false, club: "Juventus" },
    { name: "Valentin Carboni", age: 21, position: "FWD", rating: 77, form: 1.0, injured: false, suspended: false, club: "Marseille" }
  ],
  FRA: [
    // GKs (3)
    { name: "Mike Maignan", age: 30, position: "GK", rating: 88, form: 1.0, injured: false, suspended: false, club: "AC Milan" },
    { name: "Brice Samba", age: 32, position: "GK", rating: 81, form: 1.0, injured: false, suspended: false, club: "Lens" },
    { name: "Alphonse Areola", age: 33, position: "GK", rating: 80, form: 1.0, injured: false, suspended: false, club: "West Ham" },
    // DEFs (9)
    { name: "William Saliba", age: 25, position: "DEF", rating: 90, form: 1.0, injured: false, suspended: false, club: "Arsenal" },
    { name: "Jules Kounde", age: 27, position: "DEF", rating: 86, form: 1.0, injured: false, suspended: false, club: "Barcelona" },
    { name: "Theo Hernandez", age: 28, position: "DEF", rating: 87, form: 1.0, injured: false, suspended: false, club: "AC Milan" },
    { name: "Dayot Upamecano", age: 27, position: "DEF", rating: 84, form: 1.0, injured: false, suspended: false, club: "Bayern Munich" },
    { name: "Ibrahima Konate", age: 27, position: "DEF", rating: 85, form: 1.0, injured: false, suspended: false, club: "Liverpool" },
    { name: "Benjamin Pavard", age: 30, position: "DEF", rating: 82, form: 1.0, injured: false, suspended: false, club: "Inter Milan" },
    { name: "Ferland Mendy", age: 31, position: "DEF", rating: 82, form: 1.0, injured: false, suspended: false, club: "Real Madrid" },
    { name: "Jonathan Clauss", age: 33, position: "DEF", rating: 79, form: 1.0, injured: false, suspended: false, club: "Nice" },
    { name: "Lucas Hernandez", age: 30, position: "DEF", rating: 83, form: 1.0, injured: false, suspended: false, club: "PSG" },
    // MIDs (8)
    { name: "Aurelien Tchouameni", age: 26, position: "MID", rating: 87, form: 1.0, injured: false, suspended: false, club: "Real Madrid" },
    { name: "Eduardo Camavinga", age: 23, position: "MID", rating: 86, form: 1.0, injured: false, suspended: false, club: "Real Madrid" },
    { name: "Warren Zaire-Emery", age: 20, position: "MID", rating: 84, form: 1.0, injured: false, suspended: false, club: "PSG" },
    { name: "Adrien Rabiot", age: 31, position: "MID", rating: 83, form: 1.0, injured: false, suspended: false, club: "Marseille" },
    { name: "N'Golo Kante", age: 35, position: "MID", rating: 84, form: 1.0, injured: false, suspended: false, club: "Al-Ittihad" },
    { name: "Youssouf Fofana", age: 27, position: "MID", rating: 82, form: 1.0, injured: false, suspended: false, club: "AC Milan" },
    { name: "Matteo Guendouzi", age: 27, position: "MID", rating: 81, form: 1.0, injured: false, suspended: false, club: "Lazio" },
    { name: "Manu Kone", age: 25, position: "MID", rating: 79, form: 1.0, injured: false, suspended: false, club: "AS Roma" },
    // FWDs (6)
    { name: "Kylian Mbappe", age: 27, position: "FWD", rating: 93, form: 1.0, injured: false, suspended: false, club: "Real Madrid" },
    { name: "Antoine Griezmann", age: 35, position: "FWD", rating: 86, form: 1.0, injured: false, suspended: false, club: "Atletico Madrid" },
    { name: "Ousmane Dembele", age: 29, position: "FWD", rating: 85, form: 1.0, injured: false, suspended: false, club: "PSG" },
    { name: "Marcus Thuram", age: 28, position: "FWD", rating: 84, form: 1.0, injured: false, suspended: false, club: "Inter Milan" },
    { name: "Bradley Barcola", age: 23, position: "FWD", rating: 84, form: 1.0, injured: false, suspended: false, club: "PSG" },
    { name: "Randal Kolo Muani", age: 27, position: "FWD", rating: 81, form: 1.0, injured: false, suspended: false, club: "PSG" }
  ],
  BRA: [
    // GKs (3)
    { name: "Alisson Becker", age: 33, position: "GK", rating: 89, form: 1.0, injured: false, suspended: false, club: "Liverpool" },
    { name: "Ederson", age: 32, position: "GK", rating: 88, form: 1.0, injured: false, suspended: false, club: "Manchester City" },
    { name: "Bento", age: 26, position: "GK", rating: 81, form: 1.0, injured: false, suspended: false, club: "Al-Nassr" },
    // DEFs (9)
    { name: "Gabriel Magalhaes", age: 28, position: "DEF", rating: 87, form: 1.0, injured: false, suspended: false, club: "Arsenal" },
    { name: "Marquinhos", age: 32, position: "DEF", rating: 86, form: 1.0, injured: false, suspended: false, club: "PSG" },
    { name: "Eder Militao", age: 28, position: "DEF", rating: 85, form: 1.0, injured: false, suspended: false, club: "Real Madrid" },
    { name: "Bremer", age: 29, position: "DEF", rating: 84, form: 1.0, injured: false, suspended: false, club: "Juventus" },
    { name: "Danilo", age: 34, position: "DEF", rating: 80, form: 1.0, injured: false, suspended: false, club: "Juventus" },
    { name: "Lucas Beraldo", age: 22, position: "DEF", rating: 79, form: 1.0, injured: false, suspended: false, club: "PSG" },
    { name: "Yan Couto", age: 24, position: "DEF", rating: 78, form: 1.0, injured: false, suspended: false, club: "Borussia Dortmund" },
    { name: "Wendell", age: 32, position: "DEF", rating: 77, form: 1.0, injured: false, suspended: false, club: "Porto" },
    { name: "Murillo", age: 23, position: "DEF", rating: 80, form: 1.0, injured: false, suspended: false, club: "Nottingham Forest" },
    // MIDs (8)
    { name: "Bruno Guimaraes", age: 28, position: "MID", rating: 87, form: 1.0, injured: false, suspended: false, club: "Newcastle" },
    { name: "Lucas Paqueta", age: 28, position: "MID", rating: 84, form: 1.0, injured: false, suspended: false, club: "West Ham" },
    { name: "Douglas Luiz", age: 28, position: "MID", rating: 83, form: 1.0, injured: false, suspended: false, club: "Juventus" },
    { name: "Joao Gomes", age: 25, position: "MID", rating: 80, form: 1.0, injured: false, suspended: false, club: "Wolves" },
    { name: "Andreas Pereira", age: 30, position: "MID", rating: 79, form: 1.0, injured: false, suspended: false, club: "Fulham" },
    { name: "Ederson", age: 26, position: "MID", rating: 82, form: 1.0, injured: false, suspended: false, club: "Atalanta" },
    { name: "Andre", age: 24, position: "MID", rating: 79, form: 1.0, injured: false, suspended: false, club: "Wolves" },
    { name: "Gerson", age: 29, position: "MID", rating: 78, form: 1.0, injured: false, suspended: false, club: "Flamengo" },
    // FWDs (6)
    { name: "Vinicius Junior", age: 25, position: "FWD", rating: 91, form: 1.0, injured: false, suspended: false, club: "Real Madrid" },
    { name: "Rodrygo", age: 25, position: "FWD", rating: 87, form: 1.0, injured: false, suspended: false, club: "Real Madrid" },
    { name: "Raphinha", age: 29, position: "FWD", rating: 86, form: 1.0, injured: false, suspended: false, club: "Barcelona" },
    { name: "Neymar Jr", age: 34, position: "FWD", rating: 85, form: 1.0, injured: false, suspended: false, club: "Al-Hilal" },
    { name: "Endrick", age: 19, position: "FWD", rating: 81, form: 1.0, injured: false, suspended: false, club: "Real Madrid" },
    { name: "Savinho", age: 22, position: "FWD", rating: 82, form: 1.0, injured: false, suspended: false, club: "Manchester City" }
  ],
  ENG: [
    // GKs (3)
    { name: "Jordan Pickford", age: 32, position: "GK", rating: 84, form: 1.0, injured: false, suspended: false, club: "Everton" },
    { name: "Aaron Ramsdale", age: 28, position: "GK", rating: 81, form: 1.0, injured: false, suspended: false, club: "Southampton" },
    { name: "Dean Henderson", age: 28, position: "GK", rating: 80, form: 1.0, injured: false, suspended: false, club: "Crystal Palace" },
    // DEFs (9)
    { name: "John Stones", age: 32, position: "DEF", rating: 86, form: 1.0, injured: false, suspended: false, club: "Manchester City" },
    { name: "Trent Alexander-Arnold", age: 27, position: "DEF", rating: 86, form: 1.0, injured: false, suspended: false, club: "Liverpool" },
    { name: "Marc Guehi", age: 25, position: "DEF", rating: 83, form: 1.0, injured: false, suspended: false, club: "Crystal Palace" },
    { name: "Kyle Walker", age: 36, position: "DEF", rating: 82, form: 1.0, injured: false, suspended: false, club: "Manchester City" },
    { name: "Ezri Konsa", age: 28, position: "DEF", rating: 81, form: 1.0, injured: false, suspended: false, club: "Aston Villa" },
    { name: "Levi Colwill", age: 23, position: "DEF", rating: 80, form: 1.0, injured: false, suspended: false, club: "Chelsea" },
    { name: "Rico Lewis", age: 21, position: "DEF", rating: 79, form: 1.0, injured: false, suspended: false, club: "Manchester City" },
    { name: "Kieran Trippier", age: 35, position: "DEF", rating: 80, form: 1.0, injured: false, suspended: false, club: "Newcastle" },
    { name: "Luke Shaw", age: 30, position: "DEF", rating: 80, form: 1.0, injured: false, suspended: false, club: "Manchester United" },
    // MIDs (8)
    { name: "Jude Bellingham", age: 22, position: "MID", rating: 91, form: 1.0, injured: false, suspended: false, club: "Real Madrid" },
    { name: "Declan Rice", age: 27, position: "MID", rating: 88, form: 1.0, injured: false, suspended: false, club: "Arsenal" },
    { name: "Cole Palmer", age: 24, position: "MID", rating: 87, form: 1.0, injured: false, suspended: false, club: "Chelsea" },
    { name: "Kobbie Mainoo", age: 21, position: "MID", rating: 83, form: 1.0, injured: false, suspended: false, club: "Manchester United" },
    { name: "Conor Gallagher", age: 26, position: "MID", rating: 82, form: 1.0, injured: false, suspended: false, club: "Atletico Madrid" },
    { name: "James Maddison", age: 29, position: "MID", rating: 83, form: 1.0, injured: false, suspended: false, club: "Tottenham" },
    { name: "Adam Wharton", age: 22, position: "MID", rating: 78, form: 1.0, injured: false, suspended: false, club: "Crystal Palace" },
    { name: "Angel Gomes", age: 25, position: "MID", rating: 80, form: 1.0, injured: false, suspended: false, club: "Lille" },
    // FWDs (6)
    { name: "Harry Kane", age: 32, position: "FWD", rating: 89, form: 1.0, injured: false, suspended: false, club: "Bayern Munich" },
    { name: "Bukayo Saka", age: 24, position: "FWD", rating: 89, form: 1.0, injured: false, suspended: false, club: "Arsenal" },
    { name: "Phil Foden", age: 26, position: "FWD", rating: 88, form: 1.0, injured: false, suspended: false, club: "Manchester City" },
    { name: "Ollie Watkins", age: 30, position: "FWD", rating: 84, form: 1.0, injured: false, suspended: false, club: "Aston Villa" },
    { name: "Anthony Gordon", age: 25, position: "FWD", rating: 83, form: 1.0, injured: false, suspended: false, club: "Newcastle" },
    { name: "Jarrod Bowen", age: 29, position: "FWD", rating: 82, form: 1.0, injured: false, suspended: false, club: "West Ham" }
  ],
  ESP: [
    // GKs (3)
    { name: "Unai Simon", age: 28, position: "GK", rating: 86, form: 1.0, injured: false, suspended: false, club: "Athletic Bilbao" },
    { name: "David Raya", age: 30, position: "GK", rating: 85, form: 1.0, injured: false, suspended: false, club: "Arsenal" },
    { name: "Alex Remiro", age: 30, position: "GK", rating: 82, form: 1.0, injured: false, suspended: false, club: "Real Sociedad" },
    // DEFs (9)
    { name: "Robin Le Normand", age: 29, position: "DEF", rating: 83, form: 1.0, injured: false, suspended: false, club: "Atletico Madrid" },
    { name: "Aymeric Laporte", age: 32, position: "DEF", rating: 83, form: 1.0, injured: false, suspended: false, club: "Al-Nassr" },
    { name: "Dani Carvajal", age: 34, position: "DEF", rating: 86, form: 1.0, injured: false, suspended: false, club: "Real Madrid" },
    { name: "Marc Cucurella", age: 27, position: "DEF", rating: 83, form: 1.0, injured: false, suspended: false, club: "Chelsea" },
    { name: "Alex Grimaldo", age: 30, position: "DEF", rating: 84, form: 1.0, injured: false, suspended: false, club: "Bayer Leverkusen" },
    { name: "Pau Torres", age: 29, position: "DEF", rating: 82, form: 1.0, injured: false, suspended: false, club: "Aston Villa" },
    { name: "Dani Vivian", age: 26, position: "DEF", rating: 81, form: 1.0, injured: false, suspended: false, club: "Athletic Bilbao" },
    { name: "Pau Cubarsi", age: 19, position: "DEF", rating: 80, form: 1.0, injured: false, suspended: false, club: "Barcelona" },
    { name: "Pedro Porro", age: 26, position: "DEF", rating: 82, form: 1.0, injured: false, suspended: false, club: "Tottenham" },
    // MIDs (8)
    { name: "Dani Olmo", age: 28, position: "MID", rating: 86, form: 1.0, injured: false, suspended: false, club: "Barcelona" },
    { name: "Rodri", age: 29, position: "MID", rating: 92, form: 1.0, injured: false, suspended: false, club: "Manchester City" },
    { name: "Pedri", age: 23, position: "MID", rating: 87, form: 1.0, injured: false, suspended: false, club: "Barcelona" },
    { name: "Gavi", age: 21, position: "MID", rating: 85, form: 1.0, injured: false, suspended: false, club: "Barcelona" },
    { name: "Fabian Ruiz", age: 30, position: "MID", rating: 84, form: 1.0, injured: false, suspended: false, club: "PSG" },
    { name: "Martin Zubimendi", age: 27, position: "MID", rating: 84, form: 1.0, injured: false, suspended: false, club: "Real Sociedad" },
    { name: "Mikel Merino", age: 29, position: "MID", rating: 83, form: 1.0, injured: false, suspended: false, club: "Arsenal" },
    { name: "Alex Baena", age: 24, position: "MID", rating: 82, form: 1.0, injured: false, suspended: false, club: "Villarreal" },
    // FWDs (6)
    { name: "Lamine Yamal", age: 18, position: "FWD", rating: 89, form: 1.0, injured: false, suspended: false, club: "Barcelona" },
    { name: "Nico Williams", age: 23, position: "FWD", rating: 86, form: 1.0, injured: false, suspended: false, club: "Athletic Bilbao" },
    { name: "Alvaro Morata", age: 33, position: "FWD", rating: 82, form: 1.0, injured: false, suspended: false, club: "AC Milan" },
    { name: "Mikel Oyarzabal", age: 29, position: "FWD", rating: 83, form: 1.0, injured: false, suspended: false, club: "Real Sociedad" },
    { name: "Ferran Torres", age: 26, position: "FWD", rating: 80, form: 1.0, injured: false, suspended: false, club: "Barcelona" },
    { name: "Ayoze Perez", age: 32, position: "FWD", rating: 79, form: 1.0, injured: false, suspended: false, club: "Villarreal" }
  ],
  POR: [
    // GKs (3)
    { name: "Diogo Costa", age: 26, position: "GK", rating: 86, form: 1.0, injured: false, suspended: false, club: "Porto" },
    { name: "Jose Sa", age: 33, position: "GK", rating: 80, form: 1.0, injured: false, suspended: false, club: "Wolves" },
    { name: "Rui Silva", age: 32, position: "GK", rating: 79, form: 1.0, injured: false, suspended: false, club: "Real Betis" },
    // DEFs (9)
    { name: "Ruben Dias", age: 29, position: "DEF", rating: 89, form: 1.0, injured: false, suspended: false, club: "Manchester City" },
    { name: "Nuno Mendes", age: 23, position: "DEF", rating: 84, form: 1.0, injured: false, suspended: false, club: "PSG" },
    { name: "Joao Cancelo", age: 32, position: "DEF", rating: 83, form: 1.0, injured: false, suspended: false, club: "Al-Hilal" },
    { name: "Diogo Dalot", age: 27, position: "DEF", rating: 83, form: 1.0, injured: false, suspended: false, club: "Manchester United" },
    { name: "Goncalo Inacio", age: 24, position: "DEF", rating: 81, form: 1.0, injured: false, suspended: false, club: "Sporting CP" },
    { name: "Antonio Silva", age: 22, position: "DEF", rating: 80, form: 1.0, injured: false, suspended: false, club: "Benfica" },
    { name: "Tiago Djalo", age: 26, position: "DEF", rating: 78, form: 1.0, injured: false, suspended: false, club: "Porto" },
    { name: "Nelson Semedo", age: 32, position: "DEF", rating: 78, form: 1.0, injured: false, suspended: false, club: "Wolves" },
    { name: "Nuno Tavares", age: 26, position: "DEF", rating: 79, form: 1.0, injured: false, suspended: false, club: "Lazio" },
    // MIDs (8)
    { name: "Bruno Fernandes", age: 31, position: "MID", rating: 88, form: 1.0, injured: false, suspended: false, club: "Manchester United" },
    { name: "Bernardo Silva", age: 31, position: "MID", rating: 88, form: 1.0, injured: false, suspended: false, club: "Manchester City" },
    { name: "Vitinha", age: 26, position: "MID", rating: 86, form: 1.0, injured: false, suspended: false, club: "PSG" },
    { name: "Joao Palhinha", age: 30, position: "MID", rating: 84, form: 1.0, injured: false, suspended: false, club: "Bayern Munich" },
    { name: "Joao Neves", age: 21, position: "MID", rating: 83, form: 1.0, injured: false, suspended: false, club: "PSG" },
    { name: "Matheus Nunes", age: 27, position: "MID", rating: 80, form: 1.0, injured: false, suspended: false, club: "Manchester City" },
    { name: "Ruben Neves", age: 29, position: "MID", rating: 80, form: 1.0, injured: false, suspended: false, club: "Al-Hilal" },
    { name: "Otavio", age: 31, position: "MID", rating: 81, form: 1.0, injured: false, suspended: false, club: "Al-Nassr" },
    // FWDs (6)
    { name: "Cristiano Ronaldo", age: 41, position: "FWD", rating: 84, form: 1.0, injured: false, suspended: false, club: "Al-Nassr" },
    { name: "Rafael Leao", age: 26, position: "FWD", rating: 87, form: 1.0, injured: false, suspended: false, club: "AC Milan" },
    { name: "Diogo Jota", age: 29, position: "FWD", rating: 83, form: 1.0, injured: false, suspended: false, club: "Liverpool" },
    { name: "Goncalo Ramos", age: 24, position: "FWD", rating: 81, form: 1.0, injured: false, suspended: false, club: "PSG" },
    { name: "Joao Felix", age: 26, position: "FWD", rating: 80, form: 1.0, injured: false, suspended: false, club: "Chelsea" },
    { name: "Pedro Neto", age: 26, position: "FWD", rating: 81, form: 1.0, injured: false, suspended: false, club: "Arsenal" }
  ],
  GER: [
    // GKs (3)
    { name: "Marc-Andre ter Stegen", age: 34, position: "GK", rating: 87, form: 1.0, injured: false, suspended: false, club: "Barcelona" },
    { name: "Oliver Baumann", age: 36, position: "GK", rating: 80, form: 1.0, injured: false, suspended: false, club: "Hoffenheim" },
    { name: "Alexander Nubel", age: 29, position: "GK", rating: 80, form: 1.0, injured: false, suspended: false, club: "Stuttgart" },
    // DEFs (9)
    { name: "Joshua Kimmich", age: 31, position: "DEF", rating: 86, form: 1.0, injured: false, suspended: false, club: "Bayern Munich" },
    { name: "Antonio Rudiger", age: 33, position: "DEF", rating: 88, form: 1.0, injured: false, suspended: false, club: "Real Madrid" },
    { name: "Jonathan Tah", age: 30, position: "DEF", rating: 84, form: 1.0, injured: false, suspended: false, club: "Bayer Leverkusen" },
    { name: "Nico Schlotterbeck", age: 26, position: "DEF", rating: 83, form: 1.0, injured: false, suspended: false, club: "Dortmund" },
    { name: "David Raum", age: 28, position: "DEF", rating: 81, form: 1.0, injured: false, suspended: false, club: "RB Leipzig" },
    { name: "Waldemar Anton", age: 29, position: "DEF", rating: 81, form: 1.0, injured: false, suspended: false, club: "Dortmund" },
    { name: "Benjamin Henrichs", age: 29, position: "DEF", rating: 79, form: 1.0, injured: false, suspended: false, club: "RB Leipzig" },
    { name: "Robin Koch", age: 29, position: "DEF", rating: 79, form: 1.0, injured: false, suspended: false, club: "Frankfurt" },
    { name: "Maximilian Mittelstadt", age: 29, position: "DEF", rating: 80, form: 1.0, injured: false, suspended: false, club: "Stuttgart" },
    // MIDs (8)
    { name: "Florian Wirtz", age: 23, position: "MID", rating: 90, form: 1.0, injured: false, suspended: false, club: "Bayer Leverkusen" },
    { name: "Jamal Musiala", age: 23, position: "MID", rating: 89, form: 1.0, injured: false, suspended: false, club: "Bayern Munich" },
    { name: "Pascal Gross", age: 34, position: "MID", rating: 82, form: 1.0, injured: false, suspended: false, club: "Dortmund" },
    { name: "Robert Andrich", age: 31, position: "MID", rating: 82, form: 1.0, injured: false, suspended: false, club: "Bayer Leverkusen" },
    { name: "Aleksandar Pavlovic", age: 22, position: "MID", rating: 81, form: 1.0, injured: false, suspended: false, club: "Bayern Munich" },
    { name: "Angelo Stiller", age: 25, position: "MID", rating: 80, form: 1.0, injured: false, suspended: false, club: "Stuttgart" },
    { name: "Julian Brandt", age: 30, position: "MID", rating: 83, form: 1.0, injured: false, suspended: false, club: "Dortmund" },
    { name: "Emre Can", age: 32, position: "MID", rating: 79, form: 1.0, injured: false, suspended: false, club: "Dortmund" },
    // FWDs (6)
    { name: "Kai Havertz", age: 26, position: "FWD", rating: 85, form: 1.0, injured: false, suspended: false, club: "Arsenal" },
    { name: "Niclas Fullkrug", age: 33, position: "FWD", rating: 82, form: 1.0, injured: false, suspended: false, club: "West Ham" },
    { name: "Leroy Sane", age: 30, position: "FWD", rating: 84, form: 1.0, injured: false, suspended: false, club: "Bayern Munich" },
    { name: "Deniz Undav", age: 29, position: "FWD", rating: 82, form: 1.0, injured: false, suspended: false, club: "Stuttgart" },
    { name: "Serge Gnabry", age: 30, position: "FWD", rating: 81, form: 1.0, injured: false, suspended: false, club: "Bayern Munich" },
    { name: "Maximilian Beier", age: 23, position: "FWD", rating: 78, form: 1.0, injured: false, suspended: false, club: "Dortmund" }
  ],
  USA: [
    // GKs (3)
    { name: "Matt Turner", age: 31, position: "GK", rating: 78, form: 1.0, injured: false, suspended: false, club: "Crystal Palace" },
    { name: "Ethan Horvath", age: 30, position: "GK", rating: 74, form: 1.0, injured: false, suspended: false, club: "Cardiff City" },
    { name: "Patrick Schulte", age: 25, position: "GK", rating: 73, form: 1.0, injured: false, suspended: false, club: "Columbus Crew" },
    // DEFs (9)
    { name: "Antonee Robinson", age: 28, position: "DEF", rating: 81, form: 1.0, injured: false, suspended: false, club: "Fulham" },
    { name: "Chris Richards", age: 26, position: "DEF", rating: 77, form: 1.0, injured: false, suspended: false, club: "Crystal Palace" },
    { name: "Cameron Carter-Vickers", age: 28, position: "DEF", rating: 78, form: 1.0, injured: false, suspended: false, club: "Celtic" },
    { name: "Sergino Dest", age: 25, position: "DEF", rating: 77, form: 1.0, injured: false, suspended: false, club: "PSV" },
    { name: "Tim Ream", age: 38, position: "DEF", rating: 75, form: 1.0, injured: false, suspended: false, club: "Charlotte FC" },
    { name: "Miles Robinson", age: 29, position: "DEF", rating: 75, form: 1.0, injured: false, suspended: false, club: "FC Cincinnati" },
    { name: "Joe Scally", age: 23, position: "DEF", rating: 76, form: 1.0, injured: false, suspended: false, club: "Borussia M'gladbach" },
    { name: "Mark McKenzie", age: 27, position: "DEF", rating: 74, form: 1.0, injured: false, suspended: false, club: "Toulouse" },
    { name: "Auston Trusty", age: 27, position: "DEF", rating: 74, form: 1.0, injured: false, suspended: false, club: "Celtic" },
    // MIDs (8)
    { name: "Weston McKennie", age: 27, position: "MID", rating: 80, form: 1.0, injured: false, suspended: false, club: "Juventus" },
    { name: "Tyler Adams", age: 27, position: "MID", rating: 79, form: 1.0, injured: false, suspended: false, club: "Bournemouth" },
    { name: "Yunus Musah", age: 23, position: "MID", rating: 78, form: 1.0, injured: false, suspended: false, club: "AC Milan" },
    { name: "Giovanni Reyna", age: 23, position: "MID", rating: 77, form: 1.0, injured: false, suspended: false, club: "Dortmund" },
    { name: "Johnny Cardoso", age: 24, position: "MID", rating: 78, form: 1.0, injured: false, suspended: false, club: "Real Betis" },
    { name: "Malik Tillman", age: 24, position: "MID", rating: 79, form: 1.0, injured: false, suspended: false, club: "PSV" },
    { name: "Luca de la Torre", age: 28, position: "MID", rating: 74, form: 1.0, injured: false, suspended: false, club: "Celta Vigo" },
    { name: "Gianluca Busio", age: 24, position: "MID", rating: 73, form: 1.0, injured: false, suspended: false, club: "Venezia" },
    // FWDs (6)
    { name: "Christian Pulisic", age: 27, position: "FWD", rating: 84, form: 1.0, injured: false, suspended: false, club: "AC Milan" },
    { name: "Folarin Balogun", age: 24, position: "FWD", rating: 79, form: 1.0, injured: false, suspended: false, club: "Monaco" },
    { name: "Timothy Weah", age: 26, position: "FWD", rating: 77, form: 1.0, injured: false, suspended: false, club: "Juventus" },
    { name: "Ricardo Pepi", age: 23, position: "FWD", rating: 78, form: 1.0, injured: false, suspended: false, club: "PSV" },
    { name: "Josh Sargent", age: 26, position: "FWD", rating: 76, form: 1.0, injured: false, suspended: false, club: "Norwich City" },
    { name: "Haji Wright", age: 28, position: "FWD", rating: 76, form: 1.0, injured: false, suspended: false, club: "Coventry City" }
  ]
};

// Culturally and geographically authentic name databases for non-preloaded squads
const firstNames: Record<string, string[]> = {
  latin: ["Luis", "Santiago", "Mateo", "Daniel", "Davinson", "Johan", "Richard", "Kevin", "Jefferson", "Jhon", "Camilo", "Rafael", "Carlos", "Sebastian", "Andres", "Federico", "Nicolas", "Diego", "Jose", "Manuel", "Franco", "Ezequiel", "Facundo", "Gustavo", "Ramon"],
  euro_slavic: ["Luka", "Mateo", "Josko", "Andrej", "Ivan", "Borna", "Josip", "Lovro", "Martin", "Mario", "Nikola", "Ante", "Domagoj", "Marcelo", "Tomas", "Jan", "Petr", "Jiri", "Edin", "Miralem", "Sead", "Amar", "Kenan", "Haris", "Ermedin"],
  euro_nordic: ["Erik", "Henrik", "Jonas", "Emil", "Viktor", "Oscar", "Alexander", "Martin", "Marcus", "Filip", "Kristoffer", "Erling", "Sander", "Leo", "Andreas", "Robin", "Gustav", "Ludvig", "Isak", "Kristian", "Fredrik", "Morten", "Stefan", "Hugo", "Lucas"],
  euro_central: ["Lukas", "Thomas", "Stefan", "Markus", "David", "Christian", "Andreas", "Simon", "Philipp", "Manuel", "Florian", "Marcel", "Daniel", "Yann", "Granit", "Breel", "Silvan", "Gregor", "Ruben", "Leon", "Patrick", "Christoph", "Konrad", "Maximilian", "Kevin"],
  japanese: ["Keito", "Ritsu", "Koki", "Daiki", "Hiroki", "Reo", "Shogo", "Kou", "Yukinari", "Wataru", "Yuki", "Takefusa", "Kyogo", "Takumi", "Ao", "Kaoru", "Daichi", "Ko", "Hidemasa", "Ayase", "Shinya", "Yuta", "Kota", "Ryoya", "Takumu"],
  korean: ["Heung-min", "Min-jae", "Kang-in", "Gue-sung", "Hee-chan", "In-beom", "Woo-yeong", "Hyun-woo", "Young-woo", "Seol", "Seung-gyu", "Sang-ho", "Jae-sung", "Jun-ho", "Ki-jee", "Hyun-seok", "Ji-sung", "Dong-gook", "Tae-hwan", "Kyu-baek", "Seung-woo"],
  arabic: ["Yassine", "Achraf", "Nayef", "Romain", "Noussair", "Sofyan", "Azzedine", "Selim", "Hakim", "Sofiane", "Youssef", "Abde", "Mohamed", "Ahmed", "Salem", "Fahad", "Ali", "Aymen", "Sadok", "Hannibal", "Saud", "Abdulelah", "Yasir", "Mohammed", "Hassan"],
  african: ["Sadio", "Moussa", "Cheikh", "Abdou", "Koffi", "Yao", "Samuel", "Emmanuel", "Abidemi", "Kwame", "Benni", "Sipho", "Inaki", "Thomas", "Mohammed", "Jordan", "Salis", "Chancel", "Yoane", "Arthur", "Meschack", "Percy", "Themba", "Teboho", "Sphephelo"],
  mixed: ["John", "William", "James", "George", "Ben", "Jack", "Isaac", "Jean-Pierre", "Davidson", "Kevens", "Steeve", "Marlon", "Liam", "Alphonso", "Jonathan", "Tajon", "Cyle", "Stephen", "Alistair", "Milan", "Samuel", "Lucas", "Brandon", "Mathew", "Jackson"]
};

const lastNames: Record<string, string[]> = {
  latin: ["Diaz", "Rodriguez", "Arias", "Lerma", "Munoz", "Sanchez", "Mojica", "Rios", "Castano", "Cuesta", "Borre", "Duran", "Nunez", "Valverde", "Gimenez", "Araujo", "Olivera", "Bentancur", "Pellistri", "Suarez", "Rojas", "Sanabria", "Almiron", "Gomez", "Barrios"],
  euro_slavic: ["Modric", "Kovacic", "Gvardiol", "Kramaric", "Perisic", "Sosa", "Stanisic", "Majer", "Baturina", "Pasalic", "Vlasic", "Budimir", "Schick", "Soucek", "Hlozek", "Dzeko", "Pjanic", "Kolasinac", "Demirovic", "Basic", "Hadzikadunic", "Chvatal", "Provod", "Zima", "Hranac"],
  euro_nordic: ["Andersson", "Larsson", "Lindelof", "Isak", "Forsberg", "Kulusevski", "Olsen", "Haaland", "Odegaard", "Berge", "Ajer", "Ryerson", "Sorloth", "Nyland", "Pedersen", "Hansen", "Svensson", "Elanga", "Gyokeres", "Augustinsson", "Starfelt", "Wahlqvist", "Soraas", "Wolfe"],
  euro_central: ["Alaba", "Sabitzer", "Laimer", "Baumgartner", "Gregoritsch", "Schlager", "Pentz", "Lienhart", "Posch", "Wober", "Sommer", "Akanji", "Elvedi", "Rodriguez", "Xhaka", "Freuler", "Zakaria", "Vargas", "Embolo", "Kobel", "Ndoye", "Widmer", "Zuber", "Sierro"],
  japanese: ["Nakamura", "Morita", "Maeda", "Taniguchi", "Machida", "Suga", "Itakura", "Sugawara", "Hatate", "Endo", "Kubo", "Furuhashi", "Minamino", "Tanaka", "Mitoma", "Kamada", "Sano", "Ueda", "Ito", "Suzuki", "Sekine", "Takamine", "Ohashi", "Saito", "Fujita"],
  korean: ["Son", "Kim", "Lee", "Cho", "Hwang", "Park", "Seol", "Jo", "Hong", "Jung", "Paik", "Oh", "Song", "Kwon", "Choi", "Han", "Shin", "Kang", "Ahn", "Ko", "Yang"],
  arabic: ["Bounou", "Hakimi", "Aguerd", "Saiss", "Mazraoui", "Amrabat", "Ounahi", "Amallah", "Ziyech", "Boufal", "En-Nesyri", "Ezzalzouli", "Salah", "Marmoush", "Mostafa", "Elneny", "Al-Dawsari", "Al-Shehri", "Al-Muwallad", "Al-Khaibri", "Al-Ghannam", "Tahar", "Msakni", "Laidouni"],
  african: ["Diallo", "Traore", "Salah", "Kone", "Diop", "Keita", "Mensah", "Sow", "Toure", "El-Sayed", "Ndlovu", "Chibwe", "Osei", "Kudus", "Williams", "Partey", "Semenyo", "Mbemba", "Wissa", "Elia", "Foster", "Mokoena", "Modiba", "Zwane", "Kekana"],
  mixed: ["Smith", "Williams", "Jones", "Brown", "Taylor", "Pierre", "Jean", "Baptiste", "Chery", "Alexis", "Sanon", "Toussaint", "Davies", "David", "Eustaquio", "Larin", "Buchanan", "Miller", "Johnston", "Ryan", "Boyle", "Metcalfe", "Rowles", "Irankunda", "Wood"]
};

const clubs: Record<string, string[]> = {
  latin: ["Boca Juniors", "River Plate", "Flamengo", "Palmeiras", "Club America", "Monterrey", "Atletico Nacional", "Millonarios", "Sao Paulo", "Gremio", "Peñarol", "Nacional"],
  euro: ["Real Madrid", "Barcelona", "Bayern Munich", "PSG", "Manchester City", "Liverpool", "Arsenal", "Juventus", "AC Milan", "Inter Milan", "Dortmund", "Bayer Leverkusen", "Atletico Madrid", "Chelsea", "Tottenham", "Aston Villa", "Newcastle", "Sporting CP", "Benfica", "Porto", "Marseille", "Monaco", "Lazio", "AS Roma", "Real Betis", "Real Sociedad", "PSV", "Ajax", "Feyenoord"],
  arabic: ["Al-Hilal", "Al-Nassr", "Al-Ittihad", "Al-Ahli", "Al Ahly", "Zamalek", "Wydad Casablanca", "Raja Casablanca", "Esperance de Tunis", "Al-Sadd", "Al-Duhail", "Al-Rayyan"],
  african: ["Al Ahly", "Mamelodi Sundowns", "TP Mazembe", "Esperance de Tunis", "Orlando Pirates", "Kaizer Chiefs", "ASEC Mimosas", "Pyramids FC", "Wydad Casablanca"],
  mixed: ["LA Galaxy", "Inter Miami", "Columbus Crew", "Seattle Sounders", "Auckland City", "Montreal CF", "Toronto FC", "LAFC", "New York Red Bulls", "Vancouver Whitecaps"]
};

// Map team IDs to cultural name sets
const getRegionKey = (teamId: string): string => {
  const latinTeams = ["MEX", "PAR", "ECU", "URU", "COL", "PAN"];
  const slavicTeams = ["CZE", "BIH", "CRO"];
  const nordicTeams = ["SWE", "NOR"];
  const centralTeams = ["SUI", "AUT"];
  const arabicTeams = ["MAR", "TUN", "ALG", "EGY", "KSA", "QAT", "IRQ", "JOR"];
  const africanTeams = ["RSA", "CIV", "SEN", "COD", "GHA"];
  const japanese = ["JPN"];
  const korean = ["KOR"];

  if (latinTeams.includes(teamId)) return "latin";
  if (slavicTeams.includes(teamId)) return "euro_slavic";
  if (nordicTeams.includes(teamId)) return "euro_nordic";
  if (centralTeams.includes(teamId)) return "euro_central";
  if (arabicTeams.includes(teamId)) return "arabic";
  if (africanTeams.includes(teamId)) return "african";
  if (japanese.includes(teamId)) return "japanese";
  if (korean.includes(teamId)) return "korean";
  return "mixed";
};

const randomChoice = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

// Generate a random 26-man squad calibrated strictly by FIFA ranking tiers
export const generateSquad = (team: Team): Player[] => {
  const teamId = team.id;
  
  // Check if real preloaded squad exists from Groq fetch
  if (realPlayersData[teamId] && realPlayersData[teamId].length > 0) {
    return realPlayersData[teamId].map((p, idx) => ({
      ...p,
      id: `${teamId}_${idx}`
    }));
  }
  
  // If preloaded squad exists, map IDs and return
  if (preloadedSquads[teamId]) {
    return preloadedSquads[teamId].map((p, idx) => ({
      ...p,
      id: `${teamId}_${idx}`
    }));
  }
  
  const region = getRegionKey(teamId);
  const regionFirst = firstNames[region] || firstNames.mixed;
  const regionLast = lastNames[region] || lastNames.mixed;
  const regionClubs = clubs[region] || clubs.mixed;
  
  // Ratings Calibration Ranges per User Request
  const rank = team.fifaRank;
  let keyRange = { min: 60, max: 72 };
  let starterRange = { min: 58, max: 64 };
  let backupRange = { min: 55, max: 60 };

  if (rank <= 10) {
    // Top 10 ranked nations: key players rated 82–92
    keyRange = { min: 82, max: 92 };
    starterRange = { min: 80, max: 84 };
    backupRange = { min: 76, max: 80 };
  } else if (rank <= 30) {
    // Ranked 11–30: key players 75–85
    keyRange = { min: 75, max: 85 };
    starterRange = { min: 73, max: 78 };
    backupRange = { min: 70, max: 74 };
  } else if (rank <= 60) {
    // Ranked 31–60: key players 68–78
    keyRange = { min: 68, max: 78 };
    starterRange = { min: 66, max: 72 };
    backupRange = { min: 64, max: 68 };
  } else {
    // Ranked 60+: key players 60–72
    keyRange = { min: 60, max: 72 };
    starterRange = { min: 58, max: 64 };
    backupRange = { min: 55, max: 60 };
  }

  const squad: Player[] = [];
  
  // Exact 26-man composition: 3 GK, 9 DEF, 8 MID, 6 FWD
  const positionDistribution: { pos: PlayerPosition; count: number }[] = [
    { pos: 'GK', count: 3 },
    { pos: 'DEF', count: 9 },
    { pos: 'MID', count: 8 },
    { pos: 'FWD', count: 6 }
  ];
  
  let playerIdx = 0;
  
  positionDistribution.forEach(({ pos, count }) => {
    for (let i = 0; i < count; i++) {
      // Pick random first and last name, ensuring uniqueness
      let name = `${randomChoice(regionFirst)} ${randomChoice(regionLast)}`;
      while (squad.some(p => p.name === name)) {
        name = `${randomChoice(regionFirst)} ${randomChoice(regionLast)}`;
      }
      
      const age = 19 + Math.floor(Math.random() * 15); // 19 to 33 years
      
      // Determine role within position to distribute ratings realistically
      const isKey = i === 0 && pos !== 'GK'; // 1 Key player for DEF, MID, FWD
      const isStart = (pos === 'GK' && i === 0) || (!isKey && ((pos === 'DEF' && i < 5) || (pos === 'MID' && i < 4) || (pos === 'FWD' && i < 3)));
      
      let rating = 0;
      if (isKey) {
        rating = keyRange.min + Math.floor(Math.random() * (keyRange.max - keyRange.min + 1));
      } else if (isStart) {
        rating = starterRange.min + Math.floor(Math.random() * (starterRange.max - starterRange.min + 1));
      } else {
        rating = backupRange.min + Math.floor(Math.random() * (backupRange.max - backupRange.min + 1));
      }
      
      // Choose club (stars/starters in non-European countries have high chance to play in Europe)
      let club = randomChoice(regionClubs);
      if (region !== "euro_central" && region !== "euro_slavic" && region !== "euro_nordic") {
        const euroChance = region === "mixed" ? 0.40 : 0.65;
        if (Math.random() < (isKey || isStart ? euroChance : 0.15)) {
          club = randomChoice(clubs.euro);
        }
      }
      
      squad.push({
        id: `${teamId}_${playerIdx++}`,
        name,
        age,
        position: pos,
        rating,
        form: 1.0,
        injured: false,
        suspended: false,
        club
      });
    }
  });
  
  return squad;
};

// Generates the initial global database of players for all teams
export const initializeAllPlayers = (teams: Team[]): Record<string, Player[]> => {
  const db: Record<string, Player[]> = {};
  teams.forEach(team => {
    db[team.id] = generateSquad(team);
  });
  return db;
};
