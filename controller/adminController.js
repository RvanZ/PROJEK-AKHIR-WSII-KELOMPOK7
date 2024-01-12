// controller/adminController.js

const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const { Admin } = require('../models'); // Adjust the import statement based on the export in your models

exports.adminLogin = async (credentials) => {
    const { usernameAdmin, passwordAdmin } = credentials;

    try {
        // Cari admin berdasarkan username
        const admin = await Admin.findOne({
            where: { usernameAdmin },
        });

        if (!admin) {
            console.log('Admin not found:', usernameAdmin);
            return null;
        }


        const hashedPassword = await bcrypt.hash(passwordAdmin, 10);

        const isPasswordMatch = await bcrypt.compare(admin.passwordAdmin, hashedPassword);


        if (!isPasswordMatch) {
            console.log('Incorrect password for:', usernameAdmin);
            console.log(isPasswordMatch)
            return null;
        }


        return { adminId: admin.idAdmin, usernameAdmin: admin.usernameAdmin };

    } catch (error) {
        console.error(error);
        throw error;
    }
};

//komentar


// console.log('Password Admin:', admin.passwordAdmin);
// console.log('Password Input:', passwordAdmin);

// Bandingkan password yang dimasukkan dengan password di database

// const isMatch1 = await bcrypt.compare('adminpass2', hashedPassword);
// const isMatch2 = await bcrypt.compare('adminpass2', 'adminpass2');

// console.log('isMatch1:', isMatch1); // Seharusnya true
// console.log('isMatch2:', isMatch2);

// Buat token JWT sebagai tanda berhasil login
// const token = jwt.sign({ adminId: admin.idAdmin }, process.env.JWT_SECRET, {
//     expiresIn: '1h', // Durasi token berlaku
// });

// return { token, redirectTo: '/home' }; // Return the token and the redirect route
// return token; // Return the token and the redirect route