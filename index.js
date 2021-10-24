const express = require('express');
const app = express();
const fileupload = require('express-fileupload');
const db_conn = require('./config/db');
const cors = require('cors');
const cart = require('./routes/cart');
const product = require('./routes/products');



//initialisations

app.use(cors());
app.use(express.json());
app.use(fileupload())



//routes
app.use('/api/cart',cart);
app.use('/api/product',product);


const PORT = 3222;

app.listen(PORT, ()=>{
    console.log('listening to port ' + PORT);
})
