import type { Team } from '../types';

export const teamsData: Omit<Team, 'baselineElo'>[] = [
  // Group A
  { id: "MEX", name: "Mexico", group: "A", elo: 1820, fifaRank: 15, sqi: 0, flag: "🇲🇽", recentForm: ["W", "L", "D", "W", "W"], stars: 4, manager: "Javier Aguirre" },
  { id: "KOR", name: "South Korea", group: "A", elo: 1790, fifaRank: 22, sqi: 0, flag: "🇰🇷", recentForm: ["W", "W", "D", "L", "W"], stars: 3, manager: "Hong Myung-Bo" },
  { id: "RSA", name: "South Africa", group: "A", elo: 1630, fifaRank: 58, sqi: 0, flag: "🇿🇦", recentForm: ["D", "W", "L", "W", "D"], stars: 2, manager: "Hugo Broos" },
  { id: "CZE", name: "Czechia", group: "A", elo: 1750, fifaRank: 36, sqi: 0, flag: "🇨🇿", recentForm: ["L", "W", "W", "D", "L"], stars: 3, manager: "Miroslav Koubek" },

  // Group B
  { id: "CAN", name: "Canada", group: "B", elo: 1740, fifaRank: 40, sqi: 0, flag: "🇨🇦", recentForm: ["W", "D", "L", "W", "L"], stars: 3, manager: "Jesse Marsch" },
  { id: "SUI", name: "Switzerland", group: "B", elo: 1830, fifaRank: 19, sqi: 0, flag: "🇨🇭", recentForm: ["W", "D", "W", "L", "W"], stars: 4, manager: "Murat Yakin" },
  { id: "QAT", name: "Qatar", group: "B", elo: 1640, fifaRank: 46, sqi: 0, flag: "🇶🇦", recentForm: ["W", "L", "W", "W", "D"], stars: 2, manager: "Julen Lopetegui" },
  { id: "BIH", name: "Bosnia & Herz.", group: "B", elo: 1680, fifaRank: 62, sqi: 0, flag: "🇧🇦", recentForm: ["L", "D", "W", "L", "D"], stars: 2, manager: "Sergej Barbarez" },

  // Group C
  { id: "BRA", name: "Brazil", group: "C", elo: 2090, fifaRank: 5, sqi: 0, flag: "🇧🇷", recentForm: ["W", "W", "L", "W", "W"], stars: 5, manager: "Carlo Ancelotti" },
  { id: "MAR", name: "Morocco", group: "C", elo: 1900, fifaRank: 13, sqi: 0, flag: "🇲🇦", recentForm: ["W", "W", "D", "W", "L"], stars: 4, manager: "Mohamed Ouahbi" },
  { id: "SCO", name: "Scotland", group: "C", elo: 1720, fifaRank: 39, sqi: 0, flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", recentForm: ["L", "D", "W", "L", "W"], stars: 3, manager: "Steve Clarke" },
  { id: "HAI", name: "Haiti", group: "C", elo: 1540, fifaRank: 85, sqi: 0, flag: "🇭🇹", recentForm: ["W", "L", "L", "D", "W"], stars: 1, manager: "Sébastien Migné" },

  // Group D
  { id: "USA", name: "United States", group: "D", elo: 1840, fifaRank: 11, sqi: 0, flag: "🇺🇸", recentForm: ["D", "W", "W", "L", "W"], stars: 4, manager: "Mauricio Pochettino" },
  { id: "PAR", name: "Paraguay", group: "D", elo: 1710, fifaRank: 56, sqi: 0, flag: "🇵🇾", recentForm: ["L", "W", "D", "L", "D"], stars: 2, manager: "Gustavo Alfaro" },
  { id: "AUS", name: "Australia", group: "D", elo: 1750, fifaRank: 23, sqi: 0, flag: "🇦🇺", recentForm: ["W", "W", "D", "W", "L"], stars: 3, manager: "Tony Popovic" },
  { id: "TUR", name: "Turkiye", group: "D", elo: 1800, fifaRank: 26, sqi: 0, flag: "🇹🇷", recentForm: ["W", "L", "W", "D", "W"], stars: 3, manager: "Vincenzo Montella" },

  // Group E
  { id: "GER", name: "Germany", group: "E", elo: 1980, fifaRank: 16, sqi: 0, flag: "🇩🇪", recentForm: ["W", "W", "D", "W", "L"], stars: 4, manager: "Julian Nagelsmann" },
  { id: "ECU", name: "Ecuador", group: "E", elo: 1850, fifaRank: 30, sqi: 0, flag: "🇪🇨", recentForm: ["W", "D", "W", "L", "W"], stars: 4, manager: "Sebastián Beccacece" },
  { id: "CIV", name: "Ivory Coast", group: "E", elo: 1770, fifaRank: 38, sqi: 0, flag: "🇨🇮", recentForm: ["W", "W", "L", "D", "W"], stars: 3, manager: "Emerse Faé" },
  { id: "CUW", name: "Curacao", group: "E", elo: 1480, fifaRank: 90, sqi: 0, flag: "🇨🇼", recentForm: ["D", "L", "W", "L", "L"], stars: 1, manager: "Dick Advocaat" },

  // Group F
  { id: "NED", name: "Netherlands", group: "F", elo: 2020, fifaRank: 7, sqi: 0, flag: "🇳🇱", recentForm: ["W", "D", "W", "W", "D"], stars: 4, manager: "Ronald Koeman" },
  { id: "JPN", name: "Japan", group: "F", elo: 1890, fifaRank: 18, sqi: 0, flag: "🇯🇵", recentForm: ["W", "W", "W", "L", "W"], stars: 4, manager: "Hajime Moriyasu" },
  { id: "TUN", name: "Tunisia", group: "F", elo: 1670, fifaRank: 41, sqi: 0, flag: "🇹🇳", recentForm: ["L", "W", "D", "D", "L"], stars: 2, manager: "Sabri Lamouchi" },
  { id: "SWE", name: "Sweden", group: "F", elo: 1790, fifaRank: 28, sqi: 0, flag: "🇸🇪", recentForm: ["W", "L", "W", "D", "W"], stars: 3, manager: "Graham Potter" },

  // Group G
  { id: "BEL", name: "Belgium", group: "G", elo: 1980, fifaRank: 3, sqi: 0, flag: "🇧🇪", recentForm: ["D", "W", "L", "W", "W"], stars: 4, manager: "Rudi Garcia" },
  { id: "IRN", name: "Iran", group: "G", elo: 1790, fifaRank: 20, sqi: 0, flag: "🇮🇷", recentForm: ["W", "W", "D", "W", "L"], stars: 3, manager: "Amir Ghalenoei" },
  { id: "EGY", name: "Egypt", group: "G", elo: 1740, fifaRank: 32, sqi: 0, flag: "🇪🇬", recentForm: ["W", "D", "W", "L", "D"], stars: 3, manager: "Hossam Hassan" },
  { id: "NZL", name: "New Zealand", group: "G", elo: 1520, fifaRank: 104, sqi: 0, flag: "🇳🇿", recentForm: ["W", "L", "D", "L", "W"], stars: 1, manager: "Darren Bazeley" },

  // Group H
  { id: "ESP", name: "Spain", group: "H", elo: 2085, fifaRank: 8, sqi: 0, flag: "🇪🇸", recentForm: ["W", "W", "W", "D", "W"], stars: 5, manager: "Luis de la Fuente" },
  { id: "URU", name: "Uruguay", group: "H", elo: 1950, fifaRank: 14, sqi: 0, flag: "🇺🇾", recentForm: ["W", "L", "W", "W", "D"], stars: 4, manager: "Marcelo Bielsa" },
  { id: "KSA", name: "Saudi Arabia", group: "H", elo: 1620, fifaRank: 53, sqi: 0, flag: "🇸🇦", recentForm: ["L", "W", "L", "W", "D"], stars: 2, manager: "Georgios Donis" },
  { id: "CPV", name: "Cape Verde", group: "H", elo: 1610, fifaRank: 65, sqi: 0, flag: "🇨🇻", recentForm: ["D", "L", "W", "D", "L"], stars: 2, manager: "Bubista" },

  // Group I
  { id: "FRA", name: "France", group: "I", elo: 2110, fifaRank: 2, sqi: 0, flag: "🇫🇷", recentForm: ["W", "D", "W", "W", "W"], stars: 5, manager: "Didier Deschamps" },
  { id: "SEN", name: "Senegal", group: "I", elo: 1830, fifaRank: 17, sqi: 0, flag: "🇸🇳", recentForm: ["W", "W", "D", "L", "W"], stars: 4, manager: "Pape Thiaw" },
  { id: "NOR", name: "Norway", group: "I", elo: 1810, fifaRank: 45, sqi: 0, flag: "🇳🇴", recentForm: ["L", "W", "W", "D", "W"], stars: 3, manager: "Ståle Solbakken" },
  { id: "IRQ", name: "Iraq", group: "I", elo: 1620, fifaRank: 55, sqi: 0, flag: "🇮🇶", recentForm: ["W", "L", "W", "L", "D"], stars: 2, manager: "Graham Arnold" },

  // Group J
  { id: "ARG", name: "Argentina", group: "J", elo: 2140, fifaRank: 1, sqi: 0, flag: "🇦🇷", recentForm: ["W", "W", "W", "D", "W"], stars: 5, manager: "Lionel Scaloni" },
  { id: "ALG", name: "Algeria", group: "J", elo: 1730, fifaRank: 43, sqi: 0, flag: "🇩🇿", recentForm: ["D", "W", "L", "W", "D"], stars: 3, manager: "Vladimir Petković" },
  { id: "AUT", name: "Austria", group: "J", elo: 1840, fifaRank: 25, sqi: 0, flag: "🇦🇹", recentForm: ["W", "D", "W", "W", "L"], stars: 4, manager: "Ralf Rangnick" },
  { id: "JOR", name: "Jordan", group: "J", elo: 1570, fifaRank: 70, sqi: 0, flag: "🇯🇴", recentForm: ["L", "W", "D", "L", "W"], stars: 2, manager: "Jamal Sellami" },

  // Group K
  { id: "POR", name: "Portugal", group: "K", elo: 2060, fifaRank: 6, sqi: 0, flag: "🇵🇹", recentForm: ["W", "W", "D", "W", "L"], stars: 5, manager: "Roberto Martínez" },
  { id: "COD", name: "DR Congo", group: "K", elo: 1640, fifaRank: 60, sqi: 0, flag: "🇨🇩", recentForm: ["D", "L", "W", "D", "W"], stars: 2, manager: "Sébastien Desabre" },
  { id: "UZB", name: "Uzbekistan", group: "K", elo: 1680, fifaRank: 66, sqi: 0, flag: "🇺🇿", recentForm: ["W", "D", "W", "L", "D"], stars: 2, manager: "Fabio Cannavaro" },
  { id: "COL", name: "Colombia", group: "K", elo: 1960, fifaRank: 12, sqi: 0, flag: "🇨🇴", recentForm: ["W", "W", "W", "D", "W"], stars: 4, manager: "Néstor Lorenzo" },

  // Group L
  { id: "ENG", name: "England", group: "L", elo: 2070, fifaRank: 4, sqi: 0, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", recentForm: ["W", "D", "W", "W", "D"], stars: 5, manager: "Thomas Tuchel" },
  { id: "CRO", name: "Croatia", group: "L", elo: 1930, fifaRank: 10, sqi: 0, flag: "🇭🇷", recentForm: ["L", "W", "W", "D", "W"], stars: 4, manager: "Zlatko Dalić" },
  { id: "GHA", name: "Ghana", group: "L", elo: 1660, fifaRank: 64, sqi: 0, flag: "🇬🇭", recentForm: ["D", "W", "L", "L", "W"], stars: 2, manager: "Carlos Queiroz" },
  { id: "PAN", name: "Panama", group: "L", elo: 1690, fifaRank: 44, sqi: 0, flag: "🇵🇦", recentForm: ["W", "L", "W", "D", "L"], stars: 2, manager: "Thomas Christiansen" }
];
