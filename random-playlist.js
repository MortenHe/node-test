const fs = require('fs-extra');
const { JSONPath } = require('jsonpath-plus');

//Configs
const configFile = fs.readJsonSync(__dirname + "/../AudioServer/config.json");
const audioDir = configFile.audioDir;
const jsonDir = audioDir + "/wap/json";

//Karten der Player sammeln
cards = {};

//Audio Player Karten aus JSON-Config des Player Clients ermitteln, dazu ueber alle JSON-Files gehen
const audiolist = fs.readJSONSync(jsonDir + "/audiolist.json");
for (const [mode, data] of Object.entries(audiolist)) {
    for (const file of data.filter.filters) {

        //Filter "all" hat keine JSON-Datei
        if (file.id !== "all") {

            //JSON-Datei laden (janosch.json)
            const filePath = jsonDir + "/" + mode + "/" + file.id + ".json";
            const json = fs.readJSONSync(filePath);

            //mit JSONPath alle Eintraege finden, die einen RFID-Wert gesetzt haben
            const result = JSONPath({ path: '$..rfid^', json });

            //Eintrage mit RFID bei Karten sammeln
            for (let obj of result) {
                cards[obj.rfid] = {
                    "mode": mode,
                    "group": file.id,
                    "name": obj.name,
                    "path": file.id + "/" + obj.file,
                    "port": 8080
                }
            }
        }
    }
}

//Variable muss json heissen
json = cards;

//result = JSONPath({ path: "$..*[?(@property === 'group' && @ === 'rz')]^", json });
//result = JSONPath({ path: "$..*[?(@property === 'group' && @ === 'bebl')]^", json });
result = JSONPath({ path: "$..*[?(@property === 'group' && @ === 'bob')]^", json });
//result = JSONPath({ path: "$..*[?(@property === 'group' && @ === 'janosch')]^", json });
//result = JSONPath({ path: "$..*[?(@property === 'mode' && @ === 'hsp')]^", json });
//result = JSONPath({ path: "$..*[?(@property === 'mode' && @ === 'kindermusik')]^", json });

const el = result[Math.floor(Math.random() * result.length)];
console.log(el)