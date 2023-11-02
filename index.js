const express = require('express');
const bodyParser = requires('body-parser');
// const cors = require('cors');
const app = express();

// app.use(cors()); Not required since it will not need to communicate with react
app.use(bodyParser.json());


