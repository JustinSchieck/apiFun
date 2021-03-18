export const mockGetAllHeroes = {
    response: {
        data: {
            info: {
                currentPage: 1,
                count: 318,
                pages: 16
            },
            result: [
                {
                    id: "Crimson_Riot",
                    name: null,
                    alias: null,
                    description: "Chivalrous Hero: Crimson Riot (漢 (おとこ) 気 (き) ヒーロー紅 (クリムゾン) 頼 (ライ) 雄 (オッ) 斗 (ト) , Otoko ki  Hīrō Kurimuzon Raiotto?) is a Pro Hero, and the idol and inspiration of Eijiro Kirishima, whose hero name, Red Riot, pays homage to.",
                    kanji: "紅 (クリムゾン) 頼 (ライ) 雄 (オッ) 斗 (ト) ",
                    occupation: "Pro Hero",
                    quirk: null,
                    status: "Unknown",
                },
                {
                    id: "yrdsy",
                    name: "Air Jet",
                    alias: "Buster Hero",
                    description: "Buster Hero: Air Jet (バスターヒーロー エアジェット, Basutā Hīrō Eajetto?) is a Pro Hero.\n",
                    kanji: "エアジェット",
                    occupation: "Pro Hero",
                    quirk: null,
                    status: "Alive",
                }
            ]
        },
        "status": 200,
        "statusText": "OK",
        "headers": {
            "content-length": "17080",
            "content-type": "application/json"
        }
    }
};

export const mockGetAllPokemon = {
    Pokemon: {
        name: "testmon",
        type: "normal",
    }
};





