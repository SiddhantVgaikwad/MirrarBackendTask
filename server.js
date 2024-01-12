//necessary npm packages
const express = require("express");
const morgan = require('morgan');
const bodyParser = require('body-parser')
const connectDB = require('./config/mongodb');

const productRoutes = require('./Routes/productRoutes');
const searchRoutes = require('./Routes/searchRoutes');

const app = express();
require("dotenv").config();
const port = process.env.PORT || 8001;
connectDB();


//middleware
app.use(express.json());
app.use(morgan('dev'));

app.get('/a',(req,res) => {
    res.send("hello world");
    
})

// Routes
app.use('/api/products', productRoutes);
app.use('/api/search', searchRoutes);



//Start the server
app.listen(port,() => {
    console.log(`server is running on ${port}`)
})