//Minisearch Suchindex
const MiniSearch = require('minisearch');
//
const searchTerm = process.argv[2];
//console.log(searchTerm);
//const searchTerm = "entwurf";


// A collection of documents for our examples
const documents = [
    {
        "name": "Bob der Baumeister - 00 - Bob Joker",
        "id": "00-bob-joker",
        "active": true,
        "added": "2020-12-07",
        "length": null,
        "tracks": []
    },
    {
        "name": "Bob der Baumeister - 01 - Ein tolles Team",
        "id": "01-ein-tolles-team",
        "active": true,
        "rfid": "0011858962",
        "length": "00:49:18",
        "tracks": [
            "Stürmische Abenteuer",
            "Bob zählt Elefanten"
        ]
    },
    {
        "name": "Bob der Baumeister - 02 - Yo, wir schaffen das",
        "id": "02-yo",
        "active": true,
        "rfid": "0011793744",
        "length": "00:49:33",
        "tracks": [
            "Wendy zeigt was sie kann",
            "Bob löst jedes Problem"
        ]
    },
    {
        "name": "Bob der Baumeister - 03 - Alle helfen Bob",
        "id": "03-alle-helfen-bob",
        "active": true,
        "rfid": "0000111846",
        "length": "00:43:57",
        "tracks": [
            "Bob ist krank",
            "Das Tunnelabenteuer"
        ]
    },
    {
        "name": "Bob der Baumeister - 04 - Kuschel sorgt für Aufregung",
        "id": "04-kuschel-sorgt-fuer-aufregung",
        "active": true,
        "added": "2020-09-04",
        "length": "00:39:26",
        "tracks": []
    },
    {
        "name": "Bob der Baumeister - 05 - Wendy schafft das",
        "id": "05-wendy-schafft-das",
        "active": true,
        "added": "2020-09-04",
        "length": "00:44:55",
        "tracks": []
    },
    {
        "name": "Bob der Baumeister - 06 - Bobs Rettung",
        "id": "06-bobs-rettung",
        "active": true,
        "added": "2020-09-04",
        "length": "00:47:13",
        "tracks": []
    },
    {
        "name": "Bob der Baumeister - 07 - Mixi und das Vogelbaby",
        "id": "07-vogelbaby",
        "active": true,
        "rfid": "0011952815",
        "length": "00:41:33",
        "tracks": [
            "Mixi und das Vogelbaby",
            "Schlaflied für den Igel"
        ]
    },
    {
        "name": "Bob der Baumeister - 08 - Bob und die Vogelscheuchen",
        "id": "08-bob-und-die-vogelscheuchen",
        "active": true,
        "added": "2020-09-04",
        "length": "00:50:56",
        "tracks": []
    },
    {
        "name": "Bob der Baumeister - 09 - Mit Musik geht alles besser",
        "id": "09-mit-musik-geht-alles-besser",
        "active": true,
        "added": "2020-09-04",
        "length": "00:46:35",
        "tracks": []
    },
    {
        "name": "Bob der Baumeister - 10 - Bob hilft den Tieren",
        "id": "10-bob-hilft-den-tieren",
        "active": true,
        "added": "2020-09-04",
        "length": "00:47:25",
        "tracks": []
    },
    {
        "name": "Bob der Baumeister - 11 - Hurra es schneit",
        "id": "11-hurra-es-schneit",
        "active": true,
        "added": "2020-12-20",
        "length": "00:52:19",
        "tracks": []
    },
    {
        "name": "Bob der Baumeister - 12 - Bob der Entdecker",
        "id": "12-bob-der-entdecker",
        "active": true,
        "added": "2020-12-28",
        "length": "00:51:37",
        "tracks": []
    },
    {
        "name": "Bob der Baumeister - 13 - Alles wird gut",
        "id": "13-alles-wird-gut",
        "active": true,
        "added": "2020-12-28",
        "length": "00:46:59",
        "tracks": []
    },
    {
        "name": "Bob der Baumeister - 14 - Bobs bunte Welt",
        "id": "14-bobs-bunte-welt",
        "active": true,
        "added": "2020-12-28",
        "length": "00:55:48",
        "tracks": []
    },
    {
        "name": "Bob der Baumeister - 15 - Gemeinsam sind wir stark",
        "id": "15-gemeinsam-sind-wir-stark",
        "active": true,
        "added": "2020-12-28",
        "length": "00:51:33",
        "tracks": []
    },
    {
        "name": "Bob der Baumeister - 16 - Katzen und Hunde",
        "id": "16-katzen-und-hunde",
        "active": true,
        "added": "2020-12-28",
        "length": "00:53:23",
        "tracks": []
    },
    {
        "name": "Bob der Baumeister - 17 - Hoch hinaus",
        "id": "17-hoch-hinaus",
        "active": true,
        "rfid": "0011820497",
        "length": "00:54:19",
        "tracks": [
            "Freunde mit Flügeln",
            "Fußball für Könner"
        ]
    },
    {
        "name": "Bob der Baumeister - 19 - Schreck lass nach",
        "id": "19-schreck-lass-nach",
        "active": true,
        "added": "2020-12-28",
        "length": "00:42:03",
        "tracks": []
    },
    {
        "name": "Bob der Baumeister - 20 - Bobs Team schafft das",
        "id": "20-bobs-team",
        "active": true,
        "rfid": "0011831304",
        "length": "00:44:24",
        "tracks": [
            "Wendy ist die Beste",
            "Ohne Conti geht nichts!!"
        ]
    },
    {
        "name": "Bob der Baumeister - 21 - Bobs toller Entwurf",
        "id": "21-bobs-entwurf",
        "active": true,
        "rfid": "0011942364",
        "length": "00:43:29",
        "tracks": []
    },
    {
        "name": "Bob der Baumeister - 22 - Auf ins Sonnenblumental",
        "id": "22-auf-ins-sonnenblumental",
        "active": true,
        "added": "2020-12-28",
        "length": "00:48:17",
        "tracks": []
    },
    {
        "name": "Bob der Baumeister - 23 - Aufregung im Sonnenblumental",
        "id": "23-aufregung-im-sonnenblumental",
        "active": true,
        "added": "2020-12-28",
        "length": "00:39:19",
        "tracks": []
    },
    {
        "name": "Bob der Baumeister - 24 - Neue und alte Freunde",
        "id": "24-neue-alte-freunde",
        "active": true,
        "rfid": "0011833892",
        "length": "00:42:49",
        "tracks": [
            "Rollos neuer Freund",
            "Benny - Große Banane"
        ]
    },
    {
        "name": "Bob der Baumeister - 25 - Knolle und die Strohballen",
        "id": "25-knolle-und-die-strohballen",
        "active": true,
        "added": "2020-12-28",
        "length": "00:48:01",
        "tracks": []
    },
    {
        "name": "Bob der Baumeister - 26 - Buddels Lehmhütte",
        "id": "26-buddels-lehmhuette",
        "active": true,
        "added": "2020-12-28",
        "length": "00:41:39",
        "tracks": []
    },
    {
        "name": "Bob der Baumeister - 27 - Wendys Party",
        "id": "27-wendys-party",
        "active": true,
        "added": "2020-12-28",
        "length": "00:44:16",
        "tracks": []
    },
    {
        "name": "Bob der Baumeister - 28 - Bau es zusammen Knolle",
        "id": "28-bau-es-zusammen-knolle",
        "active": true,
        "added": "2020-12-28",
        "length": "00:47:26",
        "tracks": []
    },
    {
        "name": "Bob der Baumeister - 29 - Mixi spielt Detektiv",
        "id": "29-mixi-spielt-detektiv",
        "active": true,
        "added": "2020-12-28",
        "length": "00:44:20",
        "tracks": []
    },
    {
        "name": "Bob der Baumeister - 30 - Sprinti und die bunte Höhle",
        "id": "30-sprinti-und-die-bunte-hoehle",
        "active": true,
        "added": "2020-12-28",
        "length": "00:45:31",
        "tracks": []
    },
    {
        "name": "Bob der Baumeister - 31 - Knolles große Ernte",
        "id": "31-knolles-grosse-ernte",
        "active": true,
        "added": "2020-12-28",
        "length": "00:43:49",
        "tracks": []
    },
    {
        "name": "Bob der Baumeister - 32 - Der Spielplatz",
        "id": "32-spielplatz",
        "active": true,
        "rfid": "0011808243",
        "length": "00:41:09",
        "tracks": [
            "Der Spielplatz",
            "Anführer Buddel"
        ]
    },
    {
        "name": "Bob der Baumeister - 34 - Kratzers erster Tag",
        "id": "34-kratzers-erster-tag",
        "active": true,
        "rfid": "0011861451",
        "length": "00:44:55",
        "tracks": [
            "Kratzers erster Tag",
            "Kratzer der Schauspieler"
        ]
    },
    {
        "name": "Bob der Baumeister - 35 - Baggis Seerettung",
        "id": "35-baggis-seerettung",
        "active": true,
        "rfid": "0011852258",
        "length": "00:47:24",
        "tracks": [
            "Baggis Seerettung",
            "Baggis Sandsturm"
        ]
    },
    {
        "name": "Bob der Baumeister - 36 - Kratzers Nickerchen",
        "id": "36-kratzers-nickerchen",
        "active": true,
        "rfid": "0011785488",
        "length": "00:44:55",
        "tracks": [
            "Kratzer startet durch",
            "Kratzers Nickerchen"
        ]
    },
    {
        "name": "Bob der Baumeister - 37 - Heppo und das Monster",
        "id": "37-heppo-und-das-monster",
        "active": true,
        "rfid": "0011813376",
        "length": "00:42:43",
        "tracks": [
            "Heppo und das Monster",
            "Heppos hilfsbereiter Tag"
        ]
    },
    {
        "name": "Bob der Baumeister - 99 - Bob hilft dem Weihnachtsmann",
        "id": "99-bob-hilft-dem-weihnachtsmann",
        "active": true,
        "added": "2020-12-20",
        "length": "00:48:25",
        "tracks": []
    },
    {
        "name": "Bob der Baumeister - Das Aufräumspiel",
        "id": "das-aufraeumspiel",
        "active": true,
        "rfid": "0011814592",
        "length": "00:32:19",
        "tracks": [
            "Das Aufräumspiel",
            "Summ, Summ, Summ (Lied)"
        ]
    },
    {
        "name": "Bob der Baumeister - Frau Töpfers Brunnen",
        "id": "frau-toepfers-brunnen",
        "active": true,
        "rfid": "0011811624",
        "length": "00:11:14",
        "tracks": [
            "Frau Töpfers Brunnen",
            "Heut ist ein Fest bei den Fröschen am See (Lied)"
        ]
    },
    {
        "name": "Bob der Baumeister - Bob und das Tapeten-Chaos",
        "id": "bob-und-das-tapeten-chaos",
        "active": true,
        "rfid": "0011811937",
        "length": "00:13:35",
        "tracks": [
            "Bob und das Tapeten-Chaos",
            "Zeigt her eure Füße (Lied)"
        ]
    },
    {
        "name": "Bob der Baumeister - Heppo und der Rechts-Hebe-Trick",
        "id": "heppo-und-der-rechts-hebe-trick",
        "active": true,
        "rfid": "0011855047",
        "length": "00:09:49",
        "tracks": [
            "Heppo und der Rechts-Hebe-Trick",
            "Alle meine Entchen (Lied)"
        ]
    },
    {
        "name": "Bob der Baumeister - Feder der Retter",
        "id": "feder-der-retter",
        "active": true,
        "rfid": "0011853888",
        "length": "00:27:02",
        "tracks": [
            "Feder der Retter",
            "Alle Vögel sind schon da (Lied)"
        ]
    },
    {
        "name": "Bob der Baumeister - Knolle sucht die Schrauben",
        "id": "knolle-sucht-die-schrauben",
        "active": true,
        "rfid": "0011949820",
        "length": "00:09:20",
        "tracks": [
            "Knolle sucht die Schrauben",
            "Ein Männlein steht im Walde (Lied)"
        ]
    },
    {
        "name": "Bob der Baumeister - Kuschel und das Dorffest",
        "id": "kuschel-und-das-dorffest",
        "active": true,
        "rfid": "0011815864",
        "length": "00:32:17",
        "tracks": [
            "Kuschel und das Dorffest",
            "Der Katzentanz (Lied)"
        ]
    },
    {
        "name": "Bob der Baumeister - Wendy sorgt für Sicherheit",
        "id": "wendy-sorgt-fuer-sicherheit",
        "active": true,
        "rfid": "0011779852",
        "length": "00:28:04",
        "tracks": [
            "Wendy sorgt für Sicherheit",
            "Drei Chinesen mit dem Kontrabass (Lied)"
        ]
    },
    {
        "name": "Bob der Baumeister - Herr Brauers Rosenstock",
        "id": "herr-brauers-rosenstock",
        "active": true,
        "rfid": "0011831953",
        "length": "00:11:48",
        "tracks": [
            "Herr Brauers Rosenstock",
            "Kuckuck Kuckuck (Lied)"
        ]
    },
    {
        "name": "Bob der Baumeister - Knolle und die verkohlte Pizza",
        "id": "knolle-und-die-verkohlte-pizza",
        "active": true,
        "rfid": "0011805832",
        "length": "00:11:50",
        "tracks": [
            "Knolle und die verkohlte Pizza",
            "Feuer wer (Lied)"
        ]
    },
    {
        "name": "Bob der Baumeister - Rollos Straßenlaterne",
        "id": "rollos-strassenlaterne",
        "active": true,
        "rfid": "0011830690",
        "length": "00:10:40",
        "tracks": [
            "Rollos Straßenlaterne",
            "Ich geh' mit meiner Laterne (Lied)"
        ]
    },
    {
        "name": "Bob der Baumeister - Heppos Schwertransport",
        "id": "heppos-schwertransport",
        "active": true,
        "rfid": "0011813079",
        "length": "00:12:47",
        "tracks": [
            "Heppos Schwertransport",
            "Am Brunnen vor dem Tore (Lied)"
        ]
    },
    {
        "name": "Bob der Baumeister - Bobs neue Schuhe",
        "id": "bobs-neue-schuhe",
        "active": true,
        "rfid": "0011810849",
        "length": "00:29:15",
        "tracks": [
            "Bobs neue Schuhe",
            "Brüderchen, komm tanz mit mir (Lied)"
        ]
    },
    {
        "name": "Bob der Baumeister - Chaos in der Scheune",
        "id": "chaos-in-der-scheune",
        "active": true,
        "rfid": "0011848535",
        "length": "00:30:01",
        "tracks": [
            "Chaos in der Scheune",
            "Onkel Jörg hat einen Bauernhof (Lied)"
        ]
    },
    {
        "name": "Bob der Baumeister - Das Großreinemachen",
        "id": "das-grossreinemachen",
        "active": true,
        "rfid": "0011793197",
        "length": "00:31:36",
        "tracks": [
            "Das Großreinemachen",
            "Das Zahnputzlied (Lied)"
        ]
    },
    {
        "name": "Bob der Baumeister - Knolle fährt zu schnell",
        "id": "knolle-faehrt-zu-schnell",
        "active": true,
        "rfid": "0011849795",
        "length": "00:32:13",
        "tracks": [
            "Knolle fährt zu schnell",
            "Zerbrasteifen (Lied)"
        ]
    },
    {
        "name": "Bob der Baumeister - Heppo und der Hitzschlag",
        "id": "heppo-und-der-hitzschlag",
        "active": true,
        "rfid": "0011827278",
        "length": "00:34:21",
        "added": "2020-07-01",
        "tracks": [
            "Heppo und der Hitzschlag",
            "Das Sommertagslied (Lied)"
        ]
    },
    {
        "name": "Bob der Baumeister - Bubbdel und der Sturm",
        "id": "bubbdel-und-der-sturm",
        "active": true,
        "rfid": "0011939277",
        "added": "2020-07-02",
        "length": "00:28:21",
        "tracks": [
            "Buddel und der Sturm",
            "Holt die goldnen Garben (Lied)"
        ]
    },
    {
        "name": "Bob der Baumeister - Der Wasserschaden bei Frau Töpfer",
        "id": "der-wasserschaden-bei-frau-toepfer",
        "active": true,
        "rfid": "0011775768",
        "added": "2020-07-02",
        "length": "00:33:34",
        "tracks": [
            "Der Wasserschaden bei Frau Töpfer",
            "Morgen früh um sechs kommt die kleine Hex (Lied)"
        ]
    },
    {
        "name": "Bob der Baumeister - Ein schöner Garten für Lenny",
        "id": "ein-schoener-garten-fuer-lenny",
        "active": true,
        "rfid": "0011777007",
        "added": "2020-07-02",
        "length": "00:30:27",
        "tracks": [
            "Ein schöner Garten für Lenny",
            "Vögel singen, Blumen blühen (Lied)"
        ]
    },
    {
        "name": "Bob der Baumeister - Wendys Verkehrsschule",
        "id": "wendys-verkehrsschule",
        "active": true,
        "added": "2020-08-14",
        "length": "00:40:10",
        "tracks": [
            "Wendys Verkehrsschule",
            "Mein Weg zur Schule (Lied)"
        ]
    },
    {
        "name": "Bob der Baumeister - Knolles Überraschung",
        "id": "knolles-ueberraschung",
        "active": true,
        "added": "2020-08-14",
        "length": "00:35:19",
        "tracks": [
            "Knolles Überraschung",
            "Winter ade (Lied)"
        ]
    }, {
        "name": "Benjamin Blümchen - 00 - Benjamin Joker",
        "id": "00-bebl-joker",
        "active": true,
        "rfid": "0007017048",
        "added": "2020-01-19",
        "length": null,
        "tracks": []
    },
    {
        "name": "Benjamin Blümchen - 06 - Die Schule",
        "id": "06-schule",
        "active": true,
        "rfid": "0011825777",
        "length": "00:36:03",
        "tracks": []
    },
    {
        "name": "Benjamin Blümchen - 07 - Verliebt sich",
        "id": "07-verliebt",
        "active": true,
        "rfid": "0011775952",
        "length": "00:39:08",
        "tracks": []
    },
    {
        "name": "Benjamin Blümchen - 08 - Auf dem Baum",
        "id": "08-auf-dem-baum",
        "active": true,
        "added": "2021-01-15",
        "length": "00:33:31",
        "tracks": []
    },
    {
        "name": "Benjamin Blümchen - 12 - Als Briefträger",
        "id": "12-brieftraeger",
        "active": true,
        "added": "2021-01-17",
        "length": "00:44:42",
        "tracks": []
    },
    {
        "name": "Benjamin Blümchen - 17 - Auf Skiurlaub",
        "id": "17-auf-skiurlaub",
        "active": true,
        "added": "2021-01-15",
        "length": "00:37:40",
        "tracks": []
    },
    {
        "name": "Benjamin Blümchen - 18 - Schornsteinfeger",
        "id": "18-schornsteinfeger",
        "active": true,
        "added": "2021-01-15",
        "length": "00:40:32",
        "tracks": []
    },
    {
        "name": "Benjamin Blümchen - 21 - Als Weihnachtsmann",
        "id": "21-weihnachtsmann",
        "active": true,
        "added": "2020-12-15",
        "length": "00:38:05",
        "tracks": []
    },
    {
        "name": "Benjamin Blümchen - 22 - Als Kinderarzt",
        "id": "22-kinderarzt",
        "active": true,
        "rfid": "0011824435",
        "length": "00:34:54",
        "tracks": []
    },
    {
        "name": "Benjamin Blümchen - 26 - Als Bademeister",
        "id": "26-bademeister",
        "active": true,
        "rfid": "0011815664",
        "length": "00:33:06",
        "tracks": []
    },
    {
        "name": "Benjamin Blümchen - 27 - Auf dem Bauernhof",
        "id": "27-auf-dem-bauernhof",
        "active": true,
        "added": "2021-01-16",
        "length": "00:35:05",
        "tracks": []
    },
    {
        "name": "Benjamin Blümchen - 28 - Rettet den Kindergarten",
        "id": "28-kindergarten",
        "active": true,
        "rfid": "0011851104",
        "length": "00:36:31",
        "tracks": []
    },
    {
        "name": "Benjamin Blümchen - 31 - Als Feuerwehrmann",
        "id": "31-feuerwehrmann",
        "active": true,
        "added": "2021-01-15",
        "length": "00:36:11",
        "tracks": []
    },
    {
        "name": "Benjamin Blümchen - 32 - Die Verkehrsschule",
        "id": "32-die-verkehrsschule",
        "active": true,
        "added": "2021-01-13",
        "length": "00:34:28",
        "tracks": []
    },
    {
        "name": "Benjamin Blümchen - 34 - Als Lokomotivführer",
        "id": "34-lokomotivfuehrer",
        "active": true,
        "rfid": "0011836177",
        "length": "00:43:03",
        "tracks": []
    },
    {
        "name": "Benjamin Blümchen - 45 - Als Zirkusclown",
        "id": "45-zirkusclown",
        "active": true,
        "added": "2021-01-18",
        "length": "00:36:02",
        "tracks": []
    },
    {
        "name": "Benjamin Blümchen - 51 - Der Weihnachtsabend",
        "id": "51-weihnachtsabend",
        "active": true,
        "added": "2020-12-15",
        "length": "00:47:02",
        "tracks": []
    },
    {
        "name": "Benjamin Blümchen - 52 - Der Weihnachtstraum",
        "id": "52-weihnachtstraum",
        "active": true,
        "added": "2020-12-15",
        "length": "00:43:54",
        "tracks": []
    }
]

let miniSearch = new MiniSearch({
    fields: ['name', 'tracks'], // fields to index for full-text search
    storeFields: ['name'] // fields to return with search results
});

// Index all documents
miniSearch.addAll(documents)

// Search with default options
let results = miniSearch.search(searchTerm, {
    prefix: true
})
console.log(results[0]["name"])