const mongoose = require('mongoose');
const testDb = 'mongodb://127.0.0.1/molenu';
const dbUrl = 'mongodb+srv://mystry:mystry22@fancyfinery.k3uod.mongodb.net/efex?retryWrites=true&w=majority';
mongoose.connect(testDb, {useUnifiedTopology:true, useNewUrlParser:true},()=>{
    console.log('db connection ok for molenu');
});