const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hello world')
})


const PORT = 3000;
app.listen(PORT, () => {
    // eslint-disable-next-line
    console.log(`Magic happens on port ${PORT}`);
});

