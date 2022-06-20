// const { SocketAddress } = require("net");
// const { format } = require("path");

const form1 = document.getElementById('form1');
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const quoteBtn = document.getElementById("quoteButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getQuote = () => {
    axios.get("http://localhost:4000/api/quote/")
        .then(res => {
            document.getElementById('quote').innerHTML = res.data;
    });
};

const addQuote = body => {
    axios.post("http://localhost:4000/api/quote/", body)
        .then(() => {
            alert(`added quote: ${body.quote}`);
    });
};

const deleteQuote = id => {
    axios.delete(`http://localhost:4000/api/quote/${id}`)
        .then(() => {
            alert(`successfully deleted`);
    });
};

function submitHandler(e)
{
    e.preventDefault();

    let quote = document.getElementById('newQuote');
    let rating = document.getElementById('quoteRating');

    let newQuote = 
    {
        quote: quote.value,
        rating: rating.value
    }

    addQuote(newQuote);
}

complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
quoteBtn.addEventListener('click', getQuote);
form1.addEventListener('submit', submitHandler);