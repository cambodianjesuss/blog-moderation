const express = require('express');
const bodyParser = requires('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());


