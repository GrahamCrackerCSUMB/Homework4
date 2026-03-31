import express from 'express';
import fetch from 'node-fetch';
const planets = (await import ('npm-solarsystem')).default;
const quotes =(await import("success-motivational-quotes")).default;
quotes.getTodaysQuote()
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', async(req, res) => {
    let quote = quotes.getTodaysQuote();
    res.render('index', {quote});
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

