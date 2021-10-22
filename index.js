const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())

const port = 1000;

app.get('/', (req, res) => {
    res.send('hapay gelam ei 5 taniya ki j kori matha ghol, ghol valo lagse shoyod pur er. ghol khaya matha thanda hoise fgjfgdf')
});

const users = [
    { id: 0, name: 'afsana', age: 11, email: 'aaaa@gmail.com' },
    { id: 1, name: 'bobita', age: 12, email: 'bbbb@gmail.com' },
    { id: 2, name: 'chowa', age: 13, email: 'cccc@gmail.com' },
    { id: 3, name: 'dilruba', age: 14, email: 'dddd@gmail.com' },
    { id: 4, name: 'efty', age: 15, email: 'eeee@gmail.com' },
    { id: 5, name: 'fariya', age: 16, email: 'ffff@gmail.com' },
];

app.get('/users', (req, res) => {
    // use query parameter
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users)
    }
});

// app method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic router 
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
    console.log(user)
});

app.get('/fruits', (req, res) => {
    res.send(['mangoes', 'banana', 'egg'])
})
app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('<h1>ki tenga re vai</h1>')
})

// app.get('/users/:id', (req, res) => {
//     console.log(req.params.id)
// })

app.listen(port, () => {
    console.log('sunraha hay na tu', port)
})