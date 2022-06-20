const quotes = require('./quotes.json');
let globalId = 5;

module.exports = 
{
    getCompliment: (req, res) => 
    {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => 
    {
        const fortunes = ["You will be sent on a mission to kill puti- i mean uh... sorry forgot you can't be political, you will be sent on a mission to save the world very soon", "One day you will die... oooooh scary", "Someone, someday, will give you a compliment", "Sex is cool but you ever watched funny monkey videos?", "hey ;)"];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getQuote: (req, res) =>
    {
        let randomIndex = Math.floor(Math.random() * quotes.length);
    
        res.status(200).send(quotes[randomIndex].quote);
    },

    addQuote: (req, res) =>
    {
        let { quote, rating } = req.body;
        let newQuote = 
        {
            id: globalId,
            quote,
            rating
        };
        quotes.push(newQuote);
        res.status(200).send(quotes);
        globalId++
    },

    deleteQuote: (req, res) =>
    {
        quotes.splice(0, 1)
        res.status(200).send(quotes);
    }
}