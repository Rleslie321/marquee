const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.get('/projects/marquee/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public_html/projects/marquee/index.html'), (err)=>{
        if(err){
            res.status(500).send("i got here");
        }
    });
});

app.listen(port);