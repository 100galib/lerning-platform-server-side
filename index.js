const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const courses = require('./Data/data.json');


app.use(cors());

app.get('/', (req, res) => {
    res.send('Backend is working');
})

app.get('/totalCourses', (req, res) => {
    res.send(courses);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectItem = courses.find(n => n.id === id);
    res.send(selectItem);
})

app.listen(port, () => {console.log('server is running', port)})