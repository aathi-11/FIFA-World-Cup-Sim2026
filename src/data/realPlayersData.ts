// Real squads parsed dynamically from ESPN and Wikipedia squad lists
import type { Player } from '../types';

export const realPlayersData: Record<string, Omit<Player, 'id'>[]> = {
  "ALG": [
    {
      "name": "Luca Zidane",
      "age": 28,
      "position": "GK",
      "rating": 70,
      "club": "Granada",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Oussama Benbot",
      "age": 31,
      "position": "GK",
      "rating": 64,
      "club": "USM Alger",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Melvin Mastil",
      "age": 26,
      "position": "GK",
      "rating": 64,
      "club": "Stade Nyonnais",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ramy Bensebaini",
      "age": 31,
      "position": "DEF",
      "rating": 81,
      "club": "Borussia Dortmund",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rayan Aït-Nouri",
      "age": 25,
      "position": "DEF",
      "rating": 75,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Aïssa Mandi",
      "age": 34,
      "position": "DEF",
      "rating": 73,
      "club": "Lille",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohamed Amine Tougai",
      "age": 26,
      "position": "DEF",
      "rating": 70,
      "club": "Espérance de Tunis",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jaouen Hadjam",
      "age": 23,
      "position": "DEF",
      "rating": 64,
      "club": "Young Boys",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rafik Belghali",
      "age": 24,
      "position": "DEF",
      "rating": 64,
      "club": "Hellas Verona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Zineddine Belaïd",
      "age": 27,
      "position": "DEF",
      "rating": 64,
      "club": "JS Kabylie",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Achref Abada",
      "age": 26,
      "position": "DEF",
      "rating": 64,
      "club": "USM Alger",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Samir Chergui",
      "age": 27,
      "position": "DEF",
      "rating": 64,
      "club": "Paris FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ibrahim Maza",
      "age": 20,
      "position": "MID",
      "rating": 81,
      "club": "Bayer Leverkusen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nabil Bentaleb",
      "age": 31,
      "position": "MID",
      "rating": 73,
      "club": "Lille",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hicham Boudaoui",
      "age": 26,
      "position": "MID",
      "rating": 73,
      "club": "Nice",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Farès Chaïbi",
      "age": 23,
      "position": "MID",
      "rating": 73,
      "club": "Eintracht Frankfurt",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Houssem Aouar",
      "age": 27,
      "position": "MID",
      "rating": 65,
      "club": "Al-Ittihad",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ramiz Zerrouki",
      "age": 28,
      "position": "MID",
      "rating": 64,
      "club": "Twente",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yacine Titraoui",
      "age": 22,
      "position": "MID",
      "rating": 64,
      "club": "Charleroi",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Amine Gouiri",
      "age": 26,
      "position": "FWD",
      "rating": 79,
      "club": "Marseille",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Anis Hadj Moussa",
      "age": 24,
      "position": "FWD",
      "rating": 73,
      "club": "Feyenoord",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Riyad Mahrez",
      "age": 35,
      "position": "FWD",
      "rating": 71,
      "club": "Al-Ahli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohamed Amoura",
      "age": 26,
      "position": "FWD",
      "rating": 70,
      "club": "VfL Wolfsburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Adil Boulbina",
      "age": 23,
      "position": "FWD",
      "rating": 64,
      "club": "Al-Duhail",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nadhir Benbouali",
      "age": 26,
      "position": "FWD",
      "rating": 64,
      "club": "Győri ETO",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Farès Ghedjemis",
      "age": 23,
      "position": "FWD",
      "rating": 64,
      "club": "Frosinone",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "ARG": [
    {
      "name": "Emiliano Martínez",
      "age": 33,
      "position": "GK",
      "rating": 88,
      "club": "Aston Villa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gerónimo Rulli",
      "age": 34,
      "position": "GK",
      "rating": 81,
      "club": "Marseille",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Juan Musso",
      "age": 32,
      "position": "GK",
      "rating": 78,
      "club": "Atlético Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lisandro Martínez",
      "age": 28,
      "position": "DEF",
      "rating": 94,
      "club": "Manchester United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Cristian Romero",
      "age": 28,
      "position": "DEF",
      "rating": 88,
      "club": "Tottenham Hotspur",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Leonardo Balerdi",
      "age": 27,
      "position": "DEF",
      "rating": 86,
      "club": "Marseille",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nicolás Tagliafico",
      "age": 33,
      "position": "DEF",
      "rating": 86,
      "club": "Lyon",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nicolás Otamendi",
      "age": 38,
      "position": "DEF",
      "rating": 81,
      "club": "Benfica",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Facundo Medina",
      "age": 27,
      "position": "DEF",
      "rating": 81,
      "club": "Marseille",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gonzalo Montiel",
      "age": 29,
      "position": "DEF",
      "rating": 78,
      "club": "River Plate",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nahuel Molina",
      "age": 28,
      "position": "DEF",
      "rating": 78,
      "club": "Atlético Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Exequiel Palacios",
      "age": 27,
      "position": "MID",
      "rating": 94,
      "club": "Bayer Leverkusen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alexis Mac Allister",
      "age": 27,
      "position": "MID",
      "rating": 88,
      "club": "Liverpool",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Enzo Fernández",
      "age": 25,
      "position": "MID",
      "rating": 88,
      "club": "Chelsea",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Giovani Lo Celso",
      "age": 30,
      "position": "MID",
      "rating": 86,
      "club": "Real Betis",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rodrigo De Paul",
      "age": 32,
      "position": "MID",
      "rating": 79,
      "club": "Inter Miami CF",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Leandro Paredes",
      "age": 31,
      "position": "MID",
      "rating": 78,
      "club": "Boca Juniors",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Valentín Barco",
      "age": 21,
      "position": "MID",
      "rating": 78,
      "club": "Strasbourg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lautaro Martínez",
      "age": 28,
      "position": "FWD",
      "rating": 94,
      "club": "Inter Milan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nico Paz",
      "age": 21,
      "position": "FWD",
      "rating": 86,
      "club": "Como",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lionel Messi",
      "age": 38,
      "position": "FWD",
      "rating": 84,
      "club": "Inter Miami CF",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Julián Alvarez",
      "age": 26,
      "position": "FWD",
      "rating": 83,
      "club": "Atlético Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nicolás González",
      "age": 28,
      "position": "FWD",
      "rating": 78,
      "club": "Atlético Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Thiago Almada",
      "age": 25,
      "position": "FWD",
      "rating": 78,
      "club": "Atlético Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Giuliano Simeone",
      "age": 23,
      "position": "FWD",
      "rating": 78,
      "club": "Atlético Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "José Manuel López",
      "age": 25,
      "position": "FWD",
      "rating": 78,
      "club": "Palmeiras",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "AUS": [
    {
      "name": "Mathew Ryan",
      "age": 34,
      "position": "GK",
      "rating": 76,
      "club": "Levante",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Paul Izzo",
      "age": 31,
      "position": "GK",
      "rating": 70,
      "club": "Randers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Patrick Beach",
      "age": 22,
      "position": "GK",
      "rating": 70,
      "club": "Melbourne City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jordan Bos",
      "age": 23,
      "position": "DEF",
      "rating": 84,
      "club": "Feyenoord",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Harry Souttar",
      "age": 27,
      "position": "DEF",
      "rating": 79,
      "club": "Leicester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Miloš Degenek",
      "age": 32,
      "position": "DEF",
      "rating": 76,
      "club": "APOEL",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alessandro Circati",
      "age": 22,
      "position": "DEF",
      "rating": 76,
      "club": "Parma",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jacob Italiano",
      "age": 24,
      "position": "DEF",
      "rating": 70,
      "club": "GAK",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jason Geria",
      "age": 33,
      "position": "DEF",
      "rating": 70,
      "club": "Albirex Niigata",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kai Trewin",
      "age": 25,
      "position": "DEF",
      "rating": 70,
      "club": "New York City FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Aziz Behich",
      "age": 35,
      "position": "DEF",
      "rating": 70,
      "club": "Melbourne City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Cameron Burgess",
      "age": 30,
      "position": "DEF",
      "rating": 70,
      "club": "Swansea City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lucas Herrington",
      "age": 18,
      "position": "DEF",
      "rating": 70,
      "club": "Colorado Rapids",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Connor Metcalfe",
      "age": 26,
      "position": "MID",
      "rating": 81,
      "club": "FC St. Pauli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ajdin Hrustic",
      "age": 29,
      "position": "MID",
      "rating": 76,
      "club": "Heracles Almelo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Aiden O'Neill",
      "age": 27,
      "position": "MID",
      "rating": 76,
      "club": "New York City FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Cammy Devlin",
      "age": 28,
      "position": "MID",
      "rating": 76,
      "club": "Heart of Midlothian",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jackson Irvine",
      "age": 33,
      "position": "MID",
      "rating": 70,
      "club": "FC St. Pauli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Paul Okon-Engstler",
      "age": 21,
      "position": "MID",
      "rating": 70,
      "club": "Sydney FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mathew Leckie",
      "age": 35,
      "position": "FWD",
      "rating": 81,
      "club": "Melbourne City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohamed Touré",
      "age": 22,
      "position": "FWD",
      "rating": 76,
      "club": "Norwich City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Awer Mabil",
      "age": 30,
      "position": "FWD",
      "rating": 76,
      "club": "Castellón",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nestory Irankunda",
      "age": 20,
      "position": "FWD",
      "rating": 76,
      "club": "Watford",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Cristian Volpato",
      "age": 22,
      "position": "FWD",
      "rating": 70,
      "club": "Sassuolo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nishan Velupillay",
      "age": 25,
      "position": "FWD",
      "rating": 70,
      "club": "Melbourne Victory",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tete Yengi",
      "age": 25,
      "position": "FWD",
      "rating": 70,
      "club": "Machida Zelvia",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "AUT": [
    {
      "name": "Alexander Schlager",
      "age": 30,
      "position": "GK",
      "rating": 76,
      "club": "Red Bull Salzburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Florian Wiegele",
      "age": 25,
      "position": "GK",
      "rating": 70,
      "club": "Viktoria Plzeň",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Patrick Pentz",
      "age": 29,
      "position": "GK",
      "rating": 70,
      "club": "Brøndby",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kevin Danso",
      "age": 27,
      "position": "DEF",
      "rating": 86,
      "club": "Tottenham Hotspur",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "David Alaba",
      "age": 33,
      "position": "DEF",
      "rating": 81,
      "club": "Real Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alexander Prass",
      "age": 25,
      "position": "DEF",
      "rating": 79,
      "club": "TSG Hoffenheim",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "David Affengruber",
      "age": 25,
      "position": "DEF",
      "rating": 76,
      "club": "Elche",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Stefan Posch",
      "age": 29,
      "position": "DEF",
      "rating": 70,
      "club": "Mainz 05",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Philipp Lienhart",
      "age": 29,
      "position": "DEF",
      "rating": 70,
      "club": "SC Freiburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Phillipp Mwene",
      "age": 32,
      "position": "DEF",
      "rating": 70,
      "club": "Mainz 05",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marco Friedl",
      "age": 28,
      "position": "DEF",
      "rating": 70,
      "club": "Werder Bremen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Michael Svoboda",
      "age": 27,
      "position": "DEF",
      "rating": 70,
      "club": "Venezia",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marcel Sabitzer",
      "age": 32,
      "position": "MID",
      "rating": 86,
      "club": "Borussia Dortmund",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Carney Chukwuemeka",
      "age": 22,
      "position": "MID",
      "rating": 81,
      "club": "Borussia Dortmund",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Konrad Laimer",
      "age": 29,
      "position": "MID",
      "rating": 81,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Xaver Schlager",
      "age": 28,
      "position": "MID",
      "rating": 79,
      "club": "RB Leipzig",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nicolas Seiwald",
      "age": 25,
      "position": "MID",
      "rating": 73,
      "club": "RB Leipzig",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Christoph Baumgartner",
      "age": 26,
      "position": "MID",
      "rating": 73,
      "club": "RB Leipzig",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Paul Wanner",
      "age": 20,
      "position": "MID",
      "rating": 73,
      "club": "PSV Eindhoven",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Florian Grillitsch",
      "age": 30,
      "position": "MID",
      "rating": 70,
      "club": "Braga",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Romano Schmid",
      "age": 26,
      "position": "MID",
      "rating": 70,
      "club": "Werder Bremen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Patrick Wimmer",
      "age": 25,
      "position": "MID",
      "rating": 70,
      "club": "VfL Wolfsburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alessandro Schöpf",
      "age": 32,
      "position": "MID",
      "rating": 70,
      "club": "Wolfsberger AC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marko Arnautović",
      "age": 37,
      "position": "FWD",
      "rating": 81,
      "club": "Red Star Belgrade",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Michael Gregoritsch",
      "age": 32,
      "position": "FWD",
      "rating": 76,
      "club": "FC Augsburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Saša Kalajdžić",
      "age": 28,
      "position": "FWD",
      "rating": 76,
      "club": "LASK",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "BEL": [
    {
      "name": "Thibaut Courtois",
      "age": 34,
      "position": "GK",
      "rating": 88,
      "club": "Real Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Senne Lammens",
      "age": 23,
      "position": "GK",
      "rating": 83,
      "club": "Manchester United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mike Penders",
      "age": 20,
      "position": "GK",
      "rating": 78,
      "club": "Strasbourg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Thomas Meunier",
      "age": 34,
      "position": "DEF",
      "rating": 92,
      "club": "Lille",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Timothy Castagne",
      "age": 30,
      "position": "DEF",
      "rating": 86,
      "club": "Fulham",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Arthur Theate",
      "age": 26,
      "position": "DEF",
      "rating": 86,
      "club": "Eintracht Frankfurt",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Zeno Debast",
      "age": 22,
      "position": "DEF",
      "rating": 86,
      "club": "Sporting CP",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Maxim De Cuyper",
      "age": 25,
      "position": "DEF",
      "rating": 81,
      "club": "Brighton & Hove Albion",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nathan Ngoy",
      "age": 23,
      "position": "DEF",
      "rating": 81,
      "club": "Lille",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Brandon Mechele",
      "age": 33,
      "position": "DEF",
      "rating": 78,
      "club": "Club Brugge",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Koni De Winter",
      "age": 23,
      "position": "DEF",
      "rating": 78,
      "club": "Milan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Joaquin Seys",
      "age": 21,
      "position": "DEF",
      "rating": 78,
      "club": "Club Brugge",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Youri Tielemans",
      "age": 29,
      "position": "MID",
      "rating": 94,
      "club": "Aston Villa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Amadou Onana",
      "age": 24,
      "position": "MID",
      "rating": 88,
      "club": "Aston Villa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Axel Witsel",
      "age": 37,
      "position": "MID",
      "rating": 86,
      "club": "Girona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kevin De Bruyne",
      "age": 34,
      "position": "MID",
      "rating": 83,
      "club": "Napoli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hans Vanaken",
      "age": 33,
      "position": "MID",
      "rating": 78,
      "club": "Club Brugge",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nicolas Raskin",
      "age": 25,
      "position": "MID",
      "rating": 78,
      "club": "Rangers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Leandro Trossard",
      "age": 31,
      "position": "FWD",
      "rating": 94,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jérémy Doku",
      "age": 24,
      "position": "FWD",
      "rating": 88,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dodi Lukébakio",
      "age": 28,
      "position": "FWD",
      "rating": 86,
      "club": "Benfica",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Charles De Ketelaere",
      "age": 25,
      "position": "FWD",
      "rating": 86,
      "club": "Atalanta",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Matias Fernandez-Pardo",
      "age": 21,
      "position": "FWD",
      "rating": 81,
      "club": "Lille",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Romelu Lukaku",
      "age": 33,
      "position": "FWD",
      "rating": 78,
      "club": "Napoli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alexis Saelemaekers",
      "age": 26,
      "position": "FWD",
      "rating": 78,
      "club": "Milan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Diego Moreira",
      "age": 21,
      "position": "FWD",
      "rating": 78,
      "club": "Strasbourg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "BIH": [
    {
      "name": "Nikola Vasilj",
      "age": 30,
      "position": "GK",
      "rating": 64,
      "club": "FC St. Pauli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Martin Zlomislić",
      "age": 27,
      "position": "GK",
      "rating": 58,
      "club": "Rijeka",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Osman Hadžikić",
      "age": 30,
      "position": "GK",
      "rating": 58,
      "club": "Slaven Belupo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sead Kolašinac",
      "age": 32,
      "position": "DEF",
      "rating": 73,
      "club": "Atalanta",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Amar Dedić",
      "age": 23,
      "position": "DEF",
      "rating": 67,
      "club": "Benfica",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dennis Hadžikadunić",
      "age": 27,
      "position": "DEF",
      "rating": 64,
      "club": "Sampdoria",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nikola Katić",
      "age": 29,
      "position": "DEF",
      "rating": 64,
      "club": "Schalke 04",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tarik Muharemović",
      "age": 23,
      "position": "DEF",
      "rating": 58,
      "club": "Sassuolo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nihad Mujakić",
      "age": 28,
      "position": "DEF",
      "rating": 58,
      "club": "Gaziantep",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Stjepan Radeljić",
      "age": 28,
      "position": "DEF",
      "rating": 58,
      "club": "Rijeka",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nidal Čelik",
      "age": 19,
      "position": "DEF",
      "rating": 58,
      "club": "Lens",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Esmir Bajraktarević",
      "age": 21,
      "position": "MID",
      "rating": 73,
      "club": "PSV Eindhoven",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Amir Hadžiahmetović",
      "age": 29,
      "position": "MID",
      "rating": 64,
      "club": "Hull City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Benjamin Tahirović",
      "age": 23,
      "position": "MID",
      "rating": 64,
      "club": "Brøndby",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Armin Gigović",
      "age": 24,
      "position": "MID",
      "rating": 64,
      "club": "Young Boys",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dženis Burnić",
      "age": 28,
      "position": "MID",
      "rating": 58,
      "club": "Karlsruher SC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ivan Bašić",
      "age": 24,
      "position": "MID",
      "rating": 58,
      "club": "Astana",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Amar Memić",
      "age": 25,
      "position": "MID",
      "rating": 58,
      "club": "Viktoria Plzeň",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ivan Šunjić",
      "age": 29,
      "position": "MID",
      "rating": 58,
      "club": "Pafos",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kerim Alajbegović",
      "age": 18,
      "position": "MID",
      "rating": 58,
      "club": "Red Bull Salzburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ermin Mahmić",
      "age": 21,
      "position": "MID",
      "rating": 58,
      "club": "Slovan Liberec",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ermedin Demirović",
      "age": 28,
      "position": "FWD",
      "rating": 73,
      "club": "VfB Stuttgart",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Edin Džeko",
      "age": 40,
      "position": "FWD",
      "rating": 64,
      "club": "Schalke 04",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Samed Baždar",
      "age": 22,
      "position": "FWD",
      "rating": 64,
      "club": "Jagiellonia Białystok",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Haris Tabaković",
      "age": 31,
      "position": "FWD",
      "rating": 64,
      "club": "Borussia Mönchengladbach",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jovo Lukić",
      "age": 27,
      "position": "FWD",
      "rating": 58,
      "club": "Universitatea Cluj",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "BRA": [
    {
      "name": "Alisson",
      "age": 33,
      "position": "GK",
      "rating": 88,
      "club": "Liverpool",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Weverton",
      "age": 38,
      "position": "GK",
      "rating": 78,
      "club": "Grêmio",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ederson",
      "age": 32,
      "position": "GK",
      "rating": 78,
      "club": "Fenerbahçe",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gabriel Magalhães",
      "age": 28,
      "position": "DEF",
      "rating": 94,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marquinhos",
      "age": 32,
      "position": "DEF",
      "rating": 88,
      "club": "Paris Saint-Germain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Bremer",
      "age": 29,
      "position": "DEF",
      "rating": 88,
      "club": "Juventus",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Wesley",
      "age": 22,
      "position": "DEF",
      "rating": 86,
      "club": "Roma",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Roger Ibañez",
      "age": 27,
      "position": "DEF",
      "rating": 79,
      "club": "Al-Ahli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alex Sandro",
      "age": 35,
      "position": "DEF",
      "rating": 78,
      "club": "Flamengo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Danilo Luiz",
      "age": 34,
      "position": "DEF",
      "rating": 78,
      "club": "Flamengo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Léo Pereira",
      "age": 30,
      "position": "DEF",
      "rating": 78,
      "club": "Flamengo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Douglas Santos",
      "age": 32,
      "position": "DEF",
      "rating": 78,
      "club": "Zenit Saint Petersburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Casemiro",
      "age": 34,
      "position": "MID",
      "rating": 94,
      "club": "Manchester United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Bruno Guimarães",
      "age": 28,
      "position": "MID",
      "rating": 88,
      "club": "Newcastle United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Fabinho",
      "age": 32,
      "position": "MID",
      "rating": 84,
      "club": "Al-Ittihad",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Danilo Santos",
      "age": 25,
      "position": "MID",
      "rating": 83,
      "club": "Botafogo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lucas Paquetá",
      "age": 28,
      "position": "MID",
      "rating": 78,
      "club": "Flamengo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Vinícius Júnior",
      "age": 25,
      "position": "FWD",
      "rating": 94,
      "club": "Real Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Matheus Cunha",
      "age": 27,
      "position": "FWD",
      "rating": 88,
      "club": "Manchester United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Raphinha",
      "age": 29,
      "position": "FWD",
      "rating": 88,
      "club": "Barcelona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gabriel Martinelli",
      "age": 24,
      "position": "FWD",
      "rating": 88,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Endrick",
      "age": 19,
      "position": "FWD",
      "rating": 81,
      "club": "Lyon",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Neymar",
      "age": 34,
      "position": "FWD",
      "rating": 78,
      "club": "Santos",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Luiz Henrique",
      "age": 25,
      "position": "FWD",
      "rating": 78,
      "club": "Zenit Saint Petersburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Igor Thiago",
      "age": 24,
      "position": "FWD",
      "rating": 78,
      "club": "Brentford",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rayan",
      "age": 19,
      "position": "FWD",
      "rating": 78,
      "club": "Bournemouth",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "CAN": [
    {
      "name": "Dayne St. Clair",
      "age": 29,
      "position": "GK",
      "rating": 71,
      "club": "Inter Miami CF",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Maxime Crépeau",
      "age": 32,
      "position": "GK",
      "rating": 65,
      "club": "Orlando City SC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Owen Goodman",
      "age": 22,
      "position": "GK",
      "rating": 64,
      "club": "Barnsley",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alphonso Davies",
      "age": 25,
      "position": "DEF",
      "rating": 81,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Moïse Bombito",
      "age": 26,
      "position": "DEF",
      "rating": 73,
      "club": "Nice",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alistair Johnston",
      "age": 27,
      "position": "DEF",
      "rating": 70,
      "club": "Celtic",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Luc de Fougerolles",
      "age": 20,
      "position": "DEF",
      "rating": 70,
      "club": "Dender",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alfie Jones",
      "age": 28,
      "position": "DEF",
      "rating": 64,
      "club": "Middlesbrough",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Joel Waterman",
      "age": 30,
      "position": "DEF",
      "rating": 64,
      "club": "Chicago Fire FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Derek Cornelius",
      "age": 28,
      "position": "DEF",
      "rating": 64,
      "club": "Rangers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Richie Laryea",
      "age": 31,
      "position": "DEF",
      "rating": 64,
      "club": "Toronto FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Niko Sigur",
      "age": 22,
      "position": "DEF",
      "rating": 64,
      "club": "Hajduk Split",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tajon Buchanan",
      "age": 27,
      "position": "MID",
      "rating": 79,
      "club": "Villarreal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mathieu Choinière",
      "age": 27,
      "position": "MID",
      "rating": 70,
      "club": "Los Angeles FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Stephen Eustáquio",
      "age": 29,
      "position": "MID",
      "rating": 70,
      "club": "Los Angeles FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ismaël Koné",
      "age": 23,
      "position": "MID",
      "rating": 70,
      "club": "Sassuolo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Luc de Fougerolles",
      "age": 21,
      "position": "MID",
      "rating": 65,
      "club": "Fulham",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Liam Millar",
      "age": 26,
      "position": "MID",
      "rating": 64,
      "club": "Hull City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jacob Shaffelburg",
      "age": 26,
      "position": "MID",
      "rating": 64,
      "club": "Los Angeles FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ali Ahmed",
      "age": 25,
      "position": "MID",
      "rating": 64,
      "club": "Norwich City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jonathan Osorio",
      "age": 33,
      "position": "MID",
      "rating": 64,
      "club": "Toronto FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nathan Saliba",
      "age": 22,
      "position": "MID",
      "rating": 64,
      "club": "Anderlecht",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jonathan David",
      "age": 26,
      "position": "FWD",
      "rating": 81,
      "club": "Juventus",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tani Oluwaseyi",
      "age": 26,
      "position": "FWD",
      "rating": 73,
      "club": "Villarreal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Cyle Larin",
      "age": 31,
      "position": "FWD",
      "rating": 70,
      "club": "Southampton",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Promise David",
      "age": 24,
      "position": "FWD",
      "rating": 70,
      "club": "Union Saint-Gilloise",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "CIV": [
    {
      "name": "Yahia Fofana",
      "age": 25,
      "position": "GK",
      "rating": 70,
      "club": "Çaykur Rizespor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alban Lafont",
      "age": 27,
      "position": "GK",
      "rating": 64,
      "club": "Panathinaikos",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohamed Koné",
      "age": 24,
      "position": "GK",
      "rating": 64,
      "club": "Charleroi",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Odilon Kossounou",
      "age": 25,
      "position": "DEF",
      "rating": 79,
      "club": "Atalanta",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Evan Ndicka",
      "age": 26,
      "position": "DEF",
      "rating": 73,
      "club": "Roma",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ousmane Diomande",
      "age": 22,
      "position": "DEF",
      "rating": 73,
      "club": "Sporting CP",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ghislain Konan",
      "age": 30,
      "position": "DEF",
      "rating": 70,
      "club": "Gil Vicente",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Wilfried Singo",
      "age": 25,
      "position": "DEF",
      "rating": 64,
      "club": "Galatasaray",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Emmanuel Agbadou",
      "age": 29,
      "position": "DEF",
      "rating": 64,
      "club": "Beşiktaş",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Guéla Doué",
      "age": 23,
      "position": "DEF",
      "rating": 64,
      "club": "Strasbourg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Christopher Opéri",
      "age": 29,
      "position": "DEF",
      "rating": 64,
      "club": "İstanbul Başakşehir",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Seko Fofana",
      "age": 31,
      "position": "MID",
      "rating": 79,
      "club": "Porto",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Franck Kessié",
      "age": 29,
      "position": "MID",
      "rating": 71,
      "club": "Al-Ahli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jean Michaël Seri",
      "age": 34,
      "position": "MID",
      "rating": 70,
      "club": "Maribor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ibrahim Sangaré",
      "age": 28,
      "position": "MID",
      "rating": 70,
      "club": "Nottingham Forest",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Christ Inao Oulaï",
      "age": 20,
      "position": "MID",
      "rating": 64,
      "club": "Trabzonspor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Parfait Guiagon",
      "age": 25,
      "position": "MID",
      "rating": 64,
      "club": "Charleroi",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Amad Diallo",
      "age": 23,
      "position": "FWD",
      "rating": 81,
      "club": "Manchester United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ange-Yoan Bonny",
      "age": 22,
      "position": "FWD",
      "rating": 75,
      "club": "Inter Milan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nicolas Pépé",
      "age": 31,
      "position": "FWD",
      "rating": 73,
      "club": "Villarreal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Simon Adingra",
      "age": 24,
      "position": "FWD",
      "rating": 73,
      "club": "Monaco",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Evann Guessand",
      "age": 24,
      "position": "FWD",
      "rating": 67,
      "club": "Crystal Palace",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yan Diomande",
      "age": 19,
      "position": "FWD",
      "rating": 67,
      "club": "RB Leipzig",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Bazoumana Touré",
      "age": 20,
      "position": "FWD",
      "rating": 67,
      "club": "TSG Hoffenheim",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Elye Wahi",
      "age": 23,
      "position": "FWD",
      "rating": 67,
      "club": "Nice",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Oumar Diakité",
      "age": 22,
      "position": "FWD",
      "rating": 64,
      "club": "Cercle Brugge",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "COD": [
    {
      "name": "Lionel Mpasi",
      "age": 31,
      "position": "GK",
      "rating": 70,
      "club": "Le Havre",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Timothy Fayulu",
      "age": 26,
      "position": "GK",
      "rating": 64,
      "club": "Noah",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Matthieu Epolo",
      "age": 21,
      "position": "GK",
      "rating": 64,
      "club": "Standard Liège",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Chancel Mbemba",
      "age": 31,
      "position": "DEF",
      "rating": 79,
      "club": "Lille",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Aaron Wan-Bissaka",
      "age": 28,
      "position": "DEF",
      "rating": 73,
      "club": "West Ham United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Arthur Masuaku",
      "age": 32,
      "position": "DEF",
      "rating": 70,
      "club": "Lens",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gédéon Kalulu",
      "age": 28,
      "position": "DEF",
      "rating": 70,
      "club": "Aris Limassol",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Joris Kayembe",
      "age": 31,
      "position": "DEF",
      "rating": 64,
      "club": "Genk",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dylan Batubinsika",
      "age": 30,
      "position": "DEF",
      "rating": 64,
      "club": "AEL",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Axel Tuanzebe",
      "age": 28,
      "position": "DEF",
      "rating": 64,
      "club": "Burnley",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Steve Kapuadi",
      "age": 28,
      "position": "DEF",
      "rating": 64,
      "club": "Widzew Łódź",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Noah Sadiki",
      "age": 21,
      "position": "MID",
      "rating": 79,
      "club": "Sunderland",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ngal'ayel Mukau",
      "age": 21,
      "position": "MID",
      "rating": 73,
      "club": "Lille",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Samuel Moutoussamy",
      "age": 29,
      "position": "MID",
      "rating": 70,
      "club": "Atromitos",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Edo Kayembe",
      "age": 28,
      "position": "MID",
      "rating": 70,
      "club": "Watford",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Charles Pickel",
      "age": 29,
      "position": "MID",
      "rating": 64,
      "club": "Espanyol",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gaël Kakuta",
      "age": 34,
      "position": "MID",
      "rating": 64,
      "club": "AEL",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Aaron Tshibola",
      "age": 31,
      "position": "MID",
      "rating": 64,
      "club": "Kilmarnock",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Brian Cipenga",
      "age": 28,
      "position": "MID",
      "rating": 64,
      "club": "Castellón",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yoane Wissa",
      "age": 29,
      "position": "FWD",
      "rating": 81,
      "club": "Newcastle United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Cédric Bakambu",
      "age": 35,
      "position": "FWD",
      "rating": 73,
      "club": "Real Betis",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Meschak Elia",
      "age": 28,
      "position": "FWD",
      "rating": 70,
      "club": "Alanyaspor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Théo Bongonda",
      "age": 30,
      "position": "FWD",
      "rating": 70,
      "club": "Spartak Moscow",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Fiston Mayele",
      "age": 31,
      "position": "FWD",
      "rating": 64,
      "club": "Pyramids",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nathanaël Mbuku",
      "age": 24,
      "position": "FWD",
      "rating": 64,
      "club": "Montpellier",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Simon Banza",
      "age": 29,
      "position": "FWD",
      "rating": 64,
      "club": "Al-Jazira",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "COL": [
    {
      "name": "David Ospina",
      "age": 37,
      "position": "GK",
      "rating": 80,
      "club": "Atlético Nacional",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Camilo Vargas",
      "age": 37,
      "position": "GK",
      "rating": 75,
      "club": "Atlas",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Álvaro Montero",
      "age": 31,
      "position": "GK",
      "rating": 75,
      "club": "Vélez Sarsfield",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Daniel Muñoz",
      "age": 30,
      "position": "DEF",
      "rating": 88,
      "club": "Crystal Palace",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jhon Lucumí",
      "age": 27,
      "position": "DEF",
      "rating": 83,
      "club": "Bologna",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Davinson Sánchez",
      "age": 29,
      "position": "DEF",
      "rating": 80,
      "club": "Galatasaray",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Santiago Arias",
      "age": 34,
      "position": "DEF",
      "rating": 80,
      "club": "Independiente",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yerry Mina",
      "age": 31,
      "position": "DEF",
      "rating": 75,
      "club": "Cagliari",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Johan Mojica",
      "age": 33,
      "position": "DEF",
      "rating": 75,
      "club": "Mallorca",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Deiver Machado",
      "age": 32,
      "position": "DEF",
      "rating": 75,
      "club": "Nantes",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Willer Ditta",
      "age": 29,
      "position": "DEF",
      "rating": 75,
      "club": "Cruz Azul",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jefferson Lerma",
      "age": 31,
      "position": "MID",
      "rating": 88,
      "club": "Crystal Palace",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Richard Ríos",
      "age": 26,
      "position": "MID",
      "rating": 83,
      "club": "Benfica",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "James Rodríguez",
      "age": 34,
      "position": "MID",
      "rating": 80,
      "club": "Minnesota United FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Juan Fernando Quintero",
      "age": 33,
      "position": "MID",
      "rating": 80,
      "club": "River Plate",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jhon Arias",
      "age": 28,
      "position": "MID",
      "rating": 75,
      "club": "Palmeiras",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kevin Castaño",
      "age": 25,
      "position": "MID",
      "rating": 75,
      "club": "River Plate",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jorge Carrascal",
      "age": 28,
      "position": "MID",
      "rating": 75,
      "club": "Flamengo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jaminton Campaz",
      "age": 26,
      "position": "MID",
      "rating": 75,
      "club": "Rosario Central",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Juan Portilla",
      "age": 27,
      "position": "MID",
      "rating": 75,
      "club": "Athletico Paranaense",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gustavo Puerta",
      "age": 22,
      "position": "MID",
      "rating": 75,
      "club": "Racing Santander",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Luis Díaz",
      "age": 29,
      "position": "FWD",
      "rating": 90,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Luis Suárez",
      "age": 28,
      "position": "FWD",
      "rating": 83,
      "club": "Sporting CP",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Cucho Hernández",
      "age": 27,
      "position": "FWD",
      "rating": 83,
      "club": "Real Betis",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jhon Córdoba",
      "age": 33,
      "position": "FWD",
      "rating": 80,
      "club": "Krasnodar",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Andrés Gómez",
      "age": 23,
      "position": "FWD",
      "rating": 75,
      "club": "Vasco da Gama",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "CPV": [
    {
      "name": "Vozinha",
      "age": 40,
      "position": "GK",
      "rating": 64,
      "club": "Chaves",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Márcio Rosa",
      "age": 29,
      "position": "GK",
      "rating": 58,
      "club": "Montana",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "CJ dos Santos",
      "age": 25,
      "position": "GK",
      "rating": 58,
      "club": "San Diego FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Logan Costa",
      "age": 25,
      "position": "DEF",
      "rating": 73,
      "club": "Villarreal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sidny Lopes Cabral",
      "age": 22,
      "position": "DEF",
      "rating": 67,
      "club": "Benfica",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Steven Moreira",
      "age": 31,
      "position": "DEF",
      "rating": 65,
      "club": "Columbus Crew",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Stopira",
      "age": 38,
      "position": "DEF",
      "rating": 64,
      "club": "Torreense",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Roberto Lopes",
      "age": 33,
      "position": "DEF",
      "rating": 58,
      "club": "Shamrock Rovers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "João Paulo",
      "age": 28,
      "position": "DEF",
      "rating": 58,
      "club": "FCSB",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Diney",
      "age": 31,
      "position": "DEF",
      "rating": 58,
      "club": "Al-Bataeh",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Wagner Pina",
      "age": 23,
      "position": "DEF",
      "rating": 58,
      "club": "Trabzonspor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kelvin Pires",
      "age": 26,
      "position": "DEF",
      "rating": 58,
      "club": "SJK",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jamiro Monteiro",
      "age": 32,
      "position": "MID",
      "rating": 70,
      "club": "PEC Zwolle",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kevin Pina",
      "age": 29,
      "position": "MID",
      "rating": 64,
      "club": "Krasnodar",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Deroy Duarte",
      "age": 26,
      "position": "MID",
      "rating": 64,
      "club": "Ludogorets Razgrad",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Telmo Arcanjo",
      "age": 24,
      "position": "MID",
      "rating": 64,
      "club": "Vitória de Guimarães",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Laros Duarte",
      "age": 29,
      "position": "MID",
      "rating": 58,
      "club": "Puskás Akadémia",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yannick Semedo",
      "age": 30,
      "position": "MID",
      "rating": 58,
      "club": "Farense",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ryan Mendes",
      "age": 36,
      "position": "FWD",
      "rating": 70,
      "club": "Iğdır",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Garry Rodrigues",
      "age": 35,
      "position": "FWD",
      "rating": 64,
      "club": "Apollon Limassol",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Willy Semedo",
      "age": 32,
      "position": "FWD",
      "rating": 64,
      "club": "Omonia",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jovane Cabral",
      "age": 27,
      "position": "FWD",
      "rating": 64,
      "club": "Estrela Amadora",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gilson Benchimol",
      "age": 24,
      "position": "FWD",
      "rating": 58,
      "club": "Akron Tolyatti",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dailon Livramento",
      "age": 25,
      "position": "FWD",
      "rating": 58,
      "club": "Casa Pia",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hélio Varela",
      "age": 24,
      "position": "FWD",
      "rating": 58,
      "club": "Maccabi Tel Aviv",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nuno da Costa",
      "age": 35,
      "position": "FWD",
      "rating": 58,
      "club": "İstanbul Başakşehir",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "CRO": [
    {
      "name": "Dominik Livaković",
      "age": 31,
      "position": "GK",
      "rating": 80,
      "club": "Dinamo Zagreb",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dominik Kotarski",
      "age": 26,
      "position": "GK",
      "rating": 75,
      "club": "Copenhagen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ivor Pandur",
      "age": 26,
      "position": "GK",
      "rating": 75,
      "club": "Hull City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Joško Gvardiol",
      "age": 24,
      "position": "DEF",
      "rating": 90,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Josip Stanišić",
      "age": 26,
      "position": "DEF",
      "rating": 85,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Duje Ćaleta-Car",
      "age": 29,
      "position": "DEF",
      "rating": 83,
      "club": "Real Sociedad",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Josip Šutalo",
      "age": 26,
      "position": "DEF",
      "rating": 83,
      "club": "Ajax",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marin Pongračić",
      "age": 28,
      "position": "DEF",
      "rating": 78,
      "club": "Fiorentina",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Martin Erlić",
      "age": 28,
      "position": "DEF",
      "rating": 75,
      "club": "Midtjylland",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Luka Vušković",
      "age": 19,
      "position": "DEF",
      "rating": 75,
      "club": "Hamburger SV",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mateo Kovačić",
      "age": 32,
      "position": "MID",
      "rating": 90,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Petar Sučić",
      "age": 22,
      "position": "MID",
      "rating": 85,
      "club": "Inter Milan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mario Pašalić",
      "age": 31,
      "position": "MID",
      "rating": 83,
      "club": "Atalanta",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nikola Vlašić",
      "age": 28,
      "position": "MID",
      "rating": 83,
      "club": "Torino",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Luka Sučić",
      "age": 23,
      "position": "MID",
      "rating": 78,
      "club": "Real Sociedad",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Martin Baturina",
      "age": 23,
      "position": "MID",
      "rating": 78,
      "club": "Como",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nikola Moro",
      "age": 28,
      "position": "MID",
      "rating": 78,
      "club": "Bologna",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Luka Modrić",
      "age": 40,
      "position": "MID",
      "rating": 75,
      "club": "Milan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kristijan Jakić",
      "age": 29,
      "position": "MID",
      "rating": 75,
      "club": "FC Augsburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Toni Fruk",
      "age": 25,
      "position": "MID",
      "rating": 75,
      "club": "Rijeka",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ivan Perišić",
      "age": 37,
      "position": "FWD",
      "rating": 88,
      "club": "PSV Eindhoven",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Andrej Kramarić",
      "age": 34,
      "position": "FWD",
      "rating": 83,
      "club": "TSG Hoffenheim",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marco Pašalić",
      "age": 25,
      "position": "FWD",
      "rating": 81,
      "club": "Orlando City SC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ante Budimir",
      "age": 34,
      "position": "FWD",
      "rating": 80,
      "club": "Osasuna",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Petar Musa",
      "age": 28,
      "position": "FWD",
      "rating": 75,
      "club": "FC Dallas",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Igor Matanović",
      "age": 23,
      "position": "FWD",
      "rating": 75,
      "club": "SC Freiburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "CUW": [
    {
      "name": "Eloy Room",
      "age": 37,
      "position": "GK",
      "rating": 64,
      "club": "Miami FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tyrick Bodak",
      "age": 24,
      "position": "GK",
      "rating": 58,
      "club": "Telstar",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Trevor Doornbusch",
      "age": 26,
      "position": "GK",
      "rating": 58,
      "club": "VVV-Venlo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Armando Obispo",
      "age": 27,
      "position": "DEF",
      "rating": 73,
      "club": "PSV Eindhoven",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Shurandy Sambo",
      "age": 24,
      "position": "DEF",
      "rating": 64,
      "club": "Sparta Rotterdam",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Juriën Gaari",
      "age": 32,
      "position": "DEF",
      "rating": 64,
      "club": "Abha",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Roshon van Eijma",
      "age": 28,
      "position": "DEF",
      "rating": 64,
      "club": "RKC Waalwijk",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sherel Floranus",
      "age": 27,
      "position": "DEF",
      "rating": 58,
      "club": "PEC Zwolle",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Joshua Brenet",
      "age": 32,
      "position": "DEF",
      "rating": 58,
      "club": "Kayserispor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Riechedly Bazoer",
      "age": 29,
      "position": "DEF",
      "rating": 58,
      "club": "Konyaspor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Deveron Fonville",
      "age": 23,
      "position": "DEF",
      "rating": 58,
      "club": "NEC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Godfried Roemeratoe",
      "age": 26,
      "position": "MID",
      "rating": 70,
      "club": "RKC Waalwijk",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Juninho Bacuna",
      "age": 28,
      "position": "MID",
      "rating": 64,
      "club": "Volendam",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Livano Comenencia",
      "age": 22,
      "position": "MID",
      "rating": 64,
      "club": "Zürich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Leandro Bacuna",
      "age": 34,
      "position": "MID",
      "rating": 64,
      "club": "Iğdır",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tyrese Noslin",
      "age": 23,
      "position": "MID",
      "rating": 58,
      "club": "Telstar",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ar'jany Martha",
      "age": 22,
      "position": "MID",
      "rating": 58,
      "club": "Rotherham United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kevin Felida",
      "age": 26,
      "position": "MID",
      "rating": 58,
      "club": "Den Bosch",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jürgen Locadia",
      "age": 32,
      "position": "FWD",
      "rating": 70,
      "club": "Miami FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jeremy Antonisse",
      "age": 24,
      "position": "FWD",
      "rating": 64,
      "club": "Kifisia",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sontje Hansen",
      "age": 24,
      "position": "FWD",
      "rating": 64,
      "club": "Middlesbrough",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kenji Gorré",
      "age": 31,
      "position": "FWD",
      "rating": 64,
      "club": "Maccabi Haifa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jearl Margaritha",
      "age": 26,
      "position": "FWD",
      "rating": 58,
      "club": "Beveren",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Brandley Kuwas",
      "age": 33,
      "position": "FWD",
      "rating": 58,
      "club": "Volendam",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gervane Kastaneer",
      "age": 30,
      "position": "FWD",
      "rating": 58,
      "club": "Terengganu",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tahith Chong",
      "age": 26,
      "position": "FWD",
      "rating": 58,
      "club": "Sheffield United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "CZE": [
    {
      "name": "Matěj Kovář",
      "age": 26,
      "position": "GK",
      "rating": 73,
      "club": "PSV Eindhoven",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jindřich Staněk",
      "age": 30,
      "position": "GK",
      "rating": 64,
      "club": "Slavia Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lukáš Horníček",
      "age": 23,
      "position": "GK",
      "rating": 64,
      "club": "Braga",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Vladimír Coufal",
      "age": 33,
      "position": "DEF",
      "rating": 79,
      "club": "TSG Hoffenheim",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Robin Hranáč",
      "age": 26,
      "position": "DEF",
      "rating": 73,
      "club": "TSG Hoffenheim",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tomáš Holeš",
      "age": 33,
      "position": "DEF",
      "rating": 70,
      "club": "Slavia Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ladislav Krejčí",
      "age": 27,
      "position": "DEF",
      "rating": 70,
      "club": "Wolverhampton Wanderers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "David Zima",
      "age": 25,
      "position": "DEF",
      "rating": 64,
      "club": "Slavia Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jaroslav Zelený",
      "age": 33,
      "position": "DEF",
      "rating": 64,
      "club": "Sparta Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "David Jurásek",
      "age": 25,
      "position": "DEF",
      "rating": 64,
      "club": "Slavia Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "David Douděra",
      "age": 28,
      "position": "DEF",
      "rating": 64,
      "club": "Slavia Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Štěpán Chaloupek",
      "age": 23,
      "position": "DEF",
      "rating": 64,
      "club": "Slavia Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tomáš Souček",
      "age": 31,
      "position": "MID",
      "rating": 79,
      "club": "West Ham United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Pavel Šulc",
      "age": 25,
      "position": "MID",
      "rating": 73,
      "club": "Lyon",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Vladimír Darida",
      "age": 35,
      "position": "MID",
      "rating": 70,
      "club": "Hradec Králové",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lukáš Provod",
      "age": 29,
      "position": "MID",
      "rating": 70,
      "club": "Slavia Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Michal Sadílek",
      "age": 27,
      "position": "MID",
      "rating": 64,
      "club": "Slavia Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lukáš Červ",
      "age": 25,
      "position": "MID",
      "rating": 64,
      "club": "Viktoria Plzeň",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hugo Sochůrek",
      "age": 18,
      "position": "MID",
      "rating": 64,
      "club": "Sparta Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alexandr Sojka",
      "age": 23,
      "position": "MID",
      "rating": 64,
      "club": "Viktoria Plzeň",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Denis Višinský",
      "age": 23,
      "position": "MID",
      "rating": 64,
      "club": "Viktoria Plzeň",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Patrik Schick",
      "age": 30,
      "position": "FWD",
      "rating": 81,
      "club": "Bayer Leverkusen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Adam Hložek",
      "age": 23,
      "position": "FWD",
      "rating": 73,
      "club": "TSG Hoffenheim",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jan Kuchta",
      "age": 29,
      "position": "FWD",
      "rating": 70,
      "club": "Sparta Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mojmír Chytil",
      "age": 27,
      "position": "FWD",
      "rating": 70,
      "club": "Slavia Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tomáš Chorý",
      "age": 31,
      "position": "FWD",
      "rating": 64,
      "club": "Slavia Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "ECU": [
    {
      "name": "Hernán Galíndez",
      "age": 39,
      "position": "GK",
      "rating": 76,
      "club": "Huracán",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Moisés Ramírez",
      "age": 25,
      "position": "GK",
      "rating": 70,
      "club": "Kifisia",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gonzalo Valle",
      "age": 30,
      "position": "GK",
      "rating": 70,
      "club": "LDU Quito",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Piero Hincapié",
      "age": 24,
      "position": "DEF",
      "rating": 86,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Willian Pacho",
      "age": 24,
      "position": "DEF",
      "rating": 81,
      "club": "Paris Saint-Germain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Félix Torres",
      "age": 29,
      "position": "DEF",
      "rating": 76,
      "club": "Internacional",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Joel Ordóñez",
      "age": 22,
      "position": "DEF",
      "rating": 76,
      "club": "Club Brugge",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Pervis Estupiñán",
      "age": 28,
      "position": "DEF",
      "rating": 70,
      "club": "Milan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ángelo Preciado",
      "age": 28,
      "position": "DEF",
      "rating": 70,
      "club": "Atlético Mineiro",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jackson Porozo",
      "age": 25,
      "position": "DEF",
      "rating": 70,
      "club": "Tijuana",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Moisés Caicedo",
      "age": 24,
      "position": "MID",
      "rating": 86,
      "club": "Chelsea",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jordy Alcívar",
      "age": 26,
      "position": "MID",
      "rating": 76,
      "club": "Independiente del Valle",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Denil Castillo",
      "age": 22,
      "position": "MID",
      "rating": 76,
      "club": "Midtjylland",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "John Yeboah",
      "age": 25,
      "position": "MID",
      "rating": 76,
      "club": "Venezia",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kendry Páez",
      "age": 19,
      "position": "MID",
      "rating": 70,
      "club": "River Plate",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alan Minda",
      "age": 23,
      "position": "MID",
      "rating": 70,
      "club": "Atlético Mineiro",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Pedro Vite",
      "age": 24,
      "position": "MID",
      "rating": 70,
      "club": "UNAM",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gonzalo Plata",
      "age": 25,
      "position": "MID",
      "rating": 70,
      "club": "Flamengo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alan Franco",
      "age": 27,
      "position": "MID",
      "rating": 70,
      "club": "Atlético Mineiro",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yaimar Medina",
      "age": 21,
      "position": "MID",
      "rating": 70,
      "club": "Genk",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nilson Angulo",
      "age": 22,
      "position": "FWD",
      "rating": 84,
      "club": "Sunderland",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jeremy Arévalo",
      "age": 21,
      "position": "FWD",
      "rating": 79,
      "club": "VfB Stuttgart",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kevin Rodríguez",
      "age": 26,
      "position": "FWD",
      "rating": 76,
      "club": "Union Saint-Gilloise",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Enner Valencia",
      "age": 36,
      "position": "FWD",
      "rating": 76,
      "club": "Pachuca",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Anthony Valencia",
      "age": 22,
      "position": "FWD",
      "rating": 70,
      "club": "Antwerp",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jordy Caicedo",
      "age": 28,
      "position": "FWD",
      "rating": 70,
      "club": "Huracán",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "EGY": [
    {
      "name": "Mohamed El Shenawy",
      "age": 37,
      "position": "GK",
      "rating": 70,
      "club": "Al Ahly",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mostafa Shobeir",
      "age": 26,
      "position": "GK",
      "rating": 64,
      "club": "Al Ahly",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohamed Alaa",
      "age": 27,
      "position": "GK",
      "rating": 64,
      "club": "El Gouna",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "El Mahdy Soliman",
      "age": 39,
      "position": "GK",
      "rating": 64,
      "club": "Zamalek",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohamed Abdelmonem",
      "age": 27,
      "position": "DEF",
      "rating": 79,
      "club": "Nice",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hamdy Fathy",
      "age": 31,
      "position": "DEF",
      "rating": 70,
      "club": "Al-Wakrah",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ramy Rabia",
      "age": 33,
      "position": "DEF",
      "rating": 70,
      "club": "Al-Ain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohamed Hany",
      "age": 30,
      "position": "DEF",
      "rating": 70,
      "club": "Al Ahly",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ahmed Fatouh",
      "age": 28,
      "position": "DEF",
      "rating": 64,
      "club": "Zamalek",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yasser Ibrahim",
      "age": 33,
      "position": "DEF",
      "rating": 64,
      "club": "Al Ahly",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hossam Abdelmaguid",
      "age": 25,
      "position": "DEF",
      "rating": 64,
      "club": "Zamalek",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Karim Hafez",
      "age": 30,
      "position": "DEF",
      "rating": 64,
      "club": "Pyramids",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tarek Alaa",
      "age": 24,
      "position": "DEF",
      "rating": 64,
      "club": "ZED",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marwan Attia",
      "age": 27,
      "position": "MID",
      "rating": 76,
      "club": "Al Ahly",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Emam Ashour",
      "age": 28,
      "position": "MID",
      "rating": 70,
      "club": "Al Ahly",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohanad Lasheen",
      "age": 30,
      "position": "MID",
      "rating": 70,
      "club": "Pyramids",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mahmoud Saber",
      "age": 24,
      "position": "MID",
      "rating": 70,
      "club": "ZED",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nabil Emad",
      "age": 30,
      "position": "MID",
      "rating": 64,
      "club": "Al-Najma",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mostafa Ziko [ar]",
      "age": 29,
      "position": "MID",
      "rating": 64,
      "club": "Pyramids",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohamed Salah",
      "age": 33,
      "position": "FWD",
      "rating": 81,
      "club": "Liverpool",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Omar Marmoush",
      "age": 27,
      "position": "FWD",
      "rating": 75,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hamza Abdelkarim",
      "age": 18,
      "position": "FWD",
      "rating": 75,
      "club": "Barcelona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Trézéguet",
      "age": 31,
      "position": "FWD",
      "rating": 70,
      "club": "Al Ahly",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Zizo",
      "age": 30,
      "position": "FWD",
      "rating": 64,
      "club": "Al Ahly",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ibrahim Adel",
      "age": 25,
      "position": "FWD",
      "rating": 64,
      "club": "Nordsjælland",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Haissem Hassan",
      "age": 24,
      "position": "FWD",
      "rating": 64,
      "club": "Oviedo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "ENG": [
    {
      "name": "James Trafford",
      "age": 23,
      "position": "GK",
      "rating": 88,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jordan Pickford",
      "age": 32,
      "position": "GK",
      "rating": 81,
      "club": "Everton",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dean Henderson",
      "age": 29,
      "position": "GK",
      "rating": 81,
      "club": "Crystal Palace",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "John Stones",
      "age": 32,
      "position": "DEF",
      "rating": 94,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marc Guéhi",
      "age": 25,
      "position": "DEF",
      "rating": 88,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Reece James",
      "age": 26,
      "position": "DEF",
      "rating": 88,
      "club": "Chelsea",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ezri Konsa",
      "age": 28,
      "position": "DEF",
      "rating": 88,
      "club": "Aston Villa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dan Burn",
      "age": 34,
      "position": "DEF",
      "rating": 83,
      "club": "Newcastle United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tino Livramento",
      "age": 23,
      "position": "DEF",
      "rating": 83,
      "club": "Newcastle United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Djed Spence",
      "age": 25,
      "position": "DEF",
      "rating": 83,
      "club": "Tottenham Hotspur",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nico O'Reilly",
      "age": 21,
      "position": "DEF",
      "rating": 83,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jarell Quansah",
      "age": 23,
      "position": "DEF",
      "rating": 83,
      "club": "Bayer Leverkusen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Declan Rice",
      "age": 27,
      "position": "MID",
      "rating": 94,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jude Bellingham",
      "age": 22,
      "position": "MID",
      "rating": 88,
      "club": "Real Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Morgan Rogers",
      "age": 23,
      "position": "MID",
      "rating": 88,
      "club": "Aston Villa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kobbie Mainoo",
      "age": 21,
      "position": "MID",
      "rating": 88,
      "club": "Manchester United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jordan Henderson",
      "age": 35,
      "position": "MID",
      "rating": 78,
      "club": "Brentford",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Elliot Anderson",
      "age": 23,
      "position": "MID",
      "rating": 78,
      "club": "Nottingham Forest",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Harry Kane",
      "age": 32,
      "position": "FWD",
      "rating": 94,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marcus Rashford",
      "age": 28,
      "position": "FWD",
      "rating": 88,
      "club": "Barcelona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Bukayo Saka",
      "age": 24,
      "position": "FWD",
      "rating": 88,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ollie Watkins",
      "age": 30,
      "position": "FWD",
      "rating": 88,
      "club": "Aston Villa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Anthony Gordon",
      "age": 25,
      "position": "FWD",
      "rating": 83,
      "club": "Newcastle United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Eberechi Eze",
      "age": 27,
      "position": "FWD",
      "rating": 83,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Noni Madueke",
      "age": 24,
      "position": "FWD",
      "rating": 83,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ivan Toney",
      "age": 30,
      "position": "FWD",
      "rating": 79,
      "club": "Al-Ahli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "ESP": [
    {
      "name": "David Raya",
      "age": 30,
      "position": "GK",
      "rating": 85,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Joan Garcia",
      "age": 25,
      "position": "GK",
      "rating": 80,
      "club": "Barcelona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Unai Simón",
      "age": 29,
      "position": "GK",
      "rating": 78,
      "club": "Athletic Bilbao",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marc Cucurella",
      "age": 27,
      "position": "DEF",
      "rating": 90,
      "club": "Chelsea",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Eric García",
      "age": 25,
      "position": "DEF",
      "rating": 85,
      "club": "Barcelona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Pedro Porro",
      "age": 26,
      "position": "DEF",
      "rating": 85,
      "club": "Tottenham Hotspur",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Álex Grimaldo",
      "age": 30,
      "position": "DEF",
      "rating": 85,
      "club": "Bayer Leverkusen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Pau Cubarsí",
      "age": 19,
      "position": "DEF",
      "rating": 80,
      "club": "Barcelona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Aymeric Laporte",
      "age": 32,
      "position": "DEF",
      "rating": 78,
      "club": "Athletic Bilbao",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marcos Llorente",
      "age": 31,
      "position": "DEF",
      "rating": 75,
      "club": "Atlético Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marc Pubill",
      "age": 22,
      "position": "DEF",
      "rating": 75,
      "club": "Atlético Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rodri",
      "age": 29,
      "position": "MID",
      "rating": 90,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mikel Merino",
      "age": 29,
      "position": "MID",
      "rating": 85,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Fabián Ruiz",
      "age": 30,
      "position": "MID",
      "rating": 85,
      "club": "Paris Saint-Germain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Pedri",
      "age": 23,
      "position": "MID",
      "rating": 85,
      "club": "Barcelona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gavi",
      "age": 21,
      "position": "MID",
      "rating": 80,
      "club": "Barcelona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Martín Zubimendi",
      "age": 27,
      "position": "MID",
      "rating": 80,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Álex Baena",
      "age": 24,
      "position": "MID",
      "rating": 75,
      "club": "Atlético Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ferran Torres",
      "age": 26,
      "position": "FWD",
      "rating": 90,
      "club": "Barcelona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dani Olmo",
      "age": 28,
      "position": "FWD",
      "rating": 85,
      "club": "Barcelona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lamine Yamal",
      "age": 18,
      "position": "FWD",
      "rating": 85,
      "club": "Barcelona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mikel Oyarzabal",
      "age": 29,
      "position": "FWD",
      "rating": 83,
      "club": "Real Sociedad",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nico Williams",
      "age": 23,
      "position": "FWD",
      "rating": 78,
      "club": "Athletic Bilbao",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yéremy Pino",
      "age": 23,
      "position": "FWD",
      "rating": 78,
      "club": "Crystal Palace",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Borja Iglesias",
      "age": 33,
      "position": "FWD",
      "rating": 78,
      "club": "Celta Vigo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Víctor Muñoz",
      "age": 22,
      "position": "FWD",
      "rating": 75,
      "club": "Osasuna",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "FRA": [
    {
      "name": "Brice Samba",
      "age": 32,
      "position": "GK",
      "rating": 86,
      "club": "Rennes",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mike Maignan",
      "age": 30,
      "position": "GK",
      "rating": 78,
      "club": "Milan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Robin Risser",
      "age": 21,
      "position": "GK",
      "rating": 78,
      "club": "Lens",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Malo Gusto",
      "age": 23,
      "position": "DEF",
      "rating": 94,
      "club": "Chelsea",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lucas Digne",
      "age": 32,
      "position": "DEF",
      "rating": 88,
      "club": "Aston Villa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dayot Upamecano",
      "age": 27,
      "position": "DEF",
      "rating": 88,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jules Koundé",
      "age": 27,
      "position": "DEF",
      "rating": 88,
      "club": "Barcelona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ibrahima Konaté",
      "age": 27,
      "position": "DEF",
      "rating": 83,
      "club": "Liverpool",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "William Saliba",
      "age": 25,
      "position": "DEF",
      "rating": 83,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lucas Hernandez",
      "age": 30,
      "position": "DEF",
      "rating": 83,
      "club": "Paris Saint-Germain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Maxence Lacroix",
      "age": 26,
      "position": "DEF",
      "rating": 81,
      "club": "Crystal Palace",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Théo Hernandez",
      "age": 28,
      "position": "DEF",
      "rating": 79,
      "club": "Al-Hilal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Aurélien Tchouaméni",
      "age": 26,
      "position": "MID",
      "rating": 94,
      "club": "Real Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Warren Zaïre-Emery",
      "age": 20,
      "position": "MID",
      "rating": 88,
      "club": "Paris Saint-Germain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Manu Koné",
      "age": 25,
      "position": "MID",
      "rating": 86,
      "club": "Roma",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "N'Golo Kanté",
      "age": 35,
      "position": "MID",
      "rating": 83,
      "club": "Fenerbahçe",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Adrien Rabiot",
      "age": 31,
      "position": "MID",
      "rating": 78,
      "club": "Milan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ousmane Dembélé",
      "age": 29,
      "position": "FWD",
      "rating": 94,
      "club": "Paris Saint-Germain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marcus Thuram",
      "age": 28,
      "position": "FWD",
      "rating": 88,
      "club": "Inter Milan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kylian Mbappé",
      "age": 27,
      "position": "FWD",
      "rating": 88,
      "club": "Real Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Michael Olise",
      "age": 24,
      "position": "FWD",
      "rating": 88,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Bradley Barcola",
      "age": 23,
      "position": "FWD",
      "rating": 83,
      "club": "Paris Saint-Germain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Désiré Doué",
      "age": 21,
      "position": "FWD",
      "rating": 83,
      "club": "Paris Saint-Germain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rayan Cherki",
      "age": 22,
      "position": "FWD",
      "rating": 83,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jean-Philippe Mateta",
      "age": 28,
      "position": "FWD",
      "rating": 81,
      "club": "Crystal Palace",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Maghnes Akliouche",
      "age": 24,
      "position": "FWD",
      "rating": 81,
      "club": "Monaco",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "GER": [
    {
      "name": "Manuel Neuer",
      "age": 40,
      "position": "GK",
      "rating": 81,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Oliver Baumann",
      "age": 36,
      "position": "GK",
      "rating": 73,
      "club": "TSG Hoffenheim",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alexander Nübel",
      "age": 29,
      "position": "GK",
      "rating": 73,
      "club": "VfB Stuttgart",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Antonio Rüdiger",
      "age": 33,
      "position": "DEF",
      "rating": 86,
      "club": "Real Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Waldemar Anton",
      "age": 29,
      "position": "DEF",
      "rating": 81,
      "club": "Borussia Dortmund",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jonathan Tah",
      "age": 30,
      "position": "DEF",
      "rating": 81,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nico Schlotterbeck",
      "age": 26,
      "position": "DEF",
      "rating": 81,
      "club": "Borussia Dortmund",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Malick Thiaw",
      "age": 24,
      "position": "DEF",
      "rating": 75,
      "club": "Newcastle United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nathaniel Brown",
      "age": 22,
      "position": "DEF",
      "rating": 73,
      "club": "Eintracht Frankfurt",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "David Raum",
      "age": 28,
      "position": "DEF",
      "rating": 73,
      "club": "RB Leipzig",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Aleksandar Pavlović",
      "age": 22,
      "position": "MID",
      "rating": 86,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Joshua Kimmich",
      "age": 31,
      "position": "MID",
      "rating": 81,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Leon Goretzka",
      "age": 31,
      "position": "MID",
      "rating": 81,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jamal Musiala",
      "age": 23,
      "position": "MID",
      "rating": 81,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Florian Wirtz",
      "age": 23,
      "position": "MID",
      "rating": 75,
      "club": "Liverpool",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Felix Nmecha",
      "age": 25,
      "position": "MID",
      "rating": 75,
      "club": "Borussia Dortmund",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lennart Karl",
      "age": 18,
      "position": "MID",
      "rating": 75,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jamie Leweling",
      "age": 25,
      "position": "MID",
      "rating": 73,
      "club": "VfB Stuttgart",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Pascal Groß",
      "age": 34,
      "position": "MID",
      "rating": 73,
      "club": "Brighton & Hove Albion",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Angelo Stiller",
      "age": 25,
      "position": "MID",
      "rating": 73,
      "club": "VfB Stuttgart",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Leroy Sané",
      "age": 30,
      "position": "MID",
      "rating": 70,
      "club": "Galatasaray",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nadiem Amiri",
      "age": 29,
      "position": "MID",
      "rating": 70,
      "club": "Mainz 05",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kai Havertz",
      "age": 27,
      "position": "FWD",
      "rating": 86,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nick Woltemade",
      "age": 24,
      "position": "FWD",
      "rating": 81,
      "club": "Newcastle United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Maximilian Beier",
      "age": 23,
      "position": "FWD",
      "rating": 81,
      "club": "Borussia Dortmund",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Deniz Undav",
      "age": 29,
      "position": "FWD",
      "rating": 79,
      "club": "VfB Stuttgart",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "GHA": [
    {
      "name": "Lawrence Ati-Zigi",
      "age": 29,
      "position": "GK",
      "rating": 67,
      "club": "St. Gallen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Paul Reverson",
      "age": 20,
      "position": "GK",
      "rating": 61,
      "club": "Ajax",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Benjamin Asare",
      "age": 33,
      "position": "GK",
      "rating": 58,
      "club": "Hearts of Oak",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alidu Seidu",
      "age": 26,
      "position": "DEF",
      "rating": 73,
      "club": "Rennes",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kojo Peprah Oppong",
      "age": 22,
      "position": "DEF",
      "rating": 67,
      "club": "Nice",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Abdul Rahman Baba",
      "age": 31,
      "position": "DEF",
      "rating": 64,
      "club": "PAOK",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gideon Mensah",
      "age": 27,
      "position": "DEF",
      "rating": 64,
      "club": "Auxerre",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alexander Djiku",
      "age": 31,
      "position": "DEF",
      "rating": 58,
      "club": "Spartak Moscow",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jerome Opoku",
      "age": 27,
      "position": "DEF",
      "rating": 58,
      "club": "İstanbul Başakşehir",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jonas Adjetey",
      "age": 22,
      "position": "DEF",
      "rating": 58,
      "club": "VfL Wolfsburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Abdul Mumin",
      "age": 28,
      "position": "DEF",
      "rating": 58,
      "club": "Rayo Vallecano",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marvin Senaya",
      "age": 25,
      "position": "DEF",
      "rating": 58,
      "club": "Auxerre",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Thomas Partey",
      "age": 32,
      "position": "MID",
      "rating": 73,
      "club": "Villarreal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Abdul Fatawu",
      "age": 22,
      "position": "MID",
      "rating": 67,
      "club": "Leicester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kamaldeen Sulemana",
      "age": 24,
      "position": "MID",
      "rating": 67,
      "club": "Atalanta",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Elisha Owusu",
      "age": 28,
      "position": "MID",
      "rating": 64,
      "club": "Auxerre",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Caleb Yirenkyi",
      "age": 20,
      "position": "MID",
      "rating": 58,
      "club": "Nordsjælland",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kwasi Sibo",
      "age": 27,
      "position": "MID",
      "rating": 58,
      "club": "Oviedo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Augustine Boakye",
      "age": 25,
      "position": "MID",
      "rating": 58,
      "club": "Saint-Étienne",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Antoine Semenyo",
      "age": 26,
      "position": "FWD",
      "rating": 75,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jordan Ayew",
      "age": 34,
      "position": "FWD",
      "rating": 67,
      "club": "Leicester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Iñaki Williams",
      "age": 31,
      "position": "FWD",
      "rating": 67,
      "club": "Athletic Bilbao",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ernest Nuamah",
      "age": 22,
      "position": "FWD",
      "rating": 67,
      "club": "Lyon",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Christopher Bonsu Baah",
      "age": 21,
      "position": "FWD",
      "rating": 58,
      "club": "Al-Qadsiah",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Brandon Thomas-Asante",
      "age": 27,
      "position": "FWD",
      "rating": 58,
      "club": "Coventry City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Prince Kwabena Adu",
      "age": 22,
      "position": "FWD",
      "rating": 58,
      "club": "Viktoria Plzeň",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "HAI": [
    {
      "name": "Johny Placide",
      "age": 38,
      "position": "GK",
      "rating": 64,
      "club": "Bastia",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alexandre Pierre",
      "age": 25,
      "position": "GK",
      "rating": 58,
      "club": "Sochaux",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Josué Duverger",
      "age": 26,
      "position": "GK",
      "rating": 58,
      "club": "Cosmos Koblenz",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ricardo Adé",
      "age": 36,
      "position": "DEF",
      "rating": 70,
      "club": "LDU Quito",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Carlens Arcus",
      "age": 29,
      "position": "DEF",
      "rating": 64,
      "club": "Angers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Martin Expérience",
      "age": 27,
      "position": "DEF",
      "rating": 64,
      "club": "Nancy",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jean-Kévin Duverne",
      "age": 28,
      "position": "DEF",
      "rating": 64,
      "club": "Gent",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Duke Lacroix",
      "age": 32,
      "position": "DEF",
      "rating": 58,
      "club": "Colorado Springs Switchbacks FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Wilguens Paugain",
      "age": 24,
      "position": "DEF",
      "rating": 58,
      "club": "Zulte Waregem",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hannes Delcroix",
      "age": 27,
      "position": "DEF",
      "rating": 58,
      "club": "Lugano",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Keeto Thermoncy",
      "age": 20,
      "position": "DEF",
      "rating": 58,
      "club": "Young Boys",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Leverton Pierre",
      "age": 28,
      "position": "MID",
      "rating": 73,
      "club": "Vizela",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Carl Sainté",
      "age": 23,
      "position": "MID",
      "rating": 67,
      "club": "El Paso Locomotive FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Danley Jean Jacques",
      "age": 26,
      "position": "MID",
      "rating": 65,
      "club": "Philadelphia Union",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jean-Ricner Bellegarde",
      "age": 27,
      "position": "MID",
      "rating": 64,
      "club": "Wolverhampton Wanderers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Woodensky Pierre",
      "age": 21,
      "position": "MID",
      "rating": 58,
      "club": "Violette",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dominique Simon",
      "age": 25,
      "position": "MID",
      "rating": 58,
      "club": "Tatran Prešov",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yassin Fortuné",
      "age": 27,
      "position": "FWD",
      "rating": 73,
      "club": "Vizela",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Wilson Isidor",
      "age": 25,
      "position": "FWD",
      "rating": 67,
      "club": "Sunderland",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Duckens Nazon",
      "age": 32,
      "position": "FWD",
      "rating": 64,
      "club": "Esteghlal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Frantzdy Pierrot",
      "age": 31,
      "position": "FWD",
      "rating": 64,
      "club": "Çaykur Rizespor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Derrick Etienne Jr.",
      "age": 29,
      "position": "FWD",
      "rating": 58,
      "club": "Toronto FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Louicius Deedson",
      "age": 25,
      "position": "FWD",
      "rating": 58,
      "club": "FC Dallas",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ruben Providence",
      "age": 24,
      "position": "FWD",
      "rating": 58,
      "club": "Almere City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Josué Casimir",
      "age": 24,
      "position": "FWD",
      "rating": 58,
      "club": "Auxerre",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lenny Joseph",
      "age": 25,
      "position": "FWD",
      "rating": 58,
      "club": "Ferencváros",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "IRN": [
    {
      "name": "Alireza Beiranvand",
      "age": 33,
      "position": "GK",
      "rating": 76,
      "club": "Tractor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Payam Niazmand",
      "age": 31,
      "position": "GK",
      "rating": 70,
      "club": "Persepolis",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hossein Hosseini",
      "age": 33,
      "position": "GK",
      "rating": 70,
      "club": "Sepahan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ehsan Hajsafi",
      "age": 36,
      "position": "DEF",
      "rating": 81,
      "club": "Sepahan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Milad Mohammadi",
      "age": 32,
      "position": "DEF",
      "rating": 76,
      "club": "Persepolis",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ramin Rezaeian",
      "age": 36,
      "position": "DEF",
      "rating": 76,
      "club": "Foolad",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hossein Kanaanizadegan",
      "age": 32,
      "position": "DEF",
      "rating": 76,
      "club": "Persepolis",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Shojae Khalilzadeh",
      "age": 37,
      "position": "DEF",
      "rating": 70,
      "club": "Tractor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Saleh Hardani",
      "age": 27,
      "position": "DEF",
      "rating": 70,
      "club": "Esteghlal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ali Nemati",
      "age": 30,
      "position": "DEF",
      "rating": 70,
      "club": "Foolad",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Danial Eiri [fa]",
      "age": 22,
      "position": "DEF",
      "rating": 70,
      "club": "Malavan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Saeid Ezatolahi",
      "age": 29,
      "position": "MID",
      "rating": 82,
      "club": "Shabab Al-Ahli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alireza Jahanbakhsh",
      "age": 32,
      "position": "MID",
      "rating": 76,
      "club": "Dender",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Saman Ghoddos",
      "age": 32,
      "position": "MID",
      "rating": 76,
      "club": "Kalba",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mehdi Torabi",
      "age": 31,
      "position": "MID",
      "rating": 76,
      "club": "Tractor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rouzbeh Cheshmi",
      "age": 32,
      "position": "MID",
      "rating": 70,
      "club": "Esteghlal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohammad Mohebi",
      "age": 27,
      "position": "MID",
      "rating": 70,
      "club": "Rostov",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mehdi Ghayedi",
      "age": 27,
      "position": "MID",
      "rating": 70,
      "club": "Al-Nasr",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohammad Ghorbani",
      "age": 25,
      "position": "MID",
      "rating": 70,
      "club": "Al-Wahda",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Aria Yousefi",
      "age": 24,
      "position": "MID",
      "rating": 70,
      "club": "Sepahan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Amirmohammad Razzaghinia",
      "age": 20,
      "position": "MID",
      "rating": 70,
      "club": "Esteghlal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mehdi Taremi",
      "age": 33,
      "position": "FWD",
      "rating": 81,
      "club": "Olympiacos",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Shahriyar Moghanlou",
      "age": 31,
      "position": "FWD",
      "rating": 76,
      "club": "Kalba",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Amirhossein Hosseinzadeh",
      "age": 25,
      "position": "FWD",
      "rating": 76,
      "club": "Tractor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ali Alipour",
      "age": 30,
      "position": "FWD",
      "rating": 76,
      "club": "Persepolis",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dennis Eckert",
      "age": 29,
      "position": "FWD",
      "rating": 70,
      "club": "Standard Liège",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "IRQ": [
    {
      "name": "Jalal Hassan",
      "age": 35,
      "position": "GK",
      "rating": 70,
      "club": "Al-Zawraa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Fahad Talib",
      "age": 31,
      "position": "GK",
      "rating": 64,
      "club": "Al-Talaba",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ahmed Basil",
      "age": 29,
      "position": "GK",
      "rating": 64,
      "club": "Al-Shorta",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rebin Sulaka",
      "age": 34,
      "position": "DEF",
      "rating": 76,
      "club": "Port",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Manaf Younis",
      "age": 29,
      "position": "DEF",
      "rating": 70,
      "club": "Al-Shorta",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Merchas Doski",
      "age": 26,
      "position": "DEF",
      "rating": 70,
      "club": "Viktoria Plzeň",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Zaid Tahseen",
      "age": 25,
      "position": "DEF",
      "rating": 70,
      "club": "Pakhtakor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Frans Putros",
      "age": 32,
      "position": "DEF",
      "rating": 64,
      "club": "Persib",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hussein Ali",
      "age": 24,
      "position": "DEF",
      "rating": 64,
      "club": "Pogoń Szczecin",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ahmed Yahya",
      "age": 30,
      "position": "DEF",
      "rating": 64,
      "club": "Al-Shorta",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mustafa Saadoon",
      "age": 25,
      "position": "DEF",
      "rating": 64,
      "club": "Al-Shorta",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Akam Hashim",
      "age": 27,
      "position": "DEF",
      "rating": 64,
      "club": "Al-Zawraa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Amir Al-Ammari",
      "age": 28,
      "position": "MID",
      "rating": 79,
      "club": "Cracovia",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Zidane Iqbal",
      "age": 23,
      "position": "MID",
      "rating": 73,
      "club": "Utrecht",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ibrahim Bayesh",
      "age": 26,
      "position": "MID",
      "rating": 70,
      "club": "Al-Dhafra",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ali Jasim",
      "age": 22,
      "position": "MID",
      "rating": 70,
      "club": "Al-Najma",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Youssef Amyn",
      "age": 22,
      "position": "MID",
      "rating": 64,
      "club": "AEK Larnaca",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marko Farji",
      "age": 22,
      "position": "MID",
      "rating": 64,
      "club": "Venezia",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kevin Yakob",
      "age": 25,
      "position": "MID",
      "rating": 64,
      "club": "AGF",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Aimar Sher",
      "age": 23,
      "position": "MID",
      "rating": 64,
      "club": "Sarpsborg 08",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Zaid Ismail",
      "age": 24,
      "position": "MID",
      "rating": 64,
      "club": "Al-Talaba",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ahmed Qasem",
      "age": 22,
      "position": "MID",
      "rating": 64,
      "club": "Nashville SC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Aymen Hussein",
      "age": 30,
      "position": "FWD",
      "rating": 76,
      "club": "Al-Karma",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohanad Ali",
      "age": 25,
      "position": "FWD",
      "rating": 70,
      "club": "Dibba",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ali Al-Hamadi",
      "age": 24,
      "position": "FWD",
      "rating": 70,
      "club": "Luton Town",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ali Yousif",
      "age": 30,
      "position": "FWD",
      "rating": 70,
      "club": "Al-Talaba",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "JOR": [
    {
      "name": "Yazeed Abulaila",
      "age": 33,
      "position": "GK",
      "rating": 64,
      "club": "Al-Hussein",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Abdallah Al-Fakhouri",
      "age": 26,
      "position": "GK",
      "rating": 58,
      "club": "Al-Wehdat",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nour Bani Attiah",
      "age": 33,
      "position": "GK",
      "rating": 58,
      "club": "Al-Faisaly",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ihsan Haddad",
      "age": 32,
      "position": "DEF",
      "rating": 70,
      "club": "Al-Hussein",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yazan Al-Arab",
      "age": 30,
      "position": "DEF",
      "rating": 64,
      "club": "FC Seoul",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Abdallah Nasib",
      "age": 32,
      "position": "DEF",
      "rating": 64,
      "club": "Al-Zawraa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Saed Al-Rosan",
      "age": 29,
      "position": "DEF",
      "rating": 64,
      "club": "Al-Hussein",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Husam Abu Dahab",
      "age": 26,
      "position": "DEF",
      "rating": 58,
      "club": "Al-Faisaly",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mo Abualnadi",
      "age": 25,
      "position": "DEF",
      "rating": 58,
      "club": "Selangor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Salim Obaid",
      "age": 34,
      "position": "DEF",
      "rating": 58,
      "club": "Al-Hussein",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Anas Badawi",
      "age": 28,
      "position": "DEF",
      "rating": 58,
      "club": "Al-Faisaly",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rajaei Ayed",
      "age": 32,
      "position": "MID",
      "rating": 70,
      "club": "Al-Hussein",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Noor Al-Rawabdeh",
      "age": 29,
      "position": "MID",
      "rating": 64,
      "club": "Selangor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ibrahim Sadeh",
      "age": 26,
      "position": "MID",
      "rating": 64,
      "club": "Al-Karma",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohammad Abu Hashish",
      "age": 31,
      "position": "MID",
      "rating": 64,
      "club": "Al-Karma",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nizar Al-Rashdan",
      "age": 27,
      "position": "MID",
      "rating": 58,
      "club": "Qatar SC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohannad Abu Taha",
      "age": 23,
      "position": "MID",
      "rating": 58,
      "club": "Al-Quwa Al-Jawiya",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Amer Jamous",
      "age": 23,
      "position": "MID",
      "rating": 58,
      "club": "Al-Zawraa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohammad Al-Dawoud",
      "age": 33,
      "position": "MID",
      "rating": 58,
      "club": "Al-Wehdat",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yousef Qashi",
      "age": 21,
      "position": "MID",
      "rating": 58,
      "club": "Al-Hussein",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohammad Taha",
      "age": 20,
      "position": "MID",
      "rating": 58,
      "club": "Al-Hussein",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Musa Al-Taamari",
      "age": 29,
      "position": "FWD",
      "rating": 73,
      "club": "Rennes",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mahmoud Al-Mardi",
      "age": 32,
      "position": "FWD",
      "rating": 64,
      "club": "Al-Hussein",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ali Olwan",
      "age": 26,
      "position": "FWD",
      "rating": 64,
      "club": "Al-Sailiya",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohammad Abu Zrayq",
      "age": 28,
      "position": "FWD",
      "rating": 64,
      "club": "Raja Casablanca",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Odeh Al-Fakhouri",
      "age": 20,
      "position": "FWD",
      "rating": 58,
      "club": "Pyramids",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "JPN": [
    {
      "name": "Zion Suzuki",
      "age": 23,
      "position": "GK",
      "rating": 76,
      "club": "Parma",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Keisuke Ōsako",
      "age": 26,
      "position": "GK",
      "rating": 70,
      "club": "Sanfrecce Hiroshima",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tomoki Hayakawa",
      "age": 27,
      "position": "GK",
      "rating": 70,
      "club": "Kashima Antlers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hiroki Itō",
      "age": 27,
      "position": "DEF",
      "rating": 86,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kō Itakura",
      "age": 29,
      "position": "DEF",
      "rating": 79,
      "club": "Ajax",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tsuyoshi Watanabe",
      "age": 29,
      "position": "DEF",
      "rating": 79,
      "club": "Feyenoord",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Takehiro Tomiyasu",
      "age": 27,
      "position": "DEF",
      "rating": 79,
      "club": "Ajax",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yukinari Sugawara",
      "age": 25,
      "position": "DEF",
      "rating": 70,
      "club": "Werder Bremen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Shōgo Taniguchi",
      "age": 34,
      "position": "DEF",
      "rating": 70,
      "club": "Sint-Truiden",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yūto Nagatomo",
      "age": 39,
      "position": "DEF",
      "rating": 70,
      "club": "FC Tokyo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ayumu Seko",
      "age": 26,
      "position": "DEF",
      "rating": 70,
      "club": "Le Havre",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Junnosuke Suzuki",
      "age": 22,
      "position": "DEF",
      "rating": 70,
      "club": "Copenhagen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Wataru Endo",
      "age": 33,
      "position": "MID",
      "rating": 86,
      "club": "Liverpool",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Takefusa Kubo",
      "age": 25,
      "position": "MID",
      "rating": 79,
      "club": "Real Sociedad",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ritsu Dōan",
      "age": 27,
      "position": "MID",
      "rating": 79,
      "club": "Eintracht Frankfurt",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Daichi Kamada",
      "age": 29,
      "position": "MID",
      "rating": 79,
      "club": "Crystal Palace",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ao Tanaka",
      "age": 27,
      "position": "MID",
      "rating": 70,
      "club": "Leeds United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Keito Nakamura",
      "age": 25,
      "position": "MID",
      "rating": 70,
      "club": "Reims",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Junya Itō",
      "age": 33,
      "position": "MID",
      "rating": 70,
      "club": "Genk",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kaishū Sano",
      "age": 25,
      "position": "MID",
      "rating": 70,
      "club": "Mainz 05",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ayase Ueda",
      "age": 27,
      "position": "FWD",
      "rating": 84,
      "club": "Feyenoord",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Keisuke Gotō",
      "age": 21,
      "position": "FWD",
      "rating": 76,
      "club": "Sint-Truiden",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Daizen Maeda",
      "age": 28,
      "position": "FWD",
      "rating": 76,
      "club": "Celtic",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yuito Suzuki",
      "age": 24,
      "position": "FWD",
      "rating": 76,
      "club": "SC Freiburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kōki Ogawa",
      "age": 28,
      "position": "FWD",
      "rating": 70,
      "club": "NEC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kento Shiogai",
      "age": 21,
      "position": "FWD",
      "rating": 70,
      "club": "VfL Wolfsburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "KOR": [
    {
      "name": "Kim Seung-gyu",
      "age": 35,
      "position": "GK",
      "rating": 76,
      "club": "FC Tokyo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jo Hyeon-woo",
      "age": 34,
      "position": "GK",
      "rating": 70,
      "club": "Ulsan HD",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Song Bum-keun",
      "age": 28,
      "position": "GK",
      "rating": 70,
      "club": "Jeonbuk Hyundai Motors",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kim Min-jae",
      "age": 29,
      "position": "DEF",
      "rating": 86,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kim Moon-hwan",
      "age": 30,
      "position": "DEF",
      "rating": 76,
      "club": "Daejeon Hana Citizen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Seol Young-woo",
      "age": 27,
      "position": "DEF",
      "rating": 76,
      "club": "Red Star Belgrade",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lee Tae-seok",
      "age": 23,
      "position": "DEF",
      "rating": 76,
      "club": "Austria Wien",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Park Jin-seob",
      "age": 30,
      "position": "DEF",
      "rating": 70,
      "club": "Zhejiang",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kim Tae-hyeon",
      "age": 25,
      "position": "DEF",
      "rating": 70,
      "club": "Kashima Antlers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lee Han-beom",
      "age": 23,
      "position": "DEF",
      "rating": 70,
      "club": "Midtjylland",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jens Castrop",
      "age": 22,
      "position": "DEF",
      "rating": 70,
      "club": "Borussia Mönchengladbach",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lee Ki-hyuk",
      "age": 25,
      "position": "DEF",
      "rating": 70,
      "club": "Gangwon FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Cho Wi-je",
      "age": 24,
      "position": "DEF",
      "rating": 70,
      "club": "Jeonbuk Hyundai Motors",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lee Kang-in",
      "age": 25,
      "position": "MID",
      "rating": 86,
      "club": "Paris Saint-Germain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hwang In-beom",
      "age": 29,
      "position": "MID",
      "rating": 79,
      "club": "Feyenoord",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lee Jae-sung",
      "age": 33,
      "position": "MID",
      "rating": 76,
      "club": "Mainz 05",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hwang Hee-chan",
      "age": 30,
      "position": "MID",
      "rating": 76,
      "club": "Wolverhampton Wanderers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Paik Seung-ho",
      "age": 29,
      "position": "MID",
      "rating": 70,
      "club": "Birmingham City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kim Jin-gyu",
      "age": 29,
      "position": "MID",
      "rating": 70,
      "club": "Jeonbuk Hyundai Motors",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lee Dong-gyeong",
      "age": 28,
      "position": "MID",
      "rating": 70,
      "club": "Ulsan HD",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Bae Jun-ho",
      "age": 22,
      "position": "MID",
      "rating": 70,
      "club": "Stoke City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Eom Ji-sung",
      "age": 24,
      "position": "MID",
      "rating": 70,
      "club": "Swansea City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yang Hyun-jun",
      "age": 24,
      "position": "MID",
      "rating": 70,
      "club": "Celtic",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Son Heung-min",
      "age": 33,
      "position": "FWD",
      "rating": 81,
      "club": "Los Angeles FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Cho Gue-sung",
      "age": 28,
      "position": "FWD",
      "rating": 76,
      "club": "Midtjylland",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Oh Hyeon-gyu",
      "age": 25,
      "position": "FWD",
      "rating": 76,
      "club": "Beşiktaş",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "KSA": [
    {
      "name": "Nawaf Al-Aqidi",
      "age": 26,
      "position": "GK",
      "rating": 71,
      "club": "Al-Nassr",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohammed Al-Owais",
      "age": 34,
      "position": "GK",
      "rating": 64,
      "club": "Al-Ula",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ahmed Al-Kassar",
      "age": 35,
      "position": "GK",
      "rating": 64,
      "club": "Al-Qadsiah",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hassan Al-Tambakti",
      "age": 27,
      "position": "DEF",
      "rating": 77,
      "club": "Al-Hilal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Abdulelah Al-Amri",
      "age": 29,
      "position": "DEF",
      "rating": 71,
      "club": "Al-Nassr",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nawaf Boushal",
      "age": 26,
      "position": "DEF",
      "rating": 71,
      "club": "Al-Nassr",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ali Lajami",
      "age": 30,
      "position": "DEF",
      "rating": 71,
      "club": "Al-Hilal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ali Majrashi",
      "age": 26,
      "position": "DEF",
      "rating": 65,
      "club": "Al-Ahli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hassan Kadesh",
      "age": 33,
      "position": "DEF",
      "rating": 65,
      "club": "Al-Ittihad",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Moteb Al-Harbi",
      "age": 26,
      "position": "DEF",
      "rating": 65,
      "club": "Al-Hilal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Saud Abdulhamid",
      "age": 26,
      "position": "DEF",
      "rating": 64,
      "club": "Lens",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jehad Thakri",
      "age": 24,
      "position": "DEF",
      "rating": 64,
      "club": "Al-Qadsiah",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohammed Abu Al-Shamat",
      "age": 23,
      "position": "DEF",
      "rating": 64,
      "club": "Al-Qadsiah",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Salem Al-Dawsari",
      "age": 34,
      "position": "MID",
      "rating": 77,
      "club": "Al-Hilal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohamed Kanno",
      "age": 31,
      "position": "MID",
      "rating": 71,
      "club": "Al-Hilal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nasser Al-Dawsari",
      "age": 27,
      "position": "MID",
      "rating": 71,
      "club": "Al-Hilal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Abdullah Al-Khaibari",
      "age": 29,
      "position": "MID",
      "rating": 71,
      "club": "Al-Nassr",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ayman Yahya",
      "age": 25,
      "position": "MID",
      "rating": 65,
      "club": "Al-Nassr",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ziyad Al-Johani",
      "age": 24,
      "position": "MID",
      "rating": 65,
      "club": "Al-Ahli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sultan Mandash",
      "age": 31,
      "position": "MID",
      "rating": 65,
      "club": "Al-Hilal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Musab Al-Juwayr",
      "age": 22,
      "position": "MID",
      "rating": 64,
      "club": "Al-Qadsiah",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alaa Al-Hejji",
      "age": 30,
      "position": "MID",
      "rating": 64,
      "club": "Neom",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Firas Al-Buraikan",
      "age": 26,
      "position": "FWD",
      "rating": 77,
      "club": "Al-Ahli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Saleh Al-Shehri",
      "age": 32,
      "position": "FWD",
      "rating": 71,
      "club": "Al-Ittihad",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Abdullah Al-Hamdan",
      "age": 26,
      "position": "FWD",
      "rating": 71,
      "club": "Al-Nassr",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Khalid Al-Ghannam",
      "age": 25,
      "position": "FWD",
      "rating": 70,
      "club": "Al-Ettifaq",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "MAR": [
    {
      "name": "Yassine Bounou",
      "age": 35,
      "position": "GK",
      "rating": 81,
      "club": "Al-Hilal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Munir Mohamedi",
      "age": 37,
      "position": "GK",
      "rating": 75,
      "club": "RS Berkane",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ahmed Reda Tagnaouti",
      "age": 30,
      "position": "GK",
      "rating": 75,
      "club": "AS FAR",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Achraf Hakimi",
      "age": 27,
      "position": "DEF",
      "rating": 90,
      "club": "Paris Saint-Germain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Noussair Mazraoui",
      "age": 28,
      "position": "DEF",
      "rating": 85,
      "club": "Manchester United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nayef Aguerd",
      "age": 30,
      "position": "DEF",
      "rating": 83,
      "club": "Marseille",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Anass Salah-Eddine",
      "age": 24,
      "position": "DEF",
      "rating": 83,
      "club": "PSV Eindhoven",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Chadi Riad",
      "age": 22,
      "position": "DEF",
      "rating": 78,
      "club": "Crystal Palace",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Issa Diop",
      "age": 29,
      "position": "DEF",
      "rating": 78,
      "club": "Fulham",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Youssef Belammari",
      "age": 27,
      "position": "DEF",
      "rating": 75,
      "club": "Al Ahly",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Zakaria El Ouahdi",
      "age": 24,
      "position": "DEF",
      "rating": 75,
      "club": "Genk",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Redouane Halhal",
      "age": 23,
      "position": "DEF",
      "rating": 75,
      "club": "Mechelen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sofyan Amrabat",
      "age": 29,
      "position": "MID",
      "rating": 88,
      "club": "Real Betis",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Azzedine Ounahi",
      "age": 26,
      "position": "MID",
      "rating": 83,
      "club": "Girona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Bilal El Khannouss",
      "age": 22,
      "position": "MID",
      "rating": 83,
      "club": "VfB Stuttgart",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ismael Saibari",
      "age": 25,
      "position": "MID",
      "rating": 83,
      "club": "PSV Eindhoven",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Neil El Aynaoui",
      "age": 24,
      "position": "MID",
      "rating": 78,
      "club": "Roma",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ayyoub Bouaddi",
      "age": 18,
      "position": "MID",
      "rating": 78,
      "club": "Lille",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Samir El Mourabet",
      "age": 19,
      "position": "MID",
      "rating": 75,
      "club": "Strasbourg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Brahim Díaz",
      "age": 26,
      "position": "FWD",
      "rating": 90,
      "club": "Real Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Abde Ezzalzouli",
      "age": 24,
      "position": "FWD",
      "rating": 83,
      "club": "Real Betis",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Chemsdine Talbi",
      "age": 21,
      "position": "FWD",
      "rating": 83,
      "club": "Sunderland",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ayoube Amaimouni",
      "age": 21,
      "position": "FWD",
      "rating": 83,
      "club": "Eintracht Frankfurt",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ayoub El Kaabi",
      "age": 32,
      "position": "FWD",
      "rating": 75,
      "club": "Olympiacos",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Soufiane Rahimi",
      "age": 30,
      "position": "FWD",
      "rating": 75,
      "club": "Al-Ain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gessime Yassine",
      "age": 20,
      "position": "FWD",
      "rating": 75,
      "club": "Strasbourg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "MEX": [
    {
      "name": "Guillermo Ochoa",
      "age": 40,
      "position": "GK",
      "rating": 80,
      "club": "AEL Limassol",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Raúl Rangel",
      "age": 26,
      "position": "GK",
      "rating": 75,
      "club": "Guadalajara",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Carlos Acevedo",
      "age": 30,
      "position": "GK",
      "rating": 75,
      "club": "Santos Laguna",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jesús Gallardo",
      "age": 31,
      "position": "DEF",
      "rating": 85,
      "club": "Toluca",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "César Montes",
      "age": 29,
      "position": "DEF",
      "rating": 80,
      "club": "Lokomotiv Moscow",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jorge Sánchez",
      "age": 28,
      "position": "DEF",
      "rating": 80,
      "club": "PAOK",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Johan Vásquez",
      "age": 27,
      "position": "DEF",
      "rating": 80,
      "club": "Genoa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Israel Reyes",
      "age": 26,
      "position": "DEF",
      "rating": 75,
      "club": "América",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mateo Chávez",
      "age": 22,
      "position": "DEF",
      "rating": 75,
      "club": "AZ",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Álvaro Fidalgo",
      "age": 29,
      "position": "MID",
      "rating": 88,
      "club": "Real Betis",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Edson Álvarez",
      "age": 28,
      "position": "MID",
      "rating": 80,
      "club": "Fenerbahçe",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Orbelín Pineda",
      "age": 30,
      "position": "MID",
      "rating": 80,
      "club": "AEK Athens",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Roberto Alvarado",
      "age": 27,
      "position": "MID",
      "rating": 80,
      "club": "Guadalajara",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Luis Romo",
      "age": 31,
      "position": "MID",
      "rating": 75,
      "club": "Guadalajara",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Luis Chávez",
      "age": 30,
      "position": "MID",
      "rating": 75,
      "club": "Dynamo Moscow",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Érik Lira",
      "age": 26,
      "position": "MID",
      "rating": 75,
      "club": "Cruz Azul",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gilberto Mora",
      "age": 17,
      "position": "MID",
      "rating": 75,
      "club": "Tijuana",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Brian Gutiérrez",
      "age": 22,
      "position": "MID",
      "rating": 75,
      "club": "Guadalajara",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Obed Vargas",
      "age": 20,
      "position": "MID",
      "rating": 75,
      "club": "Atlético Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Raúl Jiménez",
      "age": 35,
      "position": "FWD",
      "rating": 88,
      "club": "Fulham",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alexis Vega",
      "age": 28,
      "position": "FWD",
      "rating": 80,
      "club": "Toluca",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Santiago Giménez",
      "age": 25,
      "position": "FWD",
      "rating": 80,
      "club": "Milan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "César Huerta",
      "age": 25,
      "position": "FWD",
      "rating": 80,
      "club": "Anderlecht",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Julián Quiñones",
      "age": 29,
      "position": "FWD",
      "rating": 75,
      "club": "Al-Qadsiah",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Guillermo Martínez",
      "age": 31,
      "position": "FWD",
      "rating": 75,
      "club": "UNAM",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Armando González",
      "age": 23,
      "position": "FWD",
      "rating": 75,
      "club": "Guadalajara",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "NED": [
    {
      "name": "Mark Flekken",
      "age": 32,
      "position": "GK",
      "rating": 85,
      "club": "Bayer Leverkusen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Bart Verbruggen",
      "age": 23,
      "position": "GK",
      "rating": 78,
      "club": "Brighton & Hove Albion",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Robin Roefs",
      "age": 23,
      "position": "GK",
      "rating": 78,
      "club": "Sunderland",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Virgil van Dijk",
      "age": 34,
      "position": "DEF",
      "rating": 90,
      "club": "Liverpool",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Denzel Dumfries",
      "age": 30,
      "position": "DEF",
      "rating": 85,
      "club": "Inter Milan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nathan Aké",
      "age": 31,
      "position": "DEF",
      "rating": 85,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jurriën Timber",
      "age": 24,
      "position": "DEF",
      "rating": 85,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Micky van de Ven",
      "age": 25,
      "position": "DEF",
      "rating": 80,
      "club": "Tottenham Hotspur",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jorrel Hato",
      "age": 20,
      "position": "DEF",
      "rating": 80,
      "club": "Chelsea",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mats Wieffer",
      "age": 26,
      "position": "DEF",
      "rating": 78,
      "club": "Brighton & Hove Albion",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jan Paul van Hecke",
      "age": 26,
      "position": "DEF",
      "rating": 78,
      "club": "Brighton & Hove Albion",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Frenkie de Jong",
      "age": 29,
      "position": "MID",
      "rating": 90,
      "club": "Barcelona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tijjani Reijnders",
      "age": 27,
      "position": "MID",
      "rating": 85,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Teun Koopmeiners",
      "age": 28,
      "position": "MID",
      "rating": 85,
      "club": "Juventus",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ryan Gravenberch",
      "age": 24,
      "position": "MID",
      "rating": 85,
      "club": "Liverpool",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marten de Roon",
      "age": 35,
      "position": "MID",
      "rating": 78,
      "club": "Atalanta",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Quinten Timber",
      "age": 24,
      "position": "MID",
      "rating": 78,
      "club": "Marseille",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Guus Til",
      "age": 28,
      "position": "MID",
      "rating": 78,
      "club": "PSV Eindhoven",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Justin Kluivert",
      "age": 27,
      "position": "MID",
      "rating": 75,
      "club": "Bournemouth",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Cody Gakpo",
      "age": 27,
      "position": "FWD",
      "rating": 90,
      "club": "Liverpool",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Wout Weghorst",
      "age": 33,
      "position": "FWD",
      "rating": 83,
      "club": "Ajax",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Donyell Malen",
      "age": 27,
      "position": "FWD",
      "rating": 83,
      "club": "Roma",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Brian Brobbey",
      "age": 24,
      "position": "FWD",
      "rating": 83,
      "club": "Sunderland",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Crysencio Summerville",
      "age": 24,
      "position": "FWD",
      "rating": 78,
      "club": "West Ham United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Memphis Depay",
      "age": 32,
      "position": "FWD",
      "rating": 75,
      "club": "Corinthians",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Noa Lang",
      "age": 26,
      "position": "FWD",
      "rating": 75,
      "club": "Galatasaray",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "NOR": [
    {
      "name": "Ørjan Nyland",
      "age": 35,
      "position": "GK",
      "rating": 73,
      "club": "Sevilla",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sander Tangvik",
      "age": 23,
      "position": "GK",
      "rating": 64,
      "club": "Hamburger SV",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Egil Selvik",
      "age": 28,
      "position": "GK",
      "rating": 64,
      "club": "Watford",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Julian Ryerson",
      "age": 28,
      "position": "DEF",
      "rating": 81,
      "club": "Borussia Dortmund",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marcus Holmgren Pedersen",
      "age": 25,
      "position": "DEF",
      "rating": 73,
      "club": "Torino",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Torbjørn Heggem",
      "age": 27,
      "position": "DEF",
      "rating": 73,
      "club": "Bologna",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kristoffer Ajer",
      "age": 28,
      "position": "DEF",
      "rating": 70,
      "club": "Brentford",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Leo Østigård",
      "age": 26,
      "position": "DEF",
      "rating": 64,
      "club": "Genoa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "David Møller Wolfe",
      "age": 24,
      "position": "DEF",
      "rating": 64,
      "club": "Wolverhampton Wanderers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Fredrik André Bjørkan",
      "age": 27,
      "position": "DEF",
      "rating": 64,
      "club": "Bodø/Glimt",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sondre Langås",
      "age": 25,
      "position": "DEF",
      "rating": 64,
      "club": "Derby County",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Henrik Falchener",
      "age": 23,
      "position": "DEF",
      "rating": 64,
      "club": "Viking",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Martin Ødegaard",
      "age": 27,
      "position": "MID",
      "rating": 81,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sander Berge",
      "age": 28,
      "position": "MID",
      "rating": 73,
      "club": "Fulham",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Fredrik Aursnes",
      "age": 30,
      "position": "MID",
      "rating": 73,
      "club": "Benfica",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Antonio Nusa",
      "age": 21,
      "position": "MID",
      "rating": 73,
      "club": "RB Leipzig",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Andreas Schjelderup",
      "age": 22,
      "position": "MID",
      "rating": 67,
      "club": "Benfica",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Oscar Bobb",
      "age": 22,
      "position": "MID",
      "rating": 67,
      "club": "Fulham",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Morten Thorsby",
      "age": 30,
      "position": "MID",
      "rating": 64,
      "club": "Cremonese",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Patrick Berg",
      "age": 28,
      "position": "MID",
      "rating": 64,
      "club": "Bodø/Glimt",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kristian Thorstvedt",
      "age": 27,
      "position": "MID",
      "rating": 64,
      "club": "Sassuolo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Thelo Aasgaard",
      "age": 24,
      "position": "MID",
      "rating": 64,
      "club": "Rangers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jens Petter Hauge",
      "age": 26,
      "position": "MID",
      "rating": 64,
      "club": "Bodø/Glimt",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Erling Haaland",
      "age": 25,
      "position": "FWD",
      "rating": 81,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jørgen Strand Larsen",
      "age": 26,
      "position": "FWD",
      "rating": 73,
      "club": "Crystal Palace",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alexander Sørloth",
      "age": 30,
      "position": "FWD",
      "rating": 70,
      "club": "Atlético Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "NZL": [
    {
      "name": "Max Crocombe",
      "age": 32,
      "position": "GK",
      "rating": 64,
      "club": "Millwall",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alex Paulsen",
      "age": 23,
      "position": "GK",
      "rating": 58,
      "club": "Lechia Gdańsk",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Michael Woud",
      "age": 27,
      "position": "GK",
      "rating": 58,
      "club": "Auckland FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tim Payne",
      "age": 32,
      "position": "DEF",
      "rating": 70,
      "club": "Wellington Phoenix",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Francis de Vries",
      "age": 31,
      "position": "DEF",
      "rating": 64,
      "club": "Auckland FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tyler Bindon",
      "age": 21,
      "position": "DEF",
      "rating": 64,
      "club": "Sheffield United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Michael Boxall",
      "age": 37,
      "position": "DEF",
      "rating": 64,
      "club": "Minnesota United FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Liberato Cacace",
      "age": 25,
      "position": "DEF",
      "rating": 58,
      "club": "Wrexham",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nando Pijnaker",
      "age": 27,
      "position": "DEF",
      "rating": 58,
      "club": "Auckland FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Finn Surman",
      "age": 22,
      "position": "DEF",
      "rating": 58,
      "club": "Portland Timbers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Callan Elliot",
      "age": 26,
      "position": "DEF",
      "rating": 58,
      "club": "Auckland FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tommy Smith",
      "age": 36,
      "position": "DEF",
      "rating": 58,
      "club": "Braintree Town",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lachlan Bayliss",
      "age": 23,
      "position": "MID",
      "rating": 75,
      "club": "Newcastle Jets",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Joe Bell",
      "age": 27,
      "position": "MID",
      "rating": 64,
      "club": "Viking",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Matthew Garbett",
      "age": 24,
      "position": "MID",
      "rating": 64,
      "club": "Peterborough United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marko Stamenić",
      "age": 24,
      "position": "MID",
      "rating": 64,
      "club": "Swansea City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sarpreet Singh",
      "age": 27,
      "position": "MID",
      "rating": 58,
      "club": "Wellington Phoenix",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Elijah Just",
      "age": 26,
      "position": "MID",
      "rating": 58,
      "club": "Motherwell",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alex Rufer",
      "age": 29,
      "position": "MID",
      "rating": 58,
      "club": "Wellington Phoenix",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ben Old",
      "age": 23,
      "position": "MID",
      "rating": 58,
      "club": "Saint-Étienne",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Callum McCowatt",
      "age": 27,
      "position": "MID",
      "rating": 58,
      "club": "Silkeborg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ryan Thomas",
      "age": 31,
      "position": "MID",
      "rating": 58,
      "club": "PEC Zwolle",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Chris Wood",
      "age": 34,
      "position": "FWD",
      "rating": 70,
      "club": "Nottingham Forest",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kosta Barbarouses",
      "age": 36,
      "position": "FWD",
      "rating": 64,
      "club": "Western Sydney Wanderers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ben Waine",
      "age": 25,
      "position": "FWD",
      "rating": 64,
      "club": "Port Vale",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jesse Randall",
      "age": 23,
      "position": "FWD",
      "rating": 64,
      "club": "Auckland FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "PAN": [
    {
      "name": "Luis Mejía",
      "age": 35,
      "position": "GK",
      "rating": 70,
      "club": "Nacional",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Orlando Mosquera",
      "age": 31,
      "position": "GK",
      "rating": 64,
      "club": "Al-Fayha",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "César Samudio",
      "age": 32,
      "position": "GK",
      "rating": 64,
      "club": "Marathón",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Eric Davis",
      "age": 35,
      "position": "DEF",
      "rating": 76,
      "club": "Plaza Amador",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Fidel Escobar",
      "age": 31,
      "position": "DEF",
      "rating": 70,
      "club": "Saprissa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Michael Amir Murillo",
      "age": 30,
      "position": "DEF",
      "rating": 70,
      "club": "Beşiktaş",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Roderick Miller",
      "age": 34,
      "position": "DEF",
      "rating": 70,
      "club": "Turan Tovuz",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Andrés Andrade",
      "age": 27,
      "position": "DEF",
      "rating": 64,
      "club": "LASK",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "César Blackman",
      "age": 28,
      "position": "DEF",
      "rating": 64,
      "club": "Slovan Bratislava",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "José Córdoba",
      "age": 25,
      "position": "DEF",
      "rating": 64,
      "club": "Norwich City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jiovany Ramos",
      "age": 29,
      "position": "DEF",
      "rating": 64,
      "club": "Puerto Cabello",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jorge Gutiérrez",
      "age": 27,
      "position": "DEF",
      "rating": 64,
      "club": "Deportivo La Guaira",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Edgardo Fariña",
      "age": 24,
      "position": "DEF",
      "rating": 64,
      "club": "Pari Nizhny Novgorod",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Aníbal Godoy",
      "age": 36,
      "position": "MID",
      "rating": 76,
      "club": "San Diego FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alberto Quintero",
      "age": 38,
      "position": "MID",
      "rating": 70,
      "club": "Plaza Amador",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yoel Bárcenas",
      "age": 32,
      "position": "MID",
      "rating": 70,
      "club": "Mazatlán",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Adalberto Carrasquilla",
      "age": 27,
      "position": "MID",
      "rating": 70,
      "club": "UNAM",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "José Luis Rodríguez",
      "age": 27,
      "position": "MID",
      "rating": 64,
      "club": "Juárez",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Cristian Martínez",
      "age": 29,
      "position": "MID",
      "rating": 64,
      "club": "Ironi Kiryat Shmona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "César Yanis",
      "age": 30,
      "position": "MID",
      "rating": 64,
      "club": "Cobresal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Carlos Harvey",
      "age": 26,
      "position": "MID",
      "rating": 64,
      "club": "Minnesota United FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Azarias Londoño",
      "age": 24,
      "position": "MID",
      "rating": 64,
      "club": "Universidad Católica",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "José Fajardo",
      "age": 32,
      "position": "FWD",
      "rating": 76,
      "club": "Universidad Católica",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ismael Díaz",
      "age": 29,
      "position": "FWD",
      "rating": 70,
      "club": "León",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Cecilio Waterman",
      "age": 35,
      "position": "FWD",
      "rating": 70,
      "club": "Universidad de Concepción",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tomás Rodríguez",
      "age": 27,
      "position": "FWD",
      "rating": 70,
      "club": "Saprissa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "PAR": [
    {
      "name": "Gatito Fernández",
      "age": 38,
      "position": "GK",
      "rating": 70,
      "club": "Cerro Porteño",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Orlando Gill",
      "age": 26,
      "position": "GK",
      "rating": 64,
      "club": "San Lorenzo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gastón Olveira",
      "age": 33,
      "position": "GK",
      "rating": 64,
      "club": "Olimpia",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Omar Alderete",
      "age": 29,
      "position": "DEF",
      "rating": 79,
      "club": "Sunderland",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gustavo Gómez",
      "age": 33,
      "position": "DEF",
      "rating": 70,
      "club": "Palmeiras",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Júnior Alonso",
      "age": 33,
      "position": "DEF",
      "rating": 70,
      "club": "Atlético Mineiro",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Fabián Balbuena",
      "age": 34,
      "position": "DEF",
      "rating": 70,
      "club": "Grêmio",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Juan José Cáceres",
      "age": 26,
      "position": "DEF",
      "rating": 64,
      "club": "Dynamo Moscow",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gustavo Velázquez",
      "age": 35,
      "position": "DEF",
      "rating": 64,
      "club": "Cerro Porteño",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "José Canale",
      "age": 29,
      "position": "DEF",
      "rating": 64,
      "club": "Lanús",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alexandro Maidana",
      "age": 20,
      "position": "DEF",
      "rating": 64,
      "club": "Talleres",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Diego Gómez",
      "age": 23,
      "position": "MID",
      "rating": 79,
      "club": "Brighton & Hove Albion",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Miguel Almirón",
      "age": 32,
      "position": "MID",
      "rating": 71,
      "club": "Atlanta United FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Braian Ojeda",
      "age": 25,
      "position": "MID",
      "rating": 71,
      "club": "Orlando City SC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Matías Galarza",
      "age": 24,
      "position": "MID",
      "rating": 71,
      "club": "Atlanta United FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kaku",
      "age": 31,
      "position": "MID",
      "rating": 64,
      "club": "Al-Ain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Andrés Cubas",
      "age": 30,
      "position": "MID",
      "rating": 64,
      "club": "Vancouver Whitecaps FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ramón Sosa",
      "age": 26,
      "position": "MID",
      "rating": 64,
      "club": "Palmeiras",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Damián Bobadilla",
      "age": 24,
      "position": "MID",
      "rating": 64,
      "club": "São Paulo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Maurício",
      "age": 24,
      "position": "MID",
      "rating": 64,
      "club": "Palmeiras",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Antonio Sanabria",
      "age": 30,
      "position": "FWD",
      "rating": 76,
      "club": "Cremonese",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Julio Enciso",
      "age": 22,
      "position": "FWD",
      "rating": 70,
      "club": "Strasbourg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gabriel Ávalos",
      "age": 34,
      "position": "FWD",
      "rating": 70,
      "club": "Independiente",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Álex Arce",
      "age": 30,
      "position": "FWD",
      "rating": 70,
      "club": "Independiente Rivadavia",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Isidro Pitta",
      "age": 26,
      "position": "FWD",
      "rating": 64,
      "club": "Red Bull Bragantino",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gustavo Caballero",
      "age": 24,
      "position": "FWD",
      "rating": 64,
      "club": "Portsmouth",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "POR": [
    {
      "name": "Diogo Costa",
      "age": 26,
      "position": "GK",
      "rating": 83,
      "club": "Porto",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rui Silva",
      "age": 32,
      "position": "GK",
      "rating": 78,
      "club": "Sporting CP",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "José Sá",
      "age": 33,
      "position": "GK",
      "rating": 75,
      "club": "Wolverhampton Wanderers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rúben Dias",
      "age": 29,
      "position": "DEF",
      "rating": 90,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "João Cancelo",
      "age": 32,
      "position": "DEF",
      "rating": 85,
      "club": "Barcelona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nuno Mendes",
      "age": 23,
      "position": "DEF",
      "rating": 85,
      "club": "Paris Saint-Germain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Diogo Dalot",
      "age": 27,
      "position": "DEF",
      "rating": 85,
      "club": "Manchester United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Matheus Nunes",
      "age": 27,
      "position": "DEF",
      "rating": 80,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gonçalo Inácio",
      "age": 24,
      "position": "DEF",
      "rating": 78,
      "club": "Sporting CP",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Renato Veiga",
      "age": 22,
      "position": "DEF",
      "rating": 78,
      "club": "Villarreal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tomás Araújo",
      "age": 24,
      "position": "DEF",
      "rating": 78,
      "club": "Benfica",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nélson Semedo",
      "age": 32,
      "position": "DEF",
      "rating": 75,
      "club": "Fenerbahçe",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Bernardo Silva",
      "age": 31,
      "position": "MID",
      "rating": 90,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Bruno Fernandes",
      "age": 31,
      "position": "MID",
      "rating": 85,
      "club": "Manchester United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Vitinha",
      "age": 26,
      "position": "MID",
      "rating": 85,
      "club": "Paris Saint-Germain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "João Neves",
      "age": 21,
      "position": "MID",
      "rating": 85,
      "club": "Paris Saint-Germain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rúben Neves",
      "age": 29,
      "position": "MID",
      "rating": 76,
      "club": "Al-Hilal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Samú Costa",
      "age": 25,
      "position": "MID",
      "rating": 75,
      "club": "Mallorca",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gonçalo Ramos",
      "age": 24,
      "position": "FWD",
      "rating": 90,
      "club": "Paris Saint-Germain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Pedro Neto",
      "age": 26,
      "position": "FWD",
      "rating": 85,
      "club": "Chelsea",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Francisco Conceição",
      "age": 23,
      "position": "FWD",
      "rating": 85,
      "club": "Juventus",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gonçalo Guedes",
      "age": 29,
      "position": "FWD",
      "rating": 83,
      "club": "Real Sociedad",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Francisco Trincão",
      "age": 26,
      "position": "FWD",
      "rating": 78,
      "club": "Sporting CP",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Cristiano Ronaldo",
      "age": 41,
      "position": "FWD",
      "rating": 76,
      "club": "Al-Nassr",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "João Félix",
      "age": 26,
      "position": "FWD",
      "rating": 76,
      "club": "Al-Nassr",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rafael Leão",
      "age": 27,
      "position": "FWD",
      "rating": 75,
      "club": "Milan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "QAT": [
    {
      "name": "Meshaal Barsham",
      "age": 28,
      "position": "GK",
      "rating": 70,
      "club": "Al-Sadd",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Salah Zakaria",
      "age": 27,
      "position": "GK",
      "rating": 64,
      "club": "Al-Duhail",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mahmud Abunada",
      "age": 26,
      "position": "GK",
      "rating": 64,
      "club": "Al-Rayyan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Boualem Khoukhi",
      "age": 35,
      "position": "DEF",
      "rating": 76,
      "club": "Al-Sadd",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Pedro Miguel",
      "age": 35,
      "position": "DEF",
      "rating": 70,
      "club": "Al-Sadd",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Homam Ahmed",
      "age": 26,
      "position": "DEF",
      "rating": 70,
      "club": "Cultural Leonesa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lucas Mendes",
      "age": 35,
      "position": "DEF",
      "rating": 70,
      "club": "Al-Wakrah",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sultan Al-Brake",
      "age": 30,
      "position": "DEF",
      "rating": 64,
      "club": "Al-Duhail",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Al-Hashmi Al-Hussain",
      "age": 22,
      "position": "DEF",
      "rating": 64,
      "club": "Al-Arabi",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ayoub Al-Oui",
      "age": 21,
      "position": "DEF",
      "rating": 64,
      "club": "Al-Gharafa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Issa Laye",
      "age": 28,
      "position": "DEF",
      "rating": 64,
      "club": "Al-Arabi",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rayyan Al-Ali",
      "age": 20,
      "position": "DEF",
      "rating": 64,
      "club": "Al-Gharafa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Abdulaziz Hatem",
      "age": 35,
      "position": "MID",
      "rating": 76,
      "club": "Al-Rayyan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Karim Boudiaf",
      "age": 35,
      "position": "MID",
      "rating": 70,
      "club": "Al-Duhail",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Assim Madibo",
      "age": 29,
      "position": "MID",
      "rating": 70,
      "club": "Al-Wakrah",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ahmed Fathy",
      "age": 33,
      "position": "MID",
      "rating": 70,
      "club": "Al-Arabi",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jassem Gaber",
      "age": 24,
      "position": "MID",
      "rating": 64,
      "club": "Al-Rayyan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohamed Al-Mannai",
      "age": 22,
      "position": "MID",
      "rating": 64,
      "club": "Al-Shamal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tahsin Jamshid",
      "age": 19,
      "position": "MID",
      "rating": 64,
      "club": "Al-Duhail",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hassan Al-Haydos",
      "age": 35,
      "position": "FWD",
      "rating": 76,
      "club": "Al-Sadd",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Akram Afif",
      "age": 29,
      "position": "FWD",
      "rating": 70,
      "club": "Al-Sadd",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Almoez Ali",
      "age": 29,
      "position": "FWD",
      "rating": 70,
      "club": "Al-Duhail",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohammed Muntari",
      "age": 32,
      "position": "FWD",
      "rating": 70,
      "club": "Al-Gharafa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ahmed Alaaeldin",
      "age": 33,
      "position": "FWD",
      "rating": 64,
      "club": "Al-Rayyan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yusuf Abdurisag",
      "age": 26,
      "position": "FWD",
      "rating": 64,
      "club": "Al-Wakrah",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Edmilson Junior",
      "age": 31,
      "position": "FWD",
      "rating": 64,
      "club": "Al-Duhail",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "RSA": [
    {
      "name": "Ronwen Williams",
      "age": 34,
      "position": "GK",
      "rating": 70,
      "club": "Mamelodi Sundowns",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ricardo Goss",
      "age": 32,
      "position": "GK",
      "rating": 64,
      "club": "Siwelele",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sipho Chaine",
      "age": 29,
      "position": "GK",
      "rating": 64,
      "club": "Orlando Pirates",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Olwethu Makhanya",
      "age": 22,
      "position": "DEF",
      "rating": 77,
      "club": "Philadelphia Union",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Aubrey Modiba",
      "age": 30,
      "position": "DEF",
      "rating": 70,
      "club": "Mamelodi Sundowns",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Khuliso Mudau",
      "age": 31,
      "position": "DEF",
      "rating": 70,
      "club": "Mamelodi Sundowns",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nkosinathi Sibisi",
      "age": 30,
      "position": "DEF",
      "rating": 70,
      "club": "Orlando Pirates",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mbekezeli Mbokazi",
      "age": 20,
      "position": "DEF",
      "rating": 64,
      "club": "Chicago Fire FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ime Okon",
      "age": 22,
      "position": "DEF",
      "rating": 64,
      "club": "Hannover 96",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Samukele Kabini",
      "age": 22,
      "position": "DEF",
      "rating": 64,
      "club": "Molde",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Khulumani Ndamane",
      "age": 22,
      "position": "DEF",
      "rating": 64,
      "club": "Mamelodi Sundowns",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Thabang Matuludi",
      "age": 27,
      "position": "DEF",
      "rating": 64,
      "club": "Polokwane City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kamogelo Sebelebele",
      "age": 23,
      "position": "DEF",
      "rating": 64,
      "club": "Orlando Pirates",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Bradley Cross",
      "age": 25,
      "position": "DEF",
      "rating": 64,
      "club": "Kaizer Chiefs",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Teboho Mokoena",
      "age": 29,
      "position": "MID",
      "rating": 76,
      "club": "Mamelodi Sundowns",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sphephelo Sithole",
      "age": 27,
      "position": "MID",
      "rating": 70,
      "club": "Tondela",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Thalente Mbatha",
      "age": 26,
      "position": "MID",
      "rating": 70,
      "club": "Orlando Pirates",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jayden Adams",
      "age": 25,
      "position": "MID",
      "rating": 70,
      "club": "Mamelodi Sundowns",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Themba Zwane",
      "age": 36,
      "position": "FWD",
      "rating": 76,
      "club": "Mamelodi Sundowns",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lyle Foster",
      "age": 26,
      "position": "FWD",
      "rating": 70,
      "club": "Burnley",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Evidence Makgopa",
      "age": 26,
      "position": "FWD",
      "rating": 70,
      "club": "Orlando Pirates",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Oswin Appollis",
      "age": 24,
      "position": "FWD",
      "rating": 70,
      "club": "Orlando Pirates",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Iqraam Rayners",
      "age": 30,
      "position": "FWD",
      "rating": 64,
      "club": "Mamelodi Sundowns",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Relebohile Mofokeng",
      "age": 21,
      "position": "FWD",
      "rating": 64,
      "club": "Orlando Pirates",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Thapelo Maseko",
      "age": 22,
      "position": "FWD",
      "rating": 64,
      "club": "AEL Limassol",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tshepang Moremi",
      "age": 25,
      "position": "FWD",
      "rating": 64,
      "club": "Orlando Pirates",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "SCO": [
    {
      "name": "Craig Gordon",
      "age": 43,
      "position": "GK",
      "rating": 70,
      "club": "Heart of Midlothian",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Angus Gunn",
      "age": 30,
      "position": "GK",
      "rating": 64,
      "club": "Nottingham Forest",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Liam Kelly",
      "age": 30,
      "position": "GK",
      "rating": 64,
      "club": "Rangers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Andy Robertson",
      "age": 32,
      "position": "DEF",
      "rating": 81,
      "club": "Liverpool",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nathan Patterson",
      "age": 24,
      "position": "DEF",
      "rating": 73,
      "club": "Everton",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Grant Hanley",
      "age": 34,
      "position": "DEF",
      "rating": 70,
      "club": "Hibernian",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kieran Tierney",
      "age": 29,
      "position": "DEF",
      "rating": 70,
      "club": "Celtic",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Scott McKenna",
      "age": 29,
      "position": "DEF",
      "rating": 64,
      "club": "Dinamo Zagreb",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jack Hendry",
      "age": 31,
      "position": "DEF",
      "rating": 64,
      "club": "Al-Ettifaq",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Anthony Ralston",
      "age": 27,
      "position": "DEF",
      "rating": 64,
      "club": "Celtic",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "John Souttar",
      "age": 29,
      "position": "DEF",
      "rating": 64,
      "club": "Rangers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Aaron Hickey",
      "age": 24,
      "position": "DEF",
      "rating": 64,
      "club": "Brentford",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dominic Hyam",
      "age": 30,
      "position": "DEF",
      "rating": 64,
      "club": "Wrexham",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "John McGinn",
      "age": 31,
      "position": "MID",
      "rating": 81,
      "club": "Aston Villa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tyler Fletcher",
      "age": 19,
      "position": "MID",
      "rating": 75,
      "club": "Manchester United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lewis Ferguson",
      "age": 26,
      "position": "MID",
      "rating": 73,
      "club": "Bologna",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Scott McTominay",
      "age": 29,
      "position": "MID",
      "rating": 70,
      "club": "Napoli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ryan Christie",
      "age": 31,
      "position": "MID",
      "rating": 64,
      "club": "Bournemouth",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kenny McLean",
      "age": 34,
      "position": "MID",
      "rating": 64,
      "club": "Norwich City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ben Gannon-Doak",
      "age": 20,
      "position": "MID",
      "rating": 64,
      "club": "Bournemouth",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Findlay Curtis",
      "age": 20,
      "position": "MID",
      "rating": 64,
      "club": "Kilmarnock",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ché Adams",
      "age": 29,
      "position": "FWD",
      "rating": 79,
      "club": "Torino",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "George Hirst",
      "age": 27,
      "position": "FWD",
      "rating": 73,
      "club": "Ipswich Town",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lyndon Dykes",
      "age": 30,
      "position": "FWD",
      "rating": 70,
      "club": "Charlton Athletic",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lawrence Shankland",
      "age": 30,
      "position": "FWD",
      "rating": 70,
      "club": "Heart of Midlothian",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ross Stewart",
      "age": 29,
      "position": "FWD",
      "rating": 64,
      "club": "Southampton",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "SEN": [
    {
      "name": "Yehvann Diouf",
      "age": 26,
      "position": "GK",
      "rating": 79,
      "club": "Nice",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Édouard Mendy",
      "age": 34,
      "position": "GK",
      "rating": 71,
      "club": "Al-Ahli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mory Diaw",
      "age": 32,
      "position": "GK",
      "rating": 70,
      "club": "Le Havre",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mamadou Sarr",
      "age": 20,
      "position": "DEF",
      "rating": 86,
      "club": "Chelsea",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Krépin Diatta",
      "age": 27,
      "position": "DEF",
      "rating": 79,
      "club": "Monaco",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Moussa Niakhaté",
      "age": 30,
      "position": "DEF",
      "rating": 79,
      "club": "Lyon",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "El Hadji Malick Diouf",
      "age": 21,
      "position": "DEF",
      "rating": 79,
      "club": "West Ham United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Antoine Mendy",
      "age": 22,
      "position": "DEF",
      "rating": 73,
      "club": "Nice",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kalidou Koulibaly",
      "age": 34,
      "position": "DEF",
      "rating": 71,
      "club": "Al-Hilal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ismail Jakobs",
      "age": 26,
      "position": "DEF",
      "rating": 70,
      "club": "Galatasaray",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Abdoulaye Seck",
      "age": 34,
      "position": "DEF",
      "rating": 70,
      "club": "Maccabi Haifa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ilay Camara",
      "age": 23,
      "position": "DEF",
      "rating": 70,
      "club": "Anderlecht",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Moustapha Mbow",
      "age": 26,
      "position": "DEF",
      "rating": 70,
      "club": "Paris FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Pape Matar Sarr",
      "age": 23,
      "position": "MID",
      "rating": 86,
      "club": "Tottenham Hotspur",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Bara Sapoko Ndiaye",
      "age": 18,
      "position": "MID",
      "rating": 81,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Idrissa Gueye",
      "age": 36,
      "position": "MID",
      "rating": 79,
      "club": "Everton",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Pape Gueye",
      "age": 27,
      "position": "MID",
      "rating": 79,
      "club": "Villarreal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lamine Camara",
      "age": 22,
      "position": "MID",
      "rating": 73,
      "club": "Monaco",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Habib Diarra",
      "age": 22,
      "position": "MID",
      "rating": 73,
      "club": "Sunderland",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Pathé Ciss",
      "age": 32,
      "position": "MID",
      "rating": 70,
      "club": "Rayo Vallecano",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nicolas Jackson",
      "age": 24,
      "position": "FWD",
      "rating": 86,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ibrahim Mbaye",
      "age": 18,
      "position": "FWD",
      "rating": 81,
      "club": "Paris Saint-Germain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ismaïla Sarr",
      "age": 28,
      "position": "FWD",
      "rating": 79,
      "club": "Crystal Palace",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Iliman Ndiaye",
      "age": 26,
      "position": "FWD",
      "rating": 79,
      "club": "Everton",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Assane Diao",
      "age": 20,
      "position": "FWD",
      "rating": 73,
      "club": "Como",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sadio Mané",
      "age": 34,
      "position": "FWD",
      "rating": 71,
      "club": "Al-Nassr",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "SUI": [
    {
      "name": "Gregor Kobel",
      "age": 28,
      "position": "GK",
      "rating": 81,
      "club": "Borussia Dortmund",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yvon Mvogo",
      "age": 32,
      "position": "GK",
      "rating": 70,
      "club": "Lorient",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marvin Keller",
      "age": 23,
      "position": "GK",
      "rating": 70,
      "club": "Young Boys",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Manuel Akanji",
      "age": 30,
      "position": "DEF",
      "rating": 86,
      "club": "Inter Milan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ricardo Rodriguez",
      "age": 33,
      "position": "DEF",
      "rating": 79,
      "club": "Real Betis",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Eray Cömert",
      "age": 28,
      "position": "DEF",
      "rating": 79,
      "club": "Valencia",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Aurèle Amenda",
      "age": 22,
      "position": "DEF",
      "rating": 79,
      "club": "Eintracht Frankfurt",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Luca Jaquez",
      "age": 23,
      "position": "DEF",
      "rating": 73,
      "club": "VfB Stuttgart",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Miro Muheim",
      "age": 28,
      "position": "DEF",
      "rating": 70,
      "club": "Hamburger SV",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Silvan Widmer",
      "age": 33,
      "position": "DEF",
      "rating": 70,
      "club": "Mainz 05",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nico Elvedi",
      "age": 29,
      "position": "DEF",
      "rating": 70,
      "club": "Borussia Mönchengladbach",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Denis Zakaria",
      "age": 29,
      "position": "MID",
      "rating": 84,
      "club": "Monaco",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Remo Freuler",
      "age": 34,
      "position": "MID",
      "rating": 79,
      "club": "Bologna",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Granit Xhaka",
      "age": 33,
      "position": "MID",
      "rating": 79,
      "club": "Sunderland",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Djibril Sow",
      "age": 29,
      "position": "MID",
      "rating": 79,
      "club": "Sevilla",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Johan Manzambi",
      "age": 20,
      "position": "MID",
      "rating": 70,
      "club": "SC Freiburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ardon Jashari",
      "age": 23,
      "position": "MID",
      "rating": 70,
      "club": "Milan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Christian Fassnacht",
      "age": 32,
      "position": "MID",
      "rating": 70,
      "club": "Young Boys",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Michel Aebischer",
      "age": 29,
      "position": "MID",
      "rating": 70,
      "club": "Pisa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Fabian Rieder",
      "age": 24,
      "position": "MID",
      "rating": 70,
      "club": "FC Augsburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Breel Embolo",
      "age": 29,
      "position": "FWD",
      "rating": 84,
      "club": "Rennes",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rubén Vargas",
      "age": 27,
      "position": "FWD",
      "rating": 79,
      "club": "Sevilla",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dan Ndoye",
      "age": 25,
      "position": "FWD",
      "rating": 76,
      "club": "Nottingham Forest",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Noah Okafor",
      "age": 26,
      "position": "FWD",
      "rating": 76,
      "club": "Leeds United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Zeki Amdouni",
      "age": 25,
      "position": "FWD",
      "rating": 70,
      "club": "Burnley",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Cedric Itten",
      "age": 29,
      "position": "FWD",
      "rating": 70,
      "club": "Fortuna Düsseldorf",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "SWE": [
    {
      "name": "Jacob Widell Zetterström",
      "age": 27,
      "position": "GK",
      "rating": 76,
      "club": "Derby County",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Viktor Johansson",
      "age": 27,
      "position": "GK",
      "rating": 70,
      "club": "Stoke City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kristoffer Nordfeldt",
      "age": 36,
      "position": "GK",
      "rating": 70,
      "club": "AIK",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Victor Lindelöf",
      "age": 31,
      "position": "DEF",
      "rating": 86,
      "club": "Aston Villa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Daniel Svensson",
      "age": 24,
      "position": "DEF",
      "rating": 81,
      "club": "Borussia Dortmund",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Isak Hien",
      "age": 27,
      "position": "DEF",
      "rating": 79,
      "club": "Atalanta",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Carl Starfelt",
      "age": 31,
      "position": "DEF",
      "rating": 79,
      "club": "Celta Vigo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gustaf Lagerbielke",
      "age": 26,
      "position": "DEF",
      "rating": 70,
      "club": "Braga",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gabriel Gudmundsson",
      "age": 27,
      "position": "DEF",
      "rating": 70,
      "club": "Leeds United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Herman Johansson",
      "age": 28,
      "position": "DEF",
      "rating": 70,
      "club": "FC Dallas",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hjalmar Ekdal",
      "age": 27,
      "position": "DEF",
      "rating": 70,
      "club": "Burnley",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Eric Smith",
      "age": 29,
      "position": "DEF",
      "rating": 70,
      "club": "FC St. Pauli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Elliot Stroud",
      "age": 23,
      "position": "DEF",
      "rating": 70,
      "club": "Mjällby AIF",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lucas Bergvall",
      "age": 20,
      "position": "MID",
      "rating": 86,
      "club": "Tottenham Hotspur",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yasin Ayari",
      "age": 22,
      "position": "MID",
      "rating": 79,
      "club": "Brighton & Hove Albion",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jesper Karlström",
      "age": 30,
      "position": "MID",
      "rating": 76,
      "club": "Udinese",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mattias Svanberg",
      "age": 27,
      "position": "MID",
      "rating": 76,
      "club": "VfL Wolfsburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Besfort Zeneli",
      "age": 23,
      "position": "MID",
      "rating": 70,
      "club": "Union Saint-Gilloise",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alexander Isak",
      "age": 26,
      "position": "FWD",
      "rating": 86,
      "club": "Liverpool",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Anthony Elanga",
      "age": 24,
      "position": "FWD",
      "rating": 81,
      "club": "Newcastle United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Viktor Gyökeres",
      "age": 28,
      "position": "FWD",
      "rating": 81,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Benjamin Nygren",
      "age": 24,
      "position": "FWD",
      "rating": 76,
      "club": "Celtic",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ken Sema",
      "age": 32,
      "position": "FWD",
      "rating": 70,
      "club": "Pafos",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alexander Bernhardsson",
      "age": 27,
      "position": "FWD",
      "rating": 70,
      "club": "Holstein Kiel",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gustaf Nilsson",
      "age": 29,
      "position": "FWD",
      "rating": 70,
      "club": "Club Brugge",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Taha Ali",
      "age": 27,
      "position": "FWD",
      "rating": 70,
      "club": "Malmö FF",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "TUN": [
    {
      "name": "Aymen Dahmen",
      "age": 29,
      "position": "GK",
      "rating": 70,
      "club": "CS Sfaxien",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sabri Ben Hessen",
      "age": 29,
      "position": "GK",
      "rating": 64,
      "club": "Étoile du Sahel",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mouhib Chamakh",
      "age": 24,
      "position": "GK",
      "rating": 64,
      "club": "Club Africain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ali Abdi",
      "age": 32,
      "position": "DEF",
      "rating": 79,
      "club": "Nice",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Montassar Talbi",
      "age": 28,
      "position": "DEF",
      "rating": 70,
      "club": "Lorient",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dylan Bronn",
      "age": 30,
      "position": "DEF",
      "rating": 70,
      "club": "Servette",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yan Valery",
      "age": 27,
      "position": "DEF",
      "rating": 70,
      "club": "Young Boys",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohamed Amine Ben Hamida",
      "age": 30,
      "position": "DEF",
      "rating": 64,
      "club": "Espérance de Tunis",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Moutaz Neffati",
      "age": 21,
      "position": "DEF",
      "rating": 64,
      "club": "IFK Norrköping",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Omar Rekik",
      "age": 24,
      "position": "DEF",
      "rating": 64,
      "club": "Maribor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Adem Arous",
      "age": 21,
      "position": "DEF",
      "rating": 64,
      "club": "Kasımpaşa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Raed Chikhaoui",
      "age": 22,
      "position": "DEF",
      "rating": 64,
      "club": "US Monastir",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ellyes Skhiri",
      "age": 31,
      "position": "MID",
      "rating": 79,
      "club": "Eintracht Frankfurt",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hannibal Mejbri",
      "age": 23,
      "position": "MID",
      "rating": 70,
      "club": "Burnley",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Anis Ben Slimane",
      "age": 25,
      "position": "MID",
      "rating": 70,
      "club": "Norwich City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mortadha Ben Ouanes",
      "age": 31,
      "position": "MID",
      "rating": 70,
      "club": "Kasımpaşa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ismaël Gharbi",
      "age": 22,
      "position": "MID",
      "rating": 64,
      "club": "FC Augsburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hadj Mahmoud",
      "age": 26,
      "position": "MID",
      "rating": 64,
      "club": "Lugano",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rani Khedira",
      "age": 32,
      "position": "MID",
      "rating": 64,
      "club": "Union Berlin",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Khalil Ayari",
      "age": 21,
      "position": "FWD",
      "rating": 81,
      "club": "Paris Saint-Germain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Elias Achouri",
      "age": 27,
      "position": "FWD",
      "rating": 70,
      "club": "Copenhagen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Firas Chaouat",
      "age": 30,
      "position": "FWD",
      "rating": 70,
      "club": "Club Africain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hazem Mastouri",
      "age": 28,
      "position": "FWD",
      "rating": 70,
      "club": "Dynamo Makhachkala",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Elias Saad",
      "age": 26,
      "position": "FWD",
      "rating": 64,
      "club": "Hannover 96",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sebastian Tounekti",
      "age": 23,
      "position": "FWD",
      "rating": 64,
      "club": "Celtic",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rayan Elloumi",
      "age": 18,
      "position": "FWD",
      "rating": 64,
      "club": "Vancouver Whitecaps FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "TUR": [
    {
      "name": "Altay Bayındır",
      "age": 28,
      "position": "GK",
      "rating": 81,
      "club": "Manchester United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Uğurcan Çakır",
      "age": 30,
      "position": "GK",
      "rating": 70,
      "club": "Galatasaray",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mert Günok",
      "age": 37,
      "position": "GK",
      "rating": 70,
      "club": "Fenerbahçe",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Zeki Çelik",
      "age": 29,
      "position": "DEF",
      "rating": 84,
      "club": "Roma",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ferdi Kadıoğlu",
      "age": 26,
      "position": "DEF",
      "rating": 79,
      "club": "Brighton & Hove Albion",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ozan Kabak",
      "age": 26,
      "position": "DEF",
      "rating": 79,
      "club": "TSG Hoffenheim",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Merih Demiral",
      "age": 28,
      "position": "DEF",
      "rating": 77,
      "club": "Al-Ahli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yusuf Akçiçek",
      "age": 20,
      "position": "DEF",
      "rating": 71,
      "club": "Al-Hilal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Çağlar Söyüncü",
      "age": 30,
      "position": "DEF",
      "rating": 70,
      "club": "Fenerbahçe",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mert Müldür",
      "age": 27,
      "position": "DEF",
      "rating": 70,
      "club": "Fenerbahçe",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Abdülkerim Bardakcı",
      "age": 31,
      "position": "DEF",
      "rating": 70,
      "club": "Galatasaray",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Eren Elmalı",
      "age": 25,
      "position": "DEF",
      "rating": 70,
      "club": "Galatasaray",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Samet Akaydin",
      "age": 32,
      "position": "DEF",
      "rating": 70,
      "club": "Çaykur Rizespor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mustafa Eskihellaç",
      "age": 29,
      "position": "DEF",
      "rating": 70,
      "club": "Trabzonspor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ahmetcan Kaplan",
      "age": 23,
      "position": "DEF",
      "rating": 70,
      "club": "NEC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hakan Çalhanoğlu",
      "age": 32,
      "position": "MID",
      "rating": 86,
      "club": "Inter Milan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Salih Özcan",
      "age": 28,
      "position": "MID",
      "rating": 81,
      "club": "Borussia Dortmund",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Atakan Karazor",
      "age": 29,
      "position": "MID",
      "rating": 79,
      "club": "VfB Stuttgart",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kaan Ayhan",
      "age": 31,
      "position": "MID",
      "rating": 76,
      "club": "Galatasaray",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Orkun Kökçü",
      "age": 25,
      "position": "MID",
      "rating": 70,
      "club": "Beşiktaş",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "İsmail Yüksek",
      "age": 27,
      "position": "MID",
      "rating": 70,
      "club": "Fenerbahçe",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Demir Ege Tıknaz",
      "age": 21,
      "position": "MID",
      "rating": 70,
      "club": "Braga",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Arda Güler",
      "age": 21,
      "position": "FWD",
      "rating": 86,
      "club": "Real Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kenan Yıldız",
      "age": 21,
      "position": "FWD",
      "rating": 81,
      "club": "Juventus",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Deniz Gül",
      "age": 21,
      "position": "FWD",
      "rating": 79,
      "club": "Porto",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Can Uzun",
      "age": 20,
      "position": "FWD",
      "rating": 79,
      "club": "Eintracht Frankfurt",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "URU": [
    {
      "name": "Fernando Muslera",
      "age": 39,
      "position": "GK",
      "rating": 80,
      "club": "Estudiantes",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sergio Rochet",
      "age": 33,
      "position": "GK",
      "rating": 75,
      "club": "Internacional",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Santiago Mele",
      "age": 28,
      "position": "GK",
      "rating": 75,
      "club": "Monterrey",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ronald Araújo",
      "age": 27,
      "position": "DEF",
      "rating": 90,
      "club": "Barcelona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "José María Giménez",
      "age": 31,
      "position": "DEF",
      "rating": 80,
      "club": "Atlético Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Matías Viña",
      "age": 28,
      "position": "DEF",
      "rating": 80,
      "club": "River Plate",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mathías Olivera",
      "age": 28,
      "position": "DEF",
      "rating": 80,
      "club": "Napoli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Guillermo Varela",
      "age": 33,
      "position": "DEF",
      "rating": 75,
      "club": "Flamengo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sebastián Cáceres",
      "age": 26,
      "position": "DEF",
      "rating": 75,
      "club": "América",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Joaquín Piquerez",
      "age": 27,
      "position": "DEF",
      "rating": 75,
      "club": "Palmeiras",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Santiago Bueno",
      "age": 27,
      "position": "DEF",
      "rating": 75,
      "club": "Wolverhampton Wanderers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rodrigo Bentancur",
      "age": 28,
      "position": "MID",
      "rating": 90,
      "club": "Tottenham Hotspur",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Federico Valverde",
      "age": 27,
      "position": "MID",
      "rating": 85,
      "club": "Real Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Manuel Ugarte",
      "age": 25,
      "position": "MID",
      "rating": 85,
      "club": "Manchester United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Maximiliano Araújo",
      "age": 26,
      "position": "MID",
      "rating": 83,
      "club": "Sporting CP",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Giorgian de Arrascaeta",
      "age": 32,
      "position": "MID",
      "rating": 75,
      "club": "Flamengo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Facundo Pellistri",
      "age": 24,
      "position": "MID",
      "rating": 75,
      "club": "Panathinaikos",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nicolás de la Cruz",
      "age": 29,
      "position": "MID",
      "rating": 75,
      "club": "Flamengo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Brian Rodríguez",
      "age": 26,
      "position": "MID",
      "rating": 75,
      "club": "América",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Agustín Canobbio",
      "age": 27,
      "position": "MID",
      "rating": 75,
      "club": "Fluminense",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Emiliano Martínez",
      "age": 26,
      "position": "MID",
      "rating": 75,
      "club": "Palmeiras",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rodrigo Zalazar",
      "age": 26,
      "position": "MID",
      "rating": 75,
      "club": "Braga",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Juan Manuel Sanabria",
      "age": 26,
      "position": "MID",
      "rating": 75,
      "club": "Real Salt Lake",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Darwin Núñez",
      "age": 26,
      "position": "FWD",
      "rating": 86,
      "club": "Al-Hilal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Federico Viñas",
      "age": 27,
      "position": "FWD",
      "rating": 80,
      "club": "Oviedo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rodrigo Aguirre",
      "age": 31,
      "position": "FWD",
      "rating": 80,
      "club": "UANL",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "USA": [
    {
      "name": "Matt Turner",
      "age": 31,
      "position": "GK",
      "rating": 80,
      "club": "New England Revolution",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Matt Freese",
      "age": 27,
      "position": "GK",
      "rating": 75,
      "club": "New York City FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Chris Brady",
      "age": 22,
      "position": "GK",
      "rating": 75,
      "club": "Chicago Fire FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sergiño Dest",
      "age": 25,
      "position": "DEF",
      "rating": 88,
      "club": "PSV Eindhoven",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Chris Richards",
      "age": 26,
      "position": "DEF",
      "rating": 83,
      "club": "Crystal Palace",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Antonee Robinson",
      "age": 28,
      "position": "DEF",
      "rating": 83,
      "club": "Fulham",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alex Freeman",
      "age": 21,
      "position": "DEF",
      "rating": 83,
      "club": "Villarreal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Miles Robinson",
      "age": 29,
      "position": "DEF",
      "rating": 76,
      "club": "FC Cincinnati",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tim Ream",
      "age": 38,
      "position": "DEF",
      "rating": 76,
      "club": "Charlotte FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Maximilian Arfsten",
      "age": 25,
      "position": "DEF",
      "rating": 76,
      "club": "Columbus Crew",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Auston Trusty",
      "age": 27,
      "position": "DEF",
      "rating": 75,
      "club": "Celtic",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mark McKenzie",
      "age": 27,
      "position": "DEF",
      "rating": 75,
      "club": "Toulouse",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Joe Scally",
      "age": 23,
      "position": "DEF",
      "rating": 75,
      "club": "Borussia Mönchengladbach",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Weston McKennie",
      "age": 27,
      "position": "MID",
      "rating": 90,
      "club": "Juventus",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Malik Tillman",
      "age": 24,
      "position": "MID",
      "rating": 85,
      "club": "Bayer Leverkusen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Cristian Roldan",
      "age": 31,
      "position": "MID",
      "rating": 81,
      "club": "Seattle Sounders FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tyler Adams",
      "age": 27,
      "position": "MID",
      "rating": 80,
      "club": "Bournemouth",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Giovanni Reyna",
      "age": 23,
      "position": "MID",
      "rating": 75,
      "club": "Borussia Mönchengladbach",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sebastian Berhalter",
      "age": 25,
      "position": "MID",
      "rating": 75,
      "club": "Vancouver Whitecaps FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ricardo Pepi",
      "age": 23,
      "position": "FWD",
      "rating": 88,
      "club": "PSV Eindhoven",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Folarin Balogun",
      "age": 24,
      "position": "FWD",
      "rating": 83,
      "club": "Monaco",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Timothy Weah",
      "age": 26,
      "position": "FWD",
      "rating": 83,
      "club": "Marseille",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Christian Pulisic",
      "age": 27,
      "position": "FWD",
      "rating": 80,
      "club": "Milan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Brenden Aaronson",
      "age": 25,
      "position": "FWD",
      "rating": 75,
      "club": "Leeds United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Haji Wright",
      "age": 28,
      "position": "FWD",
      "rating": 75,
      "club": "Coventry City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alejandro Zendejas",
      "age": 28,
      "position": "FWD",
      "rating": 75,
      "club": "América",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "UZB": [
    {
      "name": "Utkir Yusupov",
      "age": 35,
      "position": "GK",
      "rating": 64,
      "club": "Navbahor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Abduvohid Nematov",
      "age": 25,
      "position": "GK",
      "rating": 58,
      "club": "Nasaf",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Botirali Ergashev",
      "age": 30,
      "position": "GK",
      "rating": 58,
      "club": "Neftchi",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Abdukodir Khusanov",
      "age": 22,
      "position": "DEF",
      "rating": 75,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rustam Ashurmatov",
      "age": 29,
      "position": "DEF",
      "rating": 64,
      "club": "Esteghlal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Farrukh Sayfiev",
      "age": 35,
      "position": "DEF",
      "rating": 64,
      "club": "Neftchi",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Khojiakbar Alijonov",
      "age": 29,
      "position": "DEF",
      "rating": 64,
      "club": "Pakhtakor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sherzod Nasrullaev",
      "age": 27,
      "position": "DEF",
      "rating": 58,
      "club": "Nasaf",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Umar Eshmurodov",
      "age": 33,
      "position": "DEF",
      "rating": 58,
      "club": "Nasaf",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Abdulla Abdullaev",
      "age": 28,
      "position": "DEF",
      "rating": 58,
      "club": "Dibba",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Bekhruz Karimov",
      "age": 18,
      "position": "DEF",
      "rating": 58,
      "club": "Surkhon",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jakhongir Urozov",
      "age": 22,
      "position": "DEF",
      "rating": 58,
      "club": "Dinamo Samarqand",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Avazbek Ulmasaliev",
      "age": 26,
      "position": "DEF",
      "rating": 58,
      "club": "AGMK",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Otabek Shukurov",
      "age": 29,
      "position": "MID",
      "rating": 70,
      "club": "Baniyas",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Odiljon Hamrobekov",
      "age": 30,
      "position": "MID",
      "rating": 64,
      "club": "Tractor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jamshid Iskanderov",
      "age": 32,
      "position": "MID",
      "rating": 64,
      "club": "Neftchi",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Akmal Mozgovoy",
      "age": 27,
      "position": "MID",
      "rating": 64,
      "club": "Pakhtakor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Azizjon Ganiev",
      "age": 28,
      "position": "MID",
      "rating": 58,
      "club": "Al-Bataeh",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jasurbek Jaloliddinov",
      "age": 24,
      "position": "MID",
      "rating": 58,
      "club": "Sogdiana",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Umarali Rakhmonaliev",
      "age": 22,
      "position": "MID",
      "rating": 58,
      "club": "Sabah",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sherzod Esanov",
      "age": 23,
      "position": "MID",
      "rating": 58,
      "club": "Bukhara",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Eldor Shomurodov",
      "age": 30,
      "position": "FWD",
      "rating": 70,
      "club": "İstanbul Başakşehir",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Igor Sergeev",
      "age": 33,
      "position": "FWD",
      "rating": 64,
      "club": "Persepolis",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jaloliddin Masharipov",
      "age": 32,
      "position": "FWD",
      "rating": 64,
      "club": "Esteghlal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Oston Urunov",
      "age": 25,
      "position": "FWD",
      "rating": 64,
      "club": "Persepolis",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dostonbek Khamdamov",
      "age": 29,
      "position": "FWD",
      "rating": 58,
      "club": "Pakhtakor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ]
};
