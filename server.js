const express = require('express'),
      app = express();

app.get('/', (req, res)=>{
    res.send('Hello world');
});

app.get('/spotify-credentials', (req, res) => {
    res.send('Spotify credentials')
});

//Binding the server to a port(3000)
app.listen(4000,()=>console.log('express server started at port 4000'));
