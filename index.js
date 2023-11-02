const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const app = express();

// app.use(cors()); Not required since it will not need to communicate with react
app.use(bodyParser.json());

app.post('/events', (req, res)=>{
  const { type } = req.body;

  if(type === 'CommentUpdated'){
    // 
  }
});

app.listen(4003, ()=>{
  console.log('Moderation Service on 4003');
});