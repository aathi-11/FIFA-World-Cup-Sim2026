// Real squads parsed dynamically from ESPN squad lists
import type { Player } from '../types';

export const realPlayersData: Record<string, Omit<Player, 'id'>[]> = {
  "MEX": [
    {
      "name": "Carlos Acevedo",
      "age": 25,
      "position": "GK",
      "rating": 78,
      "club": "Santos Laguna",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Guillermo Ochoa",
      "age": 35,
      "position": "GK",
      "rating": 70,
      "club": "AEL Limassol",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ra\u00fal Rangel",
      "age": 27,
      "position": "GK",
      "rating": 72,
      "club": "Chivas",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jes\u00fas Gallardo",
      "age": 24,
      "position": "DEF",
      "rating": 78,
      "club": "Toluca",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Israel Reyes",
      "age": 23,
      "position": "DEF",
      "rating": 78,
      "club": "Am\u00e9rica",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "C\u00e9sar Montes",
      "age": 33,
      "position": "DEF",
      "rating": 78,
      "club": "Lokomotiv Moscow",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jorge S\u00e1nchez",
      "age": 23,
      "position": "DEF",
      "rating": 77,
      "club": "PAOK",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Johan V\u00e1squez",
      "age": 28,
      "position": "DEF",
      "rating": 77,
      "club": "Genoa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mateo Ch\u00e1vez",
      "age": 22,
      "position": "DEF",
      "rating": 70,
      "club": "AZ Alkmaar",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gilberto Mora",
      "age": 24,
      "position": "MID",
      "rating": 76,
      "club": "Tijuana",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Edson \u00c1lvarez",
      "age": 29,
      "position": "MID",
      "rating": 74,
      "club": "Fenerbah\u00e7e",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Orbel\u00edn Pineda",
      "age": 21,
      "position": "MID",
      "rating": 77,
      "club": "AEK Athens",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Luis Romo",
      "age": 24,
      "position": "MID",
      "rating": 77,
      "club": "Chivas",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Brian Guti\u00e9rrez",
      "age": 27,
      "position": "MID",
      "rating": 74,
      "club": "Chivas",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Obed Vargas",
      "age": 28,
      "position": "MID",
      "rating": 71,
      "club": "Atl\u00e9tico Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "C\u00e9sar Huerta",
      "age": 25,
      "position": "MID",
      "rating": 74,
      "club": "Anderlecht",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Luis Ch\u00e1vez",
      "age": 33,
      "position": "MID",
      "rating": 70,
      "club": "Dinamo Moscow",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Erik Lira",
      "age": 32,
      "position": "MID",
      "rating": 71,
      "club": "Cruz Azul",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Fidalgo",
      "age": 26,
      "position": "MID",
      "rating": 73,
      "club": "Real Betis",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Roberto Alvarado",
      "age": 23,
      "position": "MID",
      "rating": 72,
      "club": "Chivas",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Armando Gonz\u00e1lez",
      "age": 31,
      "position": "FWD",
      "rating": 78,
      "club": "Chivas",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ra\u00fal Jim\u00e9nez",
      "age": 20,
      "position": "FWD",
      "rating": 75,
      "club": "Fulham",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Juli\u00e1n Qui\u00f1ones",
      "age": 25,
      "position": "FWD",
      "rating": 73,
      "club": "Al Qadsiah",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Santiago Gimenez",
      "age": 24,
      "position": "FWD",
      "rating": 70,
      "club": "AC Milan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Guillermo Mart\u00ednez",
      "age": 28,
      "position": "FWD",
      "rating": 72,
      "club": "Pumas",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alexis Vega",
      "age": 31,
      "position": "FWD",
      "rating": 72,
      "club": "Toluca",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "KOR": [
    {
      "name": "Jo Hyun-Woo",
      "age": 35,
      "position": "GK",
      "rating": 73,
      "club": "Ulsan HD",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kim Seung-Gyu",
      "age": 32,
      "position": "GK",
      "rating": 73,
      "club": "FC Tokyo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Song Bum-Keun",
      "age": 30,
      "position": "GK",
      "rating": 70,
      "club": "Jeonbuk Hyundai",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kim Min-Jae",
      "age": 30,
      "position": "DEF",
      "rating": 85,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jo Yu-Min",
      "age": 32,
      "position": "DEF",
      "rating": 75,
      "club": "Sharjah",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lee Han-Beom",
      "age": 27,
      "position": "DEF",
      "rating": 77,
      "club": "Midtjylland",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kim Tae-Hyun",
      "age": 25,
      "position": "DEF",
      "rating": 77,
      "club": "Kashima Antlers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Park Jin-Seop",
      "age": 23,
      "position": "DEF",
      "rating": 78,
      "club": "Zhejiang FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lee Ki-Hyeok",
      "age": 32,
      "position": "DEF",
      "rating": 70,
      "club": "Gangwon FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lee Tae-Seok",
      "age": 34,
      "position": "DEF",
      "rating": 71,
      "club": "Austria Vienna",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Seol Young-Woo",
      "age": 23,
      "position": "DEF",
      "rating": 72,
      "club": "Red Star Belgrade",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jens Castrop",
      "age": 23,
      "position": "DEF",
      "rating": 71,
      "club": "Borussia M\u00f6nchengladbach",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kim Moon-Hwan",
      "age": 26,
      "position": "DEF",
      "rating": 73,
      "club": "Daejeon Hana",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yang Hyun-Jun",
      "age": 31,
      "position": "MID",
      "rating": 82,
      "club": "Celtic",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Paik Seung-Ho",
      "age": 23,
      "position": "MID",
      "rating": 75,
      "club": "Birmingham City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hwang In-Beom",
      "age": 26,
      "position": "MID",
      "rating": 75,
      "club": "Feyenoord",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kim Jin-Kyu",
      "age": 31,
      "position": "MID",
      "rating": 74,
      "club": "Jeonbuk Hyundai",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Bae Jun-Ho",
      "age": 32,
      "position": "MID",
      "rating": 72,
      "club": "Stoke City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Um Ji-Sung",
      "age": 30,
      "position": "MID",
      "rating": 70,
      "club": "Swansea City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hwang Hee-Chan",
      "age": 29,
      "position": "MID",
      "rating": 82,
      "club": "Wolverhampton",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lee Dong-Gyeong",
      "age": 23,
      "position": "MID",
      "rating": 71,
      "club": "Ulsan HD",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lee Jae-Sung",
      "age": 27,
      "position": "MID",
      "rating": 73,
      "club": "Mainz",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lee Kang-In",
      "age": 31,
      "position": "MID",
      "rating": 83,
      "club": "Paris Saint-Germain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Oh Hyun-Kyu",
      "age": 22,
      "position": "FWD",
      "rating": 83,
      "club": "Besiktas",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Son Heung-Min",
      "age": 24,
      "position": "FWD",
      "rating": 87,
      "club": "LAFC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Cho Kyu-Sung",
      "age": 22,
      "position": "FWD",
      "rating": 73,
      "club": "Midtjylland",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "RSA": [
    {
      "name": "Ronwen Williams",
      "age": 24,
      "position": "GK",
      "rating": 72,
      "club": "Mamelodi Sundowns",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ricardo Goss",
      "age": 30,
      "position": "GK",
      "rating": 66,
      "club": "Mamelodi Sundowns",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sipho Chaine",
      "age": 25,
      "position": "GK",
      "rating": 66,
      "club": "Orlando Pirates",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Khuliso Mudau",
      "age": 31,
      "position": "DEF",
      "rating": 71,
      "club": "Mamelodi Sundowns",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nkosinathi Sibisi",
      "age": 27,
      "position": "DEF",
      "rating": 71,
      "club": "Orlando Pirates",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ime Okon",
      "age": 32,
      "position": "DEF",
      "rating": 67,
      "club": "Hannover 96",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Khulumani Ndamane",
      "age": 28,
      "position": "DEF",
      "rating": 69,
      "club": "Mamelodi Sundowns",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Aubrey Modiba",
      "age": 29,
      "position": "DEF",
      "rating": 71,
      "club": "Mamelodi Sundowns",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Samukelo Kabini",
      "age": 26,
      "position": "DEF",
      "rating": 65,
      "club": "Molde",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Thabang Matuludi",
      "age": 25,
      "position": "DEF",
      "rating": 65,
      "club": "Polokwane City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Olwethu Makhanya",
      "age": 30,
      "position": "DEF",
      "rating": 68,
      "club": "Philadelphia Union",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kamgogelo Sebelebele",
      "age": 33,
      "position": "DEF",
      "rating": 66,
      "club": "Orlando Pirates",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Bradley Cross",
      "age": 28,
      "position": "DEF",
      "rating": 68,
      "club": "Kaizer Chiefs",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mbekezeli Mbokazi",
      "age": 28,
      "position": "DEF",
      "rating": 68,
      "club": "Chicago Fire",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Teboho Mokoena",
      "age": 24,
      "position": "MID",
      "rating": 73,
      "club": "Mamelodi Sundowns",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Thalente Mbatha",
      "age": 29,
      "position": "MID",
      "rating": 67,
      "club": "Orlando Pirates",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yaya Sithole",
      "age": 22,
      "position": "MID",
      "rating": 69,
      "club": "Tondela",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jayden Adams",
      "age": 21,
      "position": "MID",
      "rating": 72,
      "club": "Mamelodi Sundowns",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Oswin Appollis",
      "age": 21,
      "position": "FWD",
      "rating": 69,
      "club": "Orlando Pirates",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Iqraam Rayners",
      "age": 21,
      "position": "FWD",
      "rating": 71,
      "club": "Mamelodi Sundowns",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tshepang Moremi",
      "age": 29,
      "position": "FWD",
      "rating": 72,
      "club": "Orlando Pirates",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Relebohile Mofokeng",
      "age": 28,
      "position": "FWD",
      "rating": 67,
      "club": "Orlando Pirates",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Evidence Makgopa",
      "age": 25,
      "position": "FWD",
      "rating": 64,
      "club": "Orlando Pirates",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Themba Zwane",
      "age": 28,
      "position": "FWD",
      "rating": 67,
      "club": "Mamelodi Sundowns",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lyle Foster",
      "age": 27,
      "position": "FWD",
      "rating": 67,
      "club": "Burnley",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Thapelo Maseko",
      "age": 27,
      "position": "FWD",
      "rating": 66,
      "club": "AEL Limassol",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "CZE": [
    {
      "name": "Lukas Hornicek",
      "age": 24,
      "position": "GK",
      "rating": 72,
      "club": "Braga",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Martin Jedlicka",
      "age": 34,
      "position": "GK",
      "rating": 64,
      "club": "Banik Ostrava",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Anton\u00edn Kinsky",
      "age": 36,
      "position": "GK",
      "rating": 68,
      "club": "Tottenham",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jan Koutny",
      "age": 36,
      "position": "GK",
      "rating": 66,
      "club": "Sigma Olomouc",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Matej Kovar",
      "age": 25,
      "position": "GK",
      "rating": 66,
      "club": "PSV Eindhoven",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jakub Markovic",
      "age": 30,
      "position": "GK",
      "rating": 66,
      "club": "Slavia Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jindrich Stanek",
      "age": 31,
      "position": "GK",
      "rating": 65,
      "club": "Slavia Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Vladim\u00edr Coufal",
      "age": 33,
      "position": "DEF",
      "rating": 68,
      "club": "TSG Hoffenheim",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "David Doud\u011bra",
      "age": 26,
      "position": "DEF",
      "rating": 71,
      "club": "Slavia Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mat\u011bj Hada\u0161",
      "age": 34,
      "position": "DEF",
      "rating": 70,
      "club": "Sigma Olomouc",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tom\u00e1\u0161 Hole\u0161",
      "age": 30,
      "position": "DEF",
      "rating": 67,
      "club": "Slavia Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Robin Hran\u00e1\u010d",
      "age": 32,
      "position": "DEF",
      "rating": 66,
      "club": "TSG Hoffenheim",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Chaloupek",
      "age": 32,
      "position": "DEF",
      "rating": 66,
      "club": "Slavia Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "V\u00e1clav Jemelka",
      "age": 31,
      "position": "DEF",
      "rating": 68,
      "club": "Viktoria Plzen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "David Jur\u00e1sek",
      "age": 24,
      "position": "DEF",
      "rating": 65,
      "club": "Slavia Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ladislav Krej\u010d\u00ed",
      "age": 34,
      "position": "DEF",
      "rating": 66,
      "club": "Wolverhampton Wanderers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Karel Sp\u00e1\u010dil",
      "age": 30,
      "position": "DEF",
      "rating": 65,
      "club": "Viktoria Plzen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Adam \u0160ev\u00ednsk\u00fd",
      "age": 22,
      "position": "DEF",
      "rating": 68,
      "club": "Sparta Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Martin Vit\u00edk",
      "age": 27,
      "position": "DEF",
      "rating": 68,
      "club": "Bologna",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tom\u00e1\u0161 Vl\u010dek",
      "age": 22,
      "position": "DEF",
      "rating": 67,
      "club": "Slavia Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jaroslav Zelen\u00fd",
      "age": 27,
      "position": "DEF",
      "rating": 64,
      "club": "Sparta Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "David Zima",
      "age": 25,
      "position": "DEF",
      "rating": 66,
      "club": "Slavia Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lukas Ambros",
      "age": 24,
      "position": "MID",
      "rating": 68,
      "club": "Gornik Zabrze",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Michal Beran",
      "age": 22,
      "position": "MID",
      "rating": 70,
      "club": "Sigma Olomouc",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Pavel Bucha",
      "age": 32,
      "position": "MID",
      "rating": 66,
      "club": "FC Cincinnati",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Luk\u00e1s Cerv",
      "age": 22,
      "position": "MID",
      "rating": 69,
      "club": "Viktoria Plzen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Krystof Danek",
      "age": 33,
      "position": "MID",
      "rating": 68,
      "club": "LASK Linz",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Vladimir Darida",
      "age": 23,
      "position": "MID",
      "rating": 65,
      "club": "Hradec Kralove",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Patrik Hellebrand",
      "age": 29,
      "position": "MID",
      "rating": 67,
      "club": "Gornik Zabrze",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Adam Karabec",
      "age": 25,
      "position": "MID",
      "rating": 65,
      "club": "Lyon",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ondrej Kricfalu\u0161i",
      "age": 30,
      "position": "MID",
      "rating": 68,
      "club": "Banik Ostrava",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tom\u00e1\u0161 Ladra",
      "age": 24,
      "position": "MID",
      "rating": 67,
      "club": "Viktoria Plzen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "David Planka",
      "age": 33,
      "position": "MID",
      "rating": 68,
      "club": "Banik Ostrava",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Luk\u00e1s Provod",
      "age": 32,
      "position": "MID",
      "rating": 65,
      "club": "Slavia Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mat\u011bj Ryne\u0161",
      "age": 27,
      "position": "MID",
      "rating": 66,
      "club": "Sparta Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lukas Sad\u00edlek",
      "age": 28,
      "position": "MID",
      "rating": 66,
      "club": "Gornik Zabrze",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Michal Sad\u00edlek",
      "age": 28,
      "position": "MID",
      "rating": 68,
      "club": "Slavia Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hugo Soch\u016frek",
      "age": 24,
      "position": "MID",
      "rating": 64,
      "club": "Sparta Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alexandr Sojka",
      "age": 22,
      "position": "MID",
      "rating": 65,
      "club": "Viktoria Plzen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tom\u00e1\u0161 Sou\u010dek",
      "age": 21,
      "position": "MID",
      "rating": 66,
      "club": "West Ham",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Pavel \u0160ulc",
      "age": 29,
      "position": "MID",
      "rating": 68,
      "club": "Lyon",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Denis Vi\u0161insk\u00fd",
      "age": 30,
      "position": "MID",
      "rating": 65,
      "club": "Viktoria Plzen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Adam Hlo\u017eek",
      "age": 19,
      "position": "FWD",
      "rating": 71,
      "club": "TSG Hoffenheim",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tom\u00e1\u0161 Chor\u00fd",
      "age": 30,
      "position": "FWD",
      "rating": 66,
      "club": "Slavia Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mojm\u00edr Chytil",
      "age": 19,
      "position": "FWD",
      "rating": 71,
      "club": "Slavia Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Christophe Kabongo",
      "age": 20,
      "position": "FWD",
      "rating": 65,
      "club": "Mlada Boleslav",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jan Kliment",
      "age": 32,
      "position": "FWD",
      "rating": 64,
      "club": "Sigma Olomouc",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jan Kuchta",
      "age": 20,
      "position": "FWD",
      "rating": 66,
      "club": "Sparta Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Vasil Ku\u0161ej",
      "age": 22,
      "position": "FWD",
      "rating": 68,
      "club": "Slavia Prague",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ond\u0159ej Mih\u00e1lik",
      "age": 29,
      "position": "FWD",
      "rating": 66,
      "club": "Hradec Kralove",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Vojt\u011bch Patr\u00e1k",
      "age": 22,
      "position": "FWD",
      "rating": 67,
      "club": "Pardubice",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "V\u00e1clav Sejk",
      "age": 21,
      "position": "FWD",
      "rating": 68,
      "club": "Sigma Olomouc",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Patrik Schick",
      "age": 28,
      "position": "FWD",
      "rating": 68,
      "club": "Bayer Leverkusen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Matej Vydra",
      "age": 22,
      "position": "FWD",
      "rating": 67,
      "club": "Viktoria Plzen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "CAN": [
    {
      "name": "Dayne St. Clair",
      "age": 31,
      "position": "GK",
      "rating": 72,
      "club": "Inter Miami",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Maxime Cr\u00e9peau",
      "age": 27,
      "position": "GK",
      "rating": 67,
      "club": "Orlando City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Owen Goodman",
      "age": 25,
      "position": "GK",
      "rating": 64,
      "club": "Barnsley",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mo\u00efse Bombito",
      "age": 28,
      "position": "DEF",
      "rating": 78,
      "club": "Nice",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Derek Cornelius",
      "age": 28,
      "position": "DEF",
      "rating": 68,
      "club": "Rangers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alphonso Davies",
      "age": 29,
      "position": "DEF",
      "rating": 86,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Luc De Fougerolles",
      "age": 33,
      "position": "DEF",
      "rating": 72,
      "club": "FCV Dender",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alistair Johnston",
      "age": 32,
      "position": "DEF",
      "rating": 66,
      "club": "Celtic",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alfie Jones",
      "age": 22,
      "position": "DEF",
      "rating": 64,
      "club": "Middlesbrough",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Richie Laryea",
      "age": 33,
      "position": "DEF",
      "rating": 67,
      "club": "Toronto FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Niko Sigur",
      "age": 34,
      "position": "DEF",
      "rating": 66,
      "club": "Hajduk Split",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Joel Waterman",
      "age": 25,
      "position": "DEF",
      "rating": 64,
      "club": "Chicago Fire",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ali Ahmed",
      "age": 24,
      "position": "MID",
      "rating": 71,
      "club": "Norwich City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tajon Buchanan",
      "age": 28,
      "position": "MID",
      "rating": 70,
      "club": "Villarreal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mathieu Choini\u00e8re",
      "age": 27,
      "position": "MID",
      "rating": 67,
      "club": "LAFC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Stephen Eust\u00e1quio",
      "age": 25,
      "position": "MID",
      "rating": 67,
      "club": "LAFC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marcelo Flores",
      "age": 24,
      "position": "MID",
      "rating": 67,
      "club": "Tigres UANL",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Isma\u00ebl Kon\u00e9",
      "age": 28,
      "position": "MID",
      "rating": 64,
      "club": "Sassuolo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Liam Millar",
      "age": 22,
      "position": "MID",
      "rating": 68,
      "club": "Hull City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jonathan Osorio",
      "age": 31,
      "position": "MID",
      "rating": 64,
      "club": "Toronto FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nathan Saliba",
      "age": 21,
      "position": "MID",
      "rating": 68,
      "club": "Anderlecht",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jacob Shaffelburg",
      "age": 33,
      "position": "MID",
      "rating": 64,
      "club": "LAFC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jonathan David",
      "age": 21,
      "position": "FWD",
      "rating": 71,
      "club": "Juventus",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Promise David",
      "age": 26,
      "position": "FWD",
      "rating": 69,
      "club": "Royale-Union Saint Gilloise",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Cyle Larin",
      "age": 22,
      "position": "FWD",
      "rating": 69,
      "club": "Southampton",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tani Oluwaseyi",
      "age": 33,
      "position": "FWD",
      "rating": 67,
      "club": "Villarreal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "SUI": [
    {
      "name": "Gregor Kobel",
      "age": 26,
      "position": "GK",
      "rating": 73,
      "club": "Borussia Dortmund",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yvon Mvogo",
      "age": 24,
      "position": "GK",
      "rating": 73,
      "club": "Lorient",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marvin Keller",
      "age": 28,
      "position": "GK",
      "rating": 73,
      "club": "Young Boys",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Manuel Akanji",
      "age": 26,
      "position": "DEF",
      "rating": 82,
      "club": "Inter Milan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nico Elvedi",
      "age": 33,
      "position": "DEF",
      "rating": 76,
      "club": "Borussia M\u00f6nchengladbach",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ricardo Rodriguez",
      "age": 34,
      "position": "DEF",
      "rating": 92,
      "club": "Real Betis",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Silvan Widmer",
      "age": 32,
      "position": "DEF",
      "rating": 77,
      "club": "Mainz",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Miro Muheim",
      "age": 29,
      "position": "DEF",
      "rating": 78,
      "club": "Hamburger SV",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Aur\u00e8le Amenda",
      "age": 25,
      "position": "DEF",
      "rating": 71,
      "club": "Eintracht Frankfurt",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Eray C\u00f6mert",
      "age": 25,
      "position": "DEF",
      "rating": 72,
      "club": "Valencia",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Luca Jaquez",
      "age": 31,
      "position": "DEF",
      "rating": 70,
      "club": "Stuttgart",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Granit Xhaka",
      "age": 21,
      "position": "MID",
      "rating": 83,
      "club": "Sunderland",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Johan Manzambi",
      "age": 26,
      "position": "MID",
      "rating": 78,
      "club": "Freiburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Remo Freuler",
      "age": 21,
      "position": "MID",
      "rating": 73,
      "club": "Bologna",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Denis Zakaria",
      "age": 28,
      "position": "MID",
      "rating": 77,
      "club": "Monaco",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ardon Jashari",
      "age": 29,
      "position": "MID",
      "rating": 74,
      "club": "AC Milan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Djibril Sow",
      "age": 21,
      "position": "MID",
      "rating": 71,
      "club": "Sevilla",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Christian Fassnacht",
      "age": 22,
      "position": "MID",
      "rating": 74,
      "club": "Young Boys",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Michel Aebischer",
      "age": 22,
      "position": "MID",
      "rating": 71,
      "club": "Pisa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Fabian Rieder",
      "age": 22,
      "position": "MID",
      "rating": 74,
      "club": "Augsburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rub\u00e9n Vargas",
      "age": 27,
      "position": "MID",
      "rating": 71,
      "club": "Sevilla",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Breel Embolo",
      "age": 33,
      "position": "FWD",
      "rating": 76,
      "club": "Rennes",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Noah Okafor",
      "age": 22,
      "position": "FWD",
      "rating": 77,
      "club": "Leeds",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dan Ndoye",
      "age": 28,
      "position": "FWD",
      "rating": 77,
      "club": "Nottingham Forest",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Zeki Amdouni",
      "age": 28,
      "position": "FWD",
      "rating": 70,
      "club": "Burnley",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Cedric Itten",
      "age": 25,
      "position": "FWD",
      "rating": 70,
      "club": "Fortuna Dusseldorf",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "QAT": [
    {
      "name": "Shehab Elleithy",
      "age": 33,
      "position": "GK",
      "rating": 71,
      "club": "Al Shahania",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Salah Zakaria",
      "age": 32,
      "position": "GK",
      "rating": 68,
      "club": "Al Duhail",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Meshaal Barsham",
      "age": 28,
      "position": "GK",
      "rating": 66,
      "club": "Al Sadd",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mahmoud Abunada",
      "age": 34,
      "position": "GK",
      "rating": 65,
      "club": "Al Rayyan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Boualem Khoukhi",
      "age": 25,
      "position": "DEF",
      "rating": 73,
      "club": "Al Sadd",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Pedro Miguel",
      "age": 28,
      "position": "DEF",
      "rating": 68,
      "club": "Al Sadd",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sultan Al Brake",
      "age": 32,
      "position": "DEF",
      "rating": 67,
      "club": "Al Duhail",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tarek Salman",
      "age": 26,
      "position": "DEF",
      "rating": 71,
      "club": "Al Sadd",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Al-Hashmi Al-Hussain",
      "age": 27,
      "position": "DEF",
      "rating": 69,
      "club": "Al Arabi",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ayoub Al-Alawi",
      "age": 22,
      "position": "DEF",
      "rating": 64,
      "club": "Al Gharafa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Bassam Al-Rawi",
      "age": 31,
      "position": "DEF",
      "rating": 67,
      "club": "Al Duhail",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rayyan Al-Ali",
      "age": 23,
      "position": "DEF",
      "rating": 68,
      "club": "Al Gharafa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Issa Laye",
      "age": 30,
      "position": "DEF",
      "rating": 64,
      "club": "Al Arabi",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lucas Mendes",
      "age": 30,
      "position": "DEF",
      "rating": 65,
      "club": "Al Wakrah",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohammed Waad",
      "age": 24,
      "position": "DEF",
      "rating": 66,
      "club": "Al Shamal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Niall Mason",
      "age": 23,
      "position": "DEF",
      "rating": 66,
      "club": "Qatar",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ahmed Fathi",
      "age": 26,
      "position": "MID",
      "rating": 71,
      "club": "Al Arabi",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jassim Gaber",
      "age": 23,
      "position": "MID",
      "rating": 68,
      "club": "Al Rayyan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Assim Madibo",
      "age": 29,
      "position": "MID",
      "rating": 69,
      "club": "Al Wakrah",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Abdulaziz Hatem",
      "age": 25,
      "position": "MID",
      "rating": 71,
      "club": "Al Rayyan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Karim Boudiaf",
      "age": 33,
      "position": "MID",
      "rating": 68,
      "club": "Al Duhail",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohammed Mannai",
      "age": 21,
      "position": "MID",
      "rating": 68,
      "club": "Al Shamal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Homam Al-Amin",
      "age": 25,
      "position": "MID",
      "rating": 68,
      "club": "Cultural Leonesa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Almoez Ali",
      "age": 20,
      "position": "FWD",
      "rating": 78,
      "club": "Al Duhail",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Akram Afif",
      "age": 23,
      "position": "FWD",
      "rating": 67,
      "club": "Al Sadd",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tahsin Mohammed",
      "age": 33,
      "position": "FWD",
      "rating": 66,
      "club": "Al Duhail",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Edm\u00edlson Junior",
      "age": 30,
      "position": "FWD",
      "rating": 64,
      "club": "Al Duhail",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ahmed Al-Ganehi",
      "age": 21,
      "position": "FWD",
      "rating": 68,
      "club": "Al Gharafa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ahmed Alaa",
      "age": 23,
      "position": "FWD",
      "rating": 66,
      "club": "Al Rayyan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sebasti\u00e1n Soria",
      "age": 22,
      "position": "FWD",
      "rating": 68,
      "club": "Qatar",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hassan Al-Haydos",
      "age": 22,
      "position": "FWD",
      "rating": 66,
      "club": "Al Sadd",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mubarak Shannan",
      "age": 27,
      "position": "FWD",
      "rating": 66,
      "club": "Al Duhail",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohammed Muntari",
      "age": 23,
      "position": "FWD",
      "rating": 67,
      "club": "Al Gharafa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yusuf Abdurisag",
      "age": 20,
      "position": "FWD",
      "rating": 64,
      "club": "Al Wakrah",
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
      "rating": 63,
      "club": "St Pauli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Martin Zlomislic",
      "age": 24,
      "position": "GK",
      "rating": 57,
      "club": "Rijeka",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Osman Hadzikic",
      "age": 29,
      "position": "GK",
      "rating": 55,
      "club": "Slaven Belupo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sead Kolasinac",
      "age": 24,
      "position": "DEF",
      "rating": 72,
      "club": "Atalanta",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Amar Dedic",
      "age": 26,
      "position": "DEF",
      "rating": 63,
      "club": "Benfica",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nihad Mujakic",
      "age": 33,
      "position": "DEF",
      "rating": 59,
      "club": "Gaziantep",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nikola Katic",
      "age": 30,
      "position": "DEF",
      "rating": 61,
      "club": "Schalke 04",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tarik Muharemovic",
      "age": 28,
      "position": "DEF",
      "rating": 63,
      "club": "Sassuolo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Stjepan Radeljic",
      "age": 22,
      "position": "DEF",
      "rating": 59,
      "club": "Rijeka",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dennis Hadzikadunic",
      "age": 23,
      "position": "DEF",
      "rating": 55,
      "club": "Sampdoria",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nidal Celik",
      "age": 24,
      "position": "DEF",
      "rating": 60,
      "club": "Lens",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Amir Hadziahmetovic",
      "age": 21,
      "position": "MID",
      "rating": 68,
      "club": "Hull City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ivan Sunjic",
      "age": 26,
      "position": "MID",
      "rating": 64,
      "club": "Pafos",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ivan Basic",
      "age": 29,
      "position": "MID",
      "rating": 62,
      "club": "Astana",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dzenis Burnic",
      "age": 27,
      "position": "MID",
      "rating": 59,
      "club": "Karlsruher SC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ermin Mahmic",
      "age": 21,
      "position": "MID",
      "rating": 56,
      "club": "Slovan Liberec",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Benjamin Tahirovic",
      "age": 26,
      "position": "MID",
      "rating": 57,
      "club": "Brondby",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Amar Memic",
      "age": 26,
      "position": "MID",
      "rating": 55,
      "club": "Viktoria Plzen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Armin Gigovic",
      "age": 31,
      "position": "MID",
      "rating": 56,
      "club": "Young Boys",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kerim Alajbegovic",
      "age": 31,
      "position": "MID",
      "rating": 56,
      "club": "RB Salzburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Esmir Bajraktarevic",
      "age": 26,
      "position": "MID",
      "rating": 55,
      "club": "PSV Eindhoven",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ermedin Demirovic",
      "age": 27,
      "position": "FWD",
      "rating": 72,
      "club": "VfB Stuttgart",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jovo Lukic",
      "age": 25,
      "position": "FWD",
      "rating": 64,
      "club": "Universitatea Cluj",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Samed Bazdar",
      "age": 30,
      "position": "FWD",
      "rating": 62,
      "club": "Jagiellonia Bialystok",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Haris Tabakovic",
      "age": 33,
      "position": "FWD",
      "rating": 56,
      "club": "Borussia Moenchengladbach",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Edin Dzeko",
      "age": 32,
      "position": "FWD",
      "rating": 56,
      "club": "Schalke 04",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "BRA": [
    {
      "name": "Alisson",
      "age": 36,
      "position": "GK",
      "rating": 81,
      "club": "Liverpool",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Weverton",
      "age": 30,
      "position": "GK",
      "rating": 77,
      "club": "Gr\u00eamio",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alex Sandro",
      "age": 24,
      "position": "DEF",
      "rating": 82,
      "club": "Flamengo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Bremer",
      "age": 34,
      "position": "DEF",
      "rating": 82,
      "club": "Juventus",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Danilo",
      "age": 34,
      "position": "DEF",
      "rating": 83,
      "club": "Flamengo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Douglas Santos",
      "age": 26,
      "position": "DEF",
      "rating": 81,
      "club": "Zenit St. Petersburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gabriel Magalh\u00e3es",
      "age": 34,
      "position": "DEF",
      "rating": 81,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "L\u00e9o Pereira",
      "age": 28,
      "position": "DEF",
      "rating": 76,
      "club": "Flamengo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marquinhos",
      "age": 29,
      "position": "DEF",
      "rating": 76,
      "club": "Paris Saint-Germain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Roger Iba\u00f1ez",
      "age": 25,
      "position": "DEF",
      "rating": 77,
      "club": "Al Ahli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Wesley",
      "age": 27,
      "position": "DEF",
      "rating": 79,
      "club": "AS Roma",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Bruno Guimar\u00e3es",
      "age": 33,
      "position": "MID",
      "rating": 86,
      "club": "Newcastle United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Casemiro",
      "age": 24,
      "position": "MID",
      "rating": 81,
      "club": "Manchester United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Danilo Santos",
      "age": 31,
      "position": "MID",
      "rating": 80,
      "club": "Botafogo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Fabinho",
      "age": 27,
      "position": "MID",
      "rating": 81,
      "club": "Al Ittihad",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lucas Paquet\u00e1",
      "age": 25,
      "position": "MID",
      "rating": 78,
      "club": "Flamengo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Endrick",
      "age": 31,
      "position": "FWD",
      "rating": 83,
      "club": "Lyon",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gabriel Martinelli",
      "age": 24,
      "position": "FWD",
      "rating": 82,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Igor Thiago",
      "age": 25,
      "position": "FWD",
      "rating": 84,
      "club": "Brentford",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Luiz Henrique",
      "age": 24,
      "position": "FWD",
      "rating": 80,
      "club": "Zenit St. Petersburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Matheus Cunha",
      "age": 20,
      "position": "FWD",
      "rating": 76,
      "club": "Manchester United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Neymar",
      "age": 21,
      "position": "FWD",
      "rating": 85,
      "club": "Santos",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Raphinha",
      "age": 23,
      "position": "FWD",
      "rating": 80,
      "club": "Barcelona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rayan",
      "age": 20,
      "position": "FWD",
      "rating": 76,
      "club": "Bournemouth",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Vin\u00edcius J\u00fanior",
      "age": 25,
      "position": "FWD",
      "rating": 91,
      "club": "Real Madrid",
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
      "rating": 75,
      "club": "Al Hilal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Munir El Kajoui",
      "age": 30,
      "position": "GK",
      "rating": 72,
      "club": "RS Berkane",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Reda Tagnaouti",
      "age": 32,
      "position": "GK",
      "rating": 74,
      "club": "AS Far",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Noussair Mazraoui",
      "age": 28,
      "position": "DEF",
      "rating": 76,
      "club": "Manchester United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Anass Salah-Eddine",
      "age": 25,
      "position": "DEF",
      "rating": 77,
      "club": "PSV Eindhoven",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Youssef Belammari",
      "age": 22,
      "position": "DEF",
      "rating": 75,
      "club": "Al Ahly",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Achraf Hakimi",
      "age": 28,
      "position": "DEF",
      "rating": 87,
      "club": "Paris Saint-Germain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Zakaria El Ouahdi",
      "age": 30,
      "position": "DEF",
      "rating": 73,
      "club": "Racing Genk",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Chadi Riad",
      "age": 32,
      "position": "DEF",
      "rating": 74,
      "club": "Crystal Palace",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nayef Aguerd",
      "age": 27,
      "position": "DEF",
      "rating": 71,
      "club": "Marseille",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Redouane Halhal",
      "age": 23,
      "position": "DEF",
      "rating": 73,
      "club": "KV Mechelen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Issa Diop",
      "age": 31,
      "position": "DEF",
      "rating": 72,
      "club": "Fulham",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Samir El Mourabet",
      "age": 31,
      "position": "MID",
      "rating": 80,
      "club": "Strasbourg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ayyoub Bouaddi",
      "age": 32,
      "position": "MID",
      "rating": 73,
      "club": "Lille",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Neil El Aynaoui",
      "age": 29,
      "position": "MID",
      "rating": 75,
      "club": "AS Roma",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sofyan Amrabat",
      "age": 31,
      "position": "MID",
      "rating": 75,
      "club": "Real Betis",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Azzedine Ounahi",
      "age": 26,
      "position": "MID",
      "rating": 73,
      "club": "Girona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Bilal El Khannouss",
      "age": 32,
      "position": "MID",
      "rating": 73,
      "club": "Stuttgart",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ismael Saibari",
      "age": 29,
      "position": "MID",
      "rating": 72,
      "club": "PSV Eindhoven",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Abde Ezzalzouli",
      "age": 22,
      "position": "FWD",
      "rating": 77,
      "club": "Real Betis",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Chemsdine Talbi",
      "age": 29,
      "position": "FWD",
      "rating": 76,
      "club": "Sunderland",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Soufiane Rahimi",
      "age": 29,
      "position": "FWD",
      "rating": 76,
      "club": "Al Ain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ayoub El Kaabi",
      "age": 28,
      "position": "FWD",
      "rating": 71,
      "club": "Olympiacos",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Brahim D\u00edaz",
      "age": 23,
      "position": "FWD",
      "rating": 74,
      "club": "Real Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gessime Yassine",
      "age": 27,
      "position": "FWD",
      "rating": 73,
      "club": "Strasbourg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ayoube Amaimouni",
      "age": 23,
      "position": "FWD",
      "rating": 70,
      "club": "Eintracht Frankfurt",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "SCO": [
    {
      "name": "Craig Gordon",
      "age": 27,
      "position": "GK",
      "rating": 68,
      "club": "Hearts",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Angus Gunn",
      "age": 36,
      "position": "GK",
      "rating": 67,
      "club": "Nottingham Forest",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Liam Kelly",
      "age": 33,
      "position": "GK",
      "rating": 68,
      "club": "Rangers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Grant Hanley",
      "age": 27,
      "position": "DEF",
      "rating": 78,
      "club": "Hibernian",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jack Hendry",
      "age": 29,
      "position": "DEF",
      "rating": 69,
      "club": "Al Etiffaq",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Aaron Hickey",
      "age": 32,
      "position": "DEF",
      "rating": 69,
      "club": "Brentford",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dom Hyam",
      "age": 30,
      "position": "DEF",
      "rating": 67,
      "club": "Wrexham",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Scott McKenna",
      "age": 34,
      "position": "DEF",
      "rating": 69,
      "club": "Dinamo Zagreb",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nathan Patterson",
      "age": 32,
      "position": "DEF",
      "rating": 65,
      "club": "Everton",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Anthony Ralston",
      "age": 26,
      "position": "DEF",
      "rating": 64,
      "club": "Celtic",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Andy Robertson",
      "age": 32,
      "position": "DEF",
      "rating": 68,
      "club": "Liverpool",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "John Souttar",
      "age": 27,
      "position": "DEF",
      "rating": 68,
      "club": "Rangers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kieran Tierney",
      "age": 34,
      "position": "DEF",
      "rating": 64,
      "club": "Celtic",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ryan Christie",
      "age": 31,
      "position": "MID",
      "rating": 71,
      "club": "Bournemouth",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Finlay Curtis",
      "age": 24,
      "position": "MID",
      "rating": 68,
      "club": "Kilmarnock",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lewis Ferguson",
      "age": 24,
      "position": "MID",
      "rating": 72,
      "club": "Bologna",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ben Gannon-Doak",
      "age": 21,
      "position": "MID",
      "rating": 67,
      "club": "Bournemouth",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Billy Gilmour",
      "age": 24,
      "position": "MID",
      "rating": 64,
      "club": "Napoli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "John McGinn",
      "age": 30,
      "position": "MID",
      "rating": 67,
      "club": "Aston Villa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kenny McLean",
      "age": 28,
      "position": "MID",
      "rating": 64,
      "club": "Norwich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Scott McTominay",
      "age": 31,
      "position": "MID",
      "rating": 67,
      "club": "Napoli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ch\u00e9 Adams",
      "age": 22,
      "position": "FWD",
      "rating": 77,
      "club": "Torino",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lyndon Dykes",
      "age": 30,
      "position": "FWD",
      "rating": 71,
      "club": "Charlton Athletic",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "George Hirst",
      "age": 26,
      "position": "FWD",
      "rating": 69,
      "club": "Ipswich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lawrence Shankland",
      "age": 22,
      "position": "FWD",
      "rating": 67,
      "club": "Hearts",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ross Stewart",
      "age": 29,
      "position": "FWD",
      "rating": 65,
      "club": "Southampton",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "HAI": [
    {
      "name": "Johny Placide",
      "age": 24,
      "position": "GK",
      "rating": 63,
      "club": "Bastia",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alexandre Pierre",
      "age": 36,
      "position": "GK",
      "rating": 55,
      "club": "Sochaux",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Josue Duverger",
      "age": 27,
      "position": "GK",
      "rating": 58,
      "club": "Cosmos Koblenz",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Carlens Arcus",
      "age": 34,
      "position": "DEF",
      "rating": 62,
      "club": "Angers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Wilguens Paugain",
      "age": 30,
      "position": "DEF",
      "rating": 63,
      "club": "Zulte Waregem",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Duke Lacroix",
      "age": 22,
      "position": "DEF",
      "rating": 61,
      "club": "Colorado Springs Switchbacks",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Martin Exp\u00e9rience",
      "age": 25,
      "position": "DEF",
      "rating": 62,
      "club": "Nancy",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jean-Ke\u0301vin Duverne",
      "age": 23,
      "position": "DEF",
      "rating": 64,
      "club": "Gent",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ricardo Ad\u00e9",
      "age": 24,
      "position": "DEF",
      "rating": 58,
      "club": "LDU Quito",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hannes Delcroix",
      "age": 32,
      "position": "DEF",
      "rating": 58,
      "club": "Lugano",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Keeto Thermoncy",
      "age": 30,
      "position": "DEF",
      "rating": 59,
      "club": "Young Boys",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Carl Fred Sainte\u0301",
      "age": 26,
      "position": "MID",
      "rating": 69,
      "club": "El Paso Locomotive",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Leverton Pierre",
      "age": 28,
      "position": "MID",
      "rating": 64,
      "club": "Vizela",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Danley Jean Jacques",
      "age": 32,
      "position": "MID",
      "rating": 62,
      "club": "Philadelphia Union",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jean-Ricner Bellegarde",
      "age": 27,
      "position": "MID",
      "rating": 62,
      "club": "Wolverhampton Wanderers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Woodensky Pierre",
      "age": 28,
      "position": "MID",
      "rating": 59,
      "club": "Violette",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dominique Simon",
      "age": 32,
      "position": "MID",
      "rating": 56,
      "club": "FC Tatran Pres\u030cov",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Don Deedson Louicius",
      "age": 26,
      "position": "FWD",
      "rating": 67,
      "club": "FC Dallas",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Josu\u00e9 Casimir",
      "age": 31,
      "position": "FWD",
      "rating": 60,
      "club": "Auxerre",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Derrick Etienne",
      "age": 32,
      "position": "FWD",
      "rating": 59,
      "club": "Toronto FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ruben Providence",
      "age": 23,
      "position": "FWD",
      "rating": 60,
      "club": "Almere",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Duckens Nazon",
      "age": 26,
      "position": "FWD",
      "rating": 59,
      "club": "Esteghlal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Frantzdy Pierrot",
      "age": 22,
      "position": "FWD",
      "rating": 60,
      "club": "C\u0327aykur Rizespor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Wilson Isidor",
      "age": 26,
      "position": "FWD",
      "rating": 57,
      "club": "Sunderland",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yassin Fortune\u0301",
      "age": 30,
      "position": "FWD",
      "rating": 55,
      "club": "Vizela",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lenny Joseph",
      "age": 22,
      "position": "FWD",
      "rating": 57,
      "club": "Ferencva\u0301ros",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "USA": [
    {
      "name": "Chris Brady",
      "age": 29,
      "position": "GK",
      "rating": 75,
      "club": "Chicago Fire",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Matt Freese",
      "age": 32,
      "position": "GK",
      "rating": 72,
      "club": "New York City FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Matt Turner",
      "age": 26,
      "position": "GK",
      "rating": 70,
      "club": "New England Revolution",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Max Arfsten",
      "age": 25,
      "position": "DEF",
      "rating": 77,
      "club": "Columbus Crew",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sergi\u00f1o Dest",
      "age": 33,
      "position": "DEF",
      "rating": 76,
      "club": "PSV Eindhoven",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alex Freeman",
      "age": 33,
      "position": "DEF",
      "rating": 74,
      "club": "Villarreal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mark McKenzie",
      "age": 23,
      "position": "DEF",
      "rating": 74,
      "club": "Toulouse",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tim Ream",
      "age": 28,
      "position": "DEF",
      "rating": 76,
      "club": "Charlotte FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Chris Richards",
      "age": 30,
      "position": "DEF",
      "rating": 72,
      "club": "Crystal Palace",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Antonee Robinson",
      "age": 28,
      "position": "DEF",
      "rating": 73,
      "club": "Fulham",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Miles Robinson",
      "age": 25,
      "position": "DEF",
      "rating": 70,
      "club": "FC Cincinnati",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Joe Scally",
      "age": 28,
      "position": "DEF",
      "rating": 73,
      "club": "Borussia M\u00f6nchengladbach",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Auston Trusty",
      "age": 33,
      "position": "DEF",
      "rating": 74,
      "club": "Celtic",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tyler Adams",
      "age": 33,
      "position": "MID",
      "rating": 75,
      "club": "AFC Bournemouth , Sebastian Berhalter ( Vancouver Whitecaps",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Weston McKennie",
      "age": 27,
      "position": "MID",
      "rating": 77,
      "club": "Juventus",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Cristian Roldan",
      "age": 21,
      "position": "MID",
      "rating": 76,
      "club": "Seattle Sounders",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Brenden Aaronson",
      "age": 25,
      "position": "MID",
      "rating": 75,
      "club": "Leeds United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Malik Tillman",
      "age": 27,
      "position": "MID",
      "rating": 73,
      "club": "Bayer Leverkusen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tim Weah",
      "age": 32,
      "position": "MID",
      "rating": 74,
      "club": "Marseille",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alejandro Zendejas",
      "age": 33,
      "position": "MID",
      "rating": 74,
      "club": "Club Am\u00e9rica",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Christian Pulisic",
      "age": 33,
      "position": "FWD",
      "rating": 84,
      "club": "AC Milan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gio Reyna",
      "age": 26,
      "position": "FWD",
      "rating": 74,
      "club": "Borussia M\u00f6nchengladbach",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Folarin Balogun",
      "age": 23,
      "position": "FWD",
      "rating": 74,
      "club": "AS Monaco",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ricardo Pepi",
      "age": 26,
      "position": "FWD",
      "rating": 73,
      "club": "PSV Eindhoven",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Haji Wright",
      "age": 25,
      "position": "FWD",
      "rating": 70,
      "club": "Coventry City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "PAR": [
    {
      "name": "Roberto Fern\u00e1ndez",
      "age": 34,
      "position": "GK",
      "rating": 68,
      "club": "Cerro Porte\u00f1o",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Orlando Gill",
      "age": 35,
      "position": "GK",
      "rating": 67,
      "club": "San Lorenzo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gast\u00f3n Olveira",
      "age": 37,
      "position": "GK",
      "rating": 65,
      "club": "Olimpia",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Carlos Coronel",
      "age": 26,
      "position": "GK",
      "rating": 67,
      "club": "Sao Paulo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Santiago Rojas",
      "age": 32,
      "position": "GK",
      "rating": 68,
      "club": "Nacional",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Juan Esp\u00ednola",
      "age": 30,
      "position": "GK",
      "rating": 64,
      "club": "Barracas Central",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gustavo G\u00f3mez",
      "age": 31,
      "position": "DEF",
      "rating": 77,
      "club": "Palmeiras",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "J\u00fanior Alonso",
      "age": 22,
      "position": "DEF",
      "rating": 71,
      "club": "Atletico Mineiro",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Fabi\u00e1n Balbuena",
      "age": 32,
      "position": "DEF",
      "rating": 66,
      "club": "Gremio",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Omar Alderete",
      "age": 24,
      "position": "DEF",
      "rating": 69,
      "club": "Sunderland",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Juan Caceres",
      "age": 29,
      "position": "DEF",
      "rating": 72,
      "club": "Dynamo Moscow",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Blas Riveros",
      "age": 22,
      "position": "DEF",
      "rating": 65,
      "club": "Cerro Porteno",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alan Benitez",
      "age": 28,
      "position": "DEF",
      "rating": 66,
      "club": "Libertad",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Agustin Sandez",
      "age": 25,
      "position": "DEF",
      "rating": 66,
      "club": "Rosario Central",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mateo Gamarra",
      "age": 27,
      "position": "DEF",
      "rating": 67,
      "club": "Cruzeiro",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Saul Salcedo",
      "age": 34,
      "position": "DEF",
      "rating": 66,
      "club": "Newell's Old Boys",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jose Canale",
      "age": 26,
      "position": "DEF",
      "rating": 67,
      "club": "Lanus",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Diego Le\u00f3n",
      "age": 26,
      "position": "DEF",
      "rating": 67,
      "club": "Manchester United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alexandro Maidana",
      "age": 29,
      "position": "DEF",
      "rating": 64,
      "club": "Talleres",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alcides Benitez",
      "age": 33,
      "position": "DEF",
      "rating": 64,
      "club": "Belgrano",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ronaldo Dejesus",
      "age": 22,
      "position": "DEF",
      "rating": 68,
      "club": "Lanus",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alan Nu\u00f1ez",
      "age": 25,
      "position": "DEF",
      "rating": 66,
      "club": "Nacional",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Miguel Almir\u00f3n",
      "age": 22,
      "position": "MID",
      "rating": 78,
      "club": "Atlanta United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Math\u00edas Villasanti",
      "age": 31,
      "position": "MID",
      "rating": 72,
      "club": "Gremio",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kaku",
      "age": 33,
      "position": "MID",
      "rating": 66,
      "club": "Al Ain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Andr\u00e9s Cubas",
      "age": 24,
      "position": "MID",
      "rating": 66,
      "club": "Vancouver Whitecaps",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ram\u00f3n Sosa",
      "age": 21,
      "position": "MID",
      "rating": 65,
      "club": "Palmeiras",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Diego G\u00f3mez",
      "age": 23,
      "position": "MID",
      "rating": 68,
      "club": "Brighton & Hove Albion",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dami\u00e1n Bobadilla",
      "age": 23,
      "position": "MID",
      "rating": 65,
      "club": "Sao Paulo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Braian Ojeda",
      "age": 31,
      "position": "MID",
      "rating": 67,
      "club": "Orlando City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mat\u00edas Galarza",
      "age": 30,
      "position": "MID",
      "rating": 64,
      "club": "Atlanta United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Robert Piris Da Motta",
      "age": 28,
      "position": "MID",
      "rating": 65,
      "club": "Cerro Porteno",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alvaro Campuzano",
      "age": 33,
      "position": "MID",
      "rating": 66,
      "club": "Libertad",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Diego Gonzalez",
      "age": 23,
      "position": "MID",
      "rating": 66,
      "club": "Atlas",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hugo Cuenca",
      "age": 30,
      "position": "MID",
      "rating": 68,
      "club": "Burgos",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mauricio Magalhaes",
      "age": 33,
      "position": "MID",
      "rating": 64,
      "club": "Palmeiras",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lucas Romero",
      "age": 25,
      "position": "MID",
      "rating": 65,
      "club": "Universidad de Chile",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Enso Gonz\u00e1lez",
      "age": 30,
      "position": "MID",
      "rating": 64,
      "club": "Wolverhampton Wanderers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ruben Lezcano",
      "age": 25,
      "position": "MID",
      "rating": 64,
      "club": "Olimpia",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Oscar Romero",
      "age": 29,
      "position": "FWD",
      "rating": 77,
      "club": "Huracan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Romero",
      "age": 25,
      "position": "FWD",
      "rating": 69,
      "club": "Boca Juniors",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Antonio Sanabria",
      "age": 22,
      "position": "FWD",
      "rating": 71,
      "club": "Cremonese",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Julio Enciso",
      "age": 28,
      "position": "FWD",
      "rating": 64,
      "club": "Strasbourg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gabriel Avalos",
      "age": 20,
      "position": "FWD",
      "rating": 65,
      "club": "Independiente",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Carlos Gonzalez",
      "age": 32,
      "position": "FWD",
      "rating": 66,
      "club": "Independiente del Valle",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alex Arce",
      "age": 31,
      "position": "FWD",
      "rating": 68,
      "club": "Independiente Rivadavia",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Adam Bareiro",
      "age": 31,
      "position": "FWD",
      "rating": 64,
      "club": "Boca Juniors",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lorenzo Melgarejo",
      "age": 31,
      "position": "FWD",
      "rating": 68,
      "club": "Libertad",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Isidro Pitta",
      "age": 24,
      "position": "FWD",
      "rating": 64,
      "club": "Red Bull Bragantino",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ronaldo Martinez",
      "age": 25,
      "position": "FWD",
      "rating": 68,
      "club": "Talleres",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gustavo Caballero",
      "age": 20,
      "position": "FWD",
      "rating": 66,
      "club": "Portsmouth",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Robert Morales",
      "age": 29,
      "position": "FWD",
      "rating": 68,
      "club": "UNAM",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Adrian Alcaraz",
      "age": 19,
      "position": "FWD",
      "rating": 66,
      "club": "Olimpia",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rodney Redes",
      "age": 32,
      "position": "FWD",
      "rating": 67,
      "club": "LDU Quito",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "AUS": [
    {
      "name": "Mathew Ryan",
      "age": 25,
      "position": "GK",
      "rating": 76,
      "club": "Levante",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Paul Izzo",
      "age": 29,
      "position": "GK",
      "rating": 73,
      "club": "Randers FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Patrick Beach",
      "age": 35,
      "position": "GK",
      "rating": 73,
      "club": "Melbourne City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jordan Bos",
      "age": 28,
      "position": "DEF",
      "rating": 77,
      "club": "Feyenoord Rotterdam",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Aziz Behich",
      "age": 33,
      "position": "DEF",
      "rating": 74,
      "club": "Melbourne City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Harry Souttar",
      "age": 32,
      "position": "DEF",
      "rating": 77,
      "club": "Leicester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alessandro Circati",
      "age": 31,
      "position": "DEF",
      "rating": 75,
      "club": "Parma",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lucas Herrington",
      "age": 34,
      "position": "DEF",
      "rating": 77,
      "club": "Colorado Rapids",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Cameron Burgess",
      "age": 29,
      "position": "DEF",
      "rating": 73,
      "club": "Swansea City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kai Trewin",
      "age": 33,
      "position": "DEF",
      "rating": 73,
      "club": "New York City FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Milos Degenek",
      "age": 26,
      "position": "DEF",
      "rating": 74,
      "club": "Apoel Nicosia",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jason Geria",
      "age": 25,
      "position": "DEF",
      "rating": 72,
      "club": "Albirex Niigata",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jacob Italiano",
      "age": 26,
      "position": "DEF",
      "rating": 70,
      "club": "Grazer AK",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jackson Irvine",
      "age": 24,
      "position": "MID",
      "rating": 82,
      "club": "St. Pauli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Aiden O'Neill",
      "age": 30,
      "position": "MID",
      "rating": 76,
      "club": "New York City FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Paul Okon Jr",
      "age": 31,
      "position": "MID",
      "rating": 77,
      "club": "Sydney FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Cameron Devlin",
      "age": 26,
      "position": "MID",
      "rating": 76,
      "club": "Heart of Midlothian",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Connor Metcalfe",
      "age": 26,
      "position": "FWD",
      "rating": 75,
      "club": "St. Pauli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mathew Leckie",
      "age": 21,
      "position": "FWD",
      "rating": 75,
      "club": "Melbourne City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nishan Velupillay",
      "age": 22,
      "position": "FWD",
      "rating": 76,
      "club": "Melbourne Victory",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Cristian Volpato",
      "age": 31,
      "position": "FWD",
      "rating": 72,
      "club": "Sassuolo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nestory Irankunda",
      "age": 24,
      "position": "FWD",
      "rating": 72,
      "club": "Watford",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Awer Mabil",
      "age": 33,
      "position": "FWD",
      "rating": 72,
      "club": "Castell\u00f3n",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ajdin Hrustic",
      "age": 30,
      "position": "FWD",
      "rating": 74,
      "club": "Heracles Almelo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohamed Toure",
      "age": 27,
      "position": "FWD",
      "rating": 72,
      "club": "Norwich City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tete Yengi",
      "age": 27,
      "position": "FWD",
      "rating": 70,
      "club": "Machida Zelvia",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "TUR": [
    {
      "name": "Ugurcan Cakir",
      "age": 25,
      "position": "GK",
      "rating": 74,
      "club": "Galatasaray",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mert Gunok",
      "age": 35,
      "position": "GK",
      "rating": 71,
      "club": "Fenerbahce",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Altay Bayindir",
      "age": 31,
      "position": "GK",
      "rating": 73,
      "club": "Man United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Muhammed Sengezer",
      "age": 36,
      "position": "GK",
      "rating": 74,
      "club": "Istanbul Basaksehir",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ersin Destanoglou",
      "age": 35,
      "position": "GK",
      "rating": 71,
      "club": "Besiktas",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Merih Demiral",
      "age": 32,
      "position": "DEF",
      "rating": 82,
      "club": "Al-Ahli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Zeki Celik",
      "age": 29,
      "position": "DEF",
      "rating": 78,
      "club": "AS Roma",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Caglar Soyuncu",
      "age": 34,
      "position": "DEF",
      "rating": 76,
      "club": "Fenerbahce",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mert Muldur",
      "age": 23,
      "position": "DEF",
      "rating": 73,
      "club": "Fenerbahce",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ferdi Kadioglu",
      "age": 25,
      "position": "DEF",
      "rating": 75,
      "club": "Brighton & Hove Albion",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ozan Kabak",
      "age": 33,
      "position": "DEF",
      "rating": 73,
      "club": "TSG Hoffenheim",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Abdulkerim Bardakci",
      "age": 26,
      "position": "DEF",
      "rating": 71,
      "club": "Galatasaray",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Eren Elmali",
      "age": 27,
      "position": "DEF",
      "rating": 74,
      "club": "Galatasaray",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Samet Akaydin",
      "age": 30,
      "position": "DEF",
      "rating": 73,
      "club": "Caykur Rizesport",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mustafa Eskihellac",
      "age": 27,
      "position": "DEF",
      "rating": 74,
      "club": "Trabzonspor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yusuf Akcicek",
      "age": 33,
      "position": "DEF",
      "rating": 73,
      "club": "Al-Hilal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ahmetcan Kaplan",
      "age": 27,
      "position": "DEF",
      "rating": 74,
      "club": "NEC Nijmegen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hakan Calhanoglou",
      "age": 32,
      "position": "MID",
      "rating": 80,
      "club": "Inter Milan, Kaan Ayhan (Galatasaray",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Orkun Kokcu",
      "age": 25,
      "position": "MID",
      "rating": 76,
      "club": "Besiktas",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ismail Yuksek",
      "age": 25,
      "position": "MID",
      "rating": 75,
      "club": "Fenerbahce",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Salih Ozcan",
      "age": 22,
      "position": "MID",
      "rating": 74,
      "club": "Borussia Dortmund",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Atakan Karazor",
      "age": 26,
      "position": "MID",
      "rating": 71,
      "club": "VfB Stuttgart",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Demir Ege Tiknaz",
      "age": 32,
      "position": "MID",
      "rating": 70,
      "club": "Besiktas",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kerem Akturkoglu",
      "age": 31,
      "position": "FWD",
      "rating": 83,
      "club": "Fenerbahce",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Irfan Can Kahveci",
      "age": 21,
      "position": "FWD",
      "rating": 78,
      "club": "Kasimpasa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Baris Apler Yilmaz",
      "age": 22,
      "position": "FWD",
      "rating": 74,
      "club": "Galatasaray",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Arda Guler",
      "age": 23,
      "position": "FWD",
      "rating": 73,
      "club": "Real Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kenan Yildiz",
      "age": 31,
      "position": "FWD",
      "rating": 74,
      "club": "Juventus",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yunus Akgun",
      "age": 28,
      "position": "FWD",
      "rating": 74,
      "club": "Galatasaray",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Oguz Aydin",
      "age": 20,
      "position": "FWD",
      "rating": 72,
      "club": "Fenerbahce",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Deniz Gul",
      "age": 23,
      "position": "FWD",
      "rating": 71,
      "club": "Porto",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yusuf Sari",
      "age": 24,
      "position": "FWD",
      "rating": 71,
      "club": "Basaksehir",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Can Uzun",
      "age": 23,
      "position": "FWD",
      "rating": 71,
      "club": "Eintracht Frankfurt",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Aral Simsir",
      "age": 30,
      "position": "FWD",
      "rating": 70,
      "club": "Midtjylland",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "GER": [
    {
      "name": "Oliver Baumann",
      "age": 26,
      "position": "GK",
      "rating": 77,
      "club": "Hoffenheim",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Manuel Neuer",
      "age": 24,
      "position": "GK",
      "rating": 72,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alexander N\u00fcbel",
      "age": 32,
      "position": "GK",
      "rating": 70,
      "club": "Stuttgart",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Waldemar Anton",
      "age": 33,
      "position": "DEF",
      "rating": 79,
      "club": "Borussia Dortmund",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nathaniel Brown",
      "age": 32,
      "position": "DEF",
      "rating": 74,
      "club": "Eintracht Frankfurt",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "David Raum",
      "age": 23,
      "position": "DEF",
      "rating": 76,
      "club": "RB Leipzig",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Antonio R\u00fcdiger",
      "age": 31,
      "position": "DEF",
      "rating": 73,
      "club": "Real Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nico Schlotterbeck",
      "age": 29,
      "position": "DEF",
      "rating": 75,
      "club": "Borussia Dortmund",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jonathan Tah",
      "age": 29,
      "position": "DEF",
      "rating": 73,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Malick Thiaw",
      "age": 24,
      "position": "DEF",
      "rating": 72,
      "club": "Newcastle",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Pascal Gross",
      "age": 25,
      "position": "MID",
      "rating": 75,
      "club": "Brighton",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Joshua Kimmich",
      "age": 22,
      "position": "MID",
      "rating": 76,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Felix Nmecha",
      "age": 27,
      "position": "MID",
      "rating": 73,
      "club": "Borussia Dortmund",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Aleksandar Pavlovic",
      "age": 22,
      "position": "MID",
      "rating": 76,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Angelo Stiller",
      "age": 31,
      "position": "MID",
      "rating": 74,
      "club": "Stuttgart",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Leon Goretzka",
      "age": 23,
      "position": "MID",
      "rating": 70,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Florian Wirtz",
      "age": 33,
      "position": "MID",
      "rating": 90,
      "club": "Liverpool",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jamie Leweling",
      "age": 25,
      "position": "MID",
      "rating": 74,
      "club": "Stuttgart",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Maximilian Beier",
      "age": 22,
      "position": "FWD",
      "rating": 76,
      "club": "Borussia Dortmund",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kai Havertz",
      "age": 27,
      "position": "FWD",
      "rating": 73,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lennart Karl",
      "age": 28,
      "position": "FWD",
      "rating": 76,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jamal Musiala",
      "age": 31,
      "position": "FWD",
      "rating": 89,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Leroy San\u00e9",
      "age": 22,
      "position": "FWD",
      "rating": 74,
      "club": "Galatasaray",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Deniz Undav",
      "age": 25,
      "position": "FWD",
      "rating": 74,
      "club": "Stuttgart",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nick Woltemade",
      "age": 33,
      "position": "FWD",
      "rating": 73,
      "club": "Newcastle",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "ECU": [
    {
      "name": "Hern\u00e1n Gal\u00edndez",
      "age": 28,
      "position": "GK",
      "rating": 76,
      "club": "Huracan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mois\u00e9s Ram\u00edrez",
      "age": 30,
      "position": "GK",
      "rating": 74,
      "club": "AE Kifisias",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gonzalo Valle",
      "age": 33,
      "position": "GK",
      "rating": 72,
      "club": "LDU Quito",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Willian Pacho",
      "age": 22,
      "position": "DEF",
      "rating": 84,
      "club": "Paris Saint-Germain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Piero Hincapi\u00e9",
      "age": 33,
      "position": "DEF",
      "rating": 77,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Joel Ord\u00f3\u00f1ez",
      "age": 34,
      "position": "DEF",
      "rating": 73,
      "club": "Club Brugge",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "F\u00e9lix Torres",
      "age": 32,
      "position": "DEF",
      "rating": 74,
      "club": "Internacional",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Pervis Estupi\u00f1\u00e1n",
      "age": 26,
      "position": "DEF",
      "rating": 74,
      "club": "AC Milan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yaimar Medina",
      "age": 24,
      "position": "DEF",
      "rating": 70,
      "club": "Racing Genk",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Preciado",
      "age": 24,
      "position": "DEF",
      "rating": 71,
      "club": "Atl\u00e9tico Mineiro",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jackson Porozo",
      "age": 23,
      "position": "DEF",
      "rating": 74,
      "club": "Club Tijuana",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alan Minda",
      "age": 21,
      "position": "MID",
      "rating": 77,
      "club": "Atl\u00e9tico Mineiro",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mois\u00e9s Caicedo",
      "age": 28,
      "position": "MID",
      "rating": 76,
      "club": "Chelsea",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jordy Alcivar",
      "age": 30,
      "position": "MID",
      "rating": 78,
      "club": "Independiente del Valle",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Denil Castillo",
      "age": 25,
      "position": "MID",
      "rating": 76,
      "club": "FC Midtjylland",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "John Yeboah",
      "age": 24,
      "position": "MID",
      "rating": 70,
      "club": "Venezia",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alan Franco",
      "age": 32,
      "position": "MID",
      "rating": 72,
      "club": "Atl\u00e9tico Mineiro",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Pedro Vite",
      "age": 32,
      "position": "MID",
      "rating": 72,
      "club": "Pumas UNAM",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kendry P\u00e1ez",
      "age": 22,
      "position": "MID",
      "rating": 73,
      "club": "River Plate",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nilson Angulo",
      "age": 25,
      "position": "MID",
      "rating": 71,
      "club": "Sunderland",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gonzalo Plata",
      "age": 31,
      "position": "MID",
      "rating": 74,
      "club": "Flamengo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kevin Rodr\u00edguez",
      "age": 25,
      "position": "FWD",
      "rating": 78,
      "club": "Union St.-Gilloise",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Anthony Valencia",
      "age": 27,
      "position": "FWD",
      "rating": 73,
      "club": "Antwerp",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Enner Valencia",
      "age": 29,
      "position": "FWD",
      "rating": 74,
      "club": "Pachuca",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jordy Caicedo",
      "age": 33,
      "position": "FWD",
      "rating": 71,
      "club": "Hurac\u00e1n",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jeremy Ar\u00e9valo",
      "age": 32,
      "position": "FWD",
      "rating": 72,
      "club": "VfB Stuttgart",
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
      "rating": 67,
      "club": "Rizespor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohamed Kon\u00e9",
      "age": 26,
      "position": "GK",
      "rating": 64,
      "club": "Charleroi",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alban Lafont",
      "age": 33,
      "position": "GK",
      "rating": 66,
      "club": "Panathinaikos",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Emmanuel Agbadou",
      "age": 26,
      "position": "DEF",
      "rating": 77,
      "club": "Be\u015fikta\u015f",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Cl\u00e9ment Akpa",
      "age": 23,
      "position": "DEF",
      "rating": 69,
      "club": "AJ Auxerre",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ousmane Diomande",
      "age": 33,
      "position": "DEF",
      "rating": 69,
      "club": "Sporting CP",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Guela Dou\u00e9",
      "age": 33,
      "position": "DEF",
      "rating": 68,
      "club": "Strasbourg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ghislain Konan",
      "age": 26,
      "position": "DEF",
      "rating": 69,
      "club": "Gil Vicente",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Odilon Kossounou",
      "age": 30,
      "position": "DEF",
      "rating": 68,
      "club": "Atalanta",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Evan Ndicka",
      "age": 29,
      "position": "DEF",
      "rating": 67,
      "club": "AS Roma",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Wilfried Singo",
      "age": 31,
      "position": "DEF",
      "rating": 64,
      "club": "Galatasaray",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Seko Fofana",
      "age": 27,
      "position": "MID",
      "rating": 68,
      "club": "Porto",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Parfait Guiagon",
      "age": 26,
      "position": "MID",
      "rating": 71,
      "club": "Charleroi",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Franck Kessi\u00e9",
      "age": 25,
      "position": "MID",
      "rating": 70,
      "club": "Al Ahli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Christ Inao Oula\u00ef",
      "age": 22,
      "position": "MID",
      "rating": 66,
      "club": "Trabzonspor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ibrahim Sangar\u00e9",
      "age": 31,
      "position": "MID",
      "rating": 65,
      "club": "Nottingham Forest",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jean Micha\u00ebl Seri",
      "age": 30,
      "position": "MID",
      "rating": 68,
      "club": "NK Maribor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Simon Adingra",
      "age": 31,
      "position": "FWD",
      "rating": 68,
      "club": "AS Monaco",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ange-Yoan Bonny",
      "age": 32,
      "position": "FWD",
      "rating": 71,
      "club": "Internazionale",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Amad Diallo",
      "age": 28,
      "position": "FWD",
      "rating": 68,
      "club": "Manchester United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Oumar Diakit\u00e9",
      "age": 31,
      "position": "FWD",
      "rating": 64,
      "club": "Cercle Brugge",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yan Diomande",
      "age": 26,
      "position": "FWD",
      "rating": 65,
      "club": "RB Leipzig",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Evann Guessand",
      "age": 29,
      "position": "FWD",
      "rating": 68,
      "club": "Aston Villa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nicolas P\u00e9p\u00e9",
      "age": 33,
      "position": "FWD",
      "rating": 67,
      "club": "Villarreal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Bazoumana Tour\u00e9",
      "age": 21,
      "position": "FWD",
      "rating": 66,
      "club": "Hoffenheim",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Elye Wahi",
      "age": 25,
      "position": "FWD",
      "rating": 68,
      "club": "Nice",
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
      "rating": 63,
      "club": "Miami FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tyrick Bodak",
      "age": 25,
      "position": "GK",
      "rating": 58,
      "club": "Telstar",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Trevor Doornbusch",
      "age": 29,
      "position": "GK",
      "rating": 58,
      "club": "VVV Venlo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Riechedly Bazoer",
      "age": 27,
      "position": "DEF",
      "rating": 66,
      "club": "Konyaspor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Joshua Brenet",
      "age": 32,
      "position": "DEF",
      "rating": 60,
      "club": "Kayserispor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Roshon van Eijma",
      "age": 24,
      "position": "DEF",
      "rating": 58,
      "club": "RKC Waalwijk",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sherel Floranus",
      "age": 28,
      "position": "DEF",
      "rating": 60,
      "club": "PEC Zwolle",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Deveron Fonville",
      "age": 29,
      "position": "DEF",
      "rating": 63,
      "club": "NEC Nijmegen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jurien Gaari",
      "age": 32,
      "position": "DEF",
      "rating": 57,
      "club": "Abha",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Armando Obispo",
      "age": 34,
      "position": "DEF",
      "rating": 58,
      "club": "PSV Eindhoven",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Shurandy Sambo",
      "age": 22,
      "position": "DEF",
      "rating": 59,
      "club": "Sparta Rotterdam",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Juninho Bacuna",
      "age": 22,
      "position": "MID",
      "rating": 67,
      "club": "Volendam",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Leandro Bacuna",
      "age": 25,
      "position": "MID",
      "rating": 60,
      "club": "Igdir",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Livano Comenencia",
      "age": 22,
      "position": "MID",
      "rating": 60,
      "club": "Zurich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kevin Felida",
      "age": 27,
      "position": "MID",
      "rating": 64,
      "club": "Den Bosch",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ar'jany Martha",
      "age": 21,
      "position": "MID",
      "rating": 59,
      "club": "Rotherham United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tyrese Noslin",
      "age": 29,
      "position": "MID",
      "rating": 60,
      "club": "Telstar",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Godfried Roemeratoe",
      "age": 27,
      "position": "MID",
      "rating": 58,
      "club": "RKC Waalwijk",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jeremy Antonisse",
      "age": 22,
      "position": "FWD",
      "rating": 60,
      "club": "Kifisia",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tahith Chong",
      "age": 24,
      "position": "FWD",
      "rating": 62,
      "club": "Sheffield United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kenji Gorre",
      "age": 31,
      "position": "FWD",
      "rating": 62,
      "club": "Maccabi Haifa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sontje Hansen",
      "age": 29,
      "position": "FWD",
      "rating": 58,
      "club": "Middlesbrough",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gervane Kastaneer",
      "age": 31,
      "position": "FWD",
      "rating": 58,
      "club": "Terengganu",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Brandley Kuwas",
      "age": 22,
      "position": "FWD",
      "rating": 55,
      "club": "Volendam",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jurgen Locadia",
      "age": 27,
      "position": "FWD",
      "rating": 57,
      "club": "Miami FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jearl Margaritha",
      "age": 33,
      "position": "FWD",
      "rating": 56,
      "club": "Beveren",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "NED": [
    {
      "name": "Mark Flekken",
      "age": 31,
      "position": "GK",
      "rating": 82,
      "club": "Bayer Leverkusen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Robin Roefs",
      "age": 25,
      "position": "GK",
      "rating": 79,
      "club": "Sunderland",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Bart Verbruggen",
      "age": 34,
      "position": "GK",
      "rating": 76,
      "club": "Brighton",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nathan Ak\u00e9",
      "age": 34,
      "position": "DEF",
      "rating": 91,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Denzel Dumfries",
      "age": 33,
      "position": "DEF",
      "rating": 81,
      "club": "Inter Milan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jorrel Hato",
      "age": 26,
      "position": "DEF",
      "rating": 81,
      "club": "Chelsea",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jurri\u00ebn Timber",
      "age": 22,
      "position": "DEF",
      "rating": 84,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jan Paul van Hecke",
      "age": 28,
      "position": "DEF",
      "rating": 84,
      "club": "Brighton",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Micky van de Ven",
      "age": 25,
      "position": "DEF",
      "rating": 76,
      "club": "Tottenham",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Virgil van Dijk",
      "age": 29,
      "position": "DEF",
      "rating": 76,
      "club": "Liverpool",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Frenkie de Jong",
      "age": 31,
      "position": "MID",
      "rating": 83,
      "club": "Barcelona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marten de Roon",
      "age": 28,
      "position": "MID",
      "rating": 81,
      "club": "Atalanta",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ryan Gravenberch",
      "age": 29,
      "position": "MID",
      "rating": 82,
      "club": "Liverpool",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Teun Koopmeiners",
      "age": 27,
      "position": "MID",
      "rating": 82,
      "club": "Juventus",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tijjani Reijnders",
      "age": 28,
      "position": "MID",
      "rating": 79,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Guus Til",
      "age": 28,
      "position": "MID",
      "rating": 77,
      "club": "PSV",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Quinten Timber",
      "age": 23,
      "position": "MID",
      "rating": 80,
      "club": "Marseille",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mats Wieffer",
      "age": 24,
      "position": "MID",
      "rating": 79,
      "club": "Brighton",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Brian Brobbey",
      "age": 27,
      "position": "FWD",
      "rating": 91,
      "club": "Sunderland",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Memphis Depay",
      "age": 32,
      "position": "FWD",
      "rating": 81,
      "club": "Corinthians",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Cody Gakpo",
      "age": 23,
      "position": "FWD",
      "rating": 80,
      "club": "Liverpool",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Justin Kluivert",
      "age": 24,
      "position": "FWD",
      "rating": 79,
      "club": "Bournemouth",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Noa Lang",
      "age": 23,
      "position": "FWD",
      "rating": 80,
      "club": "Galatasaray",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Donyell Malen",
      "age": 23,
      "position": "FWD",
      "rating": 76,
      "club": "Roma",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Crysencio Summerville",
      "age": 32,
      "position": "FWD",
      "rating": 78,
      "club": "West Ham",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Wout Weghorst",
      "age": 28,
      "position": "FWD",
      "rating": 80,
      "club": "Ajax",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "JPN": [
    {
      "name": "Zion Suzuki",
      "age": 31,
      "position": "GK",
      "rating": 78,
      "club": "Parma",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Keisuke Osako",
      "age": 31,
      "position": "GK",
      "rating": 71,
      "club": "Sanfrecce Hiroshima",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tomoki Hayakawa",
      "age": 31,
      "position": "GK",
      "rating": 74,
      "club": "Kashima Antlers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Y\u016bto Nagatomo",
      "age": 27,
      "position": "DEF",
      "rating": 80,
      "club": "FC Tokyo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Shogo Taniguchi",
      "age": 34,
      "position": "DEF",
      "rating": 77,
      "club": "Sint-Truiden",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ko Itakura",
      "age": 28,
      "position": "DEF",
      "rating": 77,
      "club": "Ajax",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tsuyoshi Watanabe",
      "age": 27,
      "position": "DEF",
      "rating": 76,
      "club": "Feyenoord",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Takehiro Tomiyasu",
      "age": 33,
      "position": "DEF",
      "rating": 74,
      "club": "Ajax",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hiroki Ito",
      "age": 31,
      "position": "DEF",
      "rating": 71,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ayumu Seko",
      "age": 25,
      "position": "DEF",
      "rating": 73,
      "club": "Le Havre",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yukinari Sugawara",
      "age": 22,
      "position": "DEF",
      "rating": 73,
      "club": "Werder Bremen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Junnosuke Suzuki",
      "age": 32,
      "position": "MID",
      "rating": 80,
      "club": "Copenhagen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Wataru Endo",
      "age": 32,
      "position": "MID",
      "rating": 76,
      "club": "Liverpool",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Junya Ito",
      "age": 27,
      "position": "MID",
      "rating": 76,
      "club": "Genk",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Daichi Kamada",
      "age": 33,
      "position": "MID",
      "rating": 78,
      "club": "Crystal Palace",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ritsu Doan",
      "age": 28,
      "position": "MID",
      "rating": 71,
      "club": "Eintracht Frankfurt",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ao Tanaka",
      "age": 23,
      "position": "MID",
      "rating": 70,
      "club": "Leeds United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Keito Nakamura",
      "age": 30,
      "position": "MID",
      "rating": 74,
      "club": "Reims",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kaishu Sano",
      "age": 22,
      "position": "MID",
      "rating": 72,
      "club": "Mainz",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Takefusa Kubo",
      "age": 22,
      "position": "MID",
      "rating": 73,
      "club": "Real Sociedad",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yuito Suzuki",
      "age": 28,
      "position": "MID",
      "rating": 74,
      "club": "Freiburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Koki Ogawa",
      "age": 30,
      "position": "FWD",
      "rating": 75,
      "club": "NEC Nijmegen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Daizen Maeda",
      "age": 25,
      "position": "FWD",
      "rating": 74,
      "club": "Celtic",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ayase Ueda",
      "age": 21,
      "position": "FWD",
      "rating": 78,
      "club": "Feyenoord",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kento Shiogai",
      "age": 26,
      "position": "FWD",
      "rating": 70,
      "club": "VfL Wolfsburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Keisuke Goto",
      "age": 24,
      "position": "FWD",
      "rating": 72,
      "club": "Sint-Truiden",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "TUN": [
    {
      "name": "Aymen Dahmen",
      "age": 35,
      "position": "GK",
      "rating": 70,
      "club": "CS Sfaxien",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sabri Ben Hessen",
      "age": 34,
      "position": "GK",
      "rating": 67,
      "club": "\u00c9toile du Sahel",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Abdelmouhib Chamakh",
      "age": 37,
      "position": "GK",
      "rating": 64,
      "club": "Club Africain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Montassar Talbi",
      "age": 32,
      "position": "DEF",
      "rating": 73,
      "club": "Lorient",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dylan Bronn",
      "age": 30,
      "position": "DEF",
      "rating": 72,
      "club": "Servette",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Omar Rekik",
      "age": 27,
      "position": "DEF",
      "rating": 69,
      "club": "Maribor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yan Valery",
      "age": 33,
      "position": "DEF",
      "rating": 71,
      "club": "Young Boys",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ali Abdi",
      "age": 29,
      "position": "DEF",
      "rating": 72,
      "club": "Nice",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Moutaz Neffati",
      "age": 22,
      "position": "DEF",
      "rating": 68,
      "club": "IFK Norrk\u00f6ping",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Raed Chikhaoui",
      "age": 23,
      "position": "DEF",
      "rating": 68,
      "club": "US Monastir",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Adam Arous",
      "age": 32,
      "position": "DEF",
      "rating": 65,
      "club": "Kas\u0131mpa\u015fa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohamed Amine Ben Hamida",
      "age": 25,
      "position": "DEF",
      "rating": 66,
      "club": "Esp\u00e9rance de Tunis",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ellyes Skhiri",
      "age": 27,
      "position": "MID",
      "rating": 69,
      "club": "Eintracht Frankfurt",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hannibal Mejbri",
      "age": 33,
      "position": "MID",
      "rating": 66,
      "club": "Burnley",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Anis Ben Slimane",
      "age": 32,
      "position": "MID",
      "rating": 71,
      "club": "Norwich City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hadj Mahmoud",
      "age": 22,
      "position": "MID",
      "rating": 72,
      "club": "Lugano",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rani Khedira",
      "age": 23,
      "position": "MID",
      "rating": 67,
      "club": "Union Berlin",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mortadha Ben Ouanes",
      "age": 21,
      "position": "MID",
      "rating": 66,
      "club": "Kas\u0131mpa\u015fa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Elias Achouri",
      "age": 24,
      "position": "FWD",
      "rating": 68,
      "club": "Copenhagen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Isma\u00ebl Gharbi",
      "age": 19,
      "position": "FWD",
      "rating": 72,
      "club": "Augsburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Elias Saad",
      "age": 24,
      "position": "FWD",
      "rating": 68,
      "club": "Hannover 96",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sebastian Tounekti",
      "age": 25,
      "position": "FWD",
      "rating": 66,
      "club": "Celtic",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Firas Chaouat",
      "age": 22,
      "position": "FWD",
      "rating": 65,
      "club": "Club Africain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Khalil Ayari",
      "age": 25,
      "position": "FWD",
      "rating": 68,
      "club": "Paris Saint-Germain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hazem Mastouri",
      "age": 29,
      "position": "FWD",
      "rating": 68,
      "club": "Dynamo Makhachkala",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rayan Elloumi",
      "age": 21,
      "position": "FWD",
      "rating": 65,
      "club": "Vancouver Whitecaps",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Elias Saad",
      "age": 20,
      "position": "FWD",
      "rating": 65,
      "club": "Hannover 96",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "SWE": [
    {
      "name": "Viktor Johansson",
      "age": 37,
      "position": "GK",
      "rating": 77,
      "club": "Stoke City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kristoffer Nordfeldt",
      "age": 33,
      "position": "GK",
      "rating": 73,
      "club": "AIK",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jacob Widell Zetterstrom",
      "age": 31,
      "position": "GK",
      "rating": 71,
      "club": "Derby County",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hjalmar Ekdal",
      "age": 24,
      "position": "DEF",
      "rating": 84,
      "club": "Burnley",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gabriel Gudmundsson",
      "age": 29,
      "position": "DEF",
      "rating": 74,
      "club": "Leeds United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Isak Hien",
      "age": 26,
      "position": "DEF",
      "rating": 78,
      "club": "Atalanta",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Emil Holm",
      "age": 26,
      "position": "DEF",
      "rating": 76,
      "club": "Juventus",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gustaf Lagerbielke",
      "age": 22,
      "position": "DEF",
      "rating": 78,
      "club": "Braga",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Victor Lindel\u00f6f",
      "age": 26,
      "position": "DEF",
      "rating": 73,
      "club": "Aston Villa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Erik Smith",
      "age": 24,
      "position": "DEF",
      "rating": 74,
      "club": "St. Pauli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Carl Starfelt",
      "age": 29,
      "position": "DEF",
      "rating": 70,
      "club": "Celta Vigo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Elliot Stroud",
      "age": 31,
      "position": "DEF",
      "rating": 72,
      "club": "Mjallby",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Daniel Svensson",
      "age": 32,
      "position": "DEF",
      "rating": 72,
      "club": "Borussia Dortmund",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Taha Ali",
      "age": 32,
      "position": "MID",
      "rating": 81,
      "club": "Malmo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yasin Ayari",
      "age": 28,
      "position": "MID",
      "rating": 75,
      "club": "Brighton",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lucas Bergvall",
      "age": 24,
      "position": "MID",
      "rating": 75,
      "club": "Tottenham",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jesper Karlstr\u00f6m",
      "age": 28,
      "position": "MID",
      "rating": 76,
      "club": "Udinese",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ken Sema",
      "age": 24,
      "position": "MID",
      "rating": 70,
      "club": "Pafos",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mattias Svanberg",
      "age": 30,
      "position": "MID",
      "rating": 73,
      "club": "Wolfsburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Besfort Zeneli",
      "age": 30,
      "position": "MID",
      "rating": 72,
      "club": "Union St-Gilloise",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alexander Bernhardsson",
      "age": 30,
      "position": "FWD",
      "rating": 79,
      "club": "Holstein Kiel",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Anthony Elanga",
      "age": 19,
      "position": "FWD",
      "rating": 75,
      "club": "Newcastle United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Viktor Gy\u00f6keres",
      "age": 25,
      "position": "FWD",
      "rating": 78,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alexander Isak",
      "age": 19,
      "position": "FWD",
      "rating": 72,
      "club": "Liverpool",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gustaf Nilsson",
      "age": 32,
      "position": "FWD",
      "rating": 74,
      "club": "Club Brugge",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Benjamin Nygren",
      "age": 33,
      "position": "FWD",
      "rating": 70,
      "club": "Celtic",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "BEL": [
    {
      "name": "Thibaut Courtois",
      "age": 35,
      "position": "GK",
      "rating": 84,
      "club": "Real Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Senne Lammens",
      "age": 37,
      "position": "GK",
      "rating": 79,
      "club": "Manchester United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mike Penders",
      "age": 36,
      "position": "GK",
      "rating": 78,
      "club": "Chelsea",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Timothy Castagne",
      "age": 31,
      "position": "DEF",
      "rating": 85,
      "club": "Fulham",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Zeno Debast",
      "age": 25,
      "position": "DEF",
      "rating": 82,
      "club": "Sporting CP",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Maxim De Cuyper",
      "age": 31,
      "position": "DEF",
      "rating": 81,
      "club": "Brighton & Hove Albion",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Koni De Winter",
      "age": 32,
      "position": "DEF",
      "rating": 82,
      "club": "AC Milan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Brandon Mechele",
      "age": 32,
      "position": "DEF",
      "rating": 81,
      "club": "Club Brugge",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Thomas Meunier",
      "age": 32,
      "position": "DEF",
      "rating": 76,
      "club": "Lille",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nathan Ngoy",
      "age": 26,
      "position": "DEF",
      "rating": 76,
      "club": "Lille",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Joaquin Seys",
      "age": 22,
      "position": "DEF",
      "rating": 79,
      "club": "Club Brugge",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Arthur Theate",
      "age": 27,
      "position": "DEF",
      "rating": 80,
      "club": "Eintracht Frankfurt",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kevin De Bruyne",
      "age": 22,
      "position": "MID",
      "rating": 89,
      "club": "Napoli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Amadou Onana",
      "age": 26,
      "position": "MID",
      "rating": 82,
      "club": "Aston Villa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nicolas Raskin",
      "age": 23,
      "position": "MID",
      "rating": 83,
      "club": "Rangers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Youri Tielemans",
      "age": 23,
      "position": "MID",
      "rating": 81,
      "club": "Aston Villa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hans Vanaken",
      "age": 26,
      "position": "MID",
      "rating": 80,
      "club": "Club Brugge",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Axel Witsel",
      "age": 29,
      "position": "MID",
      "rating": 80,
      "club": "Girona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Charles De Ketelaere",
      "age": 32,
      "position": "FWD",
      "rating": 86,
      "club": "Atalanta",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "J\u00e9r\u00e9my Doku",
      "age": 23,
      "position": "FWD",
      "rating": 81,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Matias Fernandez-Pardo",
      "age": 31,
      "position": "FWD",
      "rating": 83,
      "club": "Lille",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Romelu Lukaku",
      "age": 30,
      "position": "FWD",
      "rating": 78,
      "club": "Napoli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dodi Lukebakio",
      "age": 31,
      "position": "FWD",
      "rating": 78,
      "club": "Benfica",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Diego Moreira",
      "age": 26,
      "position": "FWD",
      "rating": 76,
      "club": "Strasbourg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alexis Saelemaekers",
      "age": 21,
      "position": "FWD",
      "rating": 76,
      "club": "AC Milan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Leandro Trossard",
      "age": 32,
      "position": "FWD",
      "rating": 77,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "IRN": [
    {
      "name": "Alireza Beiranvand",
      "age": 35,
      "position": "GK",
      "rating": 78,
      "club": "Tractor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hossein Hosseini",
      "age": 37,
      "position": "GK",
      "rating": 73,
      "club": "Sepahan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Payam Niazmand",
      "age": 29,
      "position": "GK",
      "rating": 74,
      "club": "Persepolis",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohammed Khalifeh",
      "age": 36,
      "position": "GK",
      "rating": 70,
      "club": "Aluminium Arak",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Danial Eiri",
      "age": 22,
      "position": "DEF",
      "rating": 81,
      "club": "Malavan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ehsan Hajsafi",
      "age": 30,
      "position": "DEF",
      "rating": 75,
      "club": "Sepahan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Saleh Hardani",
      "age": 29,
      "position": "DEF",
      "rating": 73,
      "club": "Esteghlal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hossein Kanaani",
      "age": 32,
      "position": "DEF",
      "rating": 75,
      "club": "Persepolis",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Shoka Khalilzadeh",
      "age": 32,
      "position": "DEF",
      "rating": 78,
      "club": "Tractor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Milad Mohammadi",
      "age": 31,
      "position": "DEF",
      "rating": 72,
      "club": "Persepolis",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ali Nemati Omid Noorafkan",
      "age": 32,
      "position": "DEF",
      "rating": 73,
      "club": "Foolad",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ramin Rezaeian",
      "age": 23,
      "position": "DEF",
      "rating": 72,
      "club": "Foolad",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rouzbeh Cheshmi",
      "age": 24,
      "position": "MID",
      "rating": 85,
      "club": "Esteghlal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Saeid Ezatolahi",
      "age": 21,
      "position": "MID",
      "rating": 76,
      "club": "Shabab Al-Ahli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mehdi Ghaedi",
      "age": 29,
      "position": "MID",
      "rating": 77,
      "club": "Al-Nasr",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Saman Ghoddos",
      "age": 30,
      "position": "MID",
      "rating": 75,
      "club": "Kalba",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohammad Ghorbani",
      "age": 31,
      "position": "MID",
      "rating": 71,
      "club": "Al-Wahda",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alireza Jahanbakhsh",
      "age": 31,
      "position": "MID",
      "rating": 70,
      "club": "Dender",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohammad Mohebi",
      "age": 32,
      "position": "MID",
      "rating": 73,
      "club": "Rostovv",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Amir Mohammad Razzaghinia",
      "age": 31,
      "position": "MID",
      "rating": 72,
      "club": "Esteghlal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mehdi Torabi",
      "age": 22,
      "position": "MID",
      "rating": 73,
      "club": "Tractor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Aria Yousefi",
      "age": 21,
      "position": "MID",
      "rating": 71,
      "club": "Sepahan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ali Alipour",
      "age": 23,
      "position": "FWD",
      "rating": 75,
      "club": "Persepolis",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dennis Dargahi",
      "age": 20,
      "position": "FWD",
      "rating": 76,
      "club": "Standard Liege",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hadi Habibinejad",
      "age": 22,
      "position": "FWD",
      "rating": 73,
      "club": "Chadormalou",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Amirhossein Hosseinzadeh",
      "age": 21,
      "position": "FWD",
      "rating": 74,
      "club": "Tractor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Amirhossein Mahmoudi",
      "age": 26,
      "position": "FWD",
      "rating": 73,
      "club": "Persepolis",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kasra Taheri",
      "age": 29,
      "position": "FWD",
      "rating": 72,
      "club": "Paykan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mehdi Taremi",
      "age": 25,
      "position": "FWD",
      "rating": 74,
      "club": "Olympiacos",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "EGY": [
    {
      "name": "Mohamed El Shenawy",
      "age": 35,
      "position": "GK",
      "rating": 70,
      "club": "Al Ahly",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mostafa Shobeir",
      "age": 30,
      "position": "GK",
      "rating": 65,
      "club": "Al Ahly",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "El Mahdy Soliman",
      "age": 37,
      "position": "GK",
      "rating": 64,
      "club": "Zamalek",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohamed Alaa",
      "age": 33,
      "position": "GK",
      "rating": 67,
      "club": "El Gouna",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohamed Hany",
      "age": 26,
      "position": "DEF",
      "rating": 74,
      "club": "Al Ahly",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tarek Alaa",
      "age": 33,
      "position": "DEF",
      "rating": 66,
      "club": "Zamalek",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hamdy Fathy",
      "age": 25,
      "position": "DEF",
      "rating": 68,
      "club": "Al Wakrah",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ramy Rabia",
      "age": 29,
      "position": "DEF",
      "rating": 69,
      "club": "Al Ain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yasser Ibrahim",
      "age": 27,
      "position": "DEF",
      "rating": 67,
      "club": "Al Ahly",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hossam Abdelmaguid",
      "age": 32,
      "position": "DEF",
      "rating": 64,
      "club": "Zamalek",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohamed Abdelmonem",
      "age": 30,
      "position": "DEF",
      "rating": 66,
      "club": "Nice",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ahmed Fatouh",
      "age": 22,
      "position": "DEF",
      "rating": 66,
      "club": "Zamalek",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Karim Hafez",
      "age": 26,
      "position": "DEF",
      "rating": 67,
      "club": "Pyramids",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marwan Attia",
      "age": 22,
      "position": "MID",
      "rating": 71,
      "club": "Al Ahly",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohanad Lasheen",
      "age": 28,
      "position": "MID",
      "rating": 72,
      "club": "Pyramids",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nabil Emad",
      "age": 31,
      "position": "MID",
      "rating": 66,
      "club": "Al Najma",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mahmoud Saber",
      "age": 31,
      "position": "MID",
      "rating": 67,
      "club": "Zed",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ahmed Zizo",
      "age": 21,
      "position": "MID",
      "rating": 68,
      "club": "Al Ahly",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Emam Ashour",
      "age": 33,
      "position": "MID",
      "rating": 64,
      "club": "Al Ahly",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mostafa Ziko",
      "age": 24,
      "position": "MID",
      "rating": 66,
      "club": "Pyramids",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mahmoud Trezeguet",
      "age": 33,
      "position": "MID",
      "rating": 65,
      "club": "Al Ahly",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ibrahim Adel",
      "age": 24,
      "position": "MID",
      "rating": 68,
      "club": "Nordsjaelland",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Haissem Hassan",
      "age": 33,
      "position": "MID",
      "rating": 64,
      "club": "Real Oviedo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Omar Marmoush",
      "age": 22,
      "position": "FWD",
      "rating": 76,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohamed Salah",
      "age": 22,
      "position": "FWD",
      "rating": 89,
      "club": "Liverpool",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hamza Abdelkarim",
      "age": 32,
      "position": "FWD",
      "rating": 72,
      "club": "Barcelona B",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "NZL": [
    {
      "name": "Max Crocombe",
      "age": 29,
      "position": "GK",
      "rating": 59,
      "club": "Millwall",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alex Paulsen",
      "age": 36,
      "position": "GK",
      "rating": 56,
      "club": "Lechia Gda\u0144sk",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Michael Woud",
      "age": 24,
      "position": "GK",
      "rating": 59,
      "club": "Auckland FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tim Payne",
      "age": 24,
      "position": "DEF",
      "rating": 64,
      "club": "Wellington Phoenix",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Francis De Vries",
      "age": 30,
      "position": "DEF",
      "rating": 59,
      "club": "Auckland FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tyler Bindon",
      "age": 34,
      "position": "DEF",
      "rating": 60,
      "club": "Nottingham Forest",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Michael Boxall",
      "age": 23,
      "position": "DEF",
      "rating": 59,
      "club": "Minnesota United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Liberato Cacace",
      "age": 22,
      "position": "DEF",
      "rating": 63,
      "club": "Wrexham",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nando Pijnaker",
      "age": 22,
      "position": "DEF",
      "rating": 56,
      "club": "Auckland FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Finn Surman",
      "age": 34,
      "position": "DEF",
      "rating": 57,
      "club": "Portland Timbers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Callan Elliot",
      "age": 31,
      "position": "DEF",
      "rating": 56,
      "club": "Auckland FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tommy Smith",
      "age": 22,
      "position": "DEF",
      "rating": 57,
      "club": "Braintree Town",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Joe Bell",
      "age": 25,
      "position": "MID",
      "rating": 62,
      "club": "Viking FK",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Matt Garbett",
      "age": 23,
      "position": "MID",
      "rating": 58,
      "club": "Peterborough United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marko Stamenic",
      "age": 27,
      "position": "MID",
      "rating": 63,
      "club": "Swansea City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sarpreet Singh",
      "age": 22,
      "position": "MID",
      "rating": 62,
      "club": "Wellington Phoenix",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alex Rufer",
      "age": 22,
      "position": "MID",
      "rating": 60,
      "club": "Wellington Phoenix",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ryan Thomas",
      "age": 28,
      "position": "MID",
      "rating": 58,
      "club": "PEC Zwolle",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Chris Wood",
      "age": 24,
      "position": "FWD",
      "rating": 72,
      "club": "Nottingham Forest",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Eli Just",
      "age": 28,
      "position": "FWD",
      "rating": 62,
      "club": "Motherwell",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kosta Barbarouses",
      "age": 26,
      "position": "FWD",
      "rating": 58,
      "club": "Western Sydney Wanderers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ben Waine",
      "age": 22,
      "position": "FWD",
      "rating": 59,
      "club": "Port Vale",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ben Old",
      "age": 19,
      "position": "FWD",
      "rating": 59,
      "club": "Saint-\u00c9tienne",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Callum McCowatt",
      "age": 31,
      "position": "FWD",
      "rating": 60,
      "club": "Silkeborg IF",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jesse Randall",
      "age": 27,
      "position": "FWD",
      "rating": 60,
      "club": "Auckland FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lachlan Bayliss",
      "age": 26,
      "position": "FWD",
      "rating": 57,
      "club": "Newcastle Jets",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "ESP": [
    {
      "name": "Unai Sim\u00f3n",
      "age": 24,
      "position": "GK",
      "rating": 80,
      "club": "Athletic Club",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "David Raya",
      "age": 37,
      "position": "GK",
      "rating": 79,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Joan Garc\u00eda",
      "age": 30,
      "position": "GK",
      "rating": 79,
      "club": "Barcelona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marc Cucurella",
      "age": 23,
      "position": "DEF",
      "rating": 92,
      "club": "Chelsea",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Pau Cubars\u00ed",
      "age": 33,
      "position": "DEF",
      "rating": 83,
      "club": "Barcelona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Aymeric Laporte",
      "age": 23,
      "position": "DEF",
      "rating": 83,
      "club": "Athletic Club",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Grimaldo",
      "age": 27,
      "position": "DEF",
      "rating": 80,
      "club": "Bayer Leverkusen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Pedro Porro",
      "age": 24,
      "position": "DEF",
      "rating": 84,
      "club": "Tottenham Hotspur",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Eric Garc\u00eda",
      "age": 24,
      "position": "DEF",
      "rating": 76,
      "club": "Barcelona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marcos Llorente",
      "age": 31,
      "position": "DEF",
      "rating": 78,
      "club": "Atl\u00e9tico Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marc Pubill",
      "age": 30,
      "position": "DEF",
      "rating": 80,
      "club": "Atl\u00e9tico Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gavi",
      "age": 27,
      "position": "MID",
      "rating": 87,
      "club": "Barcelona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rodri",
      "age": 29,
      "position": "MID",
      "rating": 92,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Pedri",
      "age": 28,
      "position": "MID",
      "rating": 82,
      "club": "Barcelona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mart\u00edn Zubimendi",
      "age": 30,
      "position": "MID",
      "rating": 84,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Fabi\u00e1n Ruiz",
      "age": 22,
      "position": "MID",
      "rating": 79,
      "club": "PSG",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Baena",
      "age": 31,
      "position": "MID",
      "rating": 76,
      "club": "Atl\u00e9tico Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mikel Merino",
      "age": 32,
      "position": "MID",
      "rating": 80,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lamine Yamal",
      "age": 25,
      "position": "FWD",
      "rating": 89,
      "club": "Barcelona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nico Williams",
      "age": 33,
      "position": "FWD",
      "rating": 86,
      "club": "Athletic Club",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dani Olmo",
      "age": 25,
      "position": "FWD",
      "rating": 81,
      "club": "Barcelona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ferran Torres",
      "age": 32,
      "position": "FWD",
      "rating": 78,
      "club": "Barcelona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mikel Oyarzabal",
      "age": 25,
      "position": "FWD",
      "rating": 79,
      "club": "Real Sociedad",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Y\u00e9remy Pino",
      "age": 30,
      "position": "FWD",
      "rating": 79,
      "club": "Crystal Palace",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Borja Iglesias",
      "age": 24,
      "position": "FWD",
      "rating": 76,
      "club": "Celta Vigo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "V\u00edctor Mu\u00f1oz",
      "age": 24,
      "position": "FWD",
      "rating": 79,
      "club": "Osasuna",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "URU": [
    {
      "name": "Fernando Muslera",
      "age": 28,
      "position": "GK",
      "rating": 78,
      "club": "Estudiantes de La Plata",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sergio Rochet",
      "age": 26,
      "position": "GK",
      "rating": 72,
      "club": "Internacional de Porto Alegre",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Santiago Mele",
      "age": 25,
      "position": "GK",
      "rating": 73,
      "club": "Monterrey",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ronald Ara\u00fajo",
      "age": 23,
      "position": "DEF",
      "rating": 76,
      "club": "Barcelona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jos\u00e9 Mar\u00eda Gim\u00e9nez",
      "age": 28,
      "position": "DEF",
      "rating": 73,
      "club": "Atl\u00e9tico Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Santiago Bueno",
      "age": 33,
      "position": "DEF",
      "rating": 73,
      "club": "Wolverhampton Wanderers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sebasti\u00e1n C\u00e1ceres",
      "age": 27,
      "position": "DEF",
      "rating": 78,
      "club": "Am\u00e9rica",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Math\u00edas Olivera",
      "age": 30,
      "position": "DEF",
      "rating": 74,
      "club": "Napoli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Guillermo Varela",
      "age": 31,
      "position": "DEF",
      "rating": 70,
      "club": "Flamengo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mat\u00edas Vi\u00f1a",
      "age": 30,
      "position": "DEF",
      "rating": 74,
      "club": "River Plate",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Joaqu\u00edn Piquerez",
      "age": 32,
      "position": "DEF",
      "rating": 72,
      "club": "Palmeiras",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Juan Manuel Sanabria",
      "age": 28,
      "position": "DEF",
      "rating": 70,
      "club": "Real Salt Lake",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Federico Valverde",
      "age": 31,
      "position": "MID",
      "rating": 87,
      "club": "Real Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rodrigo Bentancur",
      "age": 32,
      "position": "MID",
      "rating": 92,
      "club": "Tottenham Hotspur",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Manuel Ugarte",
      "age": 25,
      "position": "MID",
      "rating": 73,
      "club": "Manchester United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Emiliano Mart\u00ednez",
      "age": 25,
      "position": "MID",
      "rating": 77,
      "club": "Palmeiras",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rodrigo Zalazar",
      "age": 22,
      "position": "MID",
      "rating": 92,
      "club": "Sporting CP",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Giorgian De Arrascaeta",
      "age": 29,
      "position": "MID",
      "rating": 74,
      "club": "Flamengo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nicol\u00e1s De La Cruz",
      "age": 23,
      "position": "MID",
      "rating": 71,
      "club": "Flamengo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Agust\u00edn Canobbio",
      "age": 24,
      "position": "MID",
      "rating": 73,
      "club": "Fluminense",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Maximiliano Ara\u00fajo",
      "age": 26,
      "position": "MID",
      "rating": 70,
      "club": "Sporting CP",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Brian Rodr\u00edguez",
      "age": 26,
      "position": "MID",
      "rating": 74,
      "club": "Am\u00e9rica",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Facundo Pellistri",
      "age": 33,
      "position": "MID",
      "rating": 70,
      "club": "Panathinaikos",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Darwin N\u00fa\u00f1ez",
      "age": 28,
      "position": "FWD",
      "rating": 83,
      "club": "Al Hilal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Federico Vi\u00f1as",
      "age": 31,
      "position": "FWD",
      "rating": 74,
      "club": "Real Oviedo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rodrigo Aguirre",
      "age": 32,
      "position": "FWD",
      "rating": 92,
      "club": "Tigres",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "KSA": [
    {
      "name": "Mohammed Al Owais",
      "age": 36,
      "position": "GK",
      "rating": 70,
      "club": "Al Ula",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nawaf Al Aqidi",
      "age": 33,
      "position": "GK",
      "rating": 68,
      "club": "Al Nassr",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ahmed Al Kassar",
      "age": 24,
      "position": "GK",
      "rating": 68,
      "club": "Al Qadsiah",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Abdulelah Al Amri",
      "age": 32,
      "position": "DEF",
      "rating": 77,
      "club": "Al Nassr",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hassan Tambakti",
      "age": 33,
      "position": "DEF",
      "rating": 72,
      "club": "Al Hilal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jehad Thikri",
      "age": 22,
      "position": "DEF",
      "rating": 68,
      "club": "Al Qadsiah",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ali Lajami",
      "age": 26,
      "position": "DEF",
      "rating": 67,
      "club": "Al Hilal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hassan Kadesh",
      "age": 34,
      "position": "DEF",
      "rating": 71,
      "club": "Al Ittihad",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Saud Abdulhamid",
      "age": 27,
      "position": "DEF",
      "rating": 66,
      "club": "Lens",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohammed Abu Al Shamat",
      "age": 22,
      "position": "DEF",
      "rating": 66,
      "club": "Al Qadsiah",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ali Majrashi",
      "age": 24,
      "position": "DEF",
      "rating": 65,
      "club": "Al Ahli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Moteb Al Harbi",
      "age": 32,
      "position": "DEF",
      "rating": 68,
      "club": "Al Hilal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nawaf Boushal",
      "age": 23,
      "position": "DEF",
      "rating": 67,
      "club": "Al Nassr",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sultan Al-Ghannam",
      "age": 33,
      "position": "DEF",
      "rating": 65,
      "club": "Al Nassr",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohammed Kanno",
      "age": 21,
      "position": "MID",
      "rating": 78,
      "club": "Al Hilal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Abdullah Al Khaibari",
      "age": 32,
      "position": "MID",
      "rating": 66,
      "club": "Al Nassr",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ziyad Al Johani",
      "age": 24,
      "position": "MID",
      "rating": 70,
      "club": "Al Ahli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nasser Al Dawsari",
      "age": 27,
      "position": "MID",
      "rating": 69,
      "club": "Al Hilal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Musab Al Juwayr",
      "age": 26,
      "position": "MID",
      "rating": 67,
      "club": "Al Qadsiah",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alaa Al Hajji",
      "age": 26,
      "position": "MID",
      "rating": 65,
      "club": "Neom",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Salem Al Dawsari",
      "age": 32,
      "position": "MID",
      "rating": 66,
      "club": "Al Hilal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Khalid Al Ghannam",
      "age": 33,
      "position": "MID",
      "rating": 66,
      "club": "Al Ettifaq",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ayman Yahya",
      "age": 30,
      "position": "MID",
      "rating": 68,
      "club": "Al Nassr",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Firas Al Buraikan",
      "age": 33,
      "position": "FWD",
      "rating": 69,
      "club": "Al Ahli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Saleh Al Shehri",
      "age": 21,
      "position": "FWD",
      "rating": 66,
      "club": "Al Ittihad",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Abdullah Al Hamdan",
      "age": 31,
      "position": "FWD",
      "rating": 67,
      "club": "Al Nassr",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "CPV": [
    {
      "name": "Vozinha",
      "age": 24,
      "position": "GK",
      "rating": 62,
      "club": "Chaves",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marcio Rosa",
      "age": 25,
      "position": "GK",
      "rating": 60,
      "club": "Montana",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "CJ dos Santos",
      "age": 31,
      "position": "GK",
      "rating": 57,
      "club": "San Diego FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Steven Moreira",
      "age": 28,
      "position": "DEF",
      "rating": 70,
      "club": "Columbus Crew",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Wagner Pina",
      "age": 31,
      "position": "DEF",
      "rating": 61,
      "club": "Trabzonspor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Joao Paulo",
      "age": 28,
      "position": "DEF",
      "rating": 61,
      "club": "FCSB",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sidny Lopes Cabral",
      "age": 25,
      "position": "DEF",
      "rating": 60,
      "club": "Benfica",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Logan Costa",
      "age": 30,
      "position": "DEF",
      "rating": 64,
      "club": "Villarreal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Pico",
      "age": 27,
      "position": "DEF",
      "rating": 55,
      "club": "Shamrock Rovers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kelvin Pires",
      "age": 23,
      "position": "DEF",
      "rating": 58,
      "club": "SJK",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Stopira",
      "age": 32,
      "position": "DEF",
      "rating": 57,
      "club": "Torreense",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Diney",
      "age": 31,
      "position": "DEF",
      "rating": 60,
      "club": "Al Bataeh",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jamiro Monteiro",
      "age": 29,
      "position": "MID",
      "rating": 67,
      "club": "PEC Zwolle",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Telmo Arcanjo",
      "age": 25,
      "position": "MID",
      "rating": 63,
      "club": "Vitoria Guimaraes",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yannick Semedo",
      "age": 24,
      "position": "MID",
      "rating": 58,
      "club": "Farense",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Laros Duarte",
      "age": 30,
      "position": "MID",
      "rating": 61,
      "club": "Puskas Akademia",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Deroy Duarte",
      "age": 21,
      "position": "MID",
      "rating": 55,
      "club": "Ludogorets Razgrad",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kevin Pina",
      "age": 25,
      "position": "MID",
      "rating": 56,
      "club": "Krasnodar",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ryan Mendes",
      "age": 31,
      "position": "FWD",
      "rating": 63,
      "club": "Igdir",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Willy Semedo",
      "age": 31,
      "position": "FWD",
      "rating": 59,
      "club": "Omonia",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Garry Rodrigues",
      "age": 23,
      "position": "FWD",
      "rating": 92,
      "club": "Apollon Limassol",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jovane Cabral",
      "age": 20,
      "position": "FWD",
      "rating": 57,
      "club": "Estrela Amadora",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nuno da Costa",
      "age": 26,
      "position": "FWD",
      "rating": 55,
      "club": "Istanbul Basaksehir",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dailon Livramento",
      "age": 25,
      "position": "FWD",
      "rating": 60,
      "club": "Casa Pia",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gilson Benchimol",
      "age": 21,
      "position": "FWD",
      "rating": 56,
      "club": "Akron Tolyatti",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Helio Varela",
      "age": 27,
      "position": "FWD",
      "rating": 58,
      "club": "Maccabi Tel Aviv",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "FRA": [
    {
      "name": "Mike Maignan",
      "age": 32,
      "position": "GK",
      "rating": 81,
      "club": "AC Milan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Robin Risser",
      "age": 37,
      "position": "GK",
      "rating": 80,
      "club": "Lens",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Brice Samba",
      "age": 25,
      "position": "GK",
      "rating": 78,
      "club": "Rennes",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lucas Digne",
      "age": 33,
      "position": "DEF",
      "rating": 88,
      "club": "Aston Villa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Malo Gusto",
      "age": 28,
      "position": "DEF",
      "rating": 80,
      "club": "Chelsea",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lucas Hern\u00e1ndez",
      "age": 29,
      "position": "DEF",
      "rating": 80,
      "club": "Paris Saint-Germain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Theo Hern\u00e1ndez",
      "age": 27,
      "position": "DEF",
      "rating": 80,
      "club": "Al Hilal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ibrahima Konat\u00e9",
      "age": 28,
      "position": "DEF",
      "rating": 84,
      "club": "Liverpool",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jules Kound\u00e9",
      "age": 28,
      "position": "DEF",
      "rating": 80,
      "club": "Barcelona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Maxence Lacroix",
      "age": 26,
      "position": "DEF",
      "rating": 79,
      "club": "Crystal Palace",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "William Saliba",
      "age": 28,
      "position": "DEF",
      "rating": 90,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dayot Upamecano",
      "age": 27,
      "position": "DEF",
      "rating": 76,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "N'Golo Kant\u00e9",
      "age": 33,
      "position": "MID",
      "rating": 84,
      "club": "Fenerbah\u00e7e",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Manu Kon\u00e9",
      "age": 28,
      "position": "MID",
      "rating": 84,
      "club": "AS Roma",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Adrien Rabiot",
      "age": 22,
      "position": "MID",
      "rating": 82,
      "club": "AC Milan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Aur\u00e9lien Tchouam\u00e9ni",
      "age": 22,
      "position": "MID",
      "rating": 83,
      "club": "Real Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Warren Za\u00efre-Emery",
      "age": 27,
      "position": "MID",
      "rating": 77,
      "club": "Paris Saint-Germain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Maghnes Akliouche",
      "age": 25,
      "position": "FWD",
      "rating": 91,
      "club": "AS Monaco",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Bradley Barcola",
      "age": 20,
      "position": "FWD",
      "rating": 84,
      "club": "Paris Saint-Germain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rayan Cherki",
      "age": 32,
      "position": "FWD",
      "rating": 83,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ousmane Demb\u00e9l\u00e9",
      "age": 30,
      "position": "FWD",
      "rating": 78,
      "club": "Paris Saint-Germain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "D\u00e9sir\u00e9 Dou\u00e9",
      "age": 22,
      "position": "FWD",
      "rating": 78,
      "club": "Paris Saint-Germain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jean-Philippe Mateta",
      "age": 31,
      "position": "FWD",
      "rating": 78,
      "club": "Crystal Palace",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kylian Mbapp\u00e9",
      "age": 20,
      "position": "FWD",
      "rating": 93,
      "club": "Real Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Michael Olise",
      "age": 29,
      "position": "FWD",
      "rating": 80,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marcus Thuram",
      "age": 27,
      "position": "FWD",
      "rating": 76,
      "club": "Internazionale",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "SEN": [
    {
      "name": "Mendy",
      "age": 27,
      "position": "GK",
      "rating": 77,
      "club": "Al Ahli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mory Diaw",
      "age": 29,
      "position": "GK",
      "rating": 72,
      "club": "Le Havre AC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yehvann Diouf",
      "age": 27,
      "position": "GK",
      "rating": 71,
      "club": "OGC Nice",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kr\u00e9pin Diatta",
      "age": 24,
      "position": "DEF",
      "rating": 76,
      "club": "AS Monaco",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Antoine Mendy",
      "age": 25,
      "position": "DEF",
      "rating": 75,
      "club": "OGC Nice",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kalidou Koulibaly",
      "age": 31,
      "position": "DEF",
      "rating": 74,
      "club": "Al Hilal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "El Hadji Malick Diouf",
      "age": 34,
      "position": "DEF",
      "rating": 74,
      "club": "West Ham United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mamadou Sarr",
      "age": 23,
      "position": "DEF",
      "rating": 78,
      "club": "Chelsea",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Moussa Niakhat\u00e9",
      "age": 34,
      "position": "DEF",
      "rating": 71,
      "club": "Lyon",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Moustapha Mbow",
      "age": 29,
      "position": "DEF",
      "rating": 73,
      "club": "Paris FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Abdoulaye Seck",
      "age": 34,
      "position": "DEF",
      "rating": 74,
      "club": "Maccabi Haifa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ismail Jakobs",
      "age": 29,
      "position": "DEF",
      "rating": 74,
      "club": "Galatasaray",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ilay Camara",
      "age": 32,
      "position": "DEF",
      "rating": 74,
      "club": "Anderlecht",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Idrissa Gana Gueye",
      "age": 30,
      "position": "MID",
      "rating": 85,
      "club": "Everton",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Pape Gueye",
      "age": 31,
      "position": "MID",
      "rating": 75,
      "club": "Villarreal CF",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lamine Camara",
      "age": 23,
      "position": "MID",
      "rating": 75,
      "club": "AS Monaco",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Habib Diarra",
      "age": 22,
      "position": "MID",
      "rating": 76,
      "club": "Sunderland",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Path\u00e9 Ciss",
      "age": 28,
      "position": "MID",
      "rating": 73,
      "club": "Rayo Vallecano",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Pape Matar Sarr",
      "age": 33,
      "position": "MID",
      "rating": 72,
      "club": "Tottenham Hotspur",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Bara Sapoko Ndiaye",
      "age": 30,
      "position": "MID",
      "rating": 72,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sadio Man\u00e9",
      "age": 24,
      "position": "FWD",
      "rating": 75,
      "club": "Al Nassr",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Isma\u00efla Sarr",
      "age": 20,
      "position": "FWD",
      "rating": 77,
      "club": "Crystal Palace",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Iliman Ndiaye",
      "age": 26,
      "position": "FWD",
      "rating": 75,
      "club": "Everton",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Assane Diao",
      "age": 19,
      "position": "FWD",
      "rating": 73,
      "club": "Como",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ibrahim Mbaye",
      "age": 24,
      "position": "FWD",
      "rating": 70,
      "club": "Paris Saint-Germian",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nicolas Jackson",
      "age": 20,
      "position": "FWD",
      "rating": 72,
      "club": "Chelsea",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Bamba Dieng",
      "age": 28,
      "position": "FWD",
      "rating": 70,
      "club": "Lorient",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Cherif Ndiaye",
      "age": 27,
      "position": "FWD",
      "rating": 74,
      "club": "Samsunspor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "NOR": [
    {
      "name": "Nyland",
      "age": 31,
      "position": "GK",
      "rating": 69,
      "club": "Sevilla",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Egil Selvik",
      "age": 32,
      "position": "GK",
      "rating": 68,
      "club": "Watford",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sander Tangvik",
      "age": 31,
      "position": "GK",
      "rating": 64,
      "club": "Hamburg SV",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Julian Ryerson",
      "age": 32,
      "position": "DEF",
      "rating": 77,
      "club": "Borussia Dortmund",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kristoffer Ajer",
      "age": 27,
      "position": "DEF",
      "rating": 67,
      "club": "Brentford",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Leo \u00d8stig\u00e5rd",
      "age": 29,
      "position": "DEF",
      "rating": 70,
      "club": "Genoa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "David M\u00f8ller Wolfe",
      "age": 24,
      "position": "DEF",
      "rating": 70,
      "club": "Wolverhampton Wanderers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marcus Pedersen",
      "age": 29,
      "position": "DEF",
      "rating": 66,
      "club": "Torino",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Torbj\u00f8rn Heggem",
      "age": 34,
      "position": "DEF",
      "rating": 64,
      "club": "Bologna",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Fredrik Andr\u00e9 Bj\u00f8rkan",
      "age": 33,
      "position": "DEF",
      "rating": 66,
      "club": "Bod\u00f8/Glimt",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Henrik Falchener",
      "age": 30,
      "position": "DEF",
      "rating": 64,
      "club": "Viking",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sondre Lang\u00e5s",
      "age": 22,
      "position": "DEF",
      "rating": 65,
      "club": "Derby County",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Martin \u00d8degaard",
      "age": 32,
      "position": "MID",
      "rating": 89,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sander Berge",
      "age": 28,
      "position": "MID",
      "rating": 69,
      "club": "Fulham",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Patrick Berg",
      "age": 29,
      "position": "MID",
      "rating": 70,
      "club": "Bod\u00f8/Glimt",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kristian Thorstvedt",
      "age": 23,
      "position": "MID",
      "rating": 70,
      "club": "Sassuolo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Morten Thorsby",
      "age": 26,
      "position": "MID",
      "rating": 66,
      "club": "Cremonese",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Thelo Aasgaard",
      "age": 27,
      "position": "MID",
      "rating": 66,
      "club": "Rangers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Andreas Schjelderup",
      "age": 33,
      "position": "MID",
      "rating": 67,
      "club": "Benfica",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jens Petter Hauge",
      "age": 31,
      "position": "MID",
      "rating": 66,
      "club": "Bod\u00f8/Glimt",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Fredrik Aursnes",
      "age": 21,
      "position": "MID",
      "rating": 68,
      "club": "Benfica",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Oscar Bobb",
      "age": 22,
      "position": "MID",
      "rating": 66,
      "club": "Fulham",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Antonio Nusa",
      "age": 22,
      "position": "MID",
      "rating": 66,
      "club": "RB Leipzig",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Erling Haaland",
      "age": 29,
      "position": "FWD",
      "rating": 91,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alexander S\u00f8rloth",
      "age": 23,
      "position": "FWD",
      "rating": 69,
      "club": "Atl\u00e9tico Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "J\u00f8rgen Strand Larsen",
      "age": 30,
      "position": "FWD",
      "rating": 68,
      "club": "Crystal Palace",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "ARG": [
    {
      "name": "Emiliano Mart\u00ednez",
      "age": 37,
      "position": "GK",
      "rating": 84,
      "club": "Aston Villa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ger\u00f3nimo Rulli",
      "age": 29,
      "position": "GK",
      "rating": 77,
      "club": "Marseille",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Juan Musso",
      "age": 33,
      "position": "GK",
      "rating": 76,
      "club": "Atl\u00e9tico Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gonzalo Montiel",
      "age": 24,
      "position": "DEF",
      "rating": 92,
      "club": "River Plate",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nahuel Molina",
      "age": 26,
      "position": "DEF",
      "rating": 82,
      "club": "Atl\u00e9tico Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lisandro Mart\u00ednez",
      "age": 24,
      "position": "DEF",
      "rating": 83,
      "club": "Manchester United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nicol\u00e1s Otamendi",
      "age": 33,
      "position": "DEF",
      "rating": 84,
      "club": "Benfica",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Leonardo Balerdi",
      "age": 26,
      "position": "DEF",
      "rating": 80,
      "club": "Marseille",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Cristian Romero",
      "age": 28,
      "position": "DEF",
      "rating": 80,
      "club": "Tottenham",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Facundo Medina",
      "age": 24,
      "position": "DEF",
      "rating": 78,
      "club": "Marseille",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nicol\u00e1s Tagliafico",
      "age": 23,
      "position": "DEF",
      "rating": 80,
      "club": "Lyon",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Leandro Paredes",
      "age": 31,
      "position": "MID",
      "rating": 92,
      "club": "Boca Juniors",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rodrigo De Paul",
      "age": 29,
      "position": "MID",
      "rating": 92,
      "club": "Inter Miami",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Exequiel Palacios",
      "age": 21,
      "position": "MID",
      "rating": 82,
      "club": "Bayer Leverkusen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Enzo Fern\u00e1ndez",
      "age": 25,
      "position": "MID",
      "rating": 82,
      "club": "Chelsea",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alexis Mac Allister",
      "age": 24,
      "position": "MID",
      "rating": 77,
      "club": "Liverpool",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Giovani Lo Celso",
      "age": 33,
      "position": "MID",
      "rating": 78,
      "club": "Real Betis",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Valent\u00edn Barco",
      "age": 24,
      "position": "MID",
      "rating": 79,
      "club": "Strasbourg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lionel Messi",
      "age": 21,
      "position": "FWD",
      "rating": 91,
      "club": "Inter Miami",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nico Paz",
      "age": 20,
      "position": "FWD",
      "rating": 81,
      "club": "Como",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Thiago Almada",
      "age": 32,
      "position": "FWD",
      "rating": 82,
      "club": "Atl\u00e9tico Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nicol\u00e1s Gonz\u00e1lez",
      "age": 27,
      "position": "FWD",
      "rating": 76,
      "club": "Atletico Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Giuliano Simeone",
      "age": 32,
      "position": "FWD",
      "rating": 80,
      "club": "Atl\u00e9tico Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Lautaro Mart\u00ednez",
      "age": 19,
      "position": "FWD",
      "rating": 89,
      "club": "Internazionale",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jose Manuel L\u00f3pez",
      "age": 33,
      "position": "FWD",
      "rating": 78,
      "club": "Palmeiras",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Juli\u00e1n \u00c1lvarez",
      "age": 21,
      "position": "FWD",
      "rating": 86,
      "club": "Atl\u00e9tico Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "ALG": [
    {
      "name": "Oussama Benbot",
      "age": 30,
      "position": "GK",
      "rating": 70,
      "club": "USM Alger",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Melvin Masstil",
      "age": 26,
      "position": "GK",
      "rating": 65,
      "club": "Stade Nyonnaise",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Luca Zidane",
      "age": 37,
      "position": "GK",
      "rating": 65,
      "club": "Granada",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Achraf Abada",
      "age": 34,
      "position": "DEF",
      "rating": 77,
      "club": "USM Alger",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rayan Ait Nouri",
      "age": 33,
      "position": "DEF",
      "rating": 67,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Zinedine Belaid",
      "age": 22,
      "position": "DEF",
      "rating": 69,
      "club": "JS Kabylie",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rafik Belghali",
      "age": 27,
      "position": "DEF",
      "rating": 69,
      "club": "Verona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ramy Bensebaini",
      "age": 33,
      "position": "DEF",
      "rating": 71,
      "club": "Borussia Dortmund",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Samir Chergui",
      "age": 29,
      "position": "DEF",
      "rating": 65,
      "club": "Paris FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jaouen Hadjam",
      "age": 26,
      "position": "DEF",
      "rating": 68,
      "club": "Young Boys",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Aissa Mandi",
      "age": 25,
      "position": "DEF",
      "rating": 67,
      "club": "Lille",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohamed Amine Tougai",
      "age": 25,
      "position": "DEF",
      "rating": 68,
      "club": "Esperance",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Houssem Aouar",
      "age": 33,
      "position": "MID",
      "rating": 72,
      "club": "Al Ittihad",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nabil Bentaleb",
      "age": 28,
      "position": "MID",
      "rating": 72,
      "club": "Lille",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Hicham Boudaoui",
      "age": 24,
      "position": "MID",
      "rating": 72,
      "club": "Nice",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Fares Chaibi",
      "age": 31,
      "position": "MID",
      "rating": 68,
      "club": "Eintracht Frankfurt",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ibrahim Maza",
      "age": 28,
      "position": "MID",
      "rating": 68,
      "club": "Bayer Leverkusen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yassine Titraoui",
      "age": 33,
      "position": "MID",
      "rating": 67,
      "club": "Charleroi",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ramiz Zerrouki",
      "age": 33,
      "position": "MID",
      "rating": 66,
      "club": "FC Twente",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohamed Amine Amoura",
      "age": 27,
      "position": "FWD",
      "rating": 74,
      "club": "VfL Wolfsburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nadir Benbouali",
      "age": 25,
      "position": "FWD",
      "rating": 70,
      "club": "Gy\u0151ri ETO",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Adil Boulbina",
      "age": 32,
      "position": "FWD",
      "rating": 67,
      "club": "Al Duhail",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Fares Ghedjemis",
      "age": 31,
      "position": "FWD",
      "rating": 65,
      "club": "Frosinone",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Amine Gouiri",
      "age": 21,
      "position": "FWD",
      "rating": 68,
      "club": "Marseille",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Riyad Mahrez",
      "age": 19,
      "position": "FWD",
      "rating": 66,
      "club": "Al Ahli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Anis Hadj Moussa",
      "age": 32,
      "position": "FWD",
      "rating": 67,
      "club": "Feyenoord",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "AUT": [
    {
      "name": "Alexander Schlager",
      "age": 32,
      "position": "GK",
      "rating": 75,
      "club": "RB Salzburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Florian Wiegele",
      "age": 35,
      "position": "GK",
      "rating": 70,
      "club": "Viktoria Plzen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Patrick Pentz",
      "age": 37,
      "position": "GK",
      "rating": 74,
      "club": "Brondby",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "David Affengruber",
      "age": 26,
      "position": "DEF",
      "rating": 76,
      "club": "Elche",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kevin Danso",
      "age": 34,
      "position": "DEF",
      "rating": 73,
      "club": "Tottehham",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Stefan Posch",
      "age": 26,
      "position": "DEF",
      "rating": 74,
      "club": "Mainz 05",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "David Alaba",
      "age": 30,
      "position": "DEF",
      "rating": 76,
      "club": "Real Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Philipp Lienhart",
      "age": 28,
      "position": "DEF",
      "rating": 74,
      "club": "SC Freiburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Philipp Mwene",
      "age": 25,
      "position": "DEF",
      "rating": 70,
      "club": "Mainz 05",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alexander Prass",
      "age": 27,
      "position": "DEF",
      "rating": 73,
      "club": "TSG Hoffenheim",
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
      "age": 28,
      "position": "DEF",
      "rating": 70,
      "club": "Venezia",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Xaver Schlager",
      "age": 26,
      "position": "MID",
      "rating": 83,
      "club": "RB Leipzig",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nicolas Seiwald",
      "age": 27,
      "position": "MID",
      "rating": 74,
      "club": "RB Leipzig",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marcel Sabitzer",
      "age": 26,
      "position": "MID",
      "rating": 73,
      "club": "Borussia Dortmund",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Florian Grillitsch",
      "age": 21,
      "position": "MID",
      "rating": 74,
      "club": "Braga",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Carney Chukwuemeka",
      "age": 22,
      "position": "MID",
      "rating": 72,
      "club": "Borussia Dortmund",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Romano Schmid",
      "age": 33,
      "position": "MID",
      "rating": 72,
      "club": "Werder Bremen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Christoph Baumgartner",
      "age": 23,
      "position": "MID",
      "rating": 71,
      "club": "RB Leipzig",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Konrad Laimer",
      "age": 25,
      "position": "MID",
      "rating": 70,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Patrick Wimmer",
      "age": 32,
      "position": "MID",
      "rating": 73,
      "club": "Wolfsburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Paul Wanner",
      "age": 33,
      "position": "MID",
      "rating": 71,
      "club": "PSV Eindhoven",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alessandro Schopf",
      "age": 28,
      "position": "MID",
      "rating": 73,
      "club": "Wolfsberger AC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marko Arnautovic",
      "age": 19,
      "position": "FWD",
      "rating": 84,
      "club": "Red Star Belgrade",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Michael Gregoritsch",
      "age": 19,
      "position": "FWD",
      "rating": 73,
      "club": "FC Augsburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sasa Kalajdzic",
      "age": 22,
      "position": "FWD",
      "rating": 75,
      "club": "LASK Linz",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "JOR": [
    {
      "name": "Yazid Abulaila",
      "age": 26,
      "position": "GK",
      "rating": 64,
      "club": "Al-Hussein",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Abdallah Al-Fakhouri",
      "age": 35,
      "position": "GK",
      "rating": 59,
      "club": "Al-Wehdat",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ahmad Al-Juiadi",
      "age": 32,
      "position": "GK",
      "rating": 59,
      "club": "Shabab Al-Ordon",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nour Bani Attiah",
      "age": 25,
      "position": "GK",
      "rating": 58,
      "club": "Al-Faisaly",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohammad Abualnadi",
      "age": 26,
      "position": "DEF",
      "rating": 72,
      "club": "Selangor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yousef Abu Al-Jazar",
      "age": 26,
      "position": "DEF",
      "rating": 59,
      "club": "Al-Hussein",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Husam Abu Dahab",
      "age": 22,
      "position": "DEF",
      "rating": 58,
      "club": "Al-Faisaly",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohammed Abu Hashish",
      "age": 28,
      "position": "DEF",
      "rating": 59,
      "club": "Al-Karma",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohannad Abu Taha",
      "age": 34,
      "position": "DEF",
      "rating": 63,
      "club": "Al-Quwa Al-Jawiya",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yazan Al-Arab",
      "age": 29,
      "position": "DEF",
      "rating": 59,
      "club": "FC Seoul",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Saed Al-Rosna",
      "age": 23,
      "position": "DEF",
      "rating": 55,
      "club": "Al-Hussein",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ahmad Assaf",
      "age": 31,
      "position": "DEF",
      "rating": 58,
      "club": "Al-Hussein",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Anas Badawi",
      "age": 22,
      "position": "DEF",
      "rating": 59,
      "club": "Al-Faisaly",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Abdallah Nasib",
      "age": 30,
      "position": "DEF",
      "rating": 60,
      "club": "Al-Zawraa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ehsan Haddad",
      "age": 25,
      "position": "DEF",
      "rating": 59,
      "club": "Al-Hussein",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Saleem Obaid",
      "age": 24,
      "position": "DEF",
      "rating": 60,
      "club": "Al-Hussein",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohammad Abu Taha",
      "age": 28,
      "position": "DEF",
      "rating": 57,
      "club": "Al-Quwa Al-Jawiya",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohammed Al-Dawoud",
      "age": 30,
      "position": "MID",
      "rating": 60,
      "club": "Al-Wehdat",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nizar Al-Rashdan",
      "age": 24,
      "position": "MID",
      "rating": 60,
      "club": "Qatar SC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Noor Al-Rawabdeh",
      "age": 27,
      "position": "MID",
      "rating": 62,
      "club": "Selangor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rajaei Ayed",
      "age": 31,
      "position": "MID",
      "rating": 59,
      "club": "Al-Hussein",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Amer Jamous",
      "age": 22,
      "position": "MID",
      "rating": 60,
      "club": "Al-Zawraa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yousef Qashi",
      "age": 26,
      "position": "MID",
      "rating": 59,
      "club": "Al-Hussein",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ibrahim Sadeh",
      "age": 29,
      "position": "MID",
      "rating": 55,
      "club": "Al-Karma",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mohammed Abu Zraiq",
      "age": 27,
      "position": "FWD",
      "rating": 68,
      "club": "Raja Casablanca",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mousa Al-Tamari",
      "age": 27,
      "position": "FWD",
      "rating": 64,
      "club": "Rennes",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ali Azaizeh",
      "age": 19,
      "position": "FWD",
      "rating": 62,
      "club": "Al-Shabab",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Odeh Al-Fakhouri",
      "age": 32,
      "position": "FWD",
      "rating": 58,
      "club": "Pyramids",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ali Olwan",
      "age": 19,
      "position": "FWD",
      "rating": 58,
      "club": "Al-Sailiaya",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ibrahim Sabra",
      "age": 25,
      "position": "FWD",
      "rating": 60,
      "club": "Lokomotiva Zagreb",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "POR": [
    {
      "name": "Diogo Costa",
      "age": 28,
      "position": "GK",
      "rating": 82,
      "club": "Porto",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jos\u00e9 S\u00e1",
      "age": 29,
      "position": "GK",
      "rating": 76,
      "club": "Wolverhampton Wanderers",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rui Silva",
      "age": 29,
      "position": "GK",
      "rating": 76,
      "club": "Sporting Lisbon",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ricardo Velho",
      "age": 35,
      "position": "GK",
      "rating": 77,
      "club": "Gen\u00e7lerbirli\u011fi",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "R\u00faben Dias",
      "age": 32,
      "position": "DEF",
      "rating": 92,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jo\u00e3o Cancelo",
      "age": 34,
      "position": "DEF",
      "rating": 80,
      "club": "Barcelona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Diogo Dalot",
      "age": 33,
      "position": "DEF",
      "rating": 84,
      "club": "Manchester United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nuno Mendes",
      "age": 24,
      "position": "DEF",
      "rating": 82,
      "club": "Paris Saint-Germain",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "N\u00e9lson Semedo",
      "age": 27,
      "position": "DEF",
      "rating": 80,
      "club": "Fenerbahce",
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
      "name": "Gon\u00e7alo Inacio",
      "age": 34,
      "position": "DEF",
      "rating": 77,
      "club": "Sporting Lisbon",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Renato Veiga",
      "age": 33,
      "position": "DEF",
      "rating": 79,
      "club": "Villarreal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tom\u00e1s Ara\u00fajo",
      "age": 32,
      "position": "DEF",
      "rating": 79,
      "club": "Benfica",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Bruno Fernandes",
      "age": 33,
      "position": "MID",
      "rating": 88,
      "club": "Manchester United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Bernardo Silva",
      "age": 22,
      "position": "MID",
      "rating": 88,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Vitinha",
      "age": 21,
      "position": "MID",
      "rating": 83,
      "club": "PSG",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jo\u00e3o Neves",
      "age": 24,
      "position": "MID",
      "rating": 82,
      "club": "PSG",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "R\u00faben Neves",
      "age": 33,
      "position": "MID",
      "rating": 76,
      "club": "Al Hilal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sam\u00fa Costa",
      "age": 21,
      "position": "MID",
      "rating": 77,
      "club": "Mallorca",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Cristiano Ronaldo",
      "age": 33,
      "position": "FWD",
      "rating": 87,
      "club": "Al Nassr",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rafael Le\u00e3o",
      "age": 27,
      "position": "FWD",
      "rating": 82,
      "club": "AC Milan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jo\u00e3o F\u00e9lix",
      "age": 32,
      "position": "FWD",
      "rating": 83,
      "club": "Al Nassr",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gon\u00e7alo Ramos",
      "age": 26,
      "position": "FWD",
      "rating": 80,
      "club": "PSG",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Pedro Neto",
      "age": 19,
      "position": "FWD",
      "rating": 78,
      "club": "Chelsea",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Francisco Concei\u00e7\u00e3o",
      "age": 23,
      "position": "FWD",
      "rating": 77,
      "club": "Juventus",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gon\u00e7alo Guedes",
      "age": 32,
      "position": "FWD",
      "rating": 78,
      "club": "Real Sociedad",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Francisco Trinc\u00e3o",
      "age": 32,
      "position": "FWD",
      "rating": 76,
      "club": "Sporting Lisbon",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "COD": [
    {
      "name": "Lionel Mpasi",
      "age": 29,
      "position": "GK",
      "rating": 71,
      "club": "Le Havre",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Timothy Fayulu",
      "age": 25,
      "position": "GK",
      "rating": 66,
      "club": "FC Noah",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Matthieu Epolo",
      "age": 30,
      "position": "GK",
      "rating": 66,
      "club": "Standard Liege",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Chancel Mbemba",
      "age": 33,
      "position": "DEF",
      "rating": 74,
      "club": "Lille",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Axel Tuanzebe",
      "age": 28,
      "position": "DEF",
      "rating": 69,
      "club": "Burnley",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Arthur Masuaku",
      "age": 24,
      "position": "DEF",
      "rating": 68,
      "club": "Lens",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gedeon Kalulu",
      "age": 33,
      "position": "DEF",
      "rating": 69,
      "club": "Aris Limassol",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Joris Kayembe",
      "age": 27,
      "position": "DEF",
      "rating": 69,
      "club": "Genk",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Aaron Wan-Bissaka",
      "age": 26,
      "position": "DEF",
      "rating": 68,
      "club": "West Ham United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Aaron Tshibola",
      "age": 33,
      "position": "DEF",
      "rating": 64,
      "club": "Kilmarnock",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Steve Kapuadi",
      "age": 23,
      "position": "DEF",
      "rating": 67,
      "club": "Widzew \u0141\u00f3d\u017a",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dylan Batubinsika",
      "age": 31,
      "position": "DEF",
      "rating": 67,
      "club": "AEL",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Noah Sadiki",
      "age": 29,
      "position": "MID",
      "rating": 70,
      "club": "Sunderland",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Charles Pickel",
      "age": 26,
      "position": "MID",
      "rating": 68,
      "club": "Espanyol",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Edo Kayembe",
      "age": 22,
      "position": "MID",
      "rating": 66,
      "club": "Watford",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Samuel Moutoussamy",
      "age": 31,
      "position": "MID",
      "rating": 68,
      "club": "Atromitos",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ngal'ayel Mukau",
      "age": 25,
      "position": "MID",
      "rating": 66,
      "club": "Lille",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nathana\u00ebl Mbuku",
      "age": 30,
      "position": "MID",
      "rating": 67,
      "club": "Montpellier",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Meschak Elia",
      "age": 23,
      "position": "MID",
      "rating": 67,
      "club": "Alanyaspor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Brian Cipenga",
      "age": 26,
      "position": "MID",
      "rating": 67,
      "club": "Castell\u00f3n",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ga\u00ebl Kakuta",
      "age": 21,
      "position": "MID",
      "rating": 67,
      "club": "AEL",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Th\u00e9o Bongonda",
      "age": 30,
      "position": "MID",
      "rating": 66,
      "club": "Spartak Moscow",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Simon Banza",
      "age": 23,
      "position": "FWD",
      "rating": 74,
      "club": "Al Jazira",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yoane Wissa",
      "age": 31,
      "position": "FWD",
      "rating": 71,
      "club": "Newcastle United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Fiston Mayele",
      "age": 20,
      "position": "FWD",
      "rating": 66,
      "club": "Pyramids FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "C\u00e9dric Bakambu",
      "age": 24,
      "position": "FWD",
      "rating": 67,
      "club": "Real Betis",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "UZB": [
    {
      "name": "Vladimir Nazarov",
      "age": 36,
      "position": "GK",
      "rating": 62,
      "club": "Pakhtakor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Utkir Yusupov",
      "age": 34,
      "position": "GK",
      "rating": 60,
      "club": "Navbahor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Botirali Ergashev",
      "age": 24,
      "position": "GK",
      "rating": 56,
      "club": "AGMK",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Abduvokhid Nematov",
      "age": 37,
      "position": "GK",
      "rating": 56,
      "club": "Nasaf",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ibrohimkhalil Yuldoshev",
      "age": 32,
      "position": "DEF",
      "rating": 69,
      "club": "Neftchi",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Avazbek Ulmasaliev",
      "age": 29,
      "position": "DEF",
      "rating": 64,
      "club": "AGMK",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jakhongir Urozov",
      "age": 24,
      "position": "DEF",
      "rating": 58,
      "club": "Dinamo Samarqand",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Rustamjon Ashurmatov",
      "age": 25,
      "position": "DEF",
      "rating": 58,
      "club": "Esteghlal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mukhammadkodir Hamraliev",
      "age": 32,
      "position": "DEF",
      "rating": 64,
      "club": "Pakhtakor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Umarbek Eshmurodov",
      "age": 27,
      "position": "DEF",
      "rating": 57,
      "club": "Nasaf",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Abdukodir Khusanov",
      "age": 31,
      "position": "DEF",
      "rating": 58,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Abdulla Abdullaev",
      "age": 31,
      "position": "DEF",
      "rating": 55,
      "club": "Dibba Al Fujairah",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Farrukh Sayfiev",
      "age": 32,
      "position": "DEF",
      "rating": 56,
      "club": "Neftchi",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Khojiakbar Alijonov",
      "age": 27,
      "position": "DEF",
      "rating": 58,
      "club": "Pakhtakor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sherzod Nasrullaev",
      "age": 29,
      "position": "DEF",
      "rating": 57,
      "club": "Nasaf",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Muhammadrasul Abdumajidov",
      "age": 31,
      "position": "DEF",
      "rating": 55,
      "club": "Pakhtakor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Behruz Karimov",
      "age": 30,
      "position": "DEF",
      "rating": 56,
      "club": "Surkhon",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Diyor Ortikboev",
      "age": 28,
      "position": "DEF",
      "rating": 57,
      "club": "Khorazm",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kuvondik Ruziev",
      "age": 31,
      "position": "MID",
      "rating": 65,
      "club": "Neftchi",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sherzod Esanov",
      "age": 24,
      "position": "MID",
      "rating": 60,
      "club": "Buxoro",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nodirbek Abdurazzokov",
      "age": 21,
      "position": "MID",
      "rating": 58,
      "club": "AGMK",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Odiljon Khamrobekov",
      "age": 23,
      "position": "MID",
      "rating": 63,
      "club": "Tractor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Umarali Rakhmonaliev",
      "age": 29,
      "position": "MID",
      "rating": 58,
      "club": "Sabah",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alisher Odilov",
      "age": 29,
      "position": "MID",
      "rating": 58,
      "club": "Neftchi",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sardorbek Rakhmonov",
      "age": 25,
      "position": "MID",
      "rating": 55,
      "club": "Nasaf",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Akmal Mozgovoy",
      "age": 32,
      "position": "MID",
      "rating": 57,
      "club": "Pakhtakor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Otabek Shukurov",
      "age": 24,
      "position": "MID",
      "rating": 58,
      "club": "Baniyas",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jamshid Iskanderov",
      "age": 25,
      "position": "MID",
      "rating": 59,
      "club": "Neftchi",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jasurbek Jaloliddinov",
      "age": 28,
      "position": "MID",
      "rating": 60,
      "club": "Sogdiana",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Azizjon Ganiev",
      "age": 22,
      "position": "MID",
      "rating": 56,
      "club": "Al Bataeh",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Abbosek Fayzullaev",
      "age": 32,
      "position": "FWD",
      "rating": 62,
      "club": "Istanbul Basaksehir",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jaloliddin Masharipov",
      "age": 26,
      "position": "FWD",
      "rating": 58,
      "club": "Esteghlal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dostonbek Khamdamov",
      "age": 33,
      "position": "FWD",
      "rating": 59,
      "club": "Pakhtakor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Oston Urunov",
      "age": 26,
      "position": "FWD",
      "rating": 60,
      "club": "Persepolis",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ruslanbek Jiyanov",
      "age": 31,
      "position": "FWD",
      "rating": 55,
      "club": "Navbahor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Azizbek Amonov",
      "age": 32,
      "position": "FWD",
      "rating": 60,
      "club": "Buxoro",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Khusain Norchaev",
      "age": 29,
      "position": "FWD",
      "rating": 57,
      "club": "Navbahor",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Sherzod Temirov",
      "age": 30,
      "position": "FWD",
      "rating": 57,
      "club": "Erbil",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Igor Sergeev",
      "age": 27,
      "position": "FWD",
      "rating": 55,
      "club": "Persepolis",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Eldor Shomurodov",
      "age": 23,
      "position": "FWD",
      "rating": 59,
      "club": "Istanbul Basaksehir",
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
      "rating": 75,
      "club": "Atl\u00e9tico Nacional",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Montero",
      "age": 35,
      "position": "GK",
      "rating": 71,
      "club": "V\u00e9lez Sarsfield",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Camilo Vargas",
      "age": 36,
      "position": "GK",
      "rating": 71,
      "club": "Atlas",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Daniel Mu\u00f1oz",
      "age": 30,
      "position": "DEF",
      "rating": 80,
      "club": "Crystal Palace",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jhon Lucum\u00ed",
      "age": 23,
      "position": "DEF",
      "rating": 74,
      "club": "Bologna",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Santiago Arias",
      "age": 34,
      "position": "DEF",
      "rating": 74,
      "club": "Independiente",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Davinson S\u00e1nchez",
      "age": 25,
      "position": "DEF",
      "rating": 74,
      "club": "Galatasaray",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Johan Mojica",
      "age": 22,
      "position": "DEF",
      "rating": 76,
      "club": "Mallorca",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yerry Mina",
      "age": 30,
      "position": "DEF",
      "rating": 72,
      "club": "Cagliari",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Willer Ditta",
      "age": 27,
      "position": "DEF",
      "rating": 74,
      "club": "Cruz Azul",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Deiver Machado",
      "age": 34,
      "position": "DEF",
      "rating": 73,
      "club": "Nantes",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jorge Carrascal",
      "age": 23,
      "position": "MID",
      "rating": 83,
      "club": "Flamengo",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kevin Casta\u00f1o",
      "age": 22,
      "position": "MID",
      "rating": 77,
      "club": "River Plate",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Gustavo Puerta",
      "age": 25,
      "position": "MID",
      "rating": 73,
      "club": "Racing Santander",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Juan Fernando Quintero",
      "age": 32,
      "position": "MID",
      "rating": 76,
      "club": "River Plate",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Juan Portilla",
      "age": 29,
      "position": "MID",
      "rating": 73,
      "club": "Athletico Paranaense",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jefferson Lerma",
      "age": 33,
      "position": "MID",
      "rating": 73,
      "club": "Crystal Palace",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Richard R\u00edos",
      "age": 30,
      "position": "MID",
      "rating": 73,
      "club": "Benfica",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jhon Arias",
      "age": 23,
      "position": "MID",
      "rating": 70,
      "club": "Palmeiras",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "James Rodr\u00edguez",
      "age": 31,
      "position": "MID",
      "rating": 72,
      "club": "Minnesota United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jaminton Campaz",
      "age": 28,
      "position": "MID",
      "rating": 70,
      "club": "Rosario Central",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Luis D\u00edaz",
      "age": 29,
      "position": "FWD",
      "rating": 85,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jhon C\u00f3rdoba",
      "age": 24,
      "position": "FWD",
      "rating": 77,
      "club": "Krasnodar",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Luis Su\u00e1rez",
      "age": 33,
      "position": "FWD",
      "rating": 74,
      "club": "Sporting CP",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Andr\u00e9s G\u00f3mez",
      "age": 29,
      "position": "FWD",
      "rating": 74,
      "club": "Vasco da Gama",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Cucho Hern\u00e1ndez",
      "age": 21,
      "position": "FWD",
      "rating": 74,
      "club": "Real Betis",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "ENG": [
    {
      "name": "Jordan Pickford",
      "age": 30,
      "position": "GK",
      "rating": 81,
      "club": "Everton",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dean Henderson",
      "age": 37,
      "position": "GK",
      "rating": 80,
      "club": "Crystal Palace",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "James Trafford",
      "age": 37,
      "position": "GK",
      "rating": 76,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Reece James",
      "age": 30,
      "position": "DEF",
      "rating": 83,
      "club": "Chelsea",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ezri Konsa",
      "age": 26,
      "position": "DEF",
      "rating": 81,
      "club": "Aston Villa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jarell Quansah",
      "age": 24,
      "position": "DEF",
      "rating": 81,
      "club": "Bayer Leverkusen",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "John Stones",
      "age": 33,
      "position": "DEF",
      "rating": 82,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marc Gu\u00e9hi",
      "age": 27,
      "position": "DEF",
      "rating": 81,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dan Burn",
      "age": 26,
      "position": "DEF",
      "rating": 80,
      "club": "Newcastle United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nico O'Reilly",
      "age": 26,
      "position": "DEF",
      "rating": 76,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Djed Spence",
      "age": 32,
      "position": "DEF",
      "rating": 77,
      "club": "Tottenham Hotspur",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tino Livramento",
      "age": 26,
      "position": "DEF",
      "rating": 80,
      "club": "Newcastle United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Declan Rice",
      "age": 31,
      "position": "MID",
      "rating": 88,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Elliot Anderson",
      "age": 30,
      "position": "MID",
      "rating": 82,
      "club": "Nottingham Forest",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kobbie Mainoo",
      "age": 22,
      "position": "MID",
      "rating": 84,
      "club": "Manchester United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jordan Henderson",
      "age": 31,
      "position": "MID",
      "rating": 84,
      "club": "Brentford",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Morgan Rogers",
      "age": 30,
      "position": "MID",
      "rating": 77,
      "club": "Aston Villa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jude Bellingham",
      "age": 23,
      "position": "MID",
      "rating": 91,
      "club": "Real Madrid",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Eberechi Eze",
      "age": 31,
      "position": "MID",
      "rating": 77,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Harry Kane",
      "age": 30,
      "position": "FWD",
      "rating": 89,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ivan Toney",
      "age": 24,
      "position": "FWD",
      "rating": 84,
      "club": "Al-Ahli",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ollie Watkins",
      "age": 19,
      "position": "FWD",
      "rating": 84,
      "club": "Aston Villa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Bukayo Saka",
      "age": 20,
      "position": "FWD",
      "rating": 89,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marcus Rashford",
      "age": 29,
      "position": "FWD",
      "rating": 76,
      "club": "Manchester United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Anthony Gordon",
      "age": 23,
      "position": "FWD",
      "rating": 80,
      "club": "Newcastle United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Noni Madueke",
      "age": 31,
      "position": "FWD",
      "rating": 77,
      "club": "Arsenal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "CRO": [
    {
      "name": "Dominik Livakovic",
      "age": 30,
      "position": "GK",
      "rating": 84,
      "club": "Dinamo Zagreb",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Dominik Kotarski",
      "age": 34,
      "position": "GK",
      "rating": 80,
      "club": "Kobenhavn",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ivor Pandur",
      "age": 31,
      "position": "GK",
      "rating": 76,
      "club": "Hull City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Josko Gvardiol",
      "age": 30,
      "position": "DEF",
      "rating": 92,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Duje Caleta-Car",
      "age": 32,
      "position": "DEF",
      "rating": 82,
      "club": "Real Sociedad",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Josip Sutalo",
      "age": 29,
      "position": "DEF",
      "rating": 82,
      "club": "Ajax",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Josip Stanisic",
      "age": 34,
      "position": "DEF",
      "rating": 81,
      "club": "Bayern Munich",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marin Pongracic",
      "age": 26,
      "position": "DEF",
      "rating": 83,
      "club": "Fiorentina",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Martin Erlic",
      "age": 23,
      "position": "DEF",
      "rating": 79,
      "club": "Midtjylland",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Luka Vuskovic",
      "age": 24,
      "position": "DEF",
      "rating": 76,
      "club": "Hamburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Luka Modric",
      "age": 27,
      "position": "MID",
      "rating": 89,
      "club": "AC Milan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mateo Kovacic",
      "age": 28,
      "position": "MID",
      "rating": 83,
      "club": "Manchester City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Mario Pasalic",
      "age": 26,
      "position": "MID",
      "rating": 81,
      "club": "Atalanta",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nikola Vlasic",
      "age": 23,
      "position": "MID",
      "rating": 84,
      "club": "Torino",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Luka Sucic",
      "age": 32,
      "position": "MID",
      "rating": 78,
      "club": "Real Sociedad",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Martin Baturina",
      "age": 32,
      "position": "MID",
      "rating": 78,
      "club": "Como",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Kristijan Jakic",
      "age": 27,
      "position": "MID",
      "rating": 78,
      "club": "Augsburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Petar Sucic",
      "age": 33,
      "position": "MID",
      "rating": 77,
      "club": "Inter Milan",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Nikola Moro",
      "age": 29,
      "position": "MID",
      "rating": 78,
      "club": "Bologna",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Toni Fruk",
      "age": 22,
      "position": "MID",
      "rating": 80,
      "club": "Rijeka",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ivan Perisic",
      "age": 22,
      "position": "FWD",
      "rating": 87,
      "club": "PSV Eindhoven",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Andrej Kramaric",
      "age": 20,
      "position": "FWD",
      "rating": 83,
      "club": "Hoffenheim",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ante Budimir",
      "age": 26,
      "position": "FWD",
      "rating": 82,
      "club": "Osasuna",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Marco Pasalic",
      "age": 21,
      "position": "FWD",
      "rating": 77,
      "club": "Orlando City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Petar Musa",
      "age": 19,
      "position": "FWD",
      "rating": 76,
      "club": "FC Dallas",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Igor Matanovic",
      "age": 25,
      "position": "FWD",
      "rating": 78,
      "club": "Freiburg",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ],
  "PAN": [
    {
      "name": "Orlando Mosquera",
      "age": 33,
      "position": "GK",
      "rating": 72,
      "club": "Al Fayha",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Luis Mej\u00eda",
      "age": 27,
      "position": "GK",
      "rating": 67,
      "club": "Nacional",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "C\u00e9sar Samudio",
      "age": 37,
      "position": "GK",
      "rating": 65,
      "club": "Marath\u00f3n",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "C\u00e9sar Blackman",
      "age": 31,
      "position": "DEF",
      "rating": 73,
      "club": "Slovan Bratislava",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jorge Guti\u00e9rrez",
      "age": 27,
      "position": "DEF",
      "rating": 71,
      "club": "Deportivo La Guaira",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Amir Murillo",
      "age": 34,
      "position": "DEF",
      "rating": 67,
      "club": "Be\u015fikta\u015f",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Fidel Escobar",
      "age": 29,
      "position": "DEF",
      "rating": 67,
      "club": "Saprissa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Andr\u00e9s Andrade",
      "age": 29,
      "position": "DEF",
      "rating": 70,
      "club": "LASK",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Edgardo Fari\u00f1a",
      "age": 26,
      "position": "DEF",
      "rating": 67,
      "club": "Pari Nizhny Novgorod",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jos\u00e9 C\u00f3rdoba",
      "age": 22,
      "position": "DEF",
      "rating": 67,
      "club": "Norwich City",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Davis",
      "age": 28,
      "position": "DEF",
      "rating": 64,
      "club": "Plaza Amador",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jiovany Ramos",
      "age": 29,
      "position": "DEF",
      "rating": 68,
      "club": "Puerto Cabello",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Roderick Miller",
      "age": 25,
      "position": "DEF",
      "rating": 65,
      "club": "Turan Tovuz",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "An\u00edbal Godoy",
      "age": 26,
      "position": "MID",
      "rating": 77,
      "club": "San Diego FC",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Adalberto Carrasquilla",
      "age": 21,
      "position": "MID",
      "rating": 66,
      "club": "Pumas UNAM",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Carlos Harvey",
      "age": 28,
      "position": "MID",
      "rating": 68,
      "club": "Minnesota United",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Cristian Mart\u00ednez",
      "age": 31,
      "position": "MID",
      "rating": 70,
      "club": "Ironi Kiryat Shmona",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jos\u00e9 Luis Rodr\u00edguez",
      "age": 25,
      "position": "MID",
      "rating": 67,
      "club": "Ju\u00e1rez",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "C\u00e9sar Yanis",
      "age": 21,
      "position": "MID",
      "rating": 68,
      "club": "Cobresal",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Yoel B\u00e1rcenas",
      "age": 27,
      "position": "MID",
      "rating": 64,
      "club": "Mazatl\u00e1n",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Alberto Quintero",
      "age": 25,
      "position": "MID",
      "rating": 65,
      "club": "Plaza Amador",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Azarias Londo\u00f1o",
      "age": 33,
      "position": "MID",
      "rating": 66,
      "club": "Universidad Cat\u00f3lica",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Ismael D\u00edaz",
      "age": 24,
      "position": "FWD",
      "rating": 74,
      "club": "Le\u00f3n",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Cecilio Waterman",
      "age": 25,
      "position": "FWD",
      "rating": 66,
      "club": "Universidad de Concepci\u00f3n",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Jos\u00e9 Fajardo",
      "age": 28,
      "position": "FWD",
      "rating": 66,
      "club": "Universidad Cat\u00f3lica",
      "form": 1.0,
      "injured": false,
      "suspended": false
    },
    {
      "name": "Tom\u00e1s Rodr\u00edguez",
      "age": 22,
      "position": "FWD",
      "rating": 68,
      "club": "Saprissa",
      "form": 1.0,
      "injured": false,
      "suspended": false
    }
  ]
};
