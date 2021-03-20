const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

// app.get('/*', (req, res) => {
//     /*// res.sendFile(path.join(__dirname, '../public_html/projects/marquee/index.html'), (err)=>{
//     //     if(err){
//     //         res.status(500).send("i got here");
//     //     }*/
//     /*});*/
//     res.send("hello there");
// });

app.get('/services', (req, res) =>{
    res.send(`<h1>Hello world</h1>`);
})

app.listen(port);