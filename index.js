'use strict'
import express from "express";
import bodyParser from "body-parser";

//Defining variables
const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// In-memory storage for posts
let posts = [];

//Load main site
app.get('/', (req, res) => {
    res.render('index.ejs', { posts: posts });
});

app.post('/create', (req, res) => {
    let date = new Date().toString();
    const { title, content } = req.body;
    const post = { id: date, title, content };
    posts.push(post);
    res.redirect('/');
})

app.post('/edit/:id', (req, res) => {
    const { id } = req.params;
    const { action } = req.body;

    if (action === 'Save'){
        console.log('Editing post');

    } else if (action === 'Edit'){
        const { title, content } = req.body;
        posts = posts.map(post => post.id == id ? { id: post.id, title, content } : post);
        alert('Post saved');
        res.redirect('/');

    } else if (action === 'Delete') {
        posts = posts.filter(post => post.id != id);
        alert('Post Deleted');
        res.redirect('/');
    }
})

//Listen to port
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})