// controllers/pelangganController.js
// const express = require('express');
// const router = express.Router();
const { Pelanggan } = require('../models'); // Assuming your model is named 'Pelanggan'

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Pelanggan.findAll();
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// // Create a new customer
// router.post('/', async (req, res) => {
//   try {
//     const customer = await Pelanggan.create(req.body);
//     return res.status(201).json(customer);
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });

// // Get all customers
// router.get('/', async (req, res) => {
//   try {
//     const customers = await Pelanggan.findAll();
//     return res.status(200).json(customers);
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });

// // Get a specific customer by ID
// router.get('/:customerId', async (req, res) => {
//   const { customerId } = req.params;
//   try {
//     const customer = await Pelanggan.findOne({
//       where: { idPelanggan: customerId },
//     });

//     if (!customer) {
//       return res.status(404).json({ error: 'Customer not found' });
//     }

//     return res.status(200).json({
//       idPelanggan: customer.idPelanggan,
//       namaPelanggan: customer.namaPelanggan,
//       alamat: customer.alamat,
//       email: customer.email,
//       handphone: customer.handphone,
//       username: customer.username,
//       createdAt: order.createdAt,
//       updatedAt: order.updatedAt,

//     });
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });



// // Update a specific customer by ID
// router.put('/:customerId', async (req, res) => {
//   const { customerId } = req.params;
//   try {
//     const [updatedRows] = await Pelanggan.update(req.body, {
//       where: { idPelanggan: customerId }
//     });
//     if (updatedRows === 0) {
//       return res.status(404).json({ error: 'Customer not found' });
//     }
//     const updatedCustomer = await Pelanggan.findByPk(customerId);
//     return res.status(200).json(updatedCustomer);
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });

// // Delete a specific customer by ID
// router.delete('/:customerId', async (req, res) => {
//   const { customerId } = req.params;
//   try {
//     const deletedRows = await Pelanggan.destroy({
//       where: { idPelanggan: customerId }
//     });
//     if (deletedRows === 0) {
//       return res.status(404).json({ error: 'Customer not found' });
//     }
//     return res.status(204).send(); // 204 No Content for successful deletion
//   } catch (error) {
//     return res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;
