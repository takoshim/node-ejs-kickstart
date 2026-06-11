//include Express
const express = require('express');

// configure port number
const port = 3000;

// 💡 CRITICAL: Load our user data file from the data folder
const userData = require('./data/test.json');

//create instance of Express app
const app = express();

//ejs is templating engine
app.set('view engine','ejs');

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname + '/public'));

//index/home URL
app.get('/',(req,res)=>{
    let title = "About Bing Images";
    res.render('pages/index',{'title': title});
});

//elephant URL
app.get('/elephant',(req,res)=>{
    let title = "about Elephant";
    res.render('pages/elephant',{'title': title});
});

//catsle URL
app.get('/castle',(req,res)=>{
    let title = "about Catsle";
    res.render('pages/castle',{'title': title});
});

//seals URL
app.get('/seals',(req,res)=>{
    let title = "about Seals";
    res.render('pages/seals',{'title': title});
});

// ==========================================
// 👥 NEW ROUTE: The User Directory (The List)
// ==========================================
app.get('/users', (req, res) => {
    res.render('users/index', {
        title: 'User Directory',
        users: userData // Passes the 100-user array to the template
    });
});

// ==========================================
// 🔍 NEW ROUTE: Individual Profile (The View)
// ==========================================
app.get('/users/view/:id', (req, res) => {
    let id = req.params.id;

    // We cheat elegantly by subtracting 1 to match array zero-indexing
    res.render('users/view', {
        title: 'User Profile',
        user: userData[--id]
    });
});

//Set server to listen for requests
app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});

