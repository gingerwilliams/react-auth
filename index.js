const express = require('express');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
const bodyParser = require('body-parser');


const app = express();


// See the react auth blog in which cors is required for access
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    next();
});

// Setting up bodyParser to use json and set it to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// INstantiating the express-jwt middleware
const jwtMW = exjwt({
    secret: 'keyboard cat 4 ever'
});



// app.set('views', path.join(__dirname, 'views'));

//Data
let users = [
    {
        id: 1,
        username: 'test',
        password: 'pass1'
    },
    {
        id: 2,
        username: 'test2',
        password: 'pass2'
    },
    {
        id: 3,
        username: 'test3',
        password: 'pass3'
    }
];

//Login Route
app.get('/login', (req, res) => {
    const { username, password } = req.body;

    for (let user of users) {
        
        console.log(user);
        
        if(username === user.username && password === user.password){

            let token = jwt.sign({ id: user.id, username: user.username }, 'keyboard cat 4 ever', { expiresIn: 129600 }); // Sigining the token
            res.json({
                sucess: true,
                err: null,
                token
            });
            return
            
        }else{
            res.status(401).json({
                sucess: false,
                token: null,
                err: 'Username or password is incorrect'
            });
            
        }
    }
})

//Home Route
app.get('/', jwtMW, (req, res) => {
    res.send('you have reached your destination')
})


const PORT = 3000;
app.listen(PORT, () => {
    // eslint-disable-next-line
    console.log(`Magic happens on port ${PORT}`);
});

