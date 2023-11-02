const express = require('express');
const bodyParser = require('body-parser');
const { default: axios } = require('axios');
// const cors = require('cors');
const app = express();

// app.use(cors()); Not required since it will not need to communicate with react
app.use(bodyParser.json());

app.post('/events', async (req, res)=>{
  const { type, data } = req.body;

  if(type === 'CommentUpdated'){
    const status = data.content.includes('orange') ? 'rejected' : 'approved';

    await axios.post('http://localhost:4005/events', {
      type: 'CommentModerated',
      data: {
        id: data.id,
        postId: data.postId,
        status,
        content: data.content
      }
    });
  }

  res.send({});
});

app.listen(4003, ()=>{
  console.log('Moderation Service on 4003');
});