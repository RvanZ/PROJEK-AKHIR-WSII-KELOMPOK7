require('dotenv').config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { Op } = require('sequelize');

// Import routes
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const loginRouter = require('./routes/loginRoutes');
const barangRoutes = require('./routes/barangRoutes');
const orderRoutes = require('./routes/orderRoutes');
const pelangganRoutes = require('./routes/pelangganRoutes');

//  
const indexRouter = require('./routes/index');
const registerRoutes = require('./routes/registerRoutes');
// const usersRouter = require('./src/routes/routes-pelanggan');
// const ordersController = require('./controller/orderController'); // Fix the path accordingly
// const barangController = require('./controller/barangController'); // Fix the path accordingly
const pelangganController = require('./controller/pelangganController'); // Fix the path accordingly
// const loginController = require('./controller/loginController')
const app = express();

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes setup

// app.use('/users', usersRouter);
// app.use('/admin/barang', barangController);
app.use('/', indexRouter);
app.use('/orders', orderRoutes);
app.use('/barang', barangRoutes);
app.use('/pelanggan', pelangganRoutes);
app.use('/auth/login', authRoutes);
app.use('/admin', adminRoutes);
app.use('/login', loginRouter);
app.use('/register', registerRoutes);

// app.use('/orders', ordersRoutes);



app.get('/home-admin', (req, res) => {
    res.sendFile('home-admin.html', { root: 'views' }); // Change 'home.html' to the correct file
});

app.get('/register', (req, res) => {
    res.sendFile('register.html', { root: 'views' }); // Change 'home.html' to the correct file
});

app.get('/orders-admin', (req, res) => {
    res.sendFile('order.html', { root: 'views' }); // Change 'home.html' to the correct file
});

app.get('/dashboard-admin', (req, res) => {
    res.sendFile('dashboard-admin.html', { root: 'views' }); // Change 'home.html' to the correct file
});

app.get('/admin-Pelanggan', (req, res) => {
    res.sendFile('admin-pelanggan.html', { root: 'views' }); // Change 'home.html' to the correct file
});

//Pelanggan
app.get('/pelanggan-Barang', (req, res) => {
    res.sendFile('pelanggan-Barang.html', { root: 'views' }); // Change 'home.html' to the correct file
});

app.get('/home-pelanggan', (req, res) => {
    res.sendFile('home-pelanggan.html', { root: 'views' }); // Change 'home.html' to the correct file
});

app.get('/pelanggan-order', (req, res) => {
    res.sendFile('pelanggan-order.html', { root: 'views' }); // Change 'home.html' to the correct file
});

app.get('/pelanggan-History-Pesanan', (req, res) => {
    res.sendFile('pelanggan-History-Pesanan.html', { root: 'views' }); // Change 'home.html' to the correct file
});
app.get('/fashion', (req, res) => {
    res.sendFile('brand/fashion.png', { root: 'views' }); // Change 'home.html' to the correct file
});

// app.get('/create-barang.html', (req, res) => {
//     res.sendFile('create-barang.html', { root: 'views' });
// });


module.exports = app;
