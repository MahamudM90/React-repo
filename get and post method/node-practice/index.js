
const express = require('express');
const cors = require('cors');
const port = 5000;
const app = express()
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());


app.post('/api/data', (req, res) => {
    const data = req.body;
    console.log(data);
    res.send('Data received');
});



const user = [
    {name:'mahamud', country:'Bangladesh'},
    {name:'Ishita', country:'Bangladesh'}

]

app.get('/user', (req,res)=>{
    res.send(user)
})

app.get('/', (req,res)=>{
    res.send('hello world')
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});