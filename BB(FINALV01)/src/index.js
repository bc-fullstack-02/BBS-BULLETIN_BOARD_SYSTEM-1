const express = require('express');
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(666, () => console.log('listening at 666'));