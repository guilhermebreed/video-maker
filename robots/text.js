const algorithmia = require('algorithmia')
const algorithmiaApiKey = require('../credentials/algorithmia.json').apiKey

function robot(content) {
    fetchContentFromWikipedia(content)
    // sanitizeContent(content)
    // breakContentIntoSentences(content)

    console.log('Logando se a função "fetchContentFromWikipedia" retorna uma Promise')
    console.log(fetchContentFromWikipedia())

    async function fetchContentFromWikipedia(content) {
        return 'RESULTADO DA PROMISE'
        const algorithmiaAuthenticated = algorithmia(algorithmiaApiKey)
        const wikipediaAlgorithm = algorithmiaAuthenticated.algo('web/WikipediaParser/0.1.2?timeout=300') 
        const wikipediaResponde = wikipediaAlgorithm.pipe(content.searchTerm)
        const wikipediaContent = wikipediaResponde.get()
        console.log(wikipediaContent)
    }
}

module.exports = robot