const express = require('express');
const server = express();
const cors = require('cors');
const mongoose = require('mongoose');
const productsRouters = require('./routes/Products.js');
const categoriesRouters = require('./routes/Categories.js');
const brandsRouters = require('./routes/Brands.js')
const usersRouters = require('./routes/Users.js')
const authRouters = require('./routes/Auth.js')
const cartRouters = require('./routes/Cart.js')
const orderRouters = require('./routes/Order.js')





server.use(express.static(('build')));

server.use(
  cors({
    exposedHeaders: ['X-Total-Count'],
  })
);


server.use(express.json());

server.use('/products', productsRouters.router);
server.use('/categories', categoriesRouters.router);
server.use('/brands', brandsRouters.router);
server.use('/users', usersRouters.router);
server.use('/auth', authRouters.router);
server.use('/cart', cartRouters.router);
server.use('/orders', orderRouters.router);












main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://risabht043:Skt230144@cluster0.n7opb2r.mongodb.net/ecommerce?retryWrites=true&w=majority');
  console.log('connected to mongo');
}






server.get('/',(req,res)=>{
    res.json({status:'success'});
})















server.listen(8080, ()=>{
    console.log("Server is running on port 8080");
})