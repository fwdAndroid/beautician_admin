const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mobistylez', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log("Connection Created")).catch((err) => console.log(err));