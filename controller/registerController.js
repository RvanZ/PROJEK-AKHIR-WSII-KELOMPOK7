// const { Pelanggan } = require('../models/pelanggan');

// exports.showRegisterPage = (req, res) => {
//     res.render('register');
// };

// exports.processRegister = async (req, res) => {
//     const { nama, alamat, email, handphone, username, password } = req.body;

//     try {
//         const newPelanggan = await Pelanggan.create({
//             namaPelanggan: nama,
//             alamat,
//             email,
//             handphone,
//             username,
//             password,
//             createdAt: new Date(),
//             updatedAt: new Date()
//         });

//         // Redirect or perform actions after successful registration
//         res.send('Registration successful');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Internal Server Error');
//     }
// };

// controllers/registerController.js
const bcrypt = require('bcrypt');
const { Pelanggan } = require('../models');
const { Op } = require('sequelize');

// Handle register logic
exports.register = async (req, res) => {
    const { nama, alamat, email, handphone, username, password } = req.body;

    try {
        // Check if the username or email is already taken
        const existingPelanggan = await Pelanggan.findOne({
            where: {
                [Op.or]: [{ username }, { email }],
            },
        });

        if (existingPelanggan) {
            return res.status(400).json({ message: 'Username or email already taken' });
        }

        // Hash the password before saving to the database
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new Pelanggan
        const newPelanggan = await Pelanggan.create({
            namaPelanggan: nama,
            alamat,
            email,
            handphone,
            username,
            // password: hashedPassword,
            password,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        res.redirect('/login');

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
