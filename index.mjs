import express from 'express';
import fetch from 'node-fetch';
const quotes =(await import("success-motivational-quotes")).default;
quotes.getTodaysQuote()
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', async (req, res) => {
    let quote = quotes.getTodaysQuote();
    let apiKey = "7756a1e81f817c186cf57294e1c19b37b49c54b8f34e7c499ee0ce5cd86cd16e";
	let url = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&featured=true&query=solar-system`;
    let response = await fetch(url);
    let data = await response.json();

    let randomImage = data.urls.full;

    res.render('index', { quote, randomImage});
});

app.get('/roles', (req, res) => {
    let quote = quotes.getTodaysQuote();
    res.render('roles', {quote});
});

app.get('/events', (req, res) => {
    let quote = quotes.getTodaysQuote();
    res.render('events', {quote});
});

app.get('/artifacts', (req, res) => {
    let quote = quotes.getTodaysQuote();
    res.render('artifacts', {quote});
});
app.get('/erin', (req, res) => {
    let quote = quotes.getTodaysQuote();
    res.render('erin', {quote});
});


app.listen(3000, () => {
   console.log('server started');
});

