const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(
    bodyParser.urlencoded(
        { extended: false }
    )
)

app.use(bodyParser.json())

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js file, or main.css file!
    app.use(express.static('client/build'));
  
    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.get('/api/test', (req, res) => {
    res.send({
      "name": "Arshad"
    })
})

app.listen(PORT, () => console.log(`Server up and running on port ${PORT} !`));