// const express = require('express');
// const router = express.Router();
// const { Pelanggan } = require('../models/pelanggan');

// exports.showLoginPage = (req, res) => {
//     res.render('login');
// };

// exports.processLogin = async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         const pelanggan = await Pelanggan.findOne({ where: { username, password } });

//         if (pelanggan) {
//             // Redirect or perform actions after successful login
//             res.send('Login successful');
//         } else {
//             res.send('Invalid username or password');
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// };


const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const { Pelanggan } = require('../models'); // Adjust the import statement based on the export in your models

exports.pelangganLogin = async (credentials) => {
    const { username, password } = credentials;

    try {
        // Cari pelanggan berdasarkan username
        const pelanggan = await Pelanggan.findOne({
            where: { username },
        });

        if (!pelanggan) {
            console.log('Pelanggan not found:', username);
            return null;
        }


        const hashedPassword = await bcrypt.hash(password, 10);

        const isPasswordMatch = await bcrypt.compare(pelanggan.password, hashedPassword);


        if (!isPasswordMatch) {
            console.log('Incorrect password for:', username);
            console.log(isPasswordMatch)
            return null;
        }


        return { pelangganId: pelanggan.idPelanggan, username: pelanggan.username };

    } catch (error) {
        console.error(error);
        throw error;
    }
};