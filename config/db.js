const mongoose = require('mongoose');
const testDb = 'mongodb://127.0.0.1/molenu';
const dbUrl = 'mongodb+srv://mystry:mystry.123@lautek.p2i2k.mongodb.net/lautek?retryWrites=true&w=majority';
mongoose.connect(testDb, {useUnifiedTopology:true, useNewUrlParser:true},()=>{
    console.log('db connection gan lenu');
});