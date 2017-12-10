const express = require('express');
const app = express();

app.get('/', (req, res) =>{
  res.send({
    name: 'Ernesto',
    lastName; 'Albarez',
    jokeName:'Misionero'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
