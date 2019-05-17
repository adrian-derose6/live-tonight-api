const fetch = require("node-fetch");

const CLIENT_ID = 'e9ab357590d141538e9b861ddafe8d63';
const CLIENT_SECRET = '2431e5600ec543c4836a293f2909599d';
const ENCODED_AUTH = 'ZTlhYjM1NzU5MGQxNDE1MzhlOWI4NjFkZGFmZThkNjM6MjQzMWU1NjAwZWM1NDNjNDgzNmEyOTNmMjkwOTU5OWQ='

async function handleSpotifyCredentials(req, res) {
    const accessToken = await loadSpotifyAccessToken();

    res.json(accessToken);
}


async function loadSpotifyAccessToken() {

    return await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + ENCODED_AUTH
        },
        body: 'grant_type=client_credentials'
    })
    .then(res => res.json())
    .then(tokenObject => tokenObject)
    .catch(err => res.status(400).send(err))
}

module.exports = {
    handleSpotifyCredentials
}