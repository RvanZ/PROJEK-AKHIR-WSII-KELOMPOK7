const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Pelanggan } = require('../models'); // Ganti dengan model Pelanggan yang sesuai

const authController = {
    login: async (req, res) => {
        try {
            const { username, password } = req.body;

            // Temukan pengguna dengan username yang sesuai
            const user = await Pelanggan.findOne({ where: { username } });

            // Periksa apakah pengguna ditemukan dan kata sandi sesuai
            if (user && bcrypt.compareSync(password, user.password)) {
                // Buat token JWT
                const token = jwt.sign({ idPelanggan: user.idPelanggan, username: user.username }, 'secret_key', { expiresIn: '1h' });

                // Kirim token sebagai respons
                res.status(200).json({ token, idPelanggan: user.idPelanggan });
            } else {
                res.status(401).json({ error: 'Username atau password salah' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    logout: (req, res) => {
        // Implementasikan logika logout sesuai kebutuhan
        // Contoh: Menghapus token, membersihkan sesi, dll.
        res.status(200).json({ message: 'Logout berhasil' });
    },

    register: async (req, res) => {
        try {
            const { username, password } = req.body;

            // Hash kata sandi sebelum menyimpannya di database
            const hashedPassword = bcrypt.hashSync(password, 10);

            // Simpan pengguna baru ke dalam database
            const newUser = await Pelanggan.create({ username, password: hashedPassword });

            // Kirim token sebagai respons (opsional)
            const token = jwt.sign({ idPelanggan: newUser.idPelanggan, username: newUser.username }, 'secret_key', { expiresIn: '1h' });

            res.status(201).json({ token, idPelanggan: newUser.idPelanggan });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = authController;
