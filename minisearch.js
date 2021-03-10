//Minisearch Suchindex
const MiniSearch = require('minisearch');
//
const searchTerm = process.argv[2];
//console.log(searchTerm);
//const searchTerm = "entwurf";
const fs = require('fs-extra');

//let stopWords = new Set(['und', 'der', 'die', 'das']);
const stopWords = new Set([]);


let miniSearch = new MiniSearch({
    fields: ['name', 'tracks'], // fields to index for full-text search
    storeFields: ['name', 'tracks'], // fields to return with search results
    //Stopwords fuer Indexierung und Suche entfernen
    processTerm: (term, _fieldName) => stopWords.has(term) ? null : term.toLowerCase(),
    //Name der Playlist staerker gewichten
    searchOptions: {
        boost: { name: 5 }
    }
});

const documents_from_json_file = fs.readJSONSync(__dirname + '/sttIndex.json');

// Index all documents
miniSearch.addAll(documents_from_json_file)

// Search with default options
let results = miniSearch.search(searchTerm, {
    prefix: true
})
//console.log(results)
console.log(results[0]); console.log(results[1]); console.log(results[2]);