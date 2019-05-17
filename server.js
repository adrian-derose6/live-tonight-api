const express = require('express'), app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
    
const spotifyCredentials = require('./controllers/spotifyCredentials');

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/spotify-credentials', (req, res) => spotifyCredentials.handleSpotifyCredentials(req, res));


app.listen(4000, () => console.log('express server started at port 4000'));
