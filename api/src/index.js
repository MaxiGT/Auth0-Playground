const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

//The App itself
const app = express();
app.use(helmet());
app.use(bodyparser.json());
app.use(cors());
app.use(morgan('combined'));

//The DB
//TO-DO: Bootstrap a real DB
const questions = [
    {
        id: 1,
        title: 'How do I make a sandwich?',
        description: 'I am trying very hard, but I do not know how to make a delicious sandwich.' +
            'Can someone help me?',
        answers: [
            { answer: 'Just spread butter on the bread, and that is it.' },
        ],
    },
    {
        id: 2,
        title: 'What is React?',
        description: 'I have been hearing a lot about React. What is it?',
        answers: [
            { answer: `It's a cool new programming language!` },
        ],
    },
];

//Endpoints
//Get All
app.get('/', (req, res) => {
    const qs = questions.map(q => ({
        id: q.id,
        title: q.title,
        description: q.description,
        answers: q.answers.length,
    }));
    res.send(qs)
});

//Get
app.get('/:id', (req, res) => {
    const q = questions.filter(q => q.id === parseInt(req.params.id));
    if (q.length === 0) return res.status(404).send();
    res.send(q[0]);
});


const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://react-auth-playground.auth0.com/.well-known/jwks.json`
    }),
    audience: 'q4J46uiwphK2rmEpuegFGJ2VPC4dWe-f',
    issuer: `https://react-auth-playground.auth0.com/`,
    algorithms: ['RS256']
})

//Insert Question
app.post('/', checkJwt, (req, res) => {
    const { title, description } = req.body;
    //TO-DO: Create and Import Clases
    const newQuestion = {
        id: questions.length + 1,
        title: title,
        description: description,
        answers: [],
        author: req.user.name,
    };
    questions.push(newQuestion);
    const qs = questions.map(q => ({
        id: q.id,
        title: q.title,
        description: q.description,
        answers: q.answers.length,
    }));
    res.status(200).send(qs);
});

//Insert Answer
app.post('/answer/:id', checkJwt, (req, res) => {
    const { answer } = req.body;
    const q = questions.filter(q => q.id === parseInt(req.params.id));
    if (q.length === 0) return res.status(404).send();
    q[0].answers.push({
        answer,
        author: req.user.name,
    });
    res.status(200).send(q[0]);
});

//Start the server
app.listen(8081, () => {
    console.log('Listening Port 8081');
});