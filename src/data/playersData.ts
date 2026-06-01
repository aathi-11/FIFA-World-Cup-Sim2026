import type { Player, PlayerPosition, Team } from '../types';

// Real-world rosters for major contenders
const preloadedSquads: Record<string, Omit<Player, 'id'>[]> = {
  ARG: [
    { name: "Lionel Messi", age: 38, position: "FWD", rating: 91, form: 1.0, injured: false, suspended: false, club: "Inter Miami" },
    { name: "Lautaro Martinez", age: 28, position: "FWD", rating: 89, form: 1.0, injured: false, suspended: false, club: "Inter Milan" },
    { name: "Julian Alvarez", age: 26, position: "FWD", rating: 86, form: 1.0, injured: false, suspended: false, club: "Atletico Madrid" },
    { name: "Alexis Mac Allister", age: 27, position: "MID", rating: 87, form: 1.0, injured: false, suspended: false, club: "Liverpool" },
    { name: "Enzo Fernandez", age: 25, position: "MID", rating: 85, form: 1.0, injured: false, suspended: false, club: "Chelsea" },
    { name: "Rodrigo De Paul", age: 32, position: "MID", rating: 84, form: 1.0, injured: false, suspended: false, club: "Atletico Madrid" },
    { name: "Leandro Paredes", age: 31, position: "MID", rating: 81, form: 1.0, injured: false, suspended: false, club: "AS Roma" },
    { name: "Cristian Romero", age: 28, position: "DEF", rating: 89, form: 1.0, injured: false, suspended: false, club: "Tottenham" },
    { name: "Lisandro Martinez", age: 28, position: "DEF", rating: 85, form: 1.0, injured: false, suspended: false, club: "Manchester United" },
    { name: "Nicolas Otamendi", age: 38, position: "DEF", rating: 79, form: 1.0, injured: false, suspended: false, club: "Benfica" },
    { name: "Nahuel Molina", age: 28, position: "DEF", rating: 81, form: 1.0, injured: false, suspended: false, club: "Atletico Madrid" },
    { name: "Nicolas Tagliafico", age: 33, position: "DEF", rating: 80, form: 1.0, injured: false, suspended: false, club: "Lyon" },
    { name: "Emiliano Martinez", age: 33, position: "GK", rating: 89, form: 1.0, injured: false, suspended: false, club: "Aston Villa" },
    { name: "Geronimo Rulli", age: 34, position: "GK", rating: 80, form: 1.0, injured: false, suspended: false, club: "Marseille" }
  ],
  FRA: [
    { name: "Kylian Mbappe", age: 27, position: "FWD", rating: 93, form: 1.0, injured: false, suspended: false, club: "Real Madrid" },
    { name: "Antoine Griezmann", age: 35, position: "FWD", rating: 86, form: 1.0, injured: false, suspended: false, club: "Atletico Madrid" },
    { name: "Ousmane Dembele", age: 29, position: "FWD", rating: 85, form: 1.0, injured: false, suspended: false, club: "PSG" },
    { name: "Marcus Thuram", age: 28, position: "FWD", rating: 84, form: 1.0, injured: false, suspended: false, club: "Inter Milan" },
    { name: "Aurelien Tchouameni", age: 26, position: "MID", rating: 87, form: 1.0, injured: false, suspended: false, club: "Real Madrid" },
    { name: "Eduardo Camavinga", age: 23, position: "MID", rating: 86, form: 1.0, injured: false, suspended: false, club: "Real Madrid" },
    { name: "Warren Zaire-Emery", age: 20, position: "MID", rating: 84, form: 1.0, injured: false, suspended: false, club: "PSG" },
    { name: "Adrien Rabiot", age: 31, position: "MID", rating: 83, form: 1.0, injured: false, suspended: false, club: "Marseille" },
    { name: "William Saliba", age: 25, position: "DEF", rating: 90, form: 1.0, injured: false, suspended: false, club: "Arsenal" },
    { name: "Jules Kounde", age: 27, position: "DEF", rating: 86, form: 1.0, injured: false, suspended: false, club: "Barcelona" },
    { name: "Theo Hernandez", age: 28, position: "DEF", rating: 87, form: 1.0, injured: false, suspended: false, club: "AC Milan" },
    { name: "Dayot Upamecano", age: 27, position: "DEF", rating: 84, form: 1.0, injured: false, suspended: false, club: "Bayern Munich" },
    { name: "Ibrahima Konate", age: 27, position: "DEF", rating: 85, form: 1.0, injured: false, suspended: false, club: "Liverpool" },
    { name: "Mike Maignan", age: 30, position: "GK", rating: 88, form: 1.0, injured: false, suspended: false, club: "AC Milan" },
    { name: "Brice Samba", age: 32, position: "GK", rating: 81, form: 1.0, injured: false, suspended: false, club: "Lens" }
  ],
  BRA: [
    { name: "Vinicius Junior", age: 25, position: "FWD", rating: 91, form: 1.0, injured: false, suspended: false, club: "Real Madrid" },
    { name: "Rodrygo", age: 25, position: "FWD", rating: 87, form: 1.0, injured: false, suspended: false, club: "Real Madrid" },
    { name: "Raphinha", age: 29, position: "FWD", rating: 86, form: 1.0, injured: false, suspended: false, club: "Barcelona" },
    { name: "Neymar Jr", age: 34, position: "FWD", rating: 85, form: 1.0, injured: false, suspended: false, club: "Al-Hilal" },
    { name: "Bruno Guimaraes", age: 28, position: "MID", rating: 87, form: 1.0, injured: false, suspended: false, club: "Newcastle" },
    { name: "Lucas Paqueta", age: 28, position: "MID", rating: 84, form: 1.0, injured: false, suspended: false, club: "West Ham" },
    { name: "Douglas Luiz", age: 28, position: "MID", rating: 83, form: 1.0, injured: false, suspended: false, club: "Juventus" },
    { name: "Gabriel Magalhaes", age: 28, position: "DEF", rating: 87, form: 1.0, injured: false, suspended: false, club: "Arsenal" },
    { name: "Marquinhos", age: 32, position: "DEF", rating: 86, form: 1.0, injured: false, suspended: false, club: "PSG" },
    { name: "Eder Militao", age: 28, position: "DEF", rating: 85, form: 1.0, injured: false, suspended: false, club: "Real Madrid" },
    { name: "Bremer", age: 29, position: "DEF", rating: 84, form: 1.0, injured: false, suspended: false, club: "Juventus" },
    { name: "Danilo", age: 34, position: "DEF", rating: 80, form: 1.0, injured: false, suspended: false, club: "Juventus" },
    { name: "Alisson Becker", age: 33, position: "GK", rating: 89, form: 1.0, injured: false, suspended: false, club: "Liverpool" },
    { name: "Ederson", age: 32, position: "GK", rating: 88, form: 1.0, injured: false, suspended: false, club: "Manchester City" }
  ],
  ENG: [
    { name: "Harry Kane", age: 32, position: "FWD", rating: 89, form: 1.0, injured: false, suspended: false, club: "Bayern Munich" },
    { name: "Jude Bellingham", age: 22, position: "MID", rating: 91, form: 1.0, injured: false, suspended: false, club: "Real Madrid" },
    { name: "Bukayo Saka", age: 24, position: "FWD", rating: 89, form: 1.0, injured: false, suspended: false, club: "Arsenal" },
    { name: "Phil Foden", age: 26, position: "FWD", rating: 88, form: 1.0, injured: false, suspended: false, club: "Manchester City" },
    { name: "Cole Palmer", age: 24, position: "MID", rating: 87, form: 1.0, injured: false, suspended: false, club: "Chelsea" },
    { name: "Declan Rice", age: 27, position: "MID", rating: 88, form: 1.0, injured: false, suspended: false, club: "Arsenal" },
    { name: "Kobbie Mainoo", age: 21, position: "MID", rating: 83, form: 1.0, injured: false, suspended: false, club: "Manchester United" },
    { name: "John Stones", age: 32, position: "DEF", rating: 86, form: 1.0, injured: false, suspended: false, club: "Manchester City" },
    { name: "Trent Alexander-Arnold", age: 27, position: "DEF", rating: 86, form: 1.0, injured: false, suspended: false, club: "Liverpool" },
    { name: "Marc Guehi", age: 25, position: "DEF", rating: 83, form: 1.0, injured: false, suspended: false, club: "Crystal Palace" },
    { name: "Kyle Walker", age: 36, position: "DEF", rating: 82, form: 1.0, injured: false, suspended: false, club: "Manchester City" },
    { name: "Jordan Pickford", age: 32, position: "GK", rating: 84, form: 1.0, injured: false, suspended: false, club: "Everton" },
    { name: "Aaron Ramsdale", age: 28, position: "GK", rating: 81, form: 1.0, injured: false, suspended: false, club: "Southampton" }
  ],
  ESP: [
    { name: "Lamine Yamal", age: 18, position: "FWD", rating: 89, form: 1.0, injured: false, suspended: false, club: "Barcelona" },
    { name: "Nico Williams", age: 23, position: "FWD", rating: 86, form: 1.0, injured: false, suspended: false, club: "Athletic Bilbao" },
    { name: "Dani Olmo", age: 28, position: "MID", rating: 86, form: 1.0, injured: false, suspended: false, club: "Barcelona" },
    { name: "Alvaro Morata", age: 33, position: "FWD", rating: 82, form: 1.0, injured: false, suspended: false, club: "AC Milan" },
    { name: "Rodri", age: 29, position: "MID", rating: 92, form: 1.0, injured: false, suspended: false, club: "Manchester City" },
    { name: "Pedri", age: 23, position: "MID", rating: 87, form: 1.0, injured: false, suspended: false, club: "Barcelona" },
    { name: "Gavi", age: 21, position: "MID", rating: 85, form: 1.0, injured: false, suspended: false, club: "Barcelona" },
    { name: "Fabian Ruiz", age: 30, position: "MID", rating: 84, form: 1.0, injured: false, suspended: false, club: "PSG" },
    { name: "Robin Le Normand", age: 29, position: "DEF", rating: 83, form: 1.0, injured: false, suspended: false, club: "Atletico Madrid" },
    { name: "Aymeric Laporte", age: 32, position: "DEF", rating: 83, form: 1.0, injured: false, suspended: false, club: "Al-Nassr" },
    { name: "Dani Carvajal", age: 34, position: "DEF", rating: 86, form: 1.0, injured: false, suspended: false, club: "Real Madrid" },
    { name: "Marc Cucurella", age: 27, position: "DEF", rating: 83, form: 1.0, injured: false, suspended: false, club: "Chelsea" },
    { name: "Alex Grimaldo", age: 30, position: "DEF", rating: 84, form: 1.0, injured: false, suspended: false, club: "Bayer Leverkusen" },
    { name: "Unai Simon", age: 28, position: "GK", rating: 86, form: 1.0, injured: false, suspended: false, club: "Athletic Bilbao" },
    { name: "David Raya", age: 30, position: "GK", rating: 85, form: 1.0, injured: false, suspended: false, club: "Arsenal" }
  ],
  POR: [
    { name: "Cristiano Ronaldo", age: 41, position: "FWD", rating: 84, form: 1.0, injured: false, suspended: false, club: "Al-Nassr" },
    { name: "Rafael Leao", age: 26, position: "FWD", rating: 87, form: 1.0, injured: false, suspended: false, club: "AC Milan" },
    { name: "Diogo Jota", age: 29, position: "FWD", rating: 83, form: 1.0, injured: false, suspended: false, club: "Liverpool" },
    { name: "Bruno Fernandes", age: 31, position: "MID", rating: 88, form: 1.0, injured: false, suspended: false, club: "Manchester United" },
    { name: "Bernardo Silva", age: 31, position: "MID", rating: 88, form: 1.0, injured: false, suspended: false, club: "Manchester City" },
    { name: "Vitinha", age: 26, position: "MID", rating: 86, form: 1.0, injured: false, suspended: false, club: "PSG" },
    { name: "Joao Palhinha", age: 30, position: "MID", rating: 84, form: 1.0, injured: false, suspended: false, club: "Bayern Munich" },
    { name: "Ruben Dias", age: 29, position: "DEF", rating: 89, form: 1.0, injured: false, suspended: false, club: "Manchester City" },
    { name: "Nuno Mendes", age: 23, position: "DEF", rating: 84, form: 1.0, injured: false, suspended: false, club: "PSG" },
    { name: "Joao Cancelo", age: 32, position: "DEF", rating: 83, form: 1.0, injured: false, suspended: false, club: "Al-Hilal" },
    { name: "Diogo Dalot", age: 27, position: "DEF", rating: 83, form: 1.0, injured: false, suspended: false, club: "Manchester United" },
    { name: "Diogo Costa", age: 26, position: "GK", rating: 86, form: 1.0, injured: false, suspended: false, club: "Porto" }
  ],
  GER: [
    { name: "Florian Wirtz", age: 23, position: "MID", rating: 90, form: 1.0, injured: false, suspended: false, club: "Bayer Leverkusen" },
    { name: "Jamal Musiala", age: 23, position: "MID", rating: 89, form: 1.0, injured: false, suspended: false, club: "Bayern Munich" },
    { name: "Kai Havertz", age: 26, position: "FWD", rating: 85, form: 1.0, injured: false, suspended: false, club: "Arsenal" },
    { name: "Niclas Fullkrug", age: 33, position: "FWD", rating: 82, form: 1.0, injured: false, suspended: false, club: "West Ham" },
    { name: "Leroy Sane", age: 30, position: "FWD", rating: 84, form: 1.0, injured: false, suspended: false, club: "Bayern Munich" },
    { name: "Pascal Gross", age: 34, position: "MID", rating: 82, form: 1.0, injured: false, suspended: false, club: "Dortmund" },
    { name: "Joshua Kimmich", age: 31, position: "DEF", rating: 86, form: 1.0, injured: false, suspended: false, club: "Bayern Munich" },
    { name: "Antonio Rudiger", age: 33, position: "DEF", rating: 88, form: 1.0, injured: false, suspended: false, club: "Real Madrid" },
    { name: "Jonathan Tah", age: 30, position: "DEF", rating: 84, form: 1.0, injured: false, suspended: false, club: "Bayer Leverkusen" },
    { name: "Nico Schlotterbeck", age: 26, position: "DEF", rating: 83, form: 1.0, injured: false, suspended: false, club: "Dortmund" },
    { name: "David Raum", age: 28, position: "DEF", rating: 81, form: 1.0, injured: false, suspended: false, club: "RB Leipzig" },
    { name: "Marc-Andre ter Stegen", age: 34, position: "GK", rating: 87, form: 1.0, injured: false, suspended: false, club: "Barcelona" }
  ],
  USA: [
    { name: "Christian Pulisic", age: 27, position: "FWD", rating: 84, form: 1.0, injured: false, suspended: false, club: "AC Milan" },
    { name: "Folarin Balogun", age: 24, position: "FWD", rating: 79, form: 1.0, injured: false, suspended: false, club: "Monaco" },
    { name: "Timothy Weah", age: 26, position: "FWD", rating: 77, form: 1.0, injured: false, suspended: false, club: "Juventus" },
    { name: "Weston McKennie", age: 27, position: "MID", rating: 80, form: 1.0, injured: false, suspended: false, club: "Juventus" },
    { name: "Tyler Adams", age: 27, position: "MID", rating: 79, form: 1.0, injured: false, suspended: false, club: "Bournemouth" },
    { name: "Yunus Musah", age: 23, position: "MID", rating: 78, form: 1.0, injured: false, suspended: false, club: "AC Milan" },
    { name: "Giovanni Reyna", age: 23, position: "MID", rating: 77, form: 1.0, injured: false, suspended: false, club: "Dortmund" },
    { name: "Antonee Robinson", age: 28, position: "DEF", rating: 81, form: 1.0, injured: false, suspended: false, club: "Fulham" },
    { name: "Chris Richards", age: 26, position: "DEF", rating: 77, form: 1.0, injured: false, suspended: false, club: "Crystal Palace" },
    { name: "Cameron Carter-Vickers", age: 28, position: "DEF", rating: 78, form: 1.0, injured: false, suspended: false, club: "Celtic" },
    { name: "Sergino Dest", age: 25, position: "DEF", rating: 77, form: 1.0, injured: false, suspended: false, club: "PSV" },
    { name: "Matt Turner", age: 31, position: "GK", rating: 78, form: 1.0, injured: false, suspended: false, club: "Crystal Palace" }
  ]
};

// Procedural generator name pools based on region/country
const firstNames: Record<string, string[]> = {
  latin: ["Jose", "Luis", "Carlos", "Juan", "Santiago", "Mateo", "Diego", "Miguel", "Angel", "Sebastian", "Daniel", "David", "Andres", "Alejandro"],
  euro: ["Thomas", "Lukas", "Oliver", "Stefan", "Henrik", "Erik", "Peter", "Markus", "Jan", "David", "Christian", "Andreas", "Alexander", "Martin", "Simon"],
  asia: ["Min-woo", "Jae-hyun", "Hiroto", "Ren", "Yuto", "Souta", "Reza", "Ali", "Hossein", "Alireza", "Khashayar", "Jasur", "Otabek", "Fahad", "Salem"],
  africa: ["Mohamed", "Ahmed", "Sadio", "Moussa", "Cheikh", "Abdou", "Koffi", "Yao", "Samuel", "Emmanuel", "Abidemi", "Kwame", "Benni", "Sipho"],
  rest: ["John", "William", "James", "George", "Ben", "Jack", "Isaac", "Jean-Pierre", "Davidson", "Kevens", "Steeve", "Marlon"]
};

const lastNames: Record<string, string[]> = {
  latin: ["Garcia", "Martinez", "Rodriguez", "Lopez", "Perez", "Gonzalez", "Sanchez", "Gomez", "Diaz", "Torres", "Silva", "Hernandez", "Ramirez"],
  euro: ["Muller", "Hansen", "Andersson", "Kovac", "Schmidt", "Novak", "Rossi", "Gruber", "Ivanov", "Sorensen", "Weber", "Lefevre", "De Jong"],
  asia: ["Kim", "Lee", "Park", "Tanaka", "Sato", "Watanabe", "Rezaei", "Karimi", "Gholami", "Karimov", "Akhmedov", "Al-Shahrani", "Al-Harbi"],
  africa: ["Diallo", "Traore", "Salah", "Kone", "Diop", "Keita", "Mensah", "Sow", "Toure", "El-Sayed", "Ndlovu", "Chibwe", "Osei"],
  rest: ["Smith", "Williams", "Jones", "Brown", "Taylor", "Pierre", "Jean", "Baptiste", "Chery", "Alexis", "Sanon", "Toussaint"]
};

const clubs: Record<string, string[]> = {
  latin: ["Boca Juniors", "River Plate", "Flamengo", "Palmeiras", "Club America", "Monterrey", "Atletico Nacional", "Barcelona SC"],
  euro: ["Real Madrid", "Barcelona", "Bayern Munich", "PSG", "Manchester City", "Liverpool", "Arsenal", "Juventus", "AC Milan", "Ajax", "Benfica", "Sporting CP"],
  asia: ["Al-Hilal", "Al-Nassr", "Urawa Reds", "Yokohama F. Marinos", "Jeonbuk Motors", "Ulsan HD", "Persepolis", "Pakhtakor"],
  africa: ["Al Ahly", "Zamalek", "Wydad Casablanca", "Mamelodi Sundowns", "TP Mazembe", "Esperance de Tunis", "ASEC Mimosas"],
  rest: ["LA Galaxy", "Inter Miami", "Seattle Sounders", "Auckland City", "Montreal CF", "Toronto FC", "Violette AC"]
};

const getRegionKey = (teamId: string): string => {
  // Map team IDs to regional name pools
  const euroTeams = ["CZE", "SUI", "BIH", "SCO", "GER", "NED", "SWE", "BEL", "ESP", "FRA", "NOR", "AUT", "POR", "CRO"];
  const latinTeams = ["MEX", "PAR", "ECU", "URU", "COL", "PAN", "HAI"];
  const asianTeams = ["KOR", "QAT", "AUS", "IRN", "JPN", "KSA", "IRQ", "JOR", "UZB"];
  const africanTeams = ["RSA", "MAR", "TUN", "CIV", "EGY", "SEN", "ALG", "COD", "GHA"];
  
  if (euroTeams.includes(teamId)) return "euro";
  if (latinTeams.includes(teamId)) return "latin";
  if (asianTeams.includes(teamId)) return "asia";
  if (africanTeams.includes(teamId)) return "africa";
  return "rest";
};

// Generates a random element from an array
const randomChoice = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

// Generate a random squad for a team
export const generateSquad = (team: Team): Player[] => {
  const teamId = team.id;
  
  // If preloaded squad exists, use it
  if (preloadedSquads[teamId]) {
    return preloadedSquads[teamId].map((p, idx) => ({
      ...p,
      id: `${teamId}_${idx}`
    }));
  }
  
  // Otherwise, procedurally generate a squad
  const region = getRegionKey(teamId);
  const regionFirst = firstNames[region] || firstNames.rest;
  const regionLast = lastNames[region] || lastNames.rest;
  const regionClubs = clubs[region] || clubs.euro;
  
  // Base rating calculated from Elo rating (Elo range ~1480 to 2140)
  // Maps to player ratings from ~50 to ~85
  const baseRating = 48 + Math.round(((team.elo - 1400) / 740) * 35);
  
  const squad: Player[] = [];
  
  // Standard team formation composition: 1 GK, 5 DEF, 5 MID, 4 FWD (Total 15 players)
  const positionDistribution: { pos: PlayerPosition; count: number }[] = [
    { pos: 'GK', count: 1 },
    { pos: 'DEF', count: 5 },
    { pos: 'MID', count: 5 },
    { pos: 'FWD', count: 4 }
  ];
  
  let playerIdx = 0;
  
  positionDistribution.forEach(({ pos, count }) => {
    for (let i = 0; i < count; i++) {
      // Pick random first and last name, ensuring uniqueness
      let name = `${randomChoice(regionFirst)} ${randomChoice(regionLast)}`;
      while (squad.some(p => p.name === name)) {
        name = `${randomChoice(regionFirst)} ${randomChoice(regionLast)}`;
      }
      
      const age = 18 + Math.floor(Math.random() * 18); // 18 to 35
      
      // Determine player rating based on position and a random offset (+- 5)
      let ratingOffset = Math.floor(Math.random() * 9) - 4; // -4 to +4
      // Give a slight boost to key stars
      if (i === 0 && (pos === 'FWD' || pos === 'MID')) {
        ratingOffset += 6; // Key star player
      }
      
      const rating = Math.min(96, Math.max(45, baseRating + ratingOffset));
      
      // Select club (70% local/regional, 30% big European club if not already European)
      let club = randomChoice(regionClubs);
      if (region !== "euro" && Math.random() < 0.35) {
        club = randomChoice(clubs.euro);
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
